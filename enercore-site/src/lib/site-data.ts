/* ─── Company ─────────────────────────────────────────────────────────────── */
export const company = {
  name:      "Enercore New Energy Pvt. Ltd.",
  shortName: "Enercore",
  phone:     "+91 95604 57193",
  whatsapp:  "https://wa.me/+919560457193",
  email:     "sales@enercore.org",
  address:   "B-1208, Ithum Towers, Sector 62, Noida, Uttar Pradesh 201309",
  founded:   "2024",
  tagline:   "Powering India's Industrial Future with Clean, Reliable Solar Energy",
  siteUrl:   "https://www.enercore.co",
};

/* ─── Stats ───────────────────────────────────────────────────────────────── */
export const stats = [
  { label: "Installed Capacity",  value: 12, suffix: " MW+" },
  { label: "Projects Delivered",  value: 6,  suffix: "+"    },
  { label: "States Served",       value: 3,  suffix: "+"    },
  { label: "Max Bill Reduction",  value: 90, suffix: "%"    },
];

/* ─── Services ────────────────────────────────────────────────────────────── */
export type Service = {
  slug:        string;
  title:       string;
  short:       string;
  description: string;
  benefits:    string[];
  iconName:    string;
  accent:      string;
};

export const services: Service[] = [
  {
    slug:  "ppa-solar-plants",
    title: "PPA Solar Power Plants",
    short: "Zero upfront solar — reduce power bills by up to 50% from day one.",
    description:
      "We finance, build, and operate your solar system under a Power Purchase Agreement. Your business gets clean energy at rates up to 50% below grid tariff without spending a single rupee on capital — immediate savings through flexible PPA structures with net metering flexibility.",
    benefits: [
      "Zero upfront investment required",
      "Up to 50% reduction in electricity cost",
      "Immediate savings through PPA from day one",
      "Long-term O&M under one contract",
    ],
    iconName: "bolt",
    accent:   "#ffc452",
  },
  {
    slug:  "open-access-solar",
    title: "Open Access Solar Power Plants",
    short: "Grid-connected renewable procurement — cut bills by up to 50%.",
    description:
      "Regulatory framework enabling large-scale consumers to purchase renewable energy from third-party generators using existing grid infrastructure. Tackle energy access disparity while reducing power bills by up to 50% through grid-connected renewable procurement.",
    benefits: [
      "Tackles energy access disparity",
      "Up to 50% reduction in power bills",
      "Grid-connected renewable procurement",
      "Suitable for large-scale consumers",
    ],
    iconName: "building",
    accent:   "#60a5fa",
  },
  {
    slug:  "capex-solar-plants",
    title: "CAPEX Solar Power Plants",
    short: "Full ownership — achieve up to 90% reduction in power costs.",
    description:
      "Purchase the complete Solar PV system through 100% payment or bank financing. Gain full control and maximum long-term savings with up to 90% reduction in power costs through full system ownership, maximising your ROI from day one of commissioning.",
    benefits: [
      "Up to 90% reduction in power costs",
      "Full system ownership and control",
      "100% payment or bank financing options",
      "Maximum long-term ROI",
    ],
    iconName: "compass",
    accent:   "#a78bfa",
  },
  {
    slug:  "renewx-training",
    title: "RenewX Training Modules",
    short: "Bridging the skill gap in India's renewable energy sector.",
    description:
      "Our dedicated training vertical prepares engineers and graduates for careers in the $2 trillion+ global renewable energy industry with cutting-edge curriculum. RenewX bridges the skill gap in renewable energy, empowering the next generation of clean energy professionals across India.",
    benefits: [
      "Industry-relevant cutting-edge curriculum",
      "Prepares for the $2T+ global RE industry",
      "Open to engineers and fresh graduates",
      "Subscription-based training modules",
    ],
    iconName: "consulting",
    accent:   "#34d399",
  },
  {
    slug:  "ai-tariff-calculator",
    title: "AI-Enabled Solar Tariff Calculator",
    short: "Precise tariff calculation powered by advanced AI models.",
    description:
      "Uses advanced AI models to calculate precise solar tariffs based on your location and usage patterns. Includes customer credibility assessment for long-term contracts — giving you data-backed confidence before committing to any solar arrangement.",
    benefits: [
      "Location & usage-based precision",
      "Advanced AI-driven tariff modelling",
      "Customer credibility assessment",
      "Data-backed long-term contract decisions",
    ],
    iconName: "wrench",
    accent:   "#fb923c",
  },
];

