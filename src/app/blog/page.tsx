import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getAllPosts } from "@/lib/blog-data";
import { SITE_CONFIG, getCanonicalUrl } from "@/lib/constants";
import { BlogHubClient } from "@/components/blog/BlogHubClient";

export const metadata: Metadata = {
  title: "Journal & Field Notes | Owl Studio",
  description:
    "In-depth perspectives and critical essays on generative AI advertising, Next.js architecture, brand identity, social media systems, and conversion design.",
  alternates: {
    canonical: getCanonicalUrl("/blog"),
  },
  openGraph: {
    title: "Journal & Field Notes | Owl Studio",
    description:
      "Essays and critical frameworks on AI, advertising, web engineering, and brand craft.",
    url: getCanonicalUrl("/blog"),
    siteName: SITE_CONFIG.name,
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Owl Studio Journal",
    description:
      "Critical essays and field notes on AI advertising, web design, digital marketing, and brand identity.",
    url: getCanonicalUrl("/blog"),
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: getCanonicalUrl(),
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: getCanonicalUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  };

  return (
    <div className="bg-[#F5F3EA] min-h-screen pt-36 pb-24">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <Container>
        {/* Editorial Header */}
        <div className="max-w-4xl space-y-6 pb-16 border-b border-brand-dark/10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Field Notes &amp; Perspectives
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-brand-dark uppercase leading-[1.02]">
            Thoughts on craft, <br />
            <span className="relative inline-block text-brand-dark">
              AI &amp; commerce.
              <span className="absolute left-0 bottom-1 w-full h-3 bg-accent/50 -z-10 rounded-sm" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl font-normal">
            Critical essays and studio frameworks on generative advertising, high-performance web
            architecture, and enduring brand identities.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-dark/10 px-3.5 py-1 text-xs font-mono text-brand-dark">
            <Sparkles className="h-3 w-3 text-accent-dark" />
            Studio Thought Leadership • Honest Methodologies
          </div>
        </div>

        {/* Interactive Filter & Editorial Grid */}
        <div className="py-16">
          <BlogHubClient posts={posts} />
        </div>

        {/* Bottom Conversion CTA */}
        <div className="pt-16 pb-8 text-center space-y-6 border-t border-brand-dark/10">
          <div className="inline-block rounded-full bg-accent/30 border border-accent/60 px-3 py-1 text-xs font-mono font-bold text-brand-dark uppercase tracking-wider">
            Collaboration
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-dark uppercase tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-base sm:text-lg text-brand-muted max-w-xl mx-auto">
            From generative video commercials to high-performance web applications, let's build something unforgettable.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-brand-dark shadow-owl-sm transition-all hover:bg-accent-hover hover:shadow-owl-md"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
