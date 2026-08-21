// ------------------------------------------------------------------
//  Content model — all site copy derived from the résumé, in one place.
// ------------------------------------------------------------------

export const profile = {
  name: "Mohammad Hasnain Sayed",
  firstName: "Mohammad",
  lastName: "Hasnain Sayed",
  role: "Head — ERP & Digital Transformation",
  altRole: "Implementation & Customer Success Manager",
  // Thesis line for the hero — grounded in what he actually does.
  thesis: "I forge raw operations into systems that scale.",
  summary:
    "Customer Success & Implementation leader with 7+ years turning operational chaos into refined, high-adoption SaaS and ERP deployments across healthcare, manufacturing and FMCG.",
  location: "Parwanoo, Himachal Pradesh · from Mumbai",
  email: "sayedhasnain66@gmail.com",
  phone: "+91 76780 59114",
  phoneHref: "+917678059114",
  // Placeholder — update with the real LinkedIn URL.
  linkedin: "https://www.linkedin.com/in/hasnainsayed/",
  eyebrow: "Customer Success · Implementation · ERP Transformation",
};

// ------------------------------------------------------------------
//  About — first-person bio + portrait, grounded in the résumé.
// ------------------------------------------------------------------
export const about = {
  heading: "The person behind the systems.",
  photo: "/hasnain-sayed.jpg",
  photoAlt: "Portrait of Mohammad Hasnain Sayed",
  paragraphs: [
    "I'm Hasnain - I lead ERP and digital transformation, turning tangled, manual operations into systems teams actually adopt. Over seven years I've moved from writing software to owning implementations end to end: requirements, process design, go-live, and the stabilisation work that comes after.",
    "That path has run through healthcare HMIS integrations - including a national health project in Seychelles - 50+ SaaS and ERP go-lives across manufacturing and FMCG, and executive reviews where raw support data becomes a retention story. I care most about the parts that quietly decide adoption: clean master data, honoured SLAs, and stakeholders who trust the number in front of them.",
    "Currently based in Parwanoo, Himachal Pradesh and originally from Mumbai, I'm happiest when something messy becomes measurable, reportable, and calm.",
  ],
  facts: [
    { label: "Based in", value: "Parwanoo, Himachal Pradesh" },
    { label: "Focus", value: "ERP · Implementation · CS" },
    { label: "Industries", value: "Health · Mfg · FMCG" },
  ],
};

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "50+", label: "SaaS / ERP go-lives delivered" },
  { value: "98%+", label: "SLA adherence maintained" },
  { value: "7+", label: "years driving transformation" },
  { value: "25+", label: "executive MSR / QSR reviews" },
  { value: "3", label: "industries: health · mfg · FMCG" },
];

export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: "hero", label: "Top" },
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Work" },
  { id: "toolkit", label: "Toolkit" },
  { id: "contact", label: "Contact" },
];