/* ─── Projects ────────────────────────────────────────────────────────────── */
export type Project = {
  slug:        string;
  name:        string;
  capacity:    string;
  location:    string;
  state:       string;
  serviceType: "OPEX" | "CAPEX" | "Design & Engineering" | "Open Access";
  status:      "Completed" | "Upcoming";
  summary:     string;
  challenge:   string;
  solution:    string;
  outcome:     string;
  bgColor:     string;
  imageUrl:    string;
  images?:     string[];
  videos?:     string[];
  droneVideo?: string;
  details?:    { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug:        "caparo-maruti-india",
    name:        "Caparo Maruti India Ltd",
    capacity:    "507 kWp",
    location:    "Bawal, Haryana",
    state:       "Haryana",
    serviceType: "OPEX",
    status:      "Completed",
    summary:     "Industrial rooftop solar under PPA/OPEX model — delivering 703,209 kWh annually with zero upfront investment.",
    challenge:
      "The manufacturing client needed immediate electricity cost reduction without diverting capital from core production operations at their Bawal facility.",
    solution:
      "Enercore structured a fully-owned OPEX deployment with comprehensive safety infrastructure including hand railings, walkways, and lifelines for safe maintenance access across the rooftop.",
    outcome:
      "703,209 kWh estimated annual generation. Termination voltage below the shed at 415V with monthly PPA payments providing predictable, long-term energy pricing.",
    bgColor:  "#1a3d20",
    imageUrl: "/images/projects/caparo-gate.jpg",
    images: [
      "/images/projects/caparo-507kw-1.jpeg",
      "/images/projects/caparo-507kw-3.jpeg",
      "/images/projects/caparo-507kw-4.jpeg",
      "/images/projects/caparo-507kw-5.jpeg",
      "/images/projects/caparo-507kw-6.jpeg",
      "/images/projects/caparo-507kw-7.jpeg",
    ],
    droneVideo: "/videos/projects/caparo-drone.mp4",
    details: [
      { label: "Client Name",            value: "Caparo Maruti India Ltd"          },
      { label: "Location",               value: "Bawal, Haryana, India"            },
      { label: "Capacity",               value: "507 kWp"                          },
      { label: "Estimated Generation",   value: "703,209 kWh/year"                 },
      { label: "Termination Voltage",    value: "Below the Shed at 415 V"          },
      { label: "Safety Considerations",  value: "Hand Railings, Walkways & Lifelines" },
      { label: "Payment Structure",      value: "Monthly PPA"                      },
    ],
  },
  {
    slug:        "hella-india-automotive",
    name:        "Hella India Private Limited",
    capacity:    "450 kWp",
    location:    "Gurugram, Haryana",
    state:       "Haryana",
    serviceType: "OPEX",
    status:      "Completed",
    summary:     "Carport solar generating 788,400 kWh annually — shaded parking plus clean energy for the automotive facility.",
    challenge:
      "The automotive facility needed a solar solution that maximised land use, enhanced employee comfort with shaded parking, and reduced peak demand charges.",
    solution:
      "Enercore designed and installed a carport solar structure on the existing parking area — utilising existing infrastructure with no additional land requirement under the OPEX model.",
    outcome:
      "788,400 kWh annual generation. ₹7.88M gross avoided cost, ₹4.57M net annual savings, 646.5 tons CO₂ reduced — equivalent to 30,000+ trees planted annually.",
    bgColor:  "#14532d",
    imageUrl: "/images/projects/hella-gate.jpg",
    images: [
      "/images/projects/hella-1.jpeg",
      "/images/projects/hella-3.jpeg",
      "/images/projects/hella-4.jpeg",
      "/images/projects/hella-5.jpeg",
    ],
    videos: [
      "/videos/projects/hella-6.mp4",
    ],
    details: [
      { label: "Client Name",            value: "Hella India Private Limited"      },
      { label: "Location",               value: "Gurugram, Haryana, India"         },
      { label: "Capacity",               value: "450 kWp"                          },
      { label: "Estimated Generation",   value: "788,400 kWh/year"                 },
      { label: "Termination Voltage",    value: "Below the Shed at 415 V"          },
      { label: "Safety Considerations",  value: "Hand Railings, Walkways & Lifelines" },
      { label: "Payment Structure",      value: "Monthly"                          },
    ],
  },
  {
    slug:        "mahagenco-design-engineering",
    name:        "Mahagenco",
    capacity:    "10 MWp",
    location:    "Maharashtra",
    state:       "Maharashtra",
    serviceType: "Design & Engineering",
    status:      "Completed",
    summary:     "Complete engineering package for a utility-grade 10 MWp solar plant — from SLDs to full energy simulation.",
    challenge:
      "The project required precision engineering with strict timeline alignment for utility-scale execution and regulatory approvals in Maharashtra.",
    solution:
      "Enercore delivered detailed SLDs, PVSyst energy simulation, BOM optimisation, and deployment-ready technical documentation covering every aspect of the 10 MWp plant.",
    outcome:
      "Engineering package delivered on schedule. Reduced revisions and accelerated procurement clearances for seamless utility-scale commissioning.",
    bgColor:  "#0f3d1a",
    imageUrl: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=75",
  },
  {
    slug:        "hollister-medical-india",
    name:        "Hollister Medical India Ltd",
    capacity:    "500 kWp",
    location:    "Bawal, Haryana",
    state:       "Haryana",
    serviceType: "OPEX",
    status:      "Completed",
    summary:     "Rooftop solar for a healthcare manufacturing facility — clean energy under OPEX with zero capital burden.",
    challenge:
      "The medical device manufacturer needed reliable clean energy without capital expenditure, while maintaining uninterrupted production-grade power supply.",
    solution:
      "Enercore deployed a 500 kWp rooftop system under its OPEX model with safety infrastructure — hand railings, walkways, and lifelines — ensuring safe, long-term O&M access.",
    outcome:
      "703,209 kWh estimated annual generation at 415V termination. Monthly PPA payments providing predictable long-term clean energy for the healthcare manufacturing facility.",
    bgColor:  "#166534",
    imageUrl: "/images/projects/hollister-gate.png",
    images: [
      "/images/projects/hollister-1.jpeg",
      "/images/projects/hollister-3.jpeg",
      "/images/projects/hollister-5.jpeg",
    ],
    videos: [
      "/videos/projects/hollister-2.mp4",
      "/videos/projects/hollister-4.mp4",
      "/videos/projects/hollister-6.mp4",
    ],
    details: [
      { label: "Client Name",            value: "Hollister Medical India Ltd"         },
      { label: "Location",               value: "Bawal, Haryana, India"               },
      { label: "Capacity",               value: "500 kWp"                             },
      { label: "Estimated Generation",   value: "703,209 kWh/year"                    },
      { label: "Termination Voltage",    value: "Below the Shed at 415 V"             },
      { label: "Safety Considerations",  value: "Hand Railings, Walkways & Lifelines" },
      { label: "Payment Structure",      value: "Monthly PPA"                         },
    ],
  },
  {
    slug:        "jalsa-resort",
    name:        "Jalsa Resort",
    capacity:    "Rooftop",
    location:    "India",
    state:       "North India",
    serviceType: "OPEX",
    status:      "Completed",
    summary:     "Solar energy for hospitality — clean power for resort operations under the OPEX model with zero capital investment.",
    challenge:
      "The resort required a sustainable energy solution to reduce operational costs and enhance its green credentials without any upfront capital commitment.",
    solution:
      "Enercore installed a rooftop solar system under the OPEX model, providing the resort with predictable low-cost energy while managing all O&M responsibilities.",
    outcome:
      "Significant reduction in grid electricity dependence, enhanced ESG profile, and stable long-term energy costs under the PPA agreement.",
    bgColor:  "#1a3d2a",
    imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=75",
  },
  {
    slug:        "caparo-maruti-3mw",
    name:        "Caparo Maruti India Ltd",
    capacity:    "3 MW",
    location:    "Haryana",
    state:       "Haryana",
    serviceType: "Open Access",
    status:      "Upcoming",
    summary:     "3 MW Open Access solar plant delivering ~400,000 units/month to Caparo Maruti over a 20-year tenure.",
    challenge:
      "The client required large-scale renewable energy procurement to meet RE100 targets and substantially reduce energy costs at scale.",
    solution:
      "Enercore is developing a 3 MW Open Access solar plant — leveraging the group captive regulatory framework to deliver bulk clean energy through grid infrastructure.",
    outcome:
      "Expected ~400,000 kWh/month delivery. 20-year Open Access arrangement providing long-term energy cost certainty and significant carbon footprint reduction.",
    bgColor:  "#1a3d20",
    imageUrl: "/images/projects/3mw-site-1.jpeg",
    images: [
      "/images/projects/3mw-site-1.jpeg",
      "/images/projects/3mw-site-2.jpeg",
    ],
    details: [
      { label: "Client Name",          value: "Caparo Maruti India Ltd"   },
      { label: "Location",             value: "Haryana, India"            },
      { label: "Capacity",             value: "3 MW"                      },
      { label: "Project Type",         value: "Open Access"               },
      { label: "Tenure",               value: "20 Years"                  },
      { label: "Est. Generation",      value: "~400,000 units/month"      },
      { label: "Status",               value: "Upcoming"                  },
    ],
  },
  {
    slug:        "vatika-hotels",
    name:        "Vatika Hotels",
    capacity:    "620 kW",
    location:    "Gurugram, Haryana",
    state:       "Haryana",
    serviceType: "Open Access",
    status:      "Upcoming",
    summary:     "620 kW Solar Rooftop / Open Access for Vatika Hotels — delivering ~72,000 units/month over a 25-year tenure.",
    challenge:
      "The hotel group needed a scalable solar solution aligned with sustainability commitments and long-term energy cost management across their Gurugram property.",
    solution:
      "Enercore is developing a hybrid Solar Rooftop + Open Access arrangement providing clean energy for hotel operations, utilising existing roof and grid infrastructure.",
    outcome:
      "Expected ~72,000 kWh/month generation over a 25-year tenure, significantly reducing electricity costs and carbon footprint for the hospitality group.",
    bgColor:  "#14532d",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=75",
    details: [
      { label: "Client Name",          value: "Vatika Hotels"                      },
      { label: "Location",             value: "Gurugram, Haryana, India"           },
      { label: "Capacity",             value: "620 kW"                             },
      { label: "Project Type",         value: "Solar Rooftop / Open Access"        },
      { label: "Tenure",               value: "25 Years"                           },
      { label: "Est. Generation",      value: "~72,000 units/month"                },
      { label: "Status",               value: "Upcoming"                           },
    ],
  },
];

