export type ServiceArea = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  region: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  summary: string;
  priorities: string[];
  nearby: string[];
  relatedLocationSlugs: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "gta-security-guards",
    name: "Greater Toronto Area",
    shortName: "GTA",
    headline: "GTA",
    region: "Ontario, Canada",
    label: "Regional service area",
    metaTitle: "Security Guards GTA Ontario | Accure Security",
    metaDescription:
      "Security guards across the GTA for commercial, residential, event, construction, mobile patrol, CCTV, remote monitoring, and access control coverage.",
    intro:
      "Accure Security supports Greater Toronto Area properties with licensed guards, mobile patrol, event coverage, residential concierge, construction security, CCTV, remote monitoring, and access control planning.",
    summary:
      "GTA sites often need coverage that can move between dense commercial buildings, residential communities, retail plazas, events, construction zones, and after-hours patrol routes. Accure plans coverage around the property type, access points, schedule, and reporting expectations.",
    priorities: [
      "Commercial office and plaza security",
      "Residential concierge and visitor management",
      "Event staffing and crowd control",
      "Construction site and contractor watch",
      "Mobile patrol and alarm response",
      "CCTV, remote monitoring, and access control",
    ],
    nearby: [
      "Toronto",
      "Scarborough",
      "North York",
      "Etobicoke",
      "Mississauga",
      "Brampton",
      "Vaughan",
      "Markham",
      "Richmond Hill",
      "Oakville",
      "Milton",
      "Ajax",
    ],
    relatedLocationSlugs: [
      "toronto-scarborough-security-guards",
      "mississauga-security-guards",
      "vaughan-security-guards",
    ],
  },
  {
    slug: "kwc-guelph-security-guards",
    name: "Kitchener-Waterloo-Cambridge and Guelph",
    shortName: "KWC and Guelph",
    headline: "KWC and Guelph",
    region: "Ontario, Canada",
    label: "Regional service area",
    metaTitle: "Security Guards KWC and Guelph Ontario | Accure Security",
    metaDescription:
      "Security guards for Kitchener, Waterloo, Cambridge, and Guelph properties, including commercial, residential, construction, event, patrol, CCTV, and access control services.",
    intro:
      "Accure Security serves the Kitchener-Waterloo-Cambridge and Guelph area with guard coverage, mobile patrol, construction site security, event staffing, residential concierge, remote monitoring, CCTV, and access control planning.",
    summary:
      "KWC and Guelph properties can require a different mix of campus security, industrial patrols, construction watch, commercial access control, residential concierge, and event coverage. Accure uses the Cambridge head office as a practical local anchor for planning nearby service areas.",
    priorities: [
      "Industrial and warehouse security",
      "Campus and public-site coverage",
      "Construction site protection",
      "Commercial and office patrols",
      "Residential concierge coverage",
      "Camera, monitoring, and access control planning",
    ],
    nearby: [
      "Kitchener",
      "Waterloo",
      "Cambridge",
      "Guelph",
      "Ayr",
      "Breslau",
      "New Hamburg",
      "Elmira",
      "Fergus",
      "Brantford",
    ],
    relatedLocationSlugs: ["cambridge-security-guards"],
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
