"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Search, Sparkles, Tag } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="relative min-h-screen bg-primary pt-32 pb-24 text-white">
      {/* Background ambient mesh */}
      <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-accent/5 blur-[160px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Headquarters
        </Link>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-accent mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Owl Studio Journal · Field Notes &amp; Perspectives
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              Thought Leadership &amp; <span className="font-serif italic font-normal text-accent">Insights</span>
            </h1>
          </div>
          <p className="max-w-md text-sm sm:text-base text-textMuted leading-relaxed">
            In-depth perspectives on generative AI video, Next.js engineering, brand psychology, and conversion design.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-accent text-black shadow-neon-sm"
                    : "border border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-gray-500 outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Featured Hero Article (shown when showing All and no search) */}
        {selectedCategory === "All" && !searchQuery && featuredPost && (
          <div className="mt-12">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative block rounded-3xl border border-white/15 bg-gradient-to-br from-[#171a20] to-[#0f1115] p-8 sm:p-12 backdrop-blur-2xl transition-all duration-300 hover:border-accent/50 hover:shadow-card-glass"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="space-y-4 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-accent/10 border border-accent/30 px-3 py-1 text-xs font-semibold text-accent">
                      Featured Insight · {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-textMuted">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-2 flex items-center gap-3 text-xs text-gray-400">
                    <span className="font-semibold text-white">{featuredPost.author.name}</span>
                    <span>·</span>
                    <span>{featuredPost.publishedAt}</span>
                  </div>
                </div>

                <div className="self-end lg:self-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-black group-hover:scale-110">
                    <ArrowUpRight className="h-7 w-7" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Articles Grid */}
        <div className="mt-12">
          {filteredPosts.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center text-gray-400">
              <p>No articles found matching &quot;{searchQuery}&quot; in {selectedCategory}.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-xs font-semibold text-accent underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-[#15181f]/90 to-[#0e1015]/90 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:-translate-y-1.5 hover:shadow-card-glass"
                >
                  <div>
                    {/* Top Meta */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-xs font-medium text-accent">
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

                    <p className="mt-3 text-xs sm:text-sm text-textMuted leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-textMuted">
                    <div>
                      <div className="font-semibold text-gray-300">{post.author.name}</div>
                      <div className="text-[10px] text-gray-500">{post.publishedAt}</div>
                    </div>
                    <span className="inline-flex items-center gap-1 font-semibold text-accent group-hover:translate-x-1 transition-transform">
                      Read
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-20 rounded-3xl border border-white/15 bg-gradient-to-r from-[#171a20] via-[#111317] to-[#171a20] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-accent/10 blur-[100px] rounded-full" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have a project in mind?
          </h3>
          <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-textMuted">
            Let&apos;s build an extraordinary digital presence that moves people and drives revenue.
          </p>
          <div className="mt-6">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-bold text-black shadow-neon-sm hover:bg-accent-hover transition-all hover:scale-105"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