/* ─── Journey ─────────────────────────────────────────────────────────────── */
export const journey = [
  {
    date:        "July 2024",
    label:       "Company Formation",
    description: "Enercore New Energy Pvt Ltd incorporated — on a mission to power India's industrial future with clean, reliable solar energy.",
    isUpcoming:  false,
    image:       "/images/projects/caparo-gate.jpg",
  },
  {
    date:        "Oct 2024",
    label:       "507 kW — Caparo Maruti",
    description: "First major industrial OPEX solar rooftop installation at Caparo Maruti India Ltd, Bawal, Haryana.",
    isUpcoming:  false,
    image:       "/images/projects/caparo-507kw-1.jpeg",
  },
  {
    date:        "Jan 2025",
    label:       "450 kW — Hella India",
    description: "Carport solar for Hella India Automotive, Gurugram — combining shaded parking with clean energy generation.",
    isUpcoming:  false,
    image:       "/images/projects/hella-1.jpeg",
  },
  {
    date:        "Mar 2025",
    label:       "10 MWp — Mahagenco",
    description: "Complete Design & Engineering package for Maharashtra's 10 MWp utility-scale solar plant.",
    isUpcoming:  false,
    image:       "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=75",
  },
  {
    date:        "July 2025",
    label:       "500 kW — Hollister Medical",
    description: "Rooftop OPEX deployment for Hollister Medical India Ltd, Bawal — clean energy for healthcare manufacturing.",
    isUpcoming:  false,
    image:       "/images/projects/hollister-1.jpeg",
  },
  {
    date:        "Mar 2026",
    label:       "3 MW — Caparo Maruti",
    description: "3 MW Open Access solar plant for Caparo Maruti, delivering ~400,000 units/month over a 20-year tenure.",
    isUpcoming:  true,
    image:       "/images/projects/3mw-site-1.jpeg",
  },
  {
    date:        "Apr 2026",
    label:       "620 kW — Vatika Hotels",
    description: "Solar Rooftop / Open Access for Vatika Hotels, Gurugram — ~72,000 units/month over a 25-year tenure.",
    isUpcoming:  true,
    image:       "/images/projects/caparo-507kw-3.jpeg",
  },
];

