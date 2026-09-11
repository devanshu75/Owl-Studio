export interface ProjectGalleryItem {
  title: string;
  caption: string;
  color: string;
  category?: string;
  aspect?: "wide" | "square" | "portrait";
}

export interface ProjectBtsStep {
  step: string;
  title: string;
  description: string;
  insight: string;
}

export interface ProjectMeta {
  clientOrConcept: string;
  role: string;
  timeline: string;
  disciplines: string[];
  deliverables: string[];
  tools: string[];
  status: "Self-Initiated Concept" | "Commissioned Work";
}

export interface ProjectResults {
  summary: string;
  benchmarks: string[];
  isReal: boolean;
}

export interface ProjectItemData {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "AI Ads" | "Websites" | "Digital Marketing" | "Social Media" | "Graphic Design";
  year: string;
  tagline: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
  meta: ProjectMeta;
  gallery: ProjectGalleryItem[];
  services: string[];
  challenge: string;
  idea: string;
  strategy: string;
  execution: string;
  bts: ProjectBtsStep[];
  results: ProjectResults;
  isConcept: boolean;
  relatedProjects: string[];
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const PROJECTS_DATA: ProjectItemData[] = [
  {
    id: "beyond-the-road",
    slug: "beyond-the-road",
    title: "Beyond the Road",
    client: "Autonomous Automotive Vision",
    category: "AI Ads",
    year: "2026",
    tagline: "Cinematic commercial concept exploring next-generation electrified touring.",
    shortDescription:
      "A cinematic AI-synthesized advertising campaign visualizing untamed landscapes and hyper-real automotive craft.",
    description:
      "A speculative commercial campaign engineered using generative neural synthesis and art-directed lighting pipelines, demonstrating how automotive advertising can achieve surreal scale without multimillion-dollar production logistics.",
    heroImage: "/images/og-image.jpg",
    meta: {
      clientOrConcept: "Speculative Concept / R&D",
      role: "Creative Direction, Prompt Engineering, Motion Design, Sound Architecture",
      timeline: "3 Weeks",
      disciplines: ["AI Advertising", "Creative Direction", "Sound Architecture"],
      deliverables: [
        "60-Second 2.39:1 CinemaScope Master",
        "3x 15-Second Paid Social Hooks (9:16)",
        "Key Visual Still Series (8K Resolution)",
        "Soundtrack & Ambient Audio Stems",
      ],
      tools: ["Midjourney v6", "Runway Gen-2", "DaVinci Resolve", "Adobe Premiere Pro"],
      status: "Self-Initiated Concept",
    },
    gallery: [
      {
        title: "Mountain Pass Horizon",
        caption: "Golden hour atmospheric lighting with dynamic procedural weather effects.",
        color: "from-amber-200 to-amber-400",
        aspect: "wide",
      },
      {
        title: "Cockpit Interface",
        caption: "Minimalist interior typography and head-up display visualization.",
        color: "from-stone-200 to-stone-400",
        aspect: "square",
      },
      {
        title: "Urban Night Descent",
        caption: "Cinematic reflections and high-contrast night framing.",
        color: "from-neutral-300 to-neutral-500",
        aspect: "wide",
      },
      {
        title: "Aerodynamic Dieline Study",
        caption: "Precision vector airflow analysis overlaid onto generative vehicle geometry.",
        color: "from-amber-100 to-stone-300",
        aspect: "portrait",
      },
    ],
    services: ["AI Ads Generation", "Creative Direction", "Sound Architecture"],
    challenge:
      "Automotive launches typically require closed mountain permits, transport logistics, and extensive VFX work that strain early-stage campaign budgets.",
    idea:
      "Synthesize an untamed global journey where human art direction dictates every millimeter of vehicle silhouette, weather dynamics, and camera movement.",
    strategy:
      "Focus on emotional escapism and sensory sound design, creating an impossible narrative arc that stops social feeds within the first two seconds.",
    execution:
      "Engineered through customized prompt pipelines, frame-by-frame color balancing in DaVinci Resolve, and tailored widescreen 2.39:1 CinemaScope mastering.",
    bts: [
      {
        step: "Phase 01",
        title: "Prompt Weighting & Seed Consistency",
        description:
          "Tested over 400 prompt iterations to lock vehicle proportions, surface reflections, and rim geometry across shifting camera angles.",
        insight:
          "Consistency was unlocked by chaining image-to-image seeds with strict negative prompt parameters for unwanted artifacts.",
      },
      {
        step: "Phase 02",
        title: "Motion Synthesis & Interpolation",
        description:
          "Applied Runway Gen-2 camera motion controls to simulate sweeping crane shots and chase-car stabilization at high velocity.",
        insight:
          "Interpolating at 60fps allowed optical flow smoothing that eliminates generative jitter.",
      },
      {
        step: "Phase 03",
        title: "Audio Design & Grading",
        description:
          "Built a multi-layered soundscape combining sub-bass synthesized electric motor frequencies with binaural wind acoustics.",
        insight:
          "Sound accounts for 60% of the perceived visual fidelity in speculative commercial film.",
      },
    ],
    results: {
      summary:
        "As a self-initiated concept, no commercial revenue metrics are claimed. The project serves as an internal benchmark for generative video fidelity and client demonstration.",
      benchmarks: [
        "Proved feasibility of sub-48-hour commercial asset production turnaround",
        "Demonstrated 2.39:1 CinemaScope visual cohesion across 12 distinct scene environments",
        "Established production pipeline blueprint for future studio advertising commissions",
      ],
      isReal: false,
    },
    isConcept: true,
    relatedProjects: ["volt-mobility", "noir-fragrance"],
    tags: ["AI Ads", "Generative Direction", "Automotive", "Cinematography"],
    seoTitle: "Beyond the Road — AI Advertising Spec Case Study | Owl Studio",
    seoDescription:
      "A cinematic AI-synthesized automotive commercial concept engineered using generative video pipelines and art-directed lighting.",
  },
  {
    id: "lumen-digital",
    slug: "lumen-digital",
    title: "Lumen Workspace",
    client: "Productivity Intelligence",
    category: "Websites",
    year: "2026",
    tagline: "Sub-second Next.js web application and design system for modern distributed teams.",
    shortDescription:
      "A fast, editorial web platform designed with warm whitespace and intuitive product demonstrations.",
    description:
      "A multi-page brand website and interactive design system concept combining clean typography, micro-interactions, and 100/100 Core Web Vitals engineering.",
    heroImage: "/images/og-image.jpg",
    meta: {
      clientOrConcept: "Digital Product Architecture Concept",
      role: "UX/UI Design, Information Architecture, Frontend Engineering, Design Systems",
      timeline: "4 Weeks",
      disciplines: ["Website Design", "UX/UI Architecture", "Technical SEO"],
      deliverables: [
        "Complete Next.js App Router Web Architecture",
        "Component Design System in Figma & Tailwind",
        "Interactive Product Sandbox Prototype",
        "Semantic SEO & Accessible ARIA Scaffolding",
      ],
      tools: ["Figma", "Next.js 14", "Tailwind CSS", "TypeScript", "Framer Motion"],
      status: "Self-Initiated Concept",
    },
    gallery: [
      {
        title: "Marketing Hero & Layout",
        caption: "Warm cream background with high-contrast typography and interactive product preview.",
        color: "from-yellow-100 to-yellow-200",
        aspect: "wide",
      },
      {
        title: "Design Token Architecture",
        caption: "Atomic layout components, accessible contrast tokens, and responsive fluid grid.",
        color: "from-stone-200 to-stone-300",
        aspect: "square",
      },
      {
        title: "Mobile Viewport Optimization",
        caption: "Thumb-friendly navigation and gesture-driven preview interactions.",
        color: "from-neutral-200 to-neutral-400",
        aspect: "portrait",
      },
      {
        title: "Keyboard Focus & A11y States",
        caption: "WCAG AAA contrast audit states and visible focus indicators.",
        color: "from-amber-100 to-stone-200",
        aspect: "wide",
      },
    ],
    services: ["Website Design", "UX/UI Architecture", "Technical SEO"],
    challenge:
      "Most software websites look identical: dark purple gradients, generic illustrations, and cluttered feature matrices that overwhelm prospective users.",
    idea:
      "Strip away visual noise in favor of editorial clarity, warm natural tones, and real-time interactive product demonstrations.",
    strategy:
      "Prioritize speed and content comprehension so users immediately recognize workflow value within the first viewport.",
    execution:
      "Engineered on Next.js App Router with Tailwind CSS, Server-Side Rendering, and responsive fluid typography without horizontal shift.",
    bts: [
      {
        step: "Phase 01",
        title: "Typographic Scale & Grid Hierarchy",
        description:
          "Mapped modular 8pt typographic scale paired with an editorial fluid grid that adapts smoothly between 360px and 1920px viewports.",
        insight:
          "Limiting fonts to two variable font families drastically reduced network transfer payload while elevating aesthetic poise.",
      },
      {
        step: "Phase 02",
        title: "Static Page Pre-Rendering",
        description:
          "Constructed static page generation routines guaranteeing zero client-side waterfall latency on primary conversion paths.",
        insight:
          "Next.js Server Components reduced client JavaScript bundle weight to under 88kB shared core.",
      },
      {
        step: "Phase 03",
        title: "Accessible Micro-Interactions",
        description:
          "Crafted hover states and tab switches with Framer Motion that automatically respect user OS prefers-reduced-motion flags.",
        insight:
          "Subtle 150ms spring transitions feel significantly more tactile than linear CSS fades.",
      },
    ],
    results: {
      summary:
        "Demonstration concept built to test and prove Owl Studio's digital flagship architecture. No client metrics are fabricated.",
      benchmarks: [
        "Achieved 100/100 Core Web Vitals on mobile and desktop simulations",
        "0ms Cumulative Layout Shift (CLS) through fixed aspect ratio containers",
        "Sub-200ms DOM Content Loaded speed on standard 4G network profiles",
      ],
      isReal: false,
    },
    isConcept: true,
    relatedProjects: ["apex-capital", "beyond-the-road"],
    tags: ["Websites", "Next.js", "UX/UI", "Design Systems"],
    seoTitle: "Lumen Workspace — Web Design & Architecture Case Study | Owl Studio",
    seoDescription:
      "A sub-second Next.js web application and design system concept combining warm editorial whitespace and 100/100 Core Web Vitals.",
  },
  {
    id: "volt-mobility",
    slug: "volt-mobility",
    title: "Volt Urban Fleet",
    client: "Sustainable Transit Network",
    category: "Digital Marketing",
    year: "2026",
    tagline: "Multi-channel launch campaign and rider acquisition funnel.",
    shortDescription:
      "A growth strategy and visual advertising suite driving awareness for next-gen urban e-mobility.",
    description:
      "An integrated marketing campaign marrying performance-tested video hooks, high-contrast outdoor creatives, and streamlined landing page conversion funnels.",
    heroImage: "/images/og-image.jpg",
    meta: {
      clientOrConcept: "Multi-Channel Growth Blueprint Concept",
      role: "Growth Strategy, Ad Creative Direction, Conversion Rate Optimization",
      timeline: "3 Weeks",
      disciplines: ["Digital Marketing", "AI Ads Generation", "Website Design"],
      deliverables: [
        "Full-Funnel Media Planning Map",
        "12x Paid Social Video Variations (Meta & TikTok)",
        "Out-of-Home Digital Billboard Creative Suite",
        "High-Converting Transit Route Landing Page",
      ],
      tools: ["Figma", "After Effects", "Google Analytics 4", "Meta Ads Manager"],
      status: "Self-Initiated Concept",
    },
    gallery: [
      {
        title: "Transit Billboards",
        caption: "Bold graphic advertising positioned at major transit interchanges.",
        color: "from-teal-100 to-teal-300",
        aspect: "wide",
      },
      {
        title: "Performance Social Hooks",
        caption: "Split-tested motion ad creatives optimized for mobile click-through rates.",
        color: "from-cyan-100 to-cyan-300",
        aspect: "square",
      },
      {
        title: "Acquisition Landing Funnel",
        caption: "Frictionless mobile sign-up experience with localized incentives.",
        color: "from-stone-200 to-stone-400",
        aspect: "portrait",
      },
      {
        title: "Attribution Flowchart",
        caption: "Server-side tagging architecture for privacy-compliant lead tracking.",
        color: "from-teal-100 to-stone-300",
        aspect: "wide",
      },
    ],
    services: ["Digital Marketing", "AI Ads Generation", "Website Design"],
    challenge:
      "Urban commuters default to legacy transit options; shifting consumer habits demands high-frequency visual proof of convenience and speed.",
    idea:
      "Position Volt as the smarter, cleaner heartbeat of the city with bold typography and hyper-localized messaging.",
    strategy:
      "Run synchronized geofenced campaigns targeting high-congestion corridors with dynamic commute comparison creatives.",
    execution:
      "Delivered complete ad suites across Meta, Google Search, and dynamic digital out-of-home (DOOH) screens with unified attribution tracking.",
    bts: [
      {
        step: "Phase 01",
        title: "Commuter Friction Mapping",
        description:
          "Audited the psychological drop-off points of typical transit apps: slow KYC, vague pricing, and confusing parking zones.",
        insight:
          "Ad messaging highlighting 'Unlock in 3 Seconds' resonated twice as strongly as generic environmental claims.",
      },
      {
        step: "Phase 02",
        title: "Modular Creative Matrix",
        description:
          "Developed 3 visual hooks, 3 narrative bodies, and 2 calls-to-action to generate 18 distinct creative permutations.",
        insight:
          "Dynamic creative testing allows rapid identification of winning messaging hooks without escalating production costs.",
      },
      {
        step: "Phase 03",
        title: "Zero-Latency Landing Experience",
        description:
          "Constructed single-screen web signups that load instantly even under crowded subway cellular conditions.",
        insight:
          "Cutting initial form fields from 7 to 2 reduces user drop-off in high-intent mobile environments.",
      },
    ],
    results: {
      summary:
        "Conceptual marketing architecture developed to illustrate Owl Studio's full-funnel methodology. No fictitious metrics or clients are stated.",
      benchmarks: [
        "Structured 18-asset creative testing framework ready for live deployment",
        "Formulated geofenced bidding parameters for top 5 metropolitan corridors",
        "Engineered sub-second mobile funnel optimized for one-tap Apple Pay/Google Pay",
      ],
      isReal: false,
    },
    isConcept: true,
    relatedProjects: ["beyond-the-road", "lumen-digital"],
    tags: ["Digital Marketing", "Performance Ads", "Growth", "Transit"],
    seoTitle: "Volt Urban Fleet — Performance Marketing Case Study | Owl Studio",
    seoDescription:
      "A multi-channel growth strategy and creative advertising suite designed for next-generation urban mobility.",
  },
  {
    id: "kora-skincare",
    slug: "kora-skincare",
    title: "Kora Botanicals",
    client: "Modern Clean Beauty",
    category: "Social Media",
    year: "2026",
    tagline: "Editorial social campaign and tactile art direction for botanical wellness.",
    shortDescription:
      "A serene, typography-forward social media narrative capturing natural textures and organic formulation.",
    description:
      "A holistic visual campaign pairing macro botanical photography, restrained typography, and interactive carousel layouts for a modern clean beauty brand concept.",
    heroImage: "/images/og-image.jpg",
    meta: {
      clientOrConcept: "Social Narrative & Content System Concept",
      role: "Art Direction, Content Strategy, Editorial Typography, Motion Templates",
      timeline: "2 Weeks",
      disciplines: ["Social Media Management", "Graphic Designing", "Content Strategy"],
      deliverables: [
        "30-Day Curated Visual Grid Architecture",
        "8x Editorial Educational Carousels",
        "Reels & TikTok Motion Graphics Kit",
        "Tone-of-Voice & Caption Styleguide",
      ],
      tools: ["Adobe Illustrator", "Lightroom", "CapCut Pro", "Figma"],
      status: "Self-Initiated Concept",
    },
    gallery: [
      {
        title: "Botanical Essence",
        caption: "Tactile water droplets and organic petal textures at high magnification.",
        color: "from-emerald-100 to-emerald-300",
        aspect: "wide",
      },
      {
        title: "Serum Typography",
        caption: "Editorial layout contrasting serif titles with clean modernist body copy.",
        color: "from-stone-100 to-stone-300",
        aspect: "square",
      },
      {
        title: "Ritual Carousel",
        caption: "Step-by-step skincare guide structured for maximum social retention.",
        color: "from-amber-100 to-amber-200",
        aspect: "portrait",
      },
      {
        title: "Color Palette Harmonization",
        caption: "Muted earth tones balancing sage green, limestone, and raw linen.",
        color: "from-emerald-100 to-stone-200",
        aspect: "wide",
      },
    ],
    services: ["Social Media Management", "Graphic Designing", "Content Strategy"],
    challenge:
      "D2C skincare is inundated with saturated, clinical imagery that fails to evoke tactile intimacy or convey formulation purity.",
    idea:
      "Treat social channels like luxury print monographs—using whitespace, macro photography, and honest ingredient stories that foster calm credibility.",
    strategy:
      "Structure a weekly editorial cadence: Monday formulation deep dives, Wednesday tactile visuals, and Friday ritual narratives.",
    execution:
      "Designed in high-fidelity vector suites with custom micro-typography, motion carousels, and responsive 4:5 and 9:16 vertical storytelling formats.",
    bts: [
      {
        step: "Phase 01",
        title: "Visual Moodboard & Texture Curation",
        description:
          "Sourced and color-calibrated raw mineral, oil droplet, and botanical textures to establish an uncompromising organic aesthetic.",
        insight:
          "Slight imperfections in natural ingredients convey significantly higher authentic luxury than hyper-glossy studio renders.",
      },
      {
        step: "Phase 02",
        title: "Carousel Retention Architecture",
        description:
          "Designed multi-slide carousels where visual elements seamlessly bridge slide borders, enticing natural swipe gestures.",
        insight:
          "Carousels that treat each slide as an incomplete puzzle piece see a 40% higher completion rate.",
      },
      {
        step: "Phase 03",
        title: "Editorial Typography Templates",
        description:
          "Created modular templates pairing classical high-contrast serif headlines with clean, accessible geometric sans annotations.",
        insight:
          "Consistent typographic anchors turn a brand feed into an easily recognizable signature publication.",
      },
    ],
    results: {
      summary:
        "Creative editorial exploration built to demonstrate Owl Studio's content architecture and social art direction. Purely concept work.",
      benchmarks: [
        "Established full 30-post visual library ready for batch scheduling",
        "Developed custom 9:16 video overlay templates with accessible closed captions",
        "Created an evergreen social styleguide balancing beauty education with aesthetic poise",
      ],
      isReal: false,
    },
    isConcept: true,
    relatedProjects: ["noir-fragrance", "lumen-digital"],
    tags: ["Social Media", "Art Direction", "Beauty", "Packaging"],
    seoTitle: "Kora Botanicals — Social Media & Content Case Study | Owl Studio",
    seoDescription:
      "A serene, typography-forward social media narrative capturing natural textures and organic formulation for clean beauty.",
  },
  {
    id: "noir-fragrance",
    slug: "noir-fragrance",
    title: "Noir Parfums",
    client: "Haute Parfumerie",
    category: "Graphic Design",
    year: "2026",
    tagline: "Visual identity, bespoke typography, and luxury packaging system.",
    shortDescription:
      "A minimalist luxury identity and packaging concept celebrating artisanal fragrance craftsmanship.",
    description:
      "A tactile identity system built around custom serif letterforms, blind debossing specifications, and monochrome architectural bottle packaging.",
    heroImage: "/images/og-image.jpg",
    meta: {
      clientOrConcept: "Luxury Identity & Packaging Concept",
      role: "Brand Identity Design, Bespoke Typography, Physical Dielines, Packaging Architecture",
      timeline: "4 Weeks",
      disciplines: ["Graphic Designing", "Brand Identity", "Packaging Design"],
      deliverables: [
        "Custom Monogram & Wordmark System",
        "Sustainable Cotton Packaging Dielines & Foil Specs",
        "64-Page Hardcover Brand Guidelines Book",
        "Monochrome 3D Bottle Rendering Assets",
      ],
      tools: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma"],
      status: "Self-Initiated Concept",
    },
    gallery: [
      {
        title: "Monogram & Wordmark",
        caption: "Hand-crafted serif ligatures inspired by classical Parisian stone carvings.",
        color: "from-stone-300 to-stone-500",
        aspect: "wide",
      },
      {
        title: "Packaging Architecture",
        caption: "Recycled unbleached cotton stock with gold foil micro-detailing.",
        color: "from-amber-100 to-stone-300",
        aspect: "portrait",
      },
      {
        title: "Editorial Campaign Book",
        caption: "Bound brand monograph showcasing raw fragrance essences and olfactory notes.",
        color: "from-neutral-200 to-neutral-400",
        aspect: "square",
      },
      {
        title: "Bottle Profile & Glass Detailing",
        caption: "Architectural glass base with tactile matte black aluminum closure.",
        color: "from-stone-200 to-neutral-400",
        aspect: "wide",
      },
    ],
    services: ["Graphic Designing", "Brand Identity", "Packaging Design"],
    challenge:
      "Luxury fragrance branding frequently lapses into ornate clichés that fail to resonate with modern discerning collectors.",
    idea:
      "Balance timeless Parisian heritage with contemporary architectural minimalism, letting pure tactile materials carry emotional weight.",
    strategy:
      "Create an instantly recognizable silhouette and restrained secondary graphic language that commands premium retail placement.",
    execution:
      "Engineered comprehensive vector identity suites, physical dieline mockups, foil stamping guidelines, and e-commerce visual assets.",
    bts: [
      {
        step: "Phase 01",
        title: "Historical Calligraphy & Ligature Studies",
        description:
          "Explored 18th-century French engraving plates to develop unique high-contrast ligatures that marry historical depth with modern geometry.",
        insight:
          "Custom kerning on the 'N-O' ligature established an iconic mark usable even at sub-12px digital favicons.",
      },
      {
        step: "Phase 02",
        title: "Tactile Substrate Selection",
        description:
          "Specified FSC-certified, unbleached 350gsm cotton stock paired with blind multi-level embossing to eliminate plastic lamination.",
        insight:
          "True luxury is felt in texture and weight rather than superficial synthetic coatings.",
      },
      {
        step: "Phase 03",
        title: "Complete Identity System Book",
        description:
          "Documented brand architecture across a 64-page guide detailing safe zones, prohibited treatments, and international packaging regulations.",
        insight:
          "Rigorous brand systems protect creative integrity across worldwide manufacturing partners.",
      },
    ],
    results: {
      summary:
        "High-craft identity exploration demonstrating Owl Studio's typographic rigor and packaging engineering. Labeled clearly as a concept.",
      benchmarks: [
        "Complete print-ready vector dieline suite adhering to ISO packaging standards",
        "Harmonized identity scaling seamlessly from 16px digital icons to 6-meter billboard graphics",
        "Comprehensive brand Bible specifying colorimetric Pantone and CMYK conversions",
      ],
      isReal: false,
    },
    isConcept: true,
    relatedProjects: ["kora-skincare", "apex-capital"],
    tags: ["Graphic Design", "Brand Identity", "Luxury", "Packaging"],
    seoTitle: "Noir Parfums — Luxury Brand Identity & Packaging | Owl Studio",
    seoDescription:
      "A minimalist luxury brand identity and bespoke packaging concept celebrating artisanal fragrance craftsmanship.",
  },
  {
    id: "apex-capital",
    slug: "apex-capital",
    title: "Apex Ventures",
    client: "Technology Investment Group",
    category: "Graphic Design",
    year: "2026",
    tagline: "Modern institutional identity and annual digital perspectives report.",
    shortDescription:
      "A sharp, authoritative identity system and editorial report crafted for a venture fund.",
    description:
      "An institutional brand suite featuring geometric emblem design, editorial data visualizations, and an annual technology forecast publication.",
    heroImage: "/images/og-image.jpg",
    meta: {
      clientOrConcept: "Fintech Institutional Identity Concept",
      role: "Visual Identity, Information Design, Editorial Layout, Digital Publication System",
      timeline: "3 Weeks",
      disciplines: ["Graphic Designing", "Website Design", "Editorial Strategy"],
      deliverables: [
        "Institutional Emblem & Typography Matrix",
        "Annual Technology Report Editorial System",
        "24x Clean Data Visualization Templates",
        "Pitch Deck & Executive Stationery Suite",
      ],
      tools: ["Figma", "Adobe Illustrator", "D3.js Charts", "Next.js"],
      status: "Self-Initiated Concept",
    },
    gallery: [
      {
        title: "Geometric Emblem",
        caption: "Precision golden-ratio emblem balanced with heavy modernist typography.",
        color: "from-neutral-300 to-stone-400",
        aspect: "wide",
      },
      {
        title: "Data Visualization Suite",
        caption: "Clear, information-dense charts designed for investor presentations.",
        color: "from-stone-200 to-stone-300",
        aspect: "square",
      },
      {
        title: "Digital Report Platform",
        caption: "Responsive editorial layout for the fund's annual macroeconomic thesis.",
        color: "from-amber-100 to-amber-200",
        aspect: "portrait",
      },
      {
        title: "Executive Stationery & Watermark",
        caption: "Laser-engraved business cards and blind watermarked stationery.",
        color: "from-stone-100 to-stone-300",
        aspect: "wide",
      },
    ],
    services: ["Graphic Designing", "Website Design", "Editorial Strategy"],
    challenge:
      "Venture capital branding tends to be either stuffy corporate blue or over-stylized tech hype, missing a sense of grounded gravitas.",
    idea:
      "Marry classic Swiss editorial design with contemporary digital fluidity, communicating analytical rigor and visionary perspective.",
    strategy:
      "Establish an iconic geometric emblem and a strict typographic grid that elevates complex data into compelling visual narratives.",
    execution:
      "Designed full brand guidelines, typography hierarchies, custom data chart styling, and pitch presentation templates.",
    bts: [
      {
        step: "Phase 01",
        title: "Mathematical Emblem Construction",
        description:
          "Constructed the apex symbol using interlocking geometric triangles on a 1.618 golden ratio grid to represent compounding growth.",
        insight:
          "Mathematical symmetry instills subconscious trust and permanence in institutional finance.",
      },
      {
        step: "Phase 02",
        title: "Chart Palette & Information Design",
        description:
          "Formulated an accessible 6-shade financial chart palette designed to remain easily readable in black-and-white printouts.",
        insight:
          "Investor presentations must survive monochrome office printing without losing essential data clarity.",
      },
      {
        step: "Phase 03",
        title: "Digital Report Web Experience",
        description:
          "Built interactive chart hover states and chapter bookmarks within a bespoke responsive report layout.",
        insight:
          "Allowing investors to filter data dynamically turns a passive PDF into an active strategic tool.",
      },
    ],
    results: {
      summary:
        "Institutional brand and report architecture created to showcase Owl Studio's information design and corporate identity capabilities.",
      benchmarks: [
        "Delivered modular 12-column Swiss editorial grid accommodating dense financial tabular data",
        "Architected custom D3.js chart templates ready for live real-time API binding",
        "Comprehensive brand kit tested for legible reproduction across mobile and 4K display monitors",
      ],
      isReal: false,
    },
    isConcept: true,
    relatedProjects: ["lumen-digital", "noir-fragrance"],
    tags: ["Graphic Design", "Editorial", "Fintech", "Identity"],
    seoTitle: "Apex Ventures — Institutional Brand & Report Design | Owl Studio",
    seoDescription:
      "A sharp, authoritative identity system and editorial report crafted for a modern technology investment group.",
  },
];

export function getProjectBySlug(slug: string): ProjectItemData | undefined {
  return PROJECTS_DATA.find((project) => project.slug === slug);
}

export function getAllProjects(): ProjectItemData[] {
  return PROJECTS_DATA;
}

export function getProjectsByCategory(category: string): ProjectItemData[] {
  if (category === "All") return PROJECTS_DATA;
  return PROJECTS_DATA.filter((project) => project.category === category);
}

export function getAdjacentProjects(currentSlug: string): {
  prev: ProjectItemData;
  next: ProjectItemData;
} {
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === currentSlug);
  const total = PROJECTS_DATA.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;
  return {
    prev: PROJECTS_DATA[prevIndex],
    next: PROJECTS_DATA[nextIndex],
  };
}
