import Link from "next/link";
import { ArrowUpRight, ArrowRight, Clock, Sparkles } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogFeaturedCardProps {
  post: BlogPost;
}

export function BlogFeaturedCard({ post }: BlogFeaturedCardProps) {
  return (
    <div className="group">
      <Link
        href={`/blog/${post.slug}`}
        className="block rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-12 lg:p-14 transition-all duration-300 hover:border-brand-dark/30 hover:shadow-owl-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-brand-dark uppercase tracking-wider shadow-sm">
                Featured Essay
              </span>
              <span className="rounded-full bg-[#EDEBE3] border border-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-brand-muted font-medium">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-dark uppercase group-hover:text-accent-dark transition-colors leading-[1.08]">
              {post.title}
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-brand-dark/10">
              <div className="text-xs text-brand-muted">
                <span className="font-bold text-brand-dark">{post.author.name}</span> •{" "}
                <span>{post.publishedAt}</span>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark group-hover:text-accent-dark transition-colors">
                <span>Read Full Essay</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-accent-dark" />
              </div>
            </div>
          </div>

          {/* Right Visual Artboard */}
          <div className="lg:col-span-5">
            <div
              className={`relative aspect-[16/10] w-full rounded-2xl border border-brand-dark/10 bg-gradient-to-br ${post.visualAccent} p-8 flex flex-col justify-between overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform duration-300`}
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-dark/60 font-bold">
                  Field Notes // 01
                </span>
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-owl-sm group-hover:bg-accent transition-colors">
                  <ArrowUpRight className="h-4 w-4 text-brand-dark" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-dark/60 font-semibold">
                  {post.tags.slice(0, 2).join(" • ")}
                </div>
                <div className="text-xl sm:text-2xl font-black text-brand-dark uppercase">
                  {post.category} Thesis
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
