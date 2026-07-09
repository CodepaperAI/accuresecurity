export type Location = {
  slug: string;
  city: string;
  region: string;
  label: string;
  address: string;
  postal?: string;
  landmark?: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  priorities: string[];
  nearby: string[];
};

export const locations: Location[] = [
  {
    slug: "cambridge-security-guards",
    city: "Cambridge",
    region: "Ontario",
    label: "Cambridge Head Office",
    address: "66 Glamis Road, Cambridge, ON N1R 6S7",
    postal: "N1R 6S7",
    metaTitle: "Security Guards Cambridge Ontario | Accure Security",
    metaDescription:
      "Security guards in Cambridge, Ontario for commercial, industrial, residential, event, construction, patrol, CCTV, and access control services.",
    intro:
      "Accure Security's Cambridge head office supports properties across Waterloo Region with guard coverage, mobile patrol, event staffing, construction site security, remote monitoring, CCTV, and access control planning.",
    priorities: [
      "Industrial and warehouse access control",
      "Commercial property patrols",
      "Construction site protection",
      "Event and venue security",
      "Residential concierge support",
    ],
    nearby: ["Kitchener", "Waterloo", "Guelph", "Ayr", "New Hamburg", "Brantford"],
  },
  {
    slug: "mississauga-security-guards",
    city: "Mississauga",
    region: "Ontario",
    label: "Mississauga Branch",
    address: "2425 Matheson Boulevard East, Mississauga, ON L4W 5K4",
    postal: "L4W 5K4",
    metaTitle: "Security Guards Mississauga Ontario | Accure Security",
    metaDescription:
      "Security guards in Mississauga for commercial buildings, offices, events, residential sites, mobile patrol, CCTV, and access control.",
    intro:
      "Accure Security supports Mississauga properties with practical coverage for corporate offices, warehouses, retail plazas, residential communities, events, and mobile patrol routes around the GTA.",
    priorities: [
      "Corporate and office security",
      "Retail and loss-prevention support",
      "Mobile patrol and alarm response",
      "Residential concierge coverage",
      "CCTV and access control installation",
    ],
    nearby: ["Etobicoke", "Brampton", "Milton", "Toronto", "Oakville", "Vaughan"],
  },
  {
    slug: "vaughan-security-guards",
    city: "Vaughan",
    region: "Ontario",
    label: "Vaughan Branch",
    address: "200 Apple Mill Road, Vaughan, ON L4H",
    postal: "L4H",
    landmark: "Highway 7 and Jane Street area",
    metaTitle: "Security Guards Vaughan Ontario | Accure Security",
    metaDescription:
      "Security guards in Vaughan for commercial, industrial, construction, residential, event, patrol, CCTV, and access control security.",
    intro:
      "Accure Security provides Vaughan coverage for properties around business parks, commercial plazas, residential communities, construction zones, and event venues requiring trained guards and responsive planning.",
    priorities: [
      "Commercial plaza and business park security",
      "Construction and contractor watch",
      "Event and venue staffing",
      "Access control and camera systems",
      "Alarm response patrols",
    ],
    nearby: ["North York", "Toronto", "Richmond Hill", "Brampton", "Mississauga", "Markham"],
  },
  {
    slug: "london-security-guards",
    city: "London",
    region: "Ontario",
    label: "London Branch",
    address: "1070 Wellington Road South, London, ON N6E 3V8",
    postal: "N6E 3V8",
    landmark: "Wellington Road South and Bradley Avenue",
    metaTitle: "Security Guards London Ontario | Accure Security",
    metaDescription:
      "Security guards in London, Ontario for commercial, residential, healthcare, construction, event, mobile patrol, CCTV, and access control services.",
    intro:
      "Accure Security supports London properties with security guard coverage, patrol routes, healthcare watch, commercial protection, construction security, event staffing, and digital security systems.",
    priorities: [
      "Healthcare and medical facility security",
      "Commercial and retail protection",
      "Construction site patrols",
      "Residential security",
      "Event security staffing",
    ],
    nearby: ["St. Thomas", "Strathroy", "Aylmer", "Woodstock", "Wellesley", "Kitchener"],
  },
  {
    slug: "toronto-scarborough-security-guards",
    city: "Toronto and Scarborough",
    region: "Ontario",
    label: "Scarborough and Toronto Branch",
    address: "300 Borough Drive, Toronto, ON M1P 4P5",
    postal: "M1P 4P5",
    landmark: "Highway 401 between McCowan Road and Brimley Road",
    metaTitle: "Security Guards Toronto Scarborough | Accure Security",
    metaDescription:
      "Security guards in Toronto and Scarborough for commercial buildings, events, residential concierge, healthcare, mobile patrol, CCTV, and access control.",
    intro:
      "Accure Security supports Toronto and Scarborough sites with guard teams, event coverage, mobile patrol, residential concierge, healthcare security, and integrated camera and access control systems.",
    priorities: [
      "High-traffic commercial security",
      "Residential concierge and access control",
      "Healthcare and public-facing sites",
      "Event crowd management",
      "Mobile patrol and alarm response",
    ],
    nearby: ["North York", "Etobicoke", "Ajax", "Mississauga", "Vaughan", "Brampton"],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