/* ─── Client Logos ────────────────────────────────────────────────────────── */
export const clientLogos = [
  { name: "Caparo Maruti India Ltd",     sector: "Automotive Manufacturing", logo: "/images/clients/caparo.png"            },
  { name: "Hella India",                 sector: "Automotive",               logo: "/images/clients/hella.png"             },
  { name: "Hollister Medical India",     sector: "Healthcare Manufacturing", logo: "/images/clients/hollister.png"         },
  { name: "Jalsa Resort",                sector: "Hospitality",              logo: "/images/clients/jalsa-resort.png"      },
  { name: "Perfect Industries",          sector: "Industrial",               logo: "/images/clients/perfect-industries.png"},
  { name: "Solabot",                     sector: "Solar Technology",         logo: "/images/clients/solabot.png"           },
  { name: "Sunkind Energy",              sector: "Renewable Energy",         logo: "/images/clients/sunkind.png"           },
];

/* ─── Customers ───────────────────────────────────────────────────────────── */
export const customers = [
  { name: "Caparo Maruti India Ltd",    sector: "Automotive Manufacturing" },
  { name: "Hella India Private Limited",sector: "Automotive"               },
  { name: "Hollister Medical India",    sector: "Healthcare Manufacturing" },
  { name: "Vatika Hotels",              sector: "Hospitality"              },
  { name: "Jalsa Resort",               sector: "Hospitality"              },
  { name: "Sunkind Energy",             sector: "Renewable Energy"         },
  { name: "Solabot",                    sector: "Solar Technology"         },
  { name: "Perfect",                    sector: "Industrial"               },
];

