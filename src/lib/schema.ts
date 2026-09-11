import { SITE_CONFIG, getCanonicalUrl } from "@/lib/constants";
import { ServiceItemData } from "@/lib/services-data";

/**
 * Global WebSite schema
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    alternateName: "Owl Studio Creative Agency",
    url: getCanonicalUrl(),
    description: SITE_CONFIG.description,
  };
}

/**
 * Global ProfessionalService / Organization schema
 */
export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_CONFIG.name,
    url: getCanonicalUrl(),
    logo: `${SITE_CONFIG.url}/images/logo.svg`,
    image: `${SITE_CONFIG.url}/images/og-image.jpg`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: SITE_CONFIG.socials.map((s) => s.href),
  };
}

/**
 * Services Hub CollectionPage schema
 */
export function getServicesCollectionSchema(services: ServiceItemData[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Owl Studio Capabilities & Disciplines",
    description:
      "Explore Owl Studio's 5 core disciplines: AI Ads Generation, Website Design, Digital Marketing, Social Media Management, and Graphic Designing.",
    url: getCanonicalUrl("/services"),
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: getCanonicalUrl(),
    },
    hasPart: services.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.shortDescription,
      url: getCanonicalUrl(`/services/${service.slug}`),
      provider: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
      },
    })),
  };
}

/**
 * About Page schema
 */
export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Owl Studio | Philosophy & Multidisciplinary Craft",
    description:
      "Owl Studio is a modern creative studio combining human art direction, generative AI workflows, and high-performance Next.js web engineering.",
    url: getCanonicalUrl("/about"),
    mainEntity: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: getCanonicalUrl(),
      description: SITE_CONFIG.description,
      sameAs: SITE_CONFIG.socials.map((s) => s.href),
    },
  };
}

/**
 * Contact Page schema
 */
export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Owl Studio | Start a Project",
    description:
      "Initiate a project or strategic collaboration with Owl Studio. We respond within 24 business hours.",
    url: getCanonicalUrl("/contact"),
    mainEntity: {
      "@type": "ProfessionalService",
      name: SITE_CONFIG.name,
      url: getCanonicalUrl(),
      email: SITE_CONFIG.contact.email,
      telephone: SITE_CONFIG.contact.phone,
    },
  };
}

/**
 * BreadcrumbList schema
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
