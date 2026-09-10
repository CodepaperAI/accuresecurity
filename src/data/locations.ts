export type LocationKind = "branch" | "service-area" | "regional";

export type Location = {
  slug: string;
  city: string;
  region: string;
  label: string;
  kind: LocationKind;
  generateServicePages?: boolean;
  address?: string;
  postal?: string;
  landmark?: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  marketContext: string;
  priorities: string[];
  nearby: string[];
  image: string;
  imageAlt: string;
  relatedLocationSlugs?: string[];
};

export const locations: Location[] = [
  {
    slug: "cambridge-security-guards", city: "Cambridge", region: "Ontario", label: "Cambridge Head Office",
    kind: "branch", generateServicePages: true, address: "66 Glamis Road, Cambridge, ON N1R 6S7", postal: "N1R 6S7",
    metaTitle: "Security Guards Cambridge Ontario | Accure Security",
    metaDescription: "Security guards in Cambridge for industrial, commercial, residential, event, construction, patrol, camera monitoring, CCTV, and access control services.",
    intro: "Accure Security's Cambridge head office supports properties across Cambridge and Waterloo Region with licensed guards, mobile patrol, event staffing, construction security, camera monitoring, CCTV, and access control planning.",
    marketContext: "Cambridge combines industrial corridors, distribution facilities, growing residential communities, construction projects, campuses, and busy commercial properties.",
    priorities: ["Industrial and warehouse access control", "Commercial property patrols", "Construction site protection", "Event and venue security", "Residential concierge support"],
    nearby: ["Kitchener", "Waterloo", "Guelph", "Ayr", "New Hamburg", "Brantford"],
    image: "/images/services/campus-security.jpg", imageAlt: "Accure Security guard supporting a Cambridge commercial campus.",
  },
  {
    slug: "mississauga-security-guards", city: "Mississauga", region: "Ontario", label: "Mississauga Branch", kind: "branch",
    address: "2425 Matheson Boulevard East, Mississauga, ON L4W 5K4", postal: "L4W 5K4",
    metaTitle: "Security Guards Mississauga Ontario | Accure Security", metaDescription: "Security guards in Mississauga for commercial buildings, offices, events, residential sites, mobile patrol, CCTV, and access control.",
    intro: "Accure Security supports Mississauga properties with practical coverage for corporate offices, warehouses, retail plazas, residential communities, events, and mobile patrol routes around the GTA.",
    marketContext: "Mississauga properties range from major office and logistics districts to retail, residential, hospitality, and industrial sites.",
    priorities: ["Corporate and office security", "Retail and loss-prevention support", "Mobile patrol and alarm response", "Residential concierge coverage", "CCTV and access control installation"],
    nearby: ["Etobicoke", "Brampton", "Milton", "Toronto", "Oakville", "Vaughan"], image: "/images/services/mobile-patrol-alarm-response.jpg", imageAlt: "Accure Security mobile patrol supporting a Mississauga property.",
  },
  {
    slug: "vaughan-security-guards", city: "Vaughan", region: "Ontario", label: "Vaughan Branch", kind: "branch",
    address: "200 Apple Mill Road, Vaughan, ON L4H", postal: "L4H", landmark: "Highway 7 and Jane Street area",
    metaTitle: "Security Guards Vaughan Ontario | Accure Security", metaDescription: "Security guards in Vaughan for commercial, industrial, construction, residential, event, patrol, CCTV, and access control security.",
    intro: "Accure Security provides Vaughan coverage for business parks, commercial plazas, residential communities, construction zones, and event venues requiring trained guards and responsive planning.",
    marketContext: "Vaughan's commercial corridors, construction activity, industrial properties, retail destinations, and residential communities require flexible coverage.",
    priorities: ["Commercial plaza and business park security", "Construction and contractor watch", "Event and venue staffing", "Access control and camera systems", "Alarm response patrols"],
    nearby: ["North York", "Toronto", "Richmond Hill", "Brampton", "Mississauga", "Markham"], image: "/images/services/commercial-industrial-security.jpg", imageAlt: "Accure Security guards supporting a Vaughan commercial property.",
  },
  {
    slug: "london-security-guards", city: "London", region: "Ontario", label: "London Branch", kind: "branch", generateServicePages: true,
    address: "1070 Wellington Road South, London, ON N6E 3V8", postal: "N6E 3V8", landmark: "Wellington Road South and Bradley Avenue",
    metaTitle: "Security Guards London Ontario | Accure Security", metaDescription: "Security guards in London, Ontario for healthcare, commercial, residential, construction, events, patrol, camera monitoring, CCTV, and access control.",
    intro: "Accure Security supports London properties with licensed guard coverage, patrol routes, healthcare watch, commercial protection, construction security, event staffing, and digital security systems.",
    marketContext: "London includes healthcare campuses, education facilities, event venues, residential communities, active construction, retail properties, and industrial operations.",
    priorities: ["Healthcare and medical facility security", "Commercial and retail protection", "Construction site patrols", "Residential security", "Event security staffing"],
    nearby: ["St. Thomas", "Strathroy", "Woodstock", "Ingersoll", "Aylmer", "Tillsonburg"], image: "/images/locations/london-event-security.webp", imageAlt: "Accure Security officers managing entry at a London event venue.",
  },
  {
    slug: "toronto-scarborough-security-guards", city: "Toronto and Scarborough", region: "Ontario", label: "Regional coverage hub", kind: "regional",
    metaTitle: "Security Guards Toronto and Scarborough | Accure Security", metaDescription: "Explore security guard, patrol, event, construction, camera monitoring, CCTV, and access control services across Toronto and Scarborough.",
    intro: "Use this regional hub to compare Accure Security coverage in Toronto and Scarborough, then choose the individual city page that matches your property.",
    marketContext: "Toronto and Scarborough include high-density commercial, residential, public-facing, industrial, healthcare, and event environments.",
    priorities: ["Commercial property security", "Residential concierge and access control", "Healthcare and public-facing sites", "Event crowd management", "Mobile patrol and alarm response"],
    nearby: ["Toronto", "Scarborough", "North York", "Etobicoke", "Ajax", "Pickering"], image: "/images/services/commercial-industrial-security.jpg", imageAlt: "Accure Security personnel supporting Toronto and Scarborough properties.",
    relatedLocationSlugs: ["toronto-security-guards", "scarborough-security-guards"],
  },
  {
    slug: "brampton-security-guards", city: "Brampton", region: "Ontario", label: "Brampton service area", kind: "service-area", generateServicePages: true,
    metaTitle: "Security Guards Brampton Ontario | Accure Security", metaDescription: "Security guards in Brampton for warehouses, logistics, commercial sites, construction, residences, events, patrol, camera monitoring, CCTV, and access control.",
    intro: "Accure Security serves Brampton properties with licensed guards, mobile patrol, construction protection, event staffing, camera monitoring, CCTV, and access control planning.",
    marketContext: "Brampton's logistics corridors, warehouses, manufacturing sites, commercial plazas, construction projects, and growing residential communities need practical, site-specific security.",
    priorities: ["Warehouse and logistics security", "Industrial gate and yard control", "Construction site protection", "Commercial property patrols", "Residential and event coverage"],
    nearby: ["Caledon", "Mississauga", "Vaughan", "Georgetown", "Etobicoke", "Milton"], image: "/images/locations/brampton-mobile-patrol.jpeg", imageAlt: "Branded Accure Security patrol vehicle serving Brampton properties.",
  },
  {
    slug: "ottawa-security-guards", city: "Ottawa", region: "Ontario", label: "Ottawa service area", kind: "service-area", generateServicePages: true,
    metaTitle: "Security Guards Ottawa Ontario | Accure Security", metaDescription: "Security guards in Ottawa for offices, residences, construction, events, patrol, camera monitoring, CCTV installation, and access control.",
    intro: "Accure Security serves Ottawa properties with licensed guards, patrol response, event and construction coverage, camera monitoring, CCTV, and access control planning.",
    marketContext: "Ottawa includes office campuses, residential communities, institutional properties, construction projects, event spaces, retail sites, and industrial facilities.",
    priorities: ["Office and institutional security", "Residential access and concierge coverage", "Construction site protection", "Event and venue staffing", "Camera monitoring and access control"],
    nearby: ["Kanata", "Nepean", "Gloucester", "Orleans", "Barrhaven", "Stittsville"], image: "/images/locations/ottawa-monitoring-centre.webp", imageAlt: "Accure Security monitoring centre supporting Ottawa properties.",
  },
  {
    slug: "windsor-security-guards", city: "Windsor", region: "Ontario", label: "Windsor service area", kind: "service-area", generateServicePages: true,
    metaTitle: "Security Guards Windsor Ontario | Accure Security", metaDescription: "Security guards in Windsor for truck yards, manufacturing, industrial properties, logistics, construction, patrol, camera monitoring, CCTV, and access control.",
    intro: "Accure Security serves Windsor with licensed guards, mobile patrol, industrial and construction protection, camera monitoring, CCTV, and access control planning.",
    marketContext: "Windsor's manufacturing, transportation, cross-border logistics, truck yards, industrial sites, construction projects, and commercial properties require strong perimeter and access procedures.",
    priorities: ["Truck yard and logistics security", "Manufacturing facility protection", "Industrial access control", "Mobile patrol and alarm response", "Construction and commercial security"],
    nearby: ["LaSalle", "Tecumseh", "Lakeshore", "Amherstburg", "Essex", "Leamington"], image: "/images/locations/windsor-truck-yard.webp", imageAlt: "Accure Security officer patrolling a Windsor-area truck and logistics yard.",
  },
  {
    slug: "toronto-security-guards", city: "Toronto", region: "Ontario", label: "Toronto service area", kind: "service-area", generateServicePages: true,
    metaTitle: "Security Guards Toronto Ontario | Accure Security", metaDescription: "Security guards in Toronto for commercial buildings, condominiums, healthcare, construction, events, patrol, camera monitoring, CCTV, and access control.",
    intro: "Accure Security serves Toronto properties with licensed guards, concierge teams, mobile patrol, event and construction coverage, camera monitoring, CCTV, and access control.",
    marketContext: "Toronto's high-density offices, condominiums, retail properties, healthcare facilities, construction projects, parking assets, and event venues need coordinated security coverage.",
    priorities: ["High-rise commercial security", "Condominium concierge coverage", "Healthcare and public-facing sites", "Event crowd management", "Construction and parking protection"],
    nearby: ["North York", "Etobicoke", "East York", "York", "Scarborough", "Mississauga"], image: "/images/services/commercial-industrial-security.jpg", imageAlt: "Accure Security guards supporting a Toronto commercial property.",
  },
  {
    slug: "scarborough-security-guards", city: "Scarborough", region: "Ontario", label: "Scarborough service area", kind: "service-area", generateServicePages: true,
    metaTitle: "Security Guards Scarborough Ontario | Accure Security", metaDescription: "Security guards in Scarborough for commercial, residential, healthcare, industrial, construction, event, patrol, camera monitoring, CCTV, and access control.",
    intro: "Accure Security serves Scarborough properties with licensed guards, mobile patrol, residential and commercial coverage, camera monitoring, CCTV, and access control.",
    marketContext: "Scarborough combines residential towers, retail centres, healthcare facilities, industrial corridors, campuses, construction sites, and busy public-facing properties.",
    priorities: ["Residential tower and concierge security", "Retail and commercial protection", "Healthcare facility coverage", "Industrial property patrols", "Construction and event security"],
    nearby: ["Pickering", "Ajax", "North York", "East York", "Markham", "Toronto"], image: "/images/services/mobile-patrol-alarm-response.jpg", imageAlt: "Accure Security mobile patrol supporting a Scarborough property.",
  },
  {
    slug: "kitchener-security-guards", city: "Kitchener", region: "Ontario", label: "Kitchener service area", kind: "service-area", generateServicePages: true,
    metaTitle: "Security Guards Kitchener Ontario | Accure Security", metaDescription: "Security guards in Kitchener for industrial, commercial, residential, construction, event, patrol, camera monitoring, CCTV, and access control.",
    intro: "Accure Security serves Kitchener properties with licensed guards, mobile patrol, construction and event coverage, camera monitoring, CCTV, and access control planning.",
    marketContext: "Kitchener's technology offices, manufacturing sites, downtown properties, residential developments, construction projects, and event spaces need flexible coverage.",
    priorities: ["Technology and office security", "Industrial and manufacturing patrols", "Residential building coverage", "Construction site protection", "Event and parking security"],
    nearby: ["Waterloo", "Cambridge", "Guelph", "Breslau", "New Hamburg", "Elmira"], image: "/images/services/construction-site-security.jpg", imageAlt: "Accure Security officer supporting a Kitchener property.",
  },
  {
    slug: "waterloo-security-guards", city: "Waterloo", region: "Ontario", label: "Waterloo service area", kind: "service-area", generateServicePages: true,
    metaTitle: "Security Guards Waterloo Ontario | Accure Security", metaDescription: "Security guards in Waterloo for offices, campuses, residences, construction, events, patrol, camera monitoring, CCTV, and access control.",
    intro: "Accure Security serves Waterloo properties with licensed guards, patrol response, residential and event coverage, camera monitoring, CCTV, and access control planning.",
    marketContext: "Waterloo includes technology campuses, education properties, student and multi-residential buildings, offices, construction sites, and entertainment districts.",
    priorities: ["Campus and office security", "Student housing and residential coverage", "Event safety and crowd management", "Construction site protection", "Camera monitoring and access control"],
    nearby: ["Kitchener", "Cambridge", "Guelph", "Elmira", "St. Jacobs", "Breslau"], image: "/images/services/campus-security.jpg", imageAlt: "Accure Security coverage for a Waterloo campus and office environment.",
  },
  {
    slug: "guelph-security-guards", city: "Guelph", region: "Ontario", label: "Guelph service area", kind: "service-area", generateServicePages: true,
    metaTitle: "Security Guards Guelph Ontario | Accure Security", metaDescription: "Security guards in Guelph for industrial, commercial, campus, residential, construction, event, patrol, camera monitoring, CCTV, and access control.",
    intro: "Accure Security serves Guelph properties with licensed guards, mobile patrol, construction and event coverage, camera monitoring, CCTV, and access control planning.",
    marketContext: "Guelph's manufacturing facilities, warehouses, campuses, residential communities, commercial properties, and construction projects require adaptable security planning.",
    priorities: ["Manufacturing and warehouse security", "Campus and public-site coverage", "Commercial property patrols", "Residential security", "Construction and event protection"],
    nearby: ["Cambridge", "Kitchener", "Waterloo", "Fergus", "Rockwood", "Acton"], image: "/images/services/commercial-industrial-security.jpg", imageAlt: "Accure Security personnel supporting a Guelph industrial property.",
  },
];

export const programmaticLocations = locations.filter((location) => location.generateServicePages);
export const cityLocations = locations.filter((location) => location.kind !== "regional");
export const regionalLocations = locations.filter((location) => location.kind === "regional");

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
