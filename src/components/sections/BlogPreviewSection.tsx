import Link from "next/link";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";

export function BlogPreviewSection() {
  const featured = BLOG_POSTS.slice(0, 3);

  return (
    <section className="relative bg-primary py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-white/10">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 blur-[160px] rounded-full" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Field Notes &amp; Perspectives
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Latest <span className="font-serif italic font-normal text-gray-300">Insights</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            <span>Explore all articles</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-[#161a22]/80 to-[#0e1117]/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:-translate-y-1.5 hover:shadow-card-glass"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-textMuted">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm text-textMuted leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-textMuted">
                <div>
                  <div className="font-semibold text-gray-300">{post.author.name}</div>
                  <div className="text-[10px] text-gray-500">{post.publishedAt}</div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
