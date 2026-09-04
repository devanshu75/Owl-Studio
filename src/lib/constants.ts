export const SITE_CONFIG = {
  name: "Owl Studio",
  shortName: "OWL.STUDIO",
  title: "Owl Studio | Creative Studio & Digital Growth Agency",
  description:
    "Owl Studio is an avant-garde creative studio specializing in brand strategy, Next.js web platforms, generative AI video, cinematic short films, and high-converting commercial video ads.",
  url: "https://owlstudio.media",
  ogImage: "/images/og-image.jpg",
  contact: {
    email: "info@owlstudio.media",
    phone: "+91 88064 08608",
    phoneDisplay: "+91 88064 08608",
    location: "Based in India · Working Worldwide",
    timezone: "Asia/Kolkata",
    availability: "Available for Q2/Q3 Commissions",
  },
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com/company/owlstudio", label: "in" },
    { name: "Behance", href: "https://behance.net/owlstudio", label: "Be" },
    { name: "Dribbble", href: "https://dribbble.com/owlstudio", label: "Dr" },
    { name: "X (Twitter)", href: "https://x.com/owlstudio", label: "𝕏" },
  ],
};

export const NAV_LINKS = [
  { label: "Work", href: "/#ourwork", index: "01" },
  { label: "Services", href: "/#services", index: "02" },
  { label: "About", href: "/#about", index: "03" },
  { label: "Journal", href: "/blog", index: "04" },
  { label: "Contact", href: "/#contact", index: "05" },
];

export const MARQUEE_ITEMS = [
  "AI Generated Video",
  "Cinematic Short Films",
  "Web Development",
  "Brand Identity",
  "Commercial Video Ads",
  "UI / UX Design",
  "Motion Design",
  "Brand Strategy",
  "Next.js Platforms",
  "Creative Technology",
  "Art Direction",
  "Design Systems",
];

export const FOCUS_CARDS = [
  {
    id: "strategy",
    title: "Brand Strategy",
    description:
      "We define positioning, purpose, and messaging frameworks that give your brand clarity, distinct personality, and enduring market advantage.",
    icon: "strategy",
    tags: ["Market Positioning", "Messaging Hierarchy", "Audience Persona", "Competitor Matrix"],
  },
  {
    id: "design",
    title: "Brand Design",
    description:
      "Distinctive visual systems, iconic identity design, and comprehensive brand guidelines that create immediate recognition, authority, and customer trust.",
    icon: "design",
    tags: ["Logo Systems", "Typography Suites", "Color Theory", "Brand Guidelines"],
  },
  {
    id: "digital",
    title: "Digital Branding",
    description:
      "We extend your brand identity into digital ecosystems through high-performance websites, interactive campaigns, and scalable online experiences.",
    icon: "digital",
    tags: ["Next.js Websites", "Interactive 3D/Motion", "Design Tokens", "Conversion Funnels"],
  },
];

