export type ServiceCategory = "Physical Security" | "Digital Security";

export type Service = {
  slug: string;
  category: ServiceCategory;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  outcomes: string[];
  included: string[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
  related?: string[];
};

export const physicalServices: Service[] = [
  {
    slug: "commercial-industrial-security",
    category: "Physical Security",
    title: "Commercial and Industrial Security",
    shortTitle: "Commercial Security",
    eyebrow: "Asset and personnel protection",
    summary:
      "Professional security guards for offices, warehouses, industrial facilities, commercial properties, and mixed-use sites that need access control, patrols, surveillance support, and rapid response.",
    metaTitle: "Commercial Security Guards Ontario | Accure Security",
    metaDescription:
      "Commercial and industrial security guards in Ontario for offices, warehouses, industrial sites, access control, patrols, and emergency response.",
    image: "/images/services/commercial-industrial-security.jpg",
    imageAlt:
      "Accure Security guards walking outside a commercial property in Ontario.",
    outcomes: [
      "Deter unauthorized access, theft, vandalism, and after-hours trespassing.",
      "Protect employees, visitors, equipment, inventory, and critical property zones.",
      "Support business continuity with trained officers, patrols, and documented reporting.",
    ],
    included: [
      "Front-desk and gatehouse security",
      "Interior and exterior patrols",
      "Access control and visitor checks",
      "CCTV and alarm support",
      "Emergency response coordination",
      "Incident and shift reporting",
    ],
    useCases: [
      "Corporate offices",
      "Warehouses",
      "Manufacturing properties",
      "Industrial yards",
      "Commercial plazas",
      "Mixed-use facilities",
    ],
    faqs: [
      {
        question: "Can Accure cover both commercial offices and industrial properties?",
        answer:
          "Yes. Coverage can be planned around front-of-house access control, employee safety, warehouse patrols, perimeter checks, and industrial risk points.",
      },
      {
        question: "Do commercial sites need on-site guards or mobile patrol?",
        answer:
          "It depends on operating hours, risk profile, access points, and response expectations. Many properties use a mix of stationed guards, patrols, and alarm response.",
      },
    ],
    related: ["mobile-patrol-alarm-response", "access-control", "camera-system-installation-cctv"],
  },
  {
    slug: "residential-concierge-security",
    category: "Physical Security",
    title: "Residential and Concierge Security",
    shortTitle: "Residential Security",
    eyebrow: "Safe communities with polished service",
    summary:
      "Concierge security officers for condominiums, residential communities, gated properties, and high-traffic residential buildings that need protection and professional front-desk presence.",
    metaTitle: "Residential Concierge Security Ontario | Accure Security",
    metaDescription:
      "Residential and concierge security services in Ontario for condos, communities, access control, visitor management, deliveries, and patrols.",
    image: "/images/services/residential-concierge-security.jpg",
    imageAlt:
      "Accure Security guard monitoring access at a residential property entrance.",
    outcomes: [
      "Control unauthorized entry while giving residents and guests a professional first point of contact.",
      "Support resident experience through visitor management, delivery handling, and maintenance coordination.",
      "Maintain visible security presence for lobbies, amenity areas, parking, and exterior zones.",
    ],
    included: [
      "Lobby and concierge desk coverage",
      "Visitor and contractor access management",
      "Package and delivery coordination",
      "CCTV observation",
      "Amenity and parking patrols",
      "Resident support and incident logs",
    ],
    useCases: [
      "Condominiums",
      "Apartment communities",
      "Gated residences",
      "Student housing",
      "Senior residences",
      "Luxury residential properties",
    ],
    faqs: [
      {
        question: "Can concierge guards handle both security and resident service?",
        answer:
          "Yes. Concierge security combines access control, visitor checks, patrol awareness, and calm customer-facing support for residential environments.",
      },
      {
        question: "Is residential security available outside normal business hours?",
        answer:
          "Coverage can be scheduled for overnight, weekends, holidays, short-term risk periods, or full-time 24/7 building support.",
      },
    ],
    related: ["commercial-industrial-security", "mobile-patrol-alarm-response", "camera-system-installation-cctv"],
  },
  {
    slug: "event-security",
    category: "Physical Security",
    title: "Live Event Security",
    shortTitle: "Event Security",
    eyebrow: "Crowd control and guest safety",
    summary:
      "Event security guards and supervisors for concerts, cultural events, corporate gatherings, media launches, trade fairs, private functions, and high-attendance venues across Ontario.",
    metaTitle: "Event Security Guards Ontario | Accure Security",
    metaDescription:
      "Event security guards in Ontario for crowd management, VIP security, parking control, perimeter coverage, and emergency coordination.",
    image: "/images/portfolio/event-floor-security.jpg",
    imageAlt:
      "Accure Security officer watching a busy stage and crowd barrier during live event coverage.",
    outcomes: [
      "Keep guests, staff, performers, vendors, and VIP areas protected without disrupting the event atmosphere.",
      "Coordinate crowd flow, parking zones, perimeters, communications, and emergency procedures.",
      "Provide visible, professional officers who match the tone of public, cultural, and private events.",
    ],
    included: [
      "Crowd management",
      "VIP and backstage security",
      "Parking and traffic support",
      "Perimeter coverage",
      "Event stewards",
      "Emergency and organizer communication",
    ],
    useCases: [
      "Concerts",
      "Cultural festivals",
      "Corporate events",
      "Trade fairs",
      "Private gatherings",
      "University events",
    ],
    faqs: [
      {
        question: "Can Accure support short-notice event security?",
        answer:
          "Event coverage depends on staffing availability, risk level, and location. The team can plan rapid coverage when the event details and requirements are clear.",
      },
      {
        question: "What event information is needed for a quote?",
        answer:
          "Useful details include date, venue, attendance estimate, hours, alcohol service, VIP areas, entry points, parking needs, and any known risk concerns.",
      },
    ],
    related: ["mobile-patrol-alarm-response", "fire-watch-contractor-watch", "commercial-industrial-security"],
  },
  {
    slug: "fire-watch-contractor-watch",
    category: "Physical Security",
    title: "Fire Watch and Contractor Watch",
    shortTitle: "Fire Watch",
    eyebrow: "Emergency site observation",
    summary:
      "Fire watch and contractor watch coverage for properties with impaired fire systems, post-incident protection needs, construction activity, repairs, or insurance-driven security requirements.",
    metaTitle: "Fire Watch Security Ontario | Accure Security",
    metaDescription:
      "Fire watch and contractor watch security guards in Ontario for impaired fire systems, construction sites, commercial properties, and emergency monitoring.",
    image: "/images/services/fire-watch-contractor-watch.jpg",
    imageAlt:
      "Accure Security guard providing event perimeter coverage at night.",
    outcomes: [
      "Maintain watch when fire detection, alarm, or sprinkler systems are down or under repair.",
      "Help deter trespassing, theft, and evidence disturbance after fire damage or high-risk incidents.",
      "Support evacuation procedures, fire department notification, hazard observation, and reporting.",
    ],
    included: [
      "Continuous fire watch patrols",
      "Alarm transmission support",
      "Evacuation coordination",
      "Hazard area observation",
      "Exterior photo documentation",
      "Continuity logs and final reports",
    ],
    useCases: [
      "Construction sites",
      "Commercial buildings",
      "Residential properties",
      "Hospitals and medical facilities",
      "Hotels and malls",
      "Event venues",
    ],
    faqs: [
      {
        question: "When is fire watch security needed?",
        answer:
          "Fire watch is commonly needed when fire systems are impaired, under repair, or temporarily unavailable, or when property conditions create elevated fire and access risk.",
      },
      {
        question: "Can fire watch guards document activity for owners or insurers?",
        answer:
          "Yes. Coverage can include patrol logs, observations, photo documentation, incident notes, and final reporting.",
      },
    ],
    related: ["construction-site-security", "healthcare-security", "commercial-industrial-security"],
  },
  {
    slug: "healthcare-security",
    category: "Physical Security",
    title: "Healthcare Security",
    shortTitle: "Healthcare Security",
    eyebrow: "Safety for care environments",
    summary:
      "Healthcare security guards for hospitals, clinics, medical facilities, nursing homes, and resident watch needs where safety, calm conduct, and de-escalation matter.",
    metaTitle: "Healthcare Security Guards Ontario | Accure Security",
    metaDescription:
      "Healthcare security guards in Ontario for hospitals, clinics, medical facilities, patient watch, resident watch, access control, and emergency response.",
    image: "/images/services/healthcare-security.jpg",
    imageAlt:
      "Accure Security guard supporting a healthcare facility lobby.",
    outcomes: [
      "Protect patients, staff, visitors, assets, and restricted areas in high-traffic care environments.",
      "Support emergency response, de-escalation, visitor management, and controlled access.",
      "Provide one-on-one patient watch and resident watch support where required.",
    ],
    included: [
      "Hospital and clinic guard coverage",
      "Patient watch and resident watch",
      "Visitor management",
      "Emergency response support",
      "Restricted area monitoring",
      "Patrols and incident reporting",
    ],
    useCases: [
      "Hospitals",
      "Medical centers",
      "Clinics",
      "Nursing homes",
      "Long-term care",
      "Healthcare administration sites",
    ],
    faqs: [
      {
        question: "Do healthcare guards need a different approach from retail or commercial guards?",
        answer:
          "Yes. Healthcare sites need calm communication, de-escalation awareness, patient privacy sensitivity, and coordination with clinical or facility staff.",
      },
      {
        question: "Can Accure provide patient watch or resident watch?",
        answer:
          "Yes. One-on-one watch coverage can be planned for patients or residents who need dedicated observation and safety support.",
      },
    ],
    related: ["fire-watch-contractor-watch", "access-control", "camera-system-installation-cctv"],
  },
  {
    slug: "mobile-patrol-alarm-response",
    category: "Physical Security",
    title: "Mobile Patrol and Alarm Response",
    shortTitle: "Mobile Patrol",
    eyebrow: "Visible deterrence with fast checks",
    summary:
      "Mobile patrol and alarm response services for properties that need flexible, cost-conscious, and unpredictable security coverage without a full-time stationed guard.",
    metaTitle: "Mobile Patrol and Alarm Response Ontario | Accure Security",
    metaDescription:
      "Mobile patrol and alarm response security in Ontario for commercial buildings, construction sites, residential properties, and industrial locations.",
    image: "/images/services/mobile-patrol-alarm-response.jpg",
    imageAlt:
      "Accure Security mobile patrol guard standing beside a marked patrol vehicle.",
    outcomes: [
      "Add unpredictable patrol visibility that deters theft, vandalism, and trespassing.",
      "Respond to triggered alarms, suspicious activity, and after-hours property concerns.",
      "Control costs by using scheduled patrols, alarm response, and check-ins instead of fixed guarding.",
    ],
    included: [
      "Scheduled and randomized patrols",
      "Alarm response dispatch",
      "Exterior and interior checks",
      "Lock and unlock services",
      "Incident escalation",
      "Digital patrol reporting",
    ],
    useCases: [
      "Commercial buildings",
      "Construction sites",
      "Industrial yards",
      "Residential properties",
      "Retail plazas",
      "Vacant properties",
    ],
    faqs: [
      {
        question: "Is mobile patrol a replacement for a full-time guard?",
        answer:
          "For some properties, yes. For higher-risk sites, mobile patrol often works best alongside fixed guards, cameras, or alarm monitoring.",
      },
      {
        question: "Can patrols happen at unpredictable times?",
        answer:
          "Yes. Randomized patrol windows can reduce predictability and improve deterrence for after-hours sites.",
      },
    ],
    related: ["commercial-industrial-security", "construction-site-security", "live-remote-monitoring"],
  },
  {
    slug: "construction-site-security",
    category: "Physical Security",
    title: "Construction Site Security",
    shortTitle: "Construction Security",
    eyebrow: "Protect materials, equipment, and momentum",
    summary:
      "Construction site security guards and patrols for active projects that need theft prevention, perimeter checks, access control, incident reporting, and after-hours protection.",
    metaTitle: "Construction Site Security Ontario | Accure Security",
    metaDescription:
      "Construction site security guards in Ontario for equipment protection, access control, mobile patrols, theft prevention, and after-hours coverage.",
    image: "/images/services/construction-site-security.jpg",
    imageAlt:
      "Accure Security guard monitoring a construction site with equipment and structure framing.",
    outcomes: [
      "Protect materials, tools, vehicles, machinery, and active work zones from theft and vandalism.",
      "Reduce project disruption with site-specific procedures, handovers, and communication.",
      "Support safety awareness with visible presence, access checks, and basic first response.",
    ],
    included: [
      "Gate and access control",
      "Material and equipment checks",
      "Perimeter patrols",
      "After-hours guard coverage",
      "Mobile patrol visits",
      "Shift handover and reporting",
    ],
    useCases: [
      "New construction",
      "Renovation sites",
      "Industrial builds",
      "Residential developments",
      "Infrastructure work",
      "Vacant or paused projects",
    ],
    faqs: [
      {
        question: "Why do construction sites need dedicated security?",
        answer:
          "Construction sites often contain valuable materials, changing access points, unfinished barriers, and equipment that can attract theft or vandalism.",
      },
      {
        question: "Can Accure combine guards with mobile patrol for construction sites?",
        answer:
          "Yes. A layered plan can include fixed guard coverage during higher-risk windows and mobile patrols for overnight or weekend checks.",
      },
    ],
    related: ["mobile-patrol-alarm-response", "fire-watch-contractor-watch", "live-remote-monitoring"],
  },
];

export const digitalServices: Service[] = [
  {
    slug: "live-remote-monitoring",
    category: "Digital Security",
    title: "Live Remote Monitoring",
    shortTitle: "Remote Monitoring",
    eyebrow: "Real-time observation and intervention",
    summary:
      "Remote video monitoring for properties that need 24/7 visibility, instant alerts, camera support, and faster awareness without relying only on recorded footage.",
    metaTitle: "Live Remote Video Monitoring Ontario | Accure Security",
    metaDescription:
      "Live remote video monitoring in Ontario for homes, offices, construction sites, retail, industrial properties, alarms, and CCTV systems.",
    image: "/images/services/live-remote-monitoring.jpg",
    imageAlt:
      "Accure Security patrol vehicle and guard supporting remote monitoring coverage.",
    outcomes: [
      "Watch high-risk zones in real time rather than relying only on footage after an incident.",
      "Connect cameras, alerts, and response procedures into a more active security program.",
      "Support homes, offices, construction sites, retail, and industrial properties.",
    ],
    included: [
      "Live video observation",
      "Motion event review",
      "Alarm monitoring support",
      "Two-way audio planning where applicable",
      "Camera coverage recommendations",
      "Incident escalation workflow",
    ],
    useCases: [
      "Construction sites",
      "Retail properties",
      "Commercial offices",
      "Industrial yards",
      "Residential properties",
      "Parking and exterior areas",
    ],
    faqs: [
      {
        question: "How is live remote monitoring different from recorded CCTV?",
        answer:
          "Recorded CCTV helps after an incident. Live monitoring adds active observation, alerts, and escalation when suspicious activity is detected.",
      },
      {
        question: "Can remote monitoring work with existing cameras?",
        answer:
          "In many cases, yes. The current camera layout, network, recording system, and alert setup need to be reviewed before integration.",
      },
    ],
    related: ["camera-system-installation-cctv", "mobile-patrol-alarm-response", "access-control"],
  },
  {
    slug: "camera-system-installation-cctv",
    category: "Digital Security",
    title: "Camera System Installation and CCTV Setup",
    shortTitle: "CCTV Installation",
    eyebrow: "Visibility designed around risk",
    summary:
      "Professional camera system and CCTV installation for residential, commercial, and industrial properties that need reliable coverage, recording, remote viewing, and system support.",
    metaTitle: "CCTV Camera Installation Ontario | Accure Security",
    metaDescription:
      "CCTV and camera system installation in Ontario for homes, businesses, commercial properties, outdoor areas, remote viewing, and surveillance support.",
    image: "/images/services/camera-system-installation-cctv.jpg",
    imageAlt:
      "Accure Security guard observing a retail environment supported by security camera coverage.",
    outcomes: [
      "Place cameras around entrances, parking areas, hallways, vulnerable zones, and high-traffic areas.",
      "Support deterrence, evidence capture, remote viewing, and ongoing security awareness.",
      "Integrate CCTV with alarms, access control, and monitoring where the property requires layered protection.",
    ],
    included: [
      "Camera layout planning",
      "Indoor and outdoor camera installation",
      "Wired and wireless options",
      "CCTV recording setup",
      "Remote viewing configuration",
      "Maintenance and system support",
    ],
    useCases: [
      "Homes",
      "Retail stores",
      "Office buildings",
      "Warehouses",
      "Parking lots",
      "Commercial plazas",
    ],
    faqs: [
      {
        question: "Can Accure install both indoor and outdoor cameras?",
        answer:
          "Yes. Camera plans can include indoor coverage for entry points and high-traffic areas, plus outdoor cameras for weather-exposed and low-light zones.",
      },
      {
        question: "Do you design the camera layout before installation?",
        answer:
          "Yes. Camera placement should be based on blind spots, lighting, access points, recording needs, and how the system will be monitored.",
      },
    ],
    related: ["live-remote-monitoring", "access-control", "commercial-industrial-security"],
  },
  {
    slug: "access-control",
    category: "Digital Security",
    title: "Access Control",
    shortTitle: "Access Control",
    eyebrow: "Secure movement through every entry point",
    summary:
      "Access control systems for organizations that need to manage credentials, restrict sensitive areas, audit movement, and integrate entry control with cameras and alarms.",
    metaTitle: "Access Control Systems Ontario | Accure Security",
    metaDescription:
      "Access control systems in Ontario with card access, mobile credentials, biometrics, elevator control, video surveillance integration, and secure entry management.",
    image: "/images/services/access-control.jpg",
    imageAlt:
      "Accure Security guard stationed in a corporate lobby with controlled access.",
    outcomes: [
      "Manage who can enter buildings, floors, rooms, elevators, and restricted operational zones.",
      "Reduce reliance on keys through card access, mobile credentials, biometric options, and audit trails.",
      "Integrate access control with cameras, perimeter systems, intrusion systems, and corporate policies.",
    ],
    included: [
      "Card access",
      "Mobile credentials",
      "Biometrics",
      "Elevator destination dispatch planning",
      "Video surveillance integration",
      "Policy and access-level setup",
    ],
    useCases: [
      "Corporate offices",
      "Healthcare facilities",
      "Residential buildings",
      "Industrial properties",
      "Education campuses",
      "Restricted storage areas",
    ],
    faqs: [
      {
        question: "Can access control be integrated with cameras?",
        answer:
          "Yes. Access events can be paired with video coverage to improve auditability and support investigations when needed.",
      },
      {
        question: "Are mobile credentials available?",
        answer:
          "Yes. Modern access systems can use mobile credentials, NFC, Bluetooth, and biometric options depending on hardware, policies, and site requirements.",
      },
    ],
    related: ["camera-system-installation-cctv", "live-remote-monitoring", "commercial-industrial-security"],
  },
];

export const services = [...physicalServices, ...digitalServices];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function serviceUrl(service: Service) {
  return service.category === "Digital Security"
    ? `/security-systems/${service.slug}/`
    : `/security-services/${service.slug}/`;
}
