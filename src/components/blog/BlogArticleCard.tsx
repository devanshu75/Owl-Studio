import Link from "next/link";
import { ArrowUpRight, ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogArticleCardProps {
  post: BlogPost;
}

export function BlogArticleCard({ post }: BlogArticleCardProps) {
  return (
    <div className="group h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col justify-between h-full rounded-3xl border border-brand-dark/10 bg-white p-8 transition-all duration-300 hover:border-brand-dark/30 hover:shadow-owl-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark"
      >
        <div>
          {/* Visual Canvas Banner */}
          <div
            className={`relative aspect-[16/10] w-full rounded-2xl border border-brand-dark/10 bg-gradient-to-br ${post.visualAccent} p-6 flex flex-col justify-between mb-6 overflow-hidden group-hover:scale-[1.01] transition-transform duration-300`}
          >
            <div className="flex justify-between items-start">
              <span className="rounded-full bg-white/95 border border-brand-dark/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                {post.category}
              </span>
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-owl-sm group-hover:bg-accent transition-colors">
                <ArrowUpRight className="h-4 w-4 text-brand-dark" />
              </div>
            </div>

            <div className="text-xs font-mono uppercase text-brand-dark/60 font-bold">
              {post.readTime}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3 text-xs text-brand-muted font-medium">
            <Clock className="h-3 w-3 text-accent-dark" />
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.publishedAt}</span>
          </div>

          <h3 className="text-2xl font-black tracking-tight text-brand-dark uppercase group-hover:text-accent-dark transition-colors line-clamp-2 leading-tight">
            {post.title}
          </h3>

          <p className="mt-3 text-sm text-brand-muted leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-xs text-brand-muted">
          <span className="font-bold text-brand-dark">{post.author.name}</span>
          <div className="inline-flex items-center gap-1 font-bold text-brand-dark group-hover:text-accent-dark transition-colors">
            <span>Read Essay</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-accent-dark" />
          </div>
        </div>
      </Link>
    </div>
  );
}
