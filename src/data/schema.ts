import { site } from "./site";
import type { Service } from "./services";
import { serviceUrl } from "./services";
import type { Location } from "./locations";
import type { ServiceArea } from "./serviceAreas";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    logo: new URL(site.logo, site.url).toString(),
    description: site.description,
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Ontario, Canada",
      },
      {
        "@type": "AdministrativeArea",
        name: "Greater Toronto Area",
      },
      {
        "@type": "AdministrativeArea",
        name: "Kitchener-Waterloo-Cambridge and Guelph",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.url, site.url).toString(),
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ontario",
    },
    description: service.summary,
    url: new URL(serviceUrl(service), site.url).toString(),
  };
}

export function serviceAreaSchema(area: ServiceArea) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${site.legalName} security services in ${area.name}`,
    serviceType: "Security guard services",
    provider: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
    areaServed: area.nearby.map((name) => ({
      "@type": "City",
      name,
      addressRegion: "ON",
      addressCountry: "CA",
    })),
    description: area.intro,
    url: new URL(`/service-areas/${area.slug}/`, site.url).toString(),
  };
}

export function localBusinessSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${site.legalName} - ${location.label}`,
    url: new URL(`/locations/${location.slug}/`, site.url).toString(),
    image: new URL(site.logo, site.url).toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: "ON",
      postalCode: location.postal,
      addressCountry: "CA",
    },
    areaServed: location.nearby.map((name) => ({
      "@type": "City",
      name,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
