import Link from "next/link";
import { ChevronRight, Clock, Calendar, RefreshCw } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";
import { ArticleShareBar } from "@/components/blog/ArticleShareBar";

interface ArticleHeaderProps {
  post: BlogPost;
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  return (
    <header className="space-y-8 pb-12 border-b border-brand-dark/10">
      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumbs"
        className="flex items-center gap-2 text-xs font-semibold text-brand-muted"
      >
        <Link href="/" className="hover:text-brand-dark transition-colors">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/blog" className="hover:text-brand-dark transition-colors">
          Journal
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-brand-muted font-medium">{post.category}</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-brand-dark truncate max-w-[200px] sm:max-w-sm">
          {post.title}
        </span>
      </nav>

      {/* Meta Pills */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-accent px-3.5 py-1 text-xs font-bold text-brand-dark uppercase tracking-wider shadow-sm">
          {post.category}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-brand-muted font-medium bg-white px-3 py-1 rounded-full border border-brand-dark/10">
          <Clock className="h-3.5 w-3.5 text-accent-dark" />
          {post.readTime}
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-brand-dark uppercase leading-[1.05]">
        {post.title}
      </h1>

      {/* Author & Publishing Information */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-brand-dark/10">
        <div className="flex items-center gap-4">
          <div className="h-11 w-11 rounded-full bg-accent flex items-center justify-center font-black text-brand-dark shadow-sm">
            {post.author.name.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-bold text-brand-dark">{post.author.name}</div>
            <div className="text-xs text-brand-muted font-medium">{post.author.role}</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-brand-muted">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-accent-dark" />
            <span>Published {post.publishedAt}</span>
          </div>
          {post.updatedAt && (
            <div className="flex items-center gap-1.5 hidden sm:flex">
              <RefreshCw className="h-3 w-3 text-brand-muted" />
              <span>Updated {post.updatedAt}</span>
            </div>
          )}
          <ArticleShareBar title={post.title} slug={post.slug} />
        </div>
      </div>
    </header>
  );
}
