export type BlogCategory =
  | "All"
  | "AI"
  | "Advertising"
  | "Design"
  | "Website"
  | "Digital Marketing"
  | "Social Media"
  | "Creativity";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "All",
  "AI",
  "Advertising",
  "Design",
  "Website",
  "Digital Marketing",
  "Social Media",
  "Creativity",
];

export interface ArticleSection {
  heading: string;
  body: string[];
  quote?: string;
  takeaway?: string;
  codeSnippet?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "All">;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  visualAccent: string;
  tags: string[];
  relatedSlugs: string[];
  relatedServiceSlug?: string;
  relatedCaseStudySlug?: string;
  content: {
    lead: string;
    sections: ArticleSection[];
  };
  seoTitle?: string;
  seoDescription?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-ai-is-changing-advertising",
    title: "How AI Is Changing Advertising: From Rigid Production to Continuous Creative Synthesis",
    excerpt:
      "Generative AI is not merely accelerating asset creation; it is fundamentally altering how creative directors think about visual scale, narrative pacing, and audience resonance.",
    category: "Advertising",
    publishedAt: "March 4, 2026",
    updatedAt: "March 8, 2026",
    readTime: "6 min read",
    author: {
      name: "Devan Sharma",
      role: "Creative Director",
      avatar: "/images/logo.svg",
    },
    visualAccent: "from-amber-200 via-stone-200 to-amber-300",
    tags: ["Generative AI", "Creative Direction", "Video Advertising", "Campaign Strategy"],
    relatedSlugs: [
      "ai-ads-vs-traditional-ads",
      "how-brands-can-use-ai-creatively",
      "what-makes-a-modern-brand-stand-out",
    ],
    relatedServiceSlug: "ai-ads",
    relatedCaseStudySlug: "beyond-the-road",
    content: {
      lead:
        "For decades, the physical logistics of advertising production governed creative imagination. If an automotive brand wanted a sunset pass along a deserted alpine ridge, that single ambition dictated location permits, insurance riders, helicopter rentals, and six-figure contingency budgets. In 2026, generative visual pipelines have decoupled scale from production expenditure.",
      sections: [
        {
          heading: "The Shift From Scarcity to Conceptual Selection",
          body: [
            "In legacy advertising workflows, creative directors operated under artificial scarcity. You storyboarded three distinct concepts, picked the safest one that fit the client's production cap, and spent three months executing it to completion.",
            "Today, diffusion and motion synthesis pipelines allow our studio to explore dozens of cinematic compositions in a single afternoon. The scarce resource is no longer rendering power or physical access; the scarce resource is taste, art direction, and editorial judgment.",
          ],
          quote:
            "AI removes the logistical tax on imagination. What remains is the pure discernment of human art direction.",
          takeaway:
            "Agencies that compete on execution speed alone will be commoditized. The true agency moat is curatorial taste and narrative conviction.",
        },
        {
          heading: "Iterative Testing Without Aesthetic Compromise",
          body: [
            "Digital advertising on Meta, TikTok, and YouTube has historically suffered from creative burnout. When audience engagement drops after ten days, brands traditionally rushed out cheap UGC or stock templates.",
            "With neural video workflows, we can maintain CinemaScope aesthetic standards while systematically producing visual variants: altering environmental lighting, camera movement, and focal lengths to match evolving audience cohorts without losing brand cohesion.",
          ],
        },
        {
          heading: "The Essential Role of Human Direction",
          body: [
            "Pure generative output without art direction is recognizable in an instant: rubbery textures, impossible physics, and vacant character expressions. Exceptional AI advertising is built on meticulous human oversight.",
            "At Owl Studio, every prompt sequence is treated like a lighting plot on a live soundstage. We color grade in DaVinci Resolve, master audio with bespoke sound architecture, and ensure every frame adheres to the client's authentic brand codes.",
          ],
        },
      ],
    },
    seoTitle: "How AI Is Changing Advertising | Owl Studio Field Notes",
    seoDescription:
      "Explore how generative AI video pipelines are transforming creative advertising from rigid production cycles to continuous visual synthesis.",
  },
  {
    slug: "how-brands-can-use-ai-creatively",
    title: "How Brands Can Use AI Creatively Without Looking Like Everyone Else",
    excerpt:
      "As generative tools become ubiquitous, generic AI imagery is flooding the web. Here is how thoughtful brands maintain distinctiveness, craft, and emotional depth.",
    category: "AI",
    publishedAt: "March 1, 2026",
    updatedAt: "March 6, 2026",
    readTime: "5 min read",
    author: {
      name: "Aman Verma",
      role: "Lead Systems Architect",
      avatar: "/images/logo.svg",
    },
    visualAccent: "from-stone-200 via-amber-100 to-stone-300",
    tags: ["Brand Identity", "Prompt Engineering", "Creative Direction", "AI Aesthetics"],
    relatedSlugs: [
      "how-ai-is-changing-advertising",
      "what-makes-a-modern-brand-stand-out",
    ],
    relatedServiceSlug: "ai-ads",
    relatedCaseStudySlug: "beyond-the-road",
    content: {
      lead:
        "We have all seen it: the glossy, neon-saturated, hyper-smooth aesthetic that immediately screams 'generic Midjourney prompt.' As generative algorithms become accessible to everyone with a browser, brands that rely on default settings risk erasing their own visual individuality.",
      sections: [
        {
          heading: "The Danger of Default Algorithmic Homogeny",
          body: [
            "AI models are trained on the statistical median of human imagery. If you give a model an unguided prompt like 'luxury skincare packaging,' it will invariably output an amalgam of every minimalist beauty render posted between 2020 and 2025.",
            "To break free from algorithmic averages, creative directors must introduce deliberate friction: unpolished textures, unexpected historical references, architectural geometries, and precise colorimetric restrictions.",
          ],
          quote:
            "If your prompts look like everyone else's keywords, your brand will look like everyone else's average.",
        },
        {
          heading: "Three Rules for Authentic AI Craft",
          body: [
            "First, anchor your generative art in physical realities. Specify analog film stocks, vintage lenses, and real-world lighting modifiers (e.g. tungsten bounce, overcast sodium vapor) rather than generic adjectives like 'hyperrealistic' or '8K cinematic.'",
            "Second, combine AI assets with bespoke vector typography and handcrafted graphic layouts. The juxtaposition of neural synthesis and razor-sharp typographic craft creates a tension that feels intentional and premium.",
            "Third, establish strict negative constraints. Knowing what your brand never allows—certain color temperatures, excessive surface sheen, uncanny facial geometry—is as vital as your positive visual rules.",
          ],
          takeaway:
            "Treat AI as an extraordinary digital darkroom, not an autonomous creative director.",
        },
      ],
    },
    seoTitle: "How Brands Can Use AI Creatively | Owl Studio Journal",
    seoDescription:
      "Practical strategies for creative directors and brands to use generative AI without succumbing to generic algorithmic sameness.",
  },
  {
    slug: "why-your-website-is-part-of-your-marketing",
    title: "Why Your Website Is Part of Your Marketing (Not Just a Digital Business Card)",
    excerpt:
      "A slow, generic website undermines millions in advertising spend. Why modern brands treat their digital flagships as the highest-converting node in their marketing stack.",
    category: "Website",
    publishedAt: "February 26, 2026",
    updatedAt: "March 5, 2026",
    readTime: "7 min read",
    author: {
      name: "Devan Sharma",
      role: "Creative Director",
      avatar: "/images/logo.svg",
    },
    visualAccent: "from-yellow-100 via-stone-100 to-amber-200",
    tags: ["Website Design", "Next.js", "Conversion UX", "Performance"],
    relatedSlugs: [
      "website-design-trends-for-modern-brands",
      "what-makes-a-modern-brand-stand-out",
    ],
    relatedServiceSlug: "website-design",
    relatedCaseStudySlug: "lumen-digital",
    content: {
      lead:
        "Too many brands treat their website as an isolated static asset—a checklist item commissioned once every four years and left to gather digital dust. Meanwhile, they spend tens of thousands every month on paid social ads, influencer partnerships, and search campaigns, driving high-intent visitors directly into an underwhelming digital lobby.",
      sections: [
        {
          heading: "The Cognitive Disconnect in Modern Acquisition",
          body: [
            "Imagine an ad that features stunning cinematography, sharp typography, and compelling storytelling. A user clicks, eager to learn more. They land on a slow, bloated WordPress template that takes four seconds to load, shifts content abruptly, and hides the core value proposition beneath three generic stock photos.",
            "The credibility built by the ad evaporates in milliseconds. Your website is not the destination after marketing; your website is the definitive climax of your marketing narrative.",
          ],
          quote:
            "Every millisecond of latency is an unvoiced apology to an eager customer.",
          takeaway:
            "A high-performance digital flagship amplifies the return on every marketing dollar invested across paid search, social, and PR.",
        },
        {
          heading: "Speed as a Brand Expression",
          body: [
            "Sub-second page loads and zero Cumulative Layout Shift (CLS) are not merely engineering metrics; they are visceral signals of respect and authority. When an interface responds instantaneously to user gestures, users subconsciously perceive the underlying brand as precise, modern, and trustworthy.",
            "By engineering our platforms with Next.js App Router and server-rendered components, Owl Studio guarantees that visitors transition seamlessly from initial click to immersive discovery without friction.",
          ],
        },
      ],
    },
    seoTitle: "Why Your Website Is Part of Your Marketing | Owl Studio",
    seoDescription:
      "Why your website is the highest-leverage node in your acquisition funnel and how performance engineering drives real brand credibility.",
  },
  {
    slug: "social-media-design-and-brand-perception",
    title: "Social Media Design and Brand Perception: The Death of Disposable Content",
    excerpt:
      "Why the endless treadmill of low-effort social posts damages brand equity, and how editorial curation transforms social feeds into luxury monographs.",
    category: "Social Media",
    publishedAt: "February 22, 2026",
    updatedAt: "March 2, 2026",
    readTime: "5 min read",
    author: {
      name: "Aman Verma",
      role: "Lead Systems Architect",
      avatar: "/images/logo.svg",
    },
    visualAccent: "from-emerald-100 via-stone-100 to-amber-100",
    tags: ["Social Media", "Brand Identity", "Visual Curation", "Art Direction"],
    relatedSlugs: [
      "how-to-create-better-social-media-creatives",
      "what-makes-a-modern-brand-stand-out",
    ],
    relatedServiceSlug: "social-media-management",
    relatedCaseStudySlug: "kora-skincare",
    content: {
      lead:
        "For the past decade, social media advice was dominated by a single brute-force mantra: 'Post three times a day, every day.' The result has been an ocean of disposable, visually chaotic filler that devalues brand perception and turns social profiles into digital flea markets.",
      sections: [
        {
          heading: "Your Grid Is Your Brand's Front Window",
          body: [
            "When a customer discovers your brand on Instagram, TikTok, or LinkedIn, they do not read individual captions in isolation. They scroll the profile grid in 1.5 seconds. In that brief glance, they make an instinctive judgment about your pricing, your craft, and your cultural relevance.",
            "If your feed consists of inconsistent fonts, clashing color palettes, and hasty Canva templates, the customer concludes your product is equally careless.",
          ],
          quote:
            "Consistency in whitespace and typography signals the same luxury as heavyweight cardstock in physical print.",
        },
        {
          heading: "Treating Social Channels as Modern Monographs",
          body: [
            "At Owl Studio, we approach social architecture the way a high-end publisher approaches a quarterly journal. We design modular, recurring typographic templates, calibrate color palettes across 30-day horizons, and ensure that every single frame could stand alone as a poster.",
            "When you slow down production to focus on exceptional visual craft, audience retention and organic shares naturally multiply.",
          ],
          takeaway:
            "A disciplined 3-post-per-week editorial cadence consistently outperforms a frantic daily barrage of uninspired noise.",
        },
      ],
    },
    seoTitle: "Social Media Design and Brand Perception | Owl Studio",
    seoDescription:
      "Why low-effort social filler erodes brand equity and how treating your profile grid like an editorial monograph commands premium authority.",
  },
  {
    slug: "ai-ads-vs-traditional-ads",
    title: "AI Ads vs Traditional Ads: An Honest Production & Resource Comparison",
    excerpt:
      "A realistic breakdown comparing generative neural synthesis with legacy commercial shoots across timelines, flexibility, creative control, and cost.",
    category: "Advertising",
    publishedAt: "February 18, 2026",
    updatedAt: "March 1, 2026",
    readTime: "7 min read",
    author: {
      name: "Devan Sharma",
      role: "Creative Director",
      avatar: "/images/logo.svg",
    },
    visualAccent: "from-amber-100 via-stone-200 to-stone-300",
    tags: ["AI Ads", "Advertising Production", "Video Editing", "Creative Workflows"],
    relatedSlugs: [
      "how-ai-is-changing-advertising",
      "how-brands-can-use-ai-creatively",
    ],
    relatedServiceSlug: "ai-ads",
    relatedCaseStudySlug: "beyond-the-road",
    content: {
      lead:
        "The creative industry is caught between two hyperbolic extremes: those who insist AI will replace all physical film production by tomorrow, and those who dismiss generative video as an unworkable novelty. The practical reality sits firmly in between.",
      sections: [
        {
          heading: "Where Traditional Commercial Production Excels",
          body: [
            "Traditional location shoots remain unmatched when high-fidelity tactile human interaction is critical: complex micro-expressions, macro culinary textures, and physical garment draping on live talent.",
            "If a client requires an actor speaking natural dialogue while slicing a specific artisanal cheese, a camera crew and sound recordist on a prepared set is still the most direct and reliable approach.",
          ],
        },
        {
          heading: "Where AI Synthesis Redefines the Economics",
          body: [
            "Conversely, generative pipelines dominate when the creative concept demands impossible scale, rapid environmental shifts, or extreme visual metaphors. Untamed desert landscapes, architectural dreamscapes, futuristic vehicles, and abstract atmospheric lighting can be generated without travel permits or multimillion-dollar VFX overhead.",
            "Furthermore, revisions that would traditionally demand an expensive reshoot (such as altering the golden hour angle or changing the car's exterior paint color) can be re-prompted and graded in hours.",
          ],
          quote:
            "The future of advertising is not pure AI or pure film; it is hybrid pipelines orchestrated by experienced creative directors.",
          takeaway:
            "Smart brands don't choose between AI and traditional methods; they deploy each where its comparative advantage is highest.",
        },
      ],
    },
    seoTitle: "AI Ads vs Traditional Ads: Realistic Breakdown | Owl Studio",
    seoDescription:
      "A balanced, authentic comparison of AI video pipelines versus traditional production sets across budgets, timelines, and creative control.",
  },
  {
    slug: "what-makes-a-modern-brand-stand-out",
    title: "What Makes a Modern Brand Stand Out in an Era of Digital Uniformity?",
    excerpt:
      "Every direct-to-consumer brand is starting to look the same. Here is how modern brands reclaim memorability through typographic courage and singular conviction.",
    category: "Design",
    publishedAt: "February 12, 2026",
    updatedAt: "February 28, 2026",
    readTime: "6 min read",
    author: {
      name: "Devan Sharma",
      role: "Creative Director",
      avatar: "/images/logo.svg",
    },
    visualAccent: "from-stone-300 via-amber-100 to-stone-400",
    tags: ["Brand Identity", "Graphic Design", "Typography", "Art Direction"],
    relatedSlugs: [
      "why-your-website-is-part-of-your-marketing",
      "social-media-design-and-brand-perception",
    ],
    relatedServiceSlug: "graphic-design",
    relatedCaseStudySlug: "noir-fragrance",
    content: {
      lead:
        "Walk down the digital aisle of any category today—from fintech apps to cold-brew coffee—and you will witness a sea of geometric sans-serif logos, pastel backgrounds, and friendly corporate conversational copy. In an attempt to be universally palatable, modern brands have become universally forgettable.",
      sections: [
        {
          heading: "The Myth of Universal Appeal",
          body: [
            "Corporate risk aversion is the primary driver of visual homogeny. Committees soften every sharp edge, neutralize distinct colors, and dilute provocative copy until the final brand identity offends no one and excites no one.",
            "Memorable brands understand that true resonance requires polarized appeal. A brand that stands for something specific will inevitably alienate those outside its ethos—and that is its greatest strategic asset.",
          ],
          quote:
            "If no one dislikes your brand's aesthetic, it is almost certain that no one truly loves it.",
        },
        {
          heading: "The Elements of Visual Memorability",
          body: [
            "First, typographic courage. Choosing a bespoke serif with historical eccentricities, or a brutalist display face with tight negative tracking, instantly distinguishes your brand from the generic sans-serif crowd.",
            "Second, restraint over ornamentation. Great brands do not rely on trendy gradient squiggles or meaningless 3D shapes. They master layout proportion, generous whitespace, and tactile material specifications.",
            "Third, unified cross-disciplinary execution. An identity is only as strong as its weakest touchpoint. When your ads, packaging, social feed, and website speak the exact same aesthetic dialect, your brand feels inevitable.",
          ],
          takeaway:
            "True brand distinction comes from disciplined subtraction and unapologetic typographic conviction.",
        },
      ],
    },
    seoTitle: "What Makes a Modern Brand Stand Out? | Owl Studio",
    seoDescription:
      "How forward-thinking brands escape the sea of digital sameness through typographic courage, editorial restraint, and unified execution.",
  },
  {
    slug: "how-to-create-better-social-media-creatives",
    title: "How to Create Better Social Media Creatives: A Studio Framework",
    excerpt:
      "A systematic methodology for designing high-retention social content that stops the scroll, respects the viewer's intelligence, and builds lasting recall.",
    category: "Social Media",
    publishedAt: "February 8, 2026",
    updatedAt: "February 24, 2026",
    readTime: "5 min read",
    author: {
      name: "Aman Verma",
      role: "Lead Systems Architect",
      avatar: "/images/logo.svg",
    },
    visualAccent: "from-teal-100 via-stone-100 to-amber-100",
    tags: ["Social Media Creatives", "Carousel Design", "Visual Hooks", "Content Architecture"],
    relatedSlugs: [
      "social-media-design-and-brand-perception",
      "how-ai-is-changing-advertising",
    ],
    relatedServiceSlug: "social-media-management",
    relatedCaseStudySlug: "kora-skincare",
    content: {
      lead:
        "The average mobile user scrolls through several football fields of social feed content every day. In this high-velocity visual environment, you do not have thirty seconds to explain your premise. You have less than 400 milliseconds to earn a pause.",
      sections: [
        {
          heading: "The 3-Second Visual Hook Rule",
          body: [
            "The initial frame of any video or carousel must contain an unexpected visual tension. This does not mean obnoxious neon arrows or frantic screaming; it means an arresting composition, an unconventional camera angle, or an intriguing typographic thesis that disrupts mindless thumb movement.",
            "At Owl Studio, we test hook mechanics by desaturating images to grayscale: if the composition and typographic hierarchy do not hold attention without color, the hook is fundamentally weak.",
          ],
        },
        {
          heading: "Carousel Continuity & Swipe Mechanics",
          body: [
            "Multi-slide carousels are one of the most powerful storytelling formats on modern social platforms, yet most brands treat them as five unrelated images glued together.",
            "Design your carousels with visual bridges: typography that crosses slide boundaries, photographic elements that bleed into adjacent frames, and clear narrative open loops that compel the user to complete the swipe gesture.",
          ],
          quote:
            "A great carousel is not a collection of slides; it is an unfolded accordion book.",
          takeaway:
            "Treat every social post as an intentional editorial object that respects the reader's visual intelligence.",
        },
      ],
    },
    seoTitle: "How to Create Better Social Media Creatives | Owl Studio",
    seoDescription:
      "A battle-tested studio framework for designing scroll-stopping social creatives and high-retention carousels that build brand equity.",
  },
  {
    slug: "website-design-trends-for-modern-brands",
    title: "Website Design Trends for Modern Brands: What Is Enduring vs What Is Noise",
    excerpt:
      "Separating ephemeral design gimmicks from enduring digital principles: why warm editorial palettes, fluid typography, and sub-second load times dominate 2026.",
    category: "Website",
    publishedAt: "February 2, 2026",
    updatedAt: "February 20, 2026",
    readTime: "6 min read",
    author: {
      name: "Devan Sharma",
      role: "Creative Director",
      avatar: "/images/logo.svg",
    },
    visualAccent: "from-stone-200 via-amber-100 to-yellow-100",
    tags: ["Web Design Trends", "Editorial UI", "Core Web Vitals", "Next.js"],
    relatedSlugs: [
      "why-your-website-is-part-of-your-marketing",
      "what-makes-a-modern-brand-stand-out",
    ],
    relatedServiceSlug: "website-design",
    relatedCaseStudySlug: "lumen-digital",
    content: {
      lead:
        "Every year brings a predictable wave of web design gimmicks: heavy 3D canvas animations that cause laptop fans to scream, unreadable cursor distortions, and illegible micro-typography. While these novelties may win niche design awards, they frequently destroy user comprehension and conversion rates.",
      sections: [
        {
          heading: "The Transition to Warm Editorial Palettes",
          body: [
            "For years, modern tech websites default to stark clinical white or aggressive dark purple gradients. Today's most sophisticated digital brands are embracing warm neutral palettes: cream substrates, warm limestone hues, and tactile typography inspired by architectural monographs.",
            "Warm substrates reduce eye fatigue, convey understated luxury, and allow imagery to feel grounded and natural rather than artificially backlit.",
          ],
          quote:
            "A website should feel more like a beautifully printed book and less like a glowing software control panel.",
        },
        {
          heading: "Performance as Aesthetic Foundation",
          body: [
            "The most significant trend in modern web design is invisible: pure speed. When an interface renders instantly with zero layout shifts, navigation feels fluid and delightful.",
            "Static site generation, atomic CSS, and responsive image srcset pipelines are no longer backend afterthoughts—they are the canvas upon which great design lives.",
          ],
          takeaway:
            "Invest in timeless typographic scales, warm tactile palettes, and sub-second engineering over ephemeral interactive gimmicks.",
        },
      ],
    },
    seoTitle: "Website Design Trends for Modern Brands | Owl Studio",
    seoDescription:
      "An analysis of modern web design trends: separating fleeting visual gimmicks from enduring editorial layouts and performance engineering.",
  },
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  if (category === "All") return BLOG_POSTS;
  return BLOG_POSTS.filter((p) => p.category === category);
}

export function getRelatedPosts(currentSlug: string): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];

  // Match by explicit relatedSlugs or fallback to same category
  const explicit = current.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));

  if (explicit.length >= 2) {
    return explicit.slice(0, 2);
  }

  const categoryMatches = BLOG_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  );

  return [...explicit, ...categoryMatches].slice(0, 2);
}