/* ─── Testimonials ────────────────────────────────────────────────────────── */
export const testimonials = [
  {
    quote:
      "Our 450kWp plant at Hella has been running without a single hiccup since commissioning. Enercore managed the full scope — design, installation, and grid sync — without touching our production schedule. Energy costs have dropped sharply.",
    author:  "Mr. Uday",
    company: "Plant Head, Hella India Automotive, Haryana",
    rating:  5,
  },
  {
    quote:
      "507kWp inside a live automotive facility is not a small ask. Enercore understood our floor constraints, planned around shift timings, and delivered on time. Execution clarity was excellent — no surprises, no delays.",
    author:  "Mr. Rajesh Ghalawat",
    company: "Plant Head, Caparo Maruti India Ltd, Haryana",
    rating:  5,
  },
  {
    quote:
      "Installing a 500kWp system inside a medical manufacturing facility demands zero-error execution. Enercore's structured approach — from detailed design through operational handover — gave us complete confidence at every stage.",
    author:  "Mr. Sushil Bhardwaj",
    company: "Plant Head, Hollister Medical",
    rating:  5,
  },
];

/* ─── Team ────────────────────────────────────────────────────────────────── */
export const teamLeadership = [
  {
    name:     "Mr. Alok Singh",
    role:     "Chief Executive Officer",
    iconName: "target",
    bio:      "Leads Enercore's vision, strategy, and business development — driving the mission to make solar the most reliable energy partner for India's industrial sector.",
  },
  {
    name:     "Mr. Sidhyant Manu",
    role:     "Director",
    iconName: "layers",
    bio:      "Oversees Enercore's operational and financial strategy, ensuring every project is executed with precision, transparency, and long-term value creation.",
  },
  {
    name:     "Mr. Kuldeep Singh",
    role:     "Honorary Adviser",
    iconName: "shield",
    bio:      "Brings decades of domain expertise to guide Enercore's strategic direction and strengthen key industry relationships across the renewable energy sector.",
  },
];

