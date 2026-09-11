export const SITE_CONFIG = {
  name: "Owl Studio",
  shortName: "OWL.STUDIO",
  title: "Owl Studio — Creative Digital Agency | AI Ads, Websites & Digital Marketing",
  description:
    "Owl Studio is a modern creative digital agency combining AI, design, websites, digital marketing, social media, and creative advertising for brands ready to stand out.",
  url: "https://owlstudio.media",
  ogImage: "/images/og-image.jpg",
  contact: {
    email: "info@owlstudio.media",
    phone: "+91 88064 08608",
    phoneDisplay: "+91 88064 08608",
    location: "Based in India · Working Worldwide",
    timezone: "Asia/Kolkata",
    availability: "Available for New Projects & Collaborations",
  },
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com/company/owlstudio", label: "in" },
    { name: "Instagram", href: "https://instagram.com/owlstudio", label: "ig" },
    { name: "Behance", href: "https://behance.net/owlstudio", label: "Be" },
    { name: "X (Twitter)", href: "https://x.com/owlstudio", label: "𝕏" },
  ],
};

export const STUDIO_PILLARS = [
  {
    num: "01",
    title: "Creative Thinking",
    desc: "Original visual concepts and narrative frameworks designed to make brands impossible to ignore.",
  },
  {
    num: "02",
    title: "AI-Powered Velocity",
    desc: "Leveraging neural generative synthesis to explore concepts rapidly while human art directors refine every detail.",
  },
  {
    num: "03",
    title: "Full-Stack Digital Craft",
    desc: "From identity design and high-performance Next.js web platforms to synchronized digital marketing funnels.",
  },
  {
    num: "04",
    title: "Practical Business Impact",
    desc: "Design and marketing built for real commercial outcomes: qualified leads, elevated perceived value, and lasting growth.",
  },
];

/**
 * Returns a normalized canonical URL with a trailing slash,
 * matching next.config.mjs trailingSlash: true configuration.
 */
export function getCanonicalUrl(path: string = ""): string {
  const base = SITE_CONFIG.url.replace(/\/+$/, "");
  const cleanPath = path.replace(/^\/+/, "").replace(/\/+$/, "");
  return cleanPath ? `${base}/${cleanPath}/` : `${base}/`;
}