export const SERVICES = [
  {
    num: "01",
    name: "Web Development",
    description:
      "We build lightning-fast, SEO-optimized digital platforms engineered to capture organic traffic and convert high-intent visitors into paying clients. Every product is crafted for performance, scalability, and measurable revenue growth.",
    category: "Engineering",
    aspectBadge: "100/100 Core Web Vitals",
    tags: ["React", "Next.js 14", "TypeScript", "Node.js", "Tailwind CSS", "SEO"],
    deliverables: ["Full-Stack Architecture", "Core Web Vitals Optimization", "Headless CMS Integration", "Automated CI/CD"],
  },
  {
    num: "02",
    name: "Web Design",
    description:
      "Visually striking, responsive digital designs that embody your brand's unique ethos and make an unforgettable first impression across all viewports and devices.",
    category: "Design",
    aspectBadge: "Adaptive Responsive",
    tags: ["Visual Identity", "Responsive Design", "Micro-Interactions", "Art Direction", "Typography"],
    deliverables: ["Adaptive Layouts", "Custom Graphic Assets", "Dark/Light Modes", "Design Handoff"],
  },
  {
    num: "03",
    name: "UI / UX Design",
    description:
      "Intuitive, user-centered product interfaces that minimize friction, heighten engagement, and elevate conversion rates — from wireframes and journey maps to polished design systems.",
    category: "Experience",
    aspectBadge: "Figma Tokens",
    tags: ["Figma", "Interactive Prototyping", "User Research", "Wireframing", "Design Systems"],
    deliverables: ["Component Libraries", "User Journey Flowcharts", "Usability Testing", "Accessibility Audits"],
  },
  {
    num: "04",
    name: "Digital Marketing",
    description:
      "Data-driven strategic growth campaigns that expand your brand visibility, attract qualified leads, and deliver compounding ROI through search, paid acquisition, and content.",
    category: "Growth",
    aspectBadge: "High-ROI Funnels",
    tags: ["SEO / SEM", "Paid Acquisition", "Content Strategy", "Analytics & Attribution", "Conversion Rate Opt"],
    deliverables: ["Keyword Domination", "Google Analytics 4 Setup", "Ad Creatives", "Performance Dashboards"],
  },
  {
    num: "05",
    name: "AI Generated Video & Motion",
    description:
      "High-fidelity generative video production utilizing state-of-the-art neural synthesis. We direct and produce photorealistic brand motion, dynamic 3D visuals, and surreal aesthetic sequences that disrupt traditional production budgets.",
    category: "Creative AI",
    aspectBadge: "16:9 & 9:16 Ultra HD",
    tags: ["Runway Gen-3", "Sora", "Midjourney v6", "ComfyUI", "Prompt Direction", "Color Grading"],
    deliverables: ["Generative Brand Commercials", "Product Motion Renders", "AI Concept Worlds", "Custom Neural Upscaling"],
  },
  {
    num: "06",
    name: "Short Films & Brand Narratives",
    description:
      "Cinematic storytelling crafted to move audiences and build unbreakable brand affinity. From conceptualization and storyboarding to sound design and direction, we turn your brand ethos into an emotional cinematic experience.",
    category: "Cinema",
    aspectBadge: "2.39:1 CinemaScope",
    tags: ["Creative Direction", "Storyboarding", "Cinematography", "Sound Design", "Narrative Arc"],
    deliverables: ["Brand Manifesto Films", "Founder Documentaries", "Product Launch Trailers", "Festival Submissions"],
  },
  {
    num: "07",
    name: "High-Converting Video Ads",
    description:
      "Performance-engineered video ads designed specifically for high retention, immediate thumb-stopping hooks, and superior ROAS across Meta Reels, TikTok, YouTube Pre-Roll, and LinkedIn.",
    category: "Performance Video",
    aspectBadge: "9:16 Mobile First",
    tags: ["Hook Strategy", "Reels / TikTok", "Direct Response", "Paid Social ROAS", "A/B Creative Testing"],
    deliverables: ["Batch Creative Variations", "Scriptwriting & Hooks", "Dynamic Subtitles & SFX", "CTR & ROAS Optimization"],
  },
];

