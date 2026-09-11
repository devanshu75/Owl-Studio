import Link from "next/link";
import { ArrowUpRight, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Container } from "@/components/layout/Container";

export function BlogPreviewSection() {
  const featured = BLOG_POSTS.slice(0, 3);

  return (
    <section className="relative bg-white py-24 sm:py-32 border-b border-brand-dark/10 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-12 border-b border-brand-dark/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Field Notes &amp; Perspectives
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-dark uppercase">
              Latest Insights
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-accent-dark transition-colors"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between rounded-3xl border border-brand-dark/10 bg-[#F5F3EA] p-8 transition-all duration-300 hover:border-brand-dark/30 hover:shadow-owl-md hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-full bg-white border border-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-brand-muted">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-brand-dark group-hover:text-accent-dark transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm text-brand-muted leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-dark/10 flex items-center justify-between text-xs text-brand-muted">
                <div>
                  <div className="font-bold text-brand-dark">{post.author.name}</div>
                  <div className="text-[11px] text-brand-muted">{post.publishedAt}</div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-dark/15 bg-white text-brand-dark group-hover:bg-accent group-hover:border-accent transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