export type CaseStudy = {
  id: string;
  kicker: string;
  title: string;
  context: string;
  outcome: string;
  metric: string;
  metricLabel: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "seychelles",
    kicker: "Healthcare · Public Sector · International",
    title: "Government health integration, Seychelles",
    context:
      "Selected for an international project for the Ministry of Health of Seychelles, East Africa - integrating laboratory machines with the national health information system.",
    outcome:
      "Bridged clinical hardware and HMIS across borders, documenting business processes and data flows for a government-grade rollout.",
    metric: "1",
    metricLabel: "national health system integrated",
  },
  {
    id: "volume",
    kicker: "Manufacturing · FMCG · Healthcare",
    title: "50+ end-to-end SaaS implementations",
    context:
      "Owned deployments across Sales, Purchase, Inventory and Production modules for manufacturing SMEs and FMCG clients - from requirement gathering through go-live and stabilisation.",
    outcome:
      "Repeatable go-live playbook spanning three industries, driving adoption and steady-state operations after every launch.",
    metric: "50+",
    metricLabel: "deployments shipped",
  },
  {
    id: "sla",
    kicker: "Service Governance",
    title: "SLA governance under pressure",
    context:
      "Ran support governance for enterprise accounts - holding First Response Time within 3 hours and Resolution Time within 12 hours across a live portfolio.",
    outcome:
      "Consistently prevented breaches while acting as primary SPOC, keeping CSAT high and accounts stable.",
    metric: "98%+",
    metricLabel: "SLA adherence",
  },
  {
    id: "reviews",
    kicker: "Stakeholder Leadership",
    title: "Executive reviews that retained clients",
    context:
      "Led 25+ MSR / QSR reviews with CXO-level stakeholders - presenting performance insight, addressing escalations and steering the renewal conversation.",
    outcome:
      "Strengthened retention and escalation control by turning support data into a boardroom narrative.",
    metric: "25+",
    metricLabel: "CXO reviews led",
  },
  {
    id: "multicompany",
    kicker: "Digital Transformation",
    title: "One ERP standard, five companies",
    context:
      "Leading ERP adoption across 5 group companies - standardising processes and inter-company coordination while managing master data: BOMs, inventory structures and item mapping.",
    outcome:
      "Turned five siloed operations into one accountable, reportable system with shared workflows.",
    metric: "5",
    metricLabel: "group companies unified",
  },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  year: string;
  location: string;
  summary: string;
  points: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    id: "electrowaves",
    company: "Electrowaves Electronics",
    role: "Head - ERP & Digital Transformation",
    period: "Apr 2026 — Present",
    year: "’26",
    location: "Himachal Pradesh, India",
    summary:
      "Leading ERP adoption and digital transformation across five group companies.",
    points: [
      "Primary liaison between departments and ERP vendors for requirements, solutioning and rollout planning.",
      "Driving implementation across Sales, Purchase, Inventory and Production for process visibility.",
      "Owning master-data accuracy - BOMs, inventory structures, item mapping and process validation.",
      "Building reporting systems and digital workflows for sharper production and decision monitoring.",
    ],
    tags: ["ERP Strategy", "Process Design", "Master Data", "Reporting"],
  },
  {
    id: "bizom",
    company: "Bizom",
    role: "Growth Consultant",
    period: "Nov 2025 — Mar 2026",
    year: "’25",
    location: "Mumbai, India",
    summary:
      "End-to-end implementation of Bizom's SaaS platform for FMCG clients.",
    points: [
      "Drove deployment, go-live execution and post-go-live stabilisation into steady-state operations.",
      "Held SLA governance  FRT within 3 hours, RT within 12 hours - preventing breaches.",
      "Led MSR / QSR reviews with CXO stakeholders to drive renewals and retention.",
      "Authored Functional Specification Documents; directed UAT with Product and Tech teams.",
    ],
    tags: ["FMCG SaaS", "SLA Governance", "UAT", "FSD"],
  },
  {
    id: "tranzact",
    company: "TranZact",
    role: "Implementation Consultant",
    period: "Nov 2024 — Nov 2025",
    year: "’24",
    location: "Mumbai, India",
    summary:
      "25+ ERP implementations for manufacturing SMEs, guiding a consultant team.",
    points: [
      "Led 25+ end-to-end SaaS ERP go-lives across Sales, Purchase, Inventory and Production.",
      "Managed a portfolio of ~20 active accounts through onboarding and adoption.",
      "Supervised a team of implementation consultants - task allocation and milestone tracking.",
      "Directed configuration, master-data migration and UAT for smooth, low-disruption transitions.",
    ],
    tags: ["Manufacturing", "Team Lead", "Data Migration", "Onboarding"],
  },
  {
    id: "manorama",
    company: "Manorama Infosolutions",
    role: "Functional Analyst",
    period: "Nov 2021 — Jul 2024",
    year: "’21",
    location: "Mumbai, India",
    summary:
      "Healthcare HMIS integrations - including an international government project.",
    points: [
      "Integrated Nair Hospital (MCGM), Wockhardt and other major MCGM hospitals with the HMIS.",
      "Selected for an international project in Seychelles to integrate Ministry of Health lab machines.",
      "Documented business requirements, risks, processes and data flows.",
      "Hands-on with EMR, EHR, Registration & Billing, LIS and RIS modules.",
    ],
    tags: ["Healthcare", "HMIS", "EMR / EHR", "Integration"],
  },
  {
    id: "nkumar",
    company: "N. Kumar Associates Intl.",
    role: "IT Support Engineer",
    period: "Oct 2020 — Nov 2021",
    year: "’20",
    location: "Mumbai, India",
    summary:
      "Frontline IT support and infrastructure reliability for business users.",
    points: [
      "Resolved end-user incidents and kept business systems running reliably.",
      "Built the operational grounding that later powered enterprise implementations.",
    ],
    tags: ["IT Support", "Troubleshooting"],
  },
  {
    id: "dreamz",
    company: "Dreamz Vision",
    role: "Software Development Engineer",
    period: "Jun 2019 — Aug 2020",
    year: "’19",
    location: "Mumbai, India",
    summary:
      "Where it started - writing code and learning to ship as a developer.",
    points: [
      "Built and shipped software features as a developer.",
      "Formed the engineering instinct behind every technical conversation since.",
    ],
    tags: ["Development", "Foundations"],
  },
];

export type ToolkitGroup = { label: string; items: string[] };

export const toolkit: ToolkitGroup[] = [
  {
    label: "Delivery & Success",
    items: [
      "Project Management",
      "Requirement Gathering",
      "Stakeholder Management",
      "UAT Coordination",
      "SLA Management",
      "Gap Analysis",
      "FSD Authoring",
      "Go-Live & Stabilisation",
      "Escalation Control",
    ],
  },
  {
    label: "Programming",
    items: ["Python", "C#", "C++"],
  },
  {
    label: "Platforms & BI",
    items: ["Power BI", "Tableau", "MS Office"],
  },
  {
    label: "Databases",
    items: ["MySQL", "Microsoft SQL Server"],
  },
  {
    label: "CRM",
    items: ["Zoho", "HubSpot"],
  },
];

export const certificates = [
  { name: "SQL (Basic)", issuer: "HackerRank", date: "Apr 2024" },
  {
    name: "Project Management Assessment",
    issuer: "LearnTube.ai",
    date: "Mar 2026",
  },
];

export const education = [
  {
    degree: "B.Sc. Information Technology",
    org: "Rizvi College of Arts, Science & Commerce",
    detail: "CGPA 7.1 · Mumbai",
    period: "2016 — 2019",
  },
  {
    degree: "HSC — Science (PCMB)",
    org: "Rizvi College of Arts, Science & Commerce",
    detail: "Mumbai",
    period: "2014 — 2016",
  },
];