export const PROJECTS = [
  {
    id: "aura-horizon",
    title: "Aura Horizon",
    category: "AI SaaS & Web Platform",
    tagline: "Autonomous intelligence workspace engineered for modern teams.",
    description:
      "Complete brand strategy, design system, and full-stack Next.js web application for an AI productivity platform. Achieved sub-second load times and 140% boost in lead conversion.",
    gradient: "from-[#0c2a78] to-[#041a4a]",
    accentColor: "#3b82f6",
    tags: ["Next.js 14", "Tailwind CSS", "Brand Strategy", "TypeScript"],
    results: [
      { label: "Conversion Lift", value: "+140%" },
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Avg Session Time", value: "+3.4m" },
    ],
    liveUrl: "https://owlstudio.media",
    gallery: [
      {
        title: "Platform Overview",
        caption: "High-contrast dashboard and marketing layout with kinetic typography",
        color: "from-blue-600/40 to-indigo-900/60",
      },
      {
        title: "Design System",
        caption: "Atomic components, accessible contrast tokens, and responsive grid",
        color: "from-cyan-600/40 to-blue-900/60",
      },
      {
        title: "Mobile Experience",
        caption: "Touch-optimized navigation and smooth micro-interactions",
        color: "from-indigo-600/40 to-purple-900/60",
      },
    ],
  },
  {
    id: "kromic-labs",
    title: "Kromic Labs",
    category: "Fintech & Web3 Infrastructure",
    tagline: "Institutional digital asset protocol and developer portal.",
    description:
      "Created a futuristic, dark-mode visual identity, interactive data-visualization components, and production Next.js documentation portal that helped secure $2.4M in seed funding.",
    gradient: "from-[#b30000] to-[#5e0000]",
    accentColor: "#ef4444",
    tags: ["Brand Identity", "Design Tokens", "3D Web Graphics", "Motion Design"],
    results: [
      { label: "Seed Capital Raised", value: "$2.4M" },
      { label: "Developer Signups", value: "18.5K" },
      { label: "Recognition", value: "Featured on Awwwards" },
    ],
    liveUrl: "https://owlstudio.media",
    gallery: [
      {
        title: "Protocol Hub",
        caption: "Dark aesthetic with precision glowing borders and real-time charts",
        color: "from-red-600/40 to-rose-950/60",
      },
      {
        title: "Developer Portal",
        caption: "Syntax-highlighted API docs and interactive sandbox playground",
        color: "from-orange-600/40 to-red-950/60",
      },
      {
        title: "Identity Suite",
        caption: "Comprehensive typography guidelines, stationery, and 3D icons",
        color: "from-rose-600/40 to-stone-900/60",
      },
    ],
  },
  {
    id: "veloce-mobility",
    title: "Veloce Mobility",
    category: "Next-Gen Urban Transit",
    tagline: "Sustainable smart fleet management and rider ecosystem.",
    description:
      "Designed an intuitive cross-platform web app and consumer landing experience for electric mobility networks in Europe and India. Scaled from 0 to 50,000 monthly active users.",
    gradient: "from-[#064e3b] to-[#022c22]",
    accentColor: "#10b981",
    tags: ["UI / UX Architecture", "Conversion Funnel", "Design System", "Mobile First"],
    results: [
      { label: "Monthly Active Riders", value: "50K+" },
      { label: "Booking Velocity", value: "3.2x" },
      { label: "App Store Rating", value: "4.9 ★" },
    ],
    liveUrl: "https://owlstudio.media",
    gallery: [
      {
        title: "Fleet Dashboard",
        caption: "Real-time telemetry, battery health metrics, and route dispatching",
        color: "from-emerald-600/40 to-teal-950/60",
      },
      {
        title: "Rider Web App",
        caption: "Instant micro-checkout, NFC tap-to-unlock, and loyalty tracking",
        color: "from-green-600/40 to-emerald-950/60",
      },
      {
        title: "Brand Campaign",
        caption: "Omnichannel outdoor billboards, app store assets, and motion teaser",
        color: "from-teal-600/40 to-stone-900/60",
      },
    ],
  },
];

export const STATS = [
  { num: "20+", label: "Projects Delivered", detail: "Across SaaS, Fintech & E-commerce" },
  { num: "4+", label: "Countries Served", detail: "India, USA, UK & Australia" },
  { num: "100%", label: "Client Satisfaction", detail: "5-star delivery track record" },
  { num: "7", label: "Days Avg. Delivery", detail: "Agile sprints from brief to deploy" },
];

export const STUDIO_DISCIPLINES = [
  "Brand Identity",
  "Next.js Architecture",
  "AI Video Synthesis",
  "Cinematic Storytelling",
  "High-ROAS Video Ads",
  "3D & Motion Design",
  "Design Systems",
  "Conversion Optimization",
];

export const ABOUT_VALUES = [
  {
    title: "Strategy First",
    desc: "We don't just push pixels. We dissect your business model, target market, and growth mechanics to build designs that generate revenue.",
  },
  {
    title: "Speed & Precision",
    desc: "We work in rapid, high-velocity sprints without cutting corners on craft, accessibility, or code quality.",
  },
  {
    title: "Generative Innovation",
    desc: "We merge cutting-edge AI cinematography and neural synthesis with human art direction to produce impossible visuals at unprecedented velocity.",
  },
  {
    title: "Global Standards",
    desc: "Crafted for ambitious businesses worldwide, engineered with cutting-edge web standards and pristine aesthetics.",
  },
];
