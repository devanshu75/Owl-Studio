"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlogPost, BlogCategory, BLOG_CATEGORIES } from "@/lib/blog-data";
import { BlogFilterBar } from "@/components/blog/BlogFilterBar";
import { BlogFeaturedCard } from "@/components/blog/BlogFeaturedCard";
import { BlogArticleCard } from "@/components/blog/BlogArticleCard";

interface BlogHubClientProps {
  posts: BlogPost[];
}

export function BlogHubClient({ posts }: BlogHubClientProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

  const categories = BLOG_CATEGORIES.map((cat) => ({
    label: cat,
    count: cat === "All" ? posts.length : posts.filter((p) => p.category === cat).length,
  }));

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featuredPost = activeCategory === "All" ? posts[0] : null;
  const remainingPosts = activeCategory === "All" ? posts.slice(1) : filteredPosts;

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-dark/10">
        <BlogFilterBar
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <div className="text-xs font-mono text-brand-muted hidden md:block">
          Showing {filteredPosts.length} of {posts.length} articles
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="space-y-12"
        >
          {/* Featured Post (shown in 'All' view) */}
          {featuredPost && <BlogFeaturedCard post={featuredPost} />}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <BlogArticleCard key={post.slug} post={post} />
            ))}
          </div>

          {remainingPosts.length === 0 && !featuredPost && (
            <div className="py-20 text-center rounded-3xl border border-dashed border-brand-dark/20 bg-white/50">
              <p className="text-base text-brand-muted">
                No articles published under this topic yet. Check back soon.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