export const teamManagement = [
  {
    name:     "Mr. Yash Sharma",
    role:     "Assistant Manager — Technical",
    iconName: "settings",
    bio:      "Leads Enercore's technical operations — spanning website and RMS platform development, systems monitoring, and new technology integration — while coordinating the technical team to ensure quality delivery across every project.",
  },
  {
    name:     "Mr. Harshit Saharan",
    role:     "Assistant Manager — Finance & Procurement",
    iconName: "briefcase",
    bio:      "Drives end-to-end procurement and financial operations — from vendor selection, inventory management, and logistics to banking coordination, financial planning, and investor relationship management.",
  },
  {
    name:     "Mr. Siddharth Singh",
    role:     "Assistant Manager — Asset Development",
    iconName: "building",
    bio:      "Oversees solar asset operations from commissioning to long-term performance monitoring — managing on-site execution, DISCOM coordination, quality compliance, and client relationships across all active plants.",
  },
];

/* ─── Scrollytelling panels ───────────────────────────────────────────────── */
export const scrollPanels = [
  {
    badge:     "The OPEX / PPA Advantage",
    title:     "Zero Upfront.\nImmediate Returns.",
    body:      "Our PPA/OPEX model means you don't spend a rupee to go solar. Enercore finances, builds, and operates the system. You receive clean energy at tariffs up to 50% below grid rates from day one — with no capital risk and no O&M burden.",
    stat:      "₹0",
    statLabel: "Initial Investment",
    bg:        "from-[#052e16] via-[#14532d] to-[#166534]",
    accent:    "#f59e0b",
  },
  {
    badge:     "CAPEX Model",
    title:     "Full Control.\nUp to 90% Savings.",
    body:      "Our CAPEX model puts you in full ownership of your solar system. Purchase through 100% payment or bank financing — gain complete control and maximum long-term savings with up to 90% reduction in power costs.",
    stat:      "90%",
    statLabel: "Max Bill Reduction",
    bg:        "from-[#041a0c] via-[#0f3a1e] to-[#155228]",
    accent:    "#86efac",
  },
  {
    badge:     "Full Spectrum",
    title:     "One Partner.\nEvery Stage.",
    body:      "PPA, CAPEX, Open Access, Design & Engineering, RenewX Training — all under one roof. No fragmented vendors, no accountability gaps. Enercore stays with your project from feasibility through the plant's operating life.",
    stat:      "5",
    statLabel: "Solution Types",
    bg:        "from-[#0a2010] via-[#16401e] to-[#1a5226]",
    accent:    "#4ade80",
  },
];

/* ─── Nav links ───────────────────────────────────────────────────────────── */
export const navLinks = [
  { href: "/",         label: "Home"     },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about",    label: "About"    },
  { href: "/contact",  label: "Contact"  },
  { href: "/blog", label: "Blog" },
];
