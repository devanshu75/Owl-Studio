export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
}

export interface ServiceVisualExample {
  title: string;
  category: string;
  description: string;
  color: string;
  tag: string;
}

export interface ServiceItemData {
  num: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  problemOpportunity: {
    problemTitle: string;
    problemDescription: string;
    opportunityTitle: string;
    opportunityDescription: string;
  };
  whatWeDo: {
    headline: string;
    description: string;
    points: string[];
  };
  deliverables: string[];
  process: ServiceProcessStep[];
  approach: string;
  benefits: string[];
  visualExamples: ServiceVisualExample[];
  relatedProjectSlugs: string[];
  faq: ServiceFaq[];
  relatedServices: string[];
  seoTitle: string;
  seoDescription: string;
}

export const SERVICES_DATA: ServiceItemData[] = [
  {
    num: "01",
    slug: "ai-ads",
    title: "AI Ads Generation",
    tagline: "High-impact visual advertising concepts synthesized with generative workflows.",
    shortDescription:
      "Create scroll-stopping advertising concepts and visual campaigns using AI-powered creative workflows.",
    description:
      "We fuse human art direction with cutting-edge generative AI models to produce high-concept visual campaigns, product concepts, and commercial advertising variations at unprecedented speed.",
    problemOpportunity: {
      problemTitle: "The Creative Production Bottleneck",
      problemDescription:
        "Traditional commercial photography and video production require immense budgets, lengthy permits, physical staging, and weeks of post-production. This prevents growing brands from testing diverse visual hooks and responding rapidly to market shifts.",
      opportunityTitle: "Infinite Visual Agility",
      opportunityDescription:
        "By integrating custom neural synthesis into professional art direction pipelines, Owl Studio enables brands to explore impossible camera angles, surreal concept environments, and dozens of distinct narrative angles in days rather than months.",
    },
    whatWeDo: {
      headline: "Art-Directed Generative Production",
      description:
        "We don't use raw, unfiltered prompts. We build custom aesthetic seeds, storyboard narratives, fine-tune lighting dynamics, and apply studio-grade DaVinci color grading to ensure every frame meets broadcast fidelity.",
      points: [
        "Prompt engineering calibrated for photographic realism and dynamic composition",
        "Consistency control across character silhouettes, lighting, and product geometries",
        "Multivariate hook variations tailored for Meta, TikTok, and YouTube formats",
        "High-resolution 4K temporal upscaling and artifact elimination",
      ],
    },
    deliverables: [
      "AI Campaign Concept Boards",
      "Dynamic Social Video Ads (9:16 & 16:9)",
      "Multivariate Hook Variations",
      "Photorealistic Product Stills",
      "High-Resolution Billboard & Print Creatives",
      "A/B Creative Split-Testing Sets",
    ],
    process: [
      {
        step: "01",
        title: "Narrative Brief & Concept Angles",
        tagline: "Uncovering the Emotional Hook",
        description:
          "We analyze customer psychology, competitor saturation, and core product value propositions to draft 5–10 distinct narrative hypotheses.",
      },
      {
        step: "02",
        title: "Seed Generation & Art Direction",
        tagline: "Establishing Visual Rules",
        description:
          "We craft custom lighting recipes, camera perspectives, and aesthetic seeds in controlled generative environments.",
      },
      {
        step: "03",
        title: "Motion Synthesis & Upscaling",
        tagline: "Cinematic Movement",
        description:
          "We synthesize fluid cinematic movement, camera tracks, and dynamic transitions while upscaling to ultra-high-definition master files.",
      },
      {
        step: "04",
        title: "Color Grading & Sound Architecture",
        tagline: "Commercial Finishing",
        description:
          "Color grading in DaVinci Resolve, typographic text placement, and bespoke sound design ensure the finished commercial commands attention.",
      },
    ],
    approach:
      "We never rely on generic AI prompts. Every campaign begins with audience psychology, creative strategy, and narrative storyboarding before applying proprietary generative pipelines and professional post-production color grading.",
    benefits: [
      "Produce weeks of creative content in days",
      "Test diverse visual angles without huge production overheads",
      "Maintain strict visual consistency and brand guidelines",
      "Stand out in crowded social feeds with impossible visual ideas",
    ],
    visualExamples: [
      {
        title: "Atmospheric Lighting Study",
        category: "Automotive Exploration",
        tag: "CinemaScope 2.39:1",
        description: "Volumetric dusk lighting across procedural metallic textures.",
        color: "from-amber-200 to-amber-400",
      },
      {
        title: "Organic Macro Study",
        category: "Botanical Concept",
        tag: "4:5 Vertical Stills",
        description: "Surface tension and water refraction on wild flora petals.",
        color: "from-emerald-100 to-emerald-300",
      },
      {
        title: "Architectural Glass Reflex",
        category: "Fintech Concept",
        tag: "16:9 Landscape",
        description: "Minimalist concrete forms meeting hyper-reflective obsidian glass.",
        color: "from-stone-200 to-stone-400",
      },
    ],
    relatedProjectSlugs: ["beyond-the-road", "volt-mobility"],
    faq: [
      {
        question: "How does AI ad generation differ from traditional commercial production?",
        answer:
          "Traditional production requires lengthy location scouting, permits, physical crews, and rigid timelines. AI workflows allow us to iterate on hundreds of visual treatments and cinematic scenes rapidly, while human art directors refine every frame for commercial readiness.",
      },
      {
        question: "Will the generated assets look generic or synthetic?",
        answer:
          "No. We combine custom model fine-tuning, seed control, and professional finishing in DaVinci Resolve and Adobe Creative Cloud to ensure all deliverables meet broadcast and premium digital standards.",
      },
      {
        question: "Who owns the copyright and commercial rights?",
        answer:
          "Our clients receive full commercial rights to all final delivered marketing and advertising creative assets.",
      },
    ],
    relatedServices: ["graphic-design", "digital-marketing", "social-media-management"],
    seoTitle: "AI Ads Generation | Creative Advertising Agency — Owl Studio",
    seoDescription:
      "Create scroll-stopping advertising concepts and visual campaigns using generative AI and expert creative direction. Explore Owl Studio AI Ads.",
  },
  {
    num: "02",
    slug: "website-design",
    title: "Website Design",
    tagline: "Fast, modern, conversion-focused websites engineered for modern brands.",
    shortDescription:
      "Design modern, conversion-focused websites that communicate a brand clearly and perform flawlessly.",
    description:
      "We design and build bespoke digital experiences combining editorial elegance, responsive architecture, sub-second performance, and clear conversion paths.",
    problemOpportunity: {
      problemTitle: "The Generic Template Trap",
      problemDescription:
        "Too many modern websites look like identical SaaS clones or slow, bloated themes. They suffer from poor mobile layouts, low conversion rates, and bloated codebases that hurt SEO rankings.",
      opportunityTitle: "Bespoke Editorial Authority",
      opportunityDescription:
        "A custom Next.js web platform elevates your brand into an industry authority. Instant page transitions, generous whitespace, and thoughtful typography make your brand unforgettable to prospective clients.",
    },
    whatWeDo: {
      headline: "Full-Stack Design & Architecture",
      description:
        "We unite visual storytelling with engineering rigor. From Figma design systems to responsive Next.js Server Components, we build digital homes that look like art and convert like science.",
      points: [
        "Bespoke information architecture that guides visitors into paying customers",
        "React Server Components for instant initial rendering and SEO crawlability",
        "Custom design token systems ensuring effortless brand consistency",
        "Zero-layout-shift (CLS = 0) and sub-second Largest Contentful Paint (LCP)",
      ],
    },
    deliverables: [
      "Full UX/UI System & Interactive Prototypes",
      "Next.js App Router Architecture",
      "Mobile-First Responsive Layouts",
      "Design Token System & Component Libraries",
      "Technical On-Page SEO Foundations",
      "Core Web Vitals Optimization (100/100 target)",
    ],
    process: [
      {
        step: "01",
        title: "Information Architecture & User Flow",
        tagline: "Mapping the Conversion Journey",
        description:
          "We structure sitemaps, user journeys, and content hierarchy to eliminate navigation friction and emphasize core value.",
      },
      {
        step: "02",
        title: "Editorial UI Design & Systems",
        tagline: "High-Craft Visual Design",
        description:
          "We design bespoke layouts in Figma, establishing responsive grids, typographic scales, micro-interactions, and accessible contrast tokens.",
      },
      {
        step: "03",
        title: "Next.js Engineering & SSR",
        tagline: "Performance-First Code",
        description:
          "We develop the platform using clean TypeScript and Tailwind CSS, leveraging React Server Components for maximum speed and indexability.",
      },
      {
        step: "04",
        title: "SEO & Performance Optimization",
        tagline: "Zero-Defect Launch",
        description:
          "Full Lighthouse audits, structured data injection, responsive image tuning, and cross-browser testing before production deployment.",
      },
    ],
    approach:
      "We reject generic templates. Every website is built from scratch with thoughtful information architecture, crisp typography, intuitive navigation, and search-first semantic markup.",
    benefits: [
      "Turn first-time visitors into qualified client enquiries",
      "Sub-second load times that keep visitors engaged and boost search ranks",
      "Scalable structure ready for future blog posts, case studies, and landing pages",
      "Intuitive content updates without touching core code",
    ],
    visualExamples: [
      {
        title: "Fluid Design Token Matrix",
        category: "UI Architecture",
        tag: "Figma + Tailwind",
        description: "Responsive typography hierarchies and accessible semantic color tokens.",
        color: "from-yellow-100 to-yellow-200",
      },
      {
        title: "Sub-Second Viewport Demo",
        category: "Next.js SSR",
        tag: "100/100 Core Web Vitals",
        description: "Zero-layout-shift marketing heroes built with optimized server rendering.",
        color: "from-stone-100 to-stone-300",
      },
      {
        title: "Mobile Navigation System",
        category: "Responsive UX",
        tag: "Touch-Optimized",
        description: "Accessible drawer navigation with thumb-friendly primary action targets.",
        color: "from-amber-100 to-amber-200",
      },
    ],
    relatedProjectSlugs: ["lumen-digital", "apex-capital"],
    faq: [
      {
        question: "What technology stack do you use for website design?",
        answer:
          "We specialize in modern, high-performance web stacks: Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion, with server-side rendering for optimal SEO and performance.",
      },
      {
        question: "Is SEO included with the website design?",
        answer:
          "Yes. Technical SEO is foundational to our process: semantic HTML, structured JSON-LD data, dynamic OpenGraph metadata, XML sitemaps, and Core Web Vitals optimization are integrated into every project.",
      },
      {
        question: "How long does a typical website project take?",
        answer:
          "Depending on scope and complexity, an editorial multi-page agency or brand website typically takes between 3 to 6 weeks from strategy to production launch.",
      },
    ],
    relatedServices: ["graphic-design", "digital-marketing", "ai-ads"],
    seoTitle: "Website Design & Development | Next.js Agency — Owl Studio",
    seoDescription:
      "Modern, fast, conversion-driven websites engineered with Next.js, editorial typography, and search-first technical foundations.",
  },
  {
    num: "03",
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Data-informed growth strategies designed to compound brand visibility and qualified leads.",
    shortDescription:
      "Build data-informed digital marketing strategies designed to increase visibility, authority, and sustained growth.",
    description:
      "We connect creative storytelling with rigorous acquisition funnels, multi-channel performance advertising, and organic search optimization to generate measurable ROI.",
    problemOpportunity: {
      problemTitle: "Wasted Ad Spend & Low Attribution",
      problemDescription:
        "Many marketing campaigns fail because creative direction and analytical media buying operate in silos. Bland ad creatives result in expensive clicks that land on slow pages that fail to convert.",
      opportunityTitle: "Synchronized Growth Engines",
      opportunityDescription:
        "When creative hooks, landing page experiences, and multi-channel attribution work as one cohesive system, customer acquisition costs plummet while conversion velocity increases.",
    },
    whatWeDo: {
      headline: "Performance Acquisition & Compounding Growth",
      description:
        "We build integrated marketing machines. From paid search and social campaigns to conversion-rate optimization and technical SEO, we engineer every touchpoint to generate measurable business return.",
      points: [
        "Data-driven paid social acquisition across Meta, LinkedIn, and Google Ads",
        "Technical and topical SEO strategy designed for compounding organic dominance",
        "Continuous multivariate ad creative testing and hook optimization",
        "Custom Google Analytics 4 dashboards with clear multi-touch attribution",
      ],
    },
    deliverables: [
      "Growth Strategy & Competitor Analysis",
      "Paid Search & Social Ad Campaign Management",
      "Topical Content & Technical SEO Strategy",
      "Conversion Rate Optimization (CRO) Audits",
      "Analytics Tracking & Attribution Dashboards",
      "Lead Generation & Retargeting Funnels",
    ],
    process: [
      {
        step: "01",
        title: "Market Dissection & Audience Mapping",
        tagline: "Pinpointing Intent",
        description:
          "We analyze buyer keywords, customer pain points, and competitor blind spots to construct a targeted acquisition roadmap.",
      },
      {
        step: "02",
        title: "Creative & Landing Page Alignment",
        tagline: "Seamless Conversion Paths",
        description:
          "We design dedicated ad creative sets and matching landing pages to ensure message match and high conversion rates.",
      },
      {
        step: "03",
        title: "Campaign Deployment & Budget Pacing",
        tagline: "Targeted Distribution",
        description:
          "We launch campaigns across high-intent search and high-engagement social channels with algorithmic bid management.",
      },
      {
        step: "04",
        title: "Optimization & Scale",
        tagline: "Compounding Returns",
        description:
          "Weekly multivariate creative rotations, negative keyword pruning, and landing page A/B tests drive down acquisition costs.",
      },
    ],
    approach:
      "Marketing only works when strategy, messaging, creative, and analytics speak the same language. We run synchronized campaigns where ad visuals, copy, and landing pages reinforce one another.",
    benefits: [
      "Predictable pipeline of qualified customer enquiries",
      "Clear attribution showing where every marketing dollar produces returns",
      "Compounding organic visibility that reduces paid acquisition reliance over time",
      "Constant iterative testing to lower customer acquisition costs (CAC)",
    ],
    visualExamples: [
      {
        title: "Attribution Dashboard Suite",
        category: "Analytics Architecture",
        tag: "GA4 + BigQuery",
        description: "Multi-touch attribution models mapping the complete customer journey.",
        color: "from-teal-100 to-teal-300",
      },
      {
        title: "Multivariate Ad Testing Board",
        category: "Performance Creative",
        tag: "Hook Optimization",
        description: "Systematic variations testing visual cues, headlines, and call-to-actions.",
        color: "from-stone-200 to-stone-400",
      },
      {
        title: "Organic Topical Clustering",
        category: "SEO Strategy",
        tag: "Search Authority",
        description: "Topical hub-and-spoke content structures driving high-intent search rank.",
        color: "from-cyan-100 to-cyan-300",
      },
    ],
    relatedProjectSlugs: ["volt-mobility", "beyond-the-road"],
    faq: [
      {
        question: "Which marketing channels do you manage?",
        answer:
          "We manage Google Ads (Search & Performance Max), Meta (Instagram & Facebook), LinkedIn, YouTube, and organic search engine optimization.",
      },
      {
        question: "How do you measure campaign performance?",
        answer:
          "We track real business outcomes: qualified lead submissions, cost per acquisition (CPA), conversion rates, and return on ad spend (ROAS), using customized Google Analytics 4 dashboards.",
      },
      {
        question: "What is your minimum engagement timeline?",
        answer:
          "For digital marketing campaigns to properly gather statistical signal, optimize ad algorithms, and compound SEO equity, we typically recommend a minimum 3-month engagement.",
      },
    ],
    relatedServices: ["ai-ads", "social-media-management", "website-design"],
    seoTitle: "Digital Marketing & Growth Strategy — Owl Studio",
    seoDescription:
      "Strategic performance marketing, paid acquisition, and SEO funnels engineered to compound brand reach and qualified client leads.",
  },
  {
    num: "04",
    slug: "social-media-management",
    title: "Social Media Management",
    tagline: "Strategic social presence built through consistent creative narratives and audience engagement.",
    shortDescription:
      "Create, manage and improve social media presence through strategy and consistent creative content.",
    description:
      "We turn static company profiles into vibrant brand channels through deliberate narrative planning, scroll-stopping graphic creatives, short-form video, and structured posting rhythms.",
    problemOpportunity: {
      problemTitle: "Inconsistent Posting & Low Relevance",
      problemDescription:
        "Most company social channels resemble fragmented bulletin boards: random stock graphics, irregular posting schedules, and generic captions that generate near-zero meaningful audience engagement.",
      opportunityTitle: "Distinctive Editorial Presence",
      opportunityDescription:
        "Treating your social feed as a curated digital magazine builds authority, customer trust, and organic word-of-mouth. Every post reinforces your aesthetic standards and unique industry perspective.",
    },
    whatWeDo: {
      headline: "Curated Brand Publishing",
      description:
        "We handle complete end-to-end social production. From monthly editorial calendars to high-fidelity carousel design, short-form Reels, and active community management, we keep your brand top of mind.",
      points: [
        "Editorial calendar planning synchronized with your business milestones",
        "Custom graphic design for multi-slide carousel breakdowns and monographs",
        "Short-form video editing and dynamic subtitling optimized for retention",
        "Authentic community interaction and audience growth tracking",
      ],
    },
    deliverables: [
      "Monthly Content Strategy & Editorial Calendars",
      "Custom Graphic Posts & Carousel Design",
      "Short-Form Video Production & Reels Curation",
      "Platform Optimization (LinkedIn & Instagram)",
      "Copywriting & Community Engagement",
      "Monthly Reach & Audience Growth Reports",
    ],
    process: [
      {
        step: "01",
        title: "Content Pillars & Tone of Voice",
        tagline: "Setting Editorial Guidelines",
        description:
          "We define 3–4 core content pillars and a distinctive editorial voice that positions your founders and team as clear thinkers.",
      },
      {
        step: "02",
        title: "Monthly Storyboarding & Asset Production",
        tagline: "Bespoke Design & Copy",
        description:
          "We write high-value captions and design original carousel graphics and video clips, delivered via an intuitive review board.",
      },
      {
        step: "03",
        title: "Scheduled Publishing & Active Engagement",
        tagline: "Flawless Execution",
        description:
          "We schedule posts at peak audience activity windows and actively facilitate meaningful comment discussions.",
      },
      {
        step: "04",
        title: "Analytics Review & Iteration",
        tagline: "Refining What Works",
        description:
          "We evaluate reach, saves, shares, and website referral traffic to double down on winning visual formats.",
      },
    ],
    approach:
      "Rather than posting filler content for the sake of volume, we craft editorial themes that showcase your unique expertise, perspective, and brand character.",
    benefits: [
      "Build a loyal following that views your brand as an industry leader",
      "Consistent high-aesthetic visual presence across all touchpoints",
      "Save founder and marketing team bandwidth by outsourcing daily production",
      "Turn casual followers into engaged brand champions and customers",
    ],
    visualExamples: [
      {
        title: "Editorial Carousel Framework",
        category: "Social Design",
        tag: "1080x1350 Portrait",
        description: "Information-dense slide breakdowns built with restrained typography.",
        color: "from-stone-200 to-stone-400",
      },
      {
        title: "Founder Narrative Clips",
        category: "Short-Form Video",
        tag: "9:16 Vertical",
        description: "Kinetic typography and subtle sound design for founder insights.",
        color: "from-amber-100 to-amber-200",
      },
      {
        title: "Minimalist Product Spotlight",
        category: "Visual Identity",
        tag: "Single Frame Grid",
        description: "Monochrome studio lighting highlighting tactile material craft.",
        color: "from-neutral-200 to-neutral-400",
      },
    ],
    relatedProjectSlugs: ["kora-skincare", "noir-fragrance"],
    faq: [
      {
        question: "What platforms do you focus on?",
        answer:
          "We primarily focus on Instagram, LinkedIn, and X (Twitter), tailored to where your specific customers and industry peers spend their attention.",
      },
      {
        question: "Who writes the captions and creates the visuals?",
        answer:
          "Our dedicated creative team handles complete concept ideation, copywriting, graphic design, and video production, approved via an easy-to-use monthly editorial review board.",
      },
      {
        question: "Do you respond to comments and direct messages?",
        answer:
          "Yes, we can manage community interaction, routing customer support inquiries directly to your team while maintaining active public engagement.",
      },
    ],
    relatedServices: ["graphic-design", "ai-ads", "digital-marketing"],
    seoTitle: "Social Media Management & Creative Content — Owl Studio",
    seoDescription:
      "Elevate your brand with strategic social media management, editorial carousels, short-form video, and authentic community engagement.",
  },
  {
    num: "05",
    slug: "graphic-design",
    title: "Graphic Designing",
    tagline: "Distinctive brand identities, typography systems, and visual communication assets.",
    shortDescription:
      "Develop visual identities, campaigns, social creatives, marketing collateral and brand communication.",
    description:
      "We craft cohesive visual systems—from brand marks and expressive typographic hierarchies to pitch decks, marketing collateral, and packaging designs that leave lasting impressions.",
    problemOpportunity: {
      problemTitle: "Visual Incoherence & Dilution",
      problemDescription:
        "When brand assets are pieced together from multiple freelancers or mismatched templates, brand perception deteriorates. Inconsistent typography and colors confuse customers and lower perceived enterprise value.",
      opportunityTitle: "Timeless Visual Authority",
      opportunityDescription:
        "A rigorous, unified design system establishes immediate market authority. Every brand mark, presentation deck, and marketing asset speaks the same elegant, confident design language.",
    },
    whatWeDo: {
      headline: "Iconic Identity & Visual Systems",
      description:
        "We build visual identities grounded in strategic purpose. Balancing Swiss modernist clarity with contemporary digital vitality, we engineer assets that scale across billboards, packaging, and mobile viewports.",
      points: [
        "Memorable logo marks, geometric emblems, and wordmark typography",
        "Comprehensive brand guideline manuals detailing spacing, color, and hierarchy",
        "High-stakes investor pitch decks, annual reports, and marketing collateral",
        "Tactile packaging dielines, debossing specifications, and print production",
      ],
    },
    deliverables: [
      "Brand Identity & Logo Systems",
      "Typography & Color Palette Guidelines",
      "Marketing Collateral & Pitch Decks",
      "Digital Advertising & Social Creative Suites",
      "Packaging & Physical Print Design",
      "Vector Illustrations & Custom Iconography",
    ],
    process: [
      {
        step: "01",
        title: "Identity Audit & Archetype Exploration",
        tagline: "Finding the Core Essence",
        description:
          "We examine competitor aesthetics, brand history, and aspirational positioning to define an authentic visual territory.",
      },
      {
        step: "02",
        title: "Concept Exploration & Typographic Studies",
        tagline: "Form & Proportion",
        description:
          "We develop 3 distinct concept directions, testing each mark in real-world contexts: mobile app icons, physical stationery, and large signage.",
      },
      {
        step: "03",
        title: "System Refinement & Asset Architecture",
        tagline: "Comprehensive Standardization",
        description:
          "Once a direction is chosen, we calibrate sub-mark variations, color values across RGB and CMYK, and responsive digital typography.",
      },
      {
        step: "04",
        title: "Brand Book & Production Delivery",
        tagline: "Flawless Handoff",
        description:
          "We compile a comprehensive Brand Guidelines manual and export full vector source files (AI, SVG, EPS, PDF) for your team.",
      },
    ],
    approach:
      "Great graphic design is both an art and a strategic business tool. We explore conceptual territory thoroughly, grounding every visual decision in brand personality and memorability.",
    benefits: [
      "Instant brand recognition and elevated perceived value in your market",
      "Comprehensive guidelines that ensure flawless internal and external execution",
      "Professional assets that give founders confidence when pitching clients or investors",
      "Cohesive visual harmony across every digital and print touchpoint",
    ],
    visualExamples: [
      {
        title: "Vector Emblem Construction",
        category: "Identity Craft",
        tag: "Golden Ratio Grid",
        description: "Geometric harmony engineered for pin-sharp reproduction at any scale.",
        color: "from-stone-300 to-stone-500",
      },
      {
        title: "Luxury Monograph Packaging",
        category: "Tactile Print",
        tag: "Blind Deboss & Foil",
        description: "Custom dielines specifying sustainable cotton board and gold foil accents.",
        color: "from-amber-100 to-stone-300",
      },
      {
        title: "Typographic Scale Architecture",
        category: "Brand Guidelines",
        tag: "Type Hierarchy",
        description: "Harmonized pairings of classical serif titles with modernist body text.",
        color: "from-neutral-200 to-neutral-400",
      },
    ],
    relatedProjectSlugs: ["noir-fragrance", "apex-capital"],
    faq: [
      {
        question: "What files and formats do we receive upon completion?",
        answer:
          "You receive comprehensive vector source files (AI, SVG, EPS), print-ready PDFs, and optimized digital web assets (PNG, WebP, SVG) accompanied by a detailed Brand Style Guide.",
      },
      {
        question: "Can you refresh an existing brand or do you only create new identities?",
        answer:
          "We do both. We frequently modernize established brands that need visual evolution while preserving their recognized legacy equity.",
      },
      {
        question: "Do you design presentation decks and marketing collateral?",
        answer:
          "Yes. We design high-stakes investor pitch decks, sales presentations, conference booths, whitepapers, and physical promotional items.",
      },
    ],
    relatedServices: ["website-design", "ai-ads", "social-media-management"],
    seoTitle: "Graphic Design & Brand Identity Systems — Owl Studio",
    seoDescription:
      "Distinctive graphic design, identity systems, typography, and visual communication assets designed to make modern brands impossible to ignore.",
  },
];

export function getServiceBySlug(slug: string): ServiceItemData | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}

export function getAllServices(): ServiceItemData[] {
  return SERVICES_DATA;
}
