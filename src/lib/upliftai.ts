export type UpliftBlogSummary = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content?: string | null;
  status?: string;
  publishDate?: string | null;
  publishTime?: string | null;
  featuredImage?: string | null;
  categories?: string[];
  tags?: string[];
  seoScore?: number;
  createdAt?: string;
  updatedAt?: string;
  authorName?: string | null;
  authorUrl?: string | null;
  freshness?: {
    lastUpdatedAt?: string;
    ageDays?: number;
    needsRefresh?: boolean;
    freshnessThresholdDays?: number;
  };
  meta?: UpliftBlogMeta;
  customFields?: Record<string, unknown> | null;
};

export type UpliftBlogMeta = {
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
};

export type UpliftBlogDetail = UpliftBlogSummary & {
  content: string;
  analytics?: {
    contentQualityScore?: number;
    rankingPotential?: string;
    conversionPotential?: string;
    externalLinksCount?: number;
  };
};

export type UpliftListResponse = {
  success: boolean;
  data?: {
    blogs?: UpliftBlogSummary[];
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  error?: string;
};

export type UpliftDetailResponse = {
  success: boolean;
  data?: { blog?: UpliftBlogDetail };
  error?: string;
};

const API_BASE = "https://api.upliftai.co/api/public/v1";

function getToken(): string {
  const token = import.meta.env.UPLIFTAI_TOKEN;
  if (!token) {
    throw new Error(
      "UPLIFTAI_TOKEN environment variable is not set. Add it to Vercel and .env.local.",
    );
  }
  return token;
}

async function upliftFetch<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "AccureSecurity-Blog/1.0",
    },
  });

  if (!response.ok) {
    throw new Error(`UpliftAI request failed: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

export type BlogPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export async function listBlogs(options: { page?: number; limit?: number; status?: "PUBLISH" | "DRAFT" | "ALL" } = {}): Promise<{
  blogs: UpliftBlogSummary[];
  pagination?: BlogPagination;
}> {
  const token = getToken();
  const params = new URLSearchParams();
  if (options.page) params.set("page", String(options.page));
  if (options.limit) params.set("limit", String(options.limit));
  if (options.status) params.set("status", options.status);
  const query = params.toString();
  const url = `${API_BASE}/blogs/${token}${query ? `?${query}` : ""}`;

  const json = await upliftFetch<UpliftListResponse>(url);
  if (!json.success) {
    throw new Error(`UpliftAI list error: ${json.error ?? "unknown"}`);
  }
  const blogs = json.data?.blogs ?? [];
  return {
    blogs: blogs.filter((b) => (b.status ?? "PUBLISH").toUpperCase() === "PUBLISH"),
    pagination: json.data?.pagination,
  };
}

export async function getBlog(slug: string): Promise<UpliftBlogDetail | null> {
  const token = getToken();
  const url = `${API_BASE}/blogs/${token}/${encodeURIComponent(slug)}`;
  try {
    const json = await upliftFetch<UpliftDetailResponse>(url);
    if (!json.success || !json.data?.blog) return null;
    return json.data.blog;
  } catch (err) {
    console.error(`[upliftai] getBlog(${slug}) failed`, err);
    return null;
  }
}

export function formatBlogDate(dateInput?: string | null): string {
  if (!dateInput) return "";
  const date = new Date(dateInput);
  if (Number.isNaN(date.valueOf())) return "";
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function estimateReadingTime(content?: string | null): string {
  if (!content) return "3 min read";
  const text = content.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export function blogUrl(slug: string): string {
  return `/blog/${slug}/`;
}

export function coverImage(blog: UpliftBlogSummary): string {
  return (
    blog.featuredImage?.trim() ||
    "/images/services/commercial-industrial-security.jpg"
  );
}
