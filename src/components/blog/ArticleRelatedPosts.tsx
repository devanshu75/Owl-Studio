import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface ArticleRelatedPostsProps {
  relatedPosts: BlogPost[];
}

export function ArticleRelatedPosts({ relatedPosts }: ArticleRelatedPostsProps) {
  if (relatedPosts.length === 0) return null;

  return (
    <div className="pt-16 border-t border-brand-dark/10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-accent-dark font-bold mb-1">
              Further Perspectives
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark uppercase tracking-tight">
              Related Reading
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-accent-dark transition-colors"
          >
            <span>All Journal Entries</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl border border-brand-dark/10 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-brand-dark/30 hover:shadow-owl-sm transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-[#EDEBE3] px-3 py-1 text-xs font-semibold text-brand-dark">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-brand-muted">
                    <Clock className="h-3 w-3 text-accent-dark" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-black text-brand-dark uppercase group-hover:text-accent-dark transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-brand-muted line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-xs font-bold text-brand-dark">
                <span>Read Essay</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-accent-dark" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
