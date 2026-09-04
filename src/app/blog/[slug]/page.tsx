import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Share2, Sparkles, Check, Copy } from "lucide-react";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { SITE_CONFIG } from "@/lib/constants";
import { ArticleShareBar } from "./ArticleShareBar";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Owl Studio Journal`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [SITE_CONFIG.ogImage],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug);

  return (
    <article className="relative min-h-screen bg-primary pt-32 pb-24 text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/5 blur-[160px] rounded-full" />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-textMuted mb-8">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-accent transition-colors">
            Journal
          </Link>
          <span>/</span>
          <span className="text-accent truncate max-w-[200px] sm:max-w-xs">{post.category}</span>
        </div>

        {/* Article Header */}
        <header className="border-b border-white/10 pb-8 mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full bg-accent/10 border border-accent/30 px-3.5 py-1 text-xs font-semibold text-accent">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-textMuted">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
            {post.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs sm:text-sm text-textMuted">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center font-bold text-accent">
                {post.author.name[0]}
              </div>
              <div>
                <div className="font-semibold text-white">{post.author.name}</div>
                <div className="text-xs text-textMuted">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span>{post.publishedAt}</span>
              <ArticleShareBar title={post.title} slug={post.slug} />
            </div>
          </div>
        </header>

        {/* Lead paragraph */}
        <p className="text-lg sm:text-xl font-medium text-gray-200 leading-relaxed border-l-2 border-accent pl-6 mb-12 italic">
          {post.content.lead}
        </p>

        {/* Article Sections */}
        <div className="space-y-12 text-base sm:text-lg text-gray-300 leading-relaxed">
          {post.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {section.heading}
              </h2>

              {section.body.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}

              {section.quote && (
                <blockquote className="my-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-lg sm:text-xl font-serif italic text-white/90">
                  &ldquo;{section.quote}&rdquo;
                </blockquote>
              )}

              {section.codeSnippet && (
                <div className="my-6 rounded-2xl border border-white/10 bg-[#090b0e] p-6 font-mono text-xs sm:text-sm text-lime-300 overflow-x-auto">
                  <pre>{section.codeSnippet}</pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono uppercase text-textMuted mr-2">Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Consultation CTA Box */}
        <div className="mt-16 rounded-3xl border border-accent/30 bg-gradient-to-br from-[#171a20] to-[#0f1115] p-8 sm:p-12 backdrop-blur-2xl shadow-neon-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-accent font-semibold">
              Ready to elevate your brand?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Let&apos;s build something unforgettable.
            </h3>
            <p className="text-sm text-textMuted max-w-md">
              Partner with Owl Studio for brand identity, Next.js architecture, and cinematic video.
            </p>
          </div>

          <Link
            href="/#contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-black shadow-neon-glow hover:bg-accent-hover transition-transform hover:scale-105"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">
              Related Field Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group rounded-2xl border border-white/10 bg-surface-card/60 p-6 backdrop-blur-xl hover:border-accent/40 transition-all hover:-translate-y-1"
                >
                  <span className="text-xs font-semibold text-accent">{rel.category}</span>
                  <h4 className="mt-2 text-lg font-bold text-white group-hover:text-accent transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="mt-2 text-xs text-textMuted line-clamp-2">
                    {rel.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
