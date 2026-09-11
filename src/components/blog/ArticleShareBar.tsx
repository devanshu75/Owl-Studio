"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Check, Copy } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface ArticleShareBarProps {
  title: string;
  slug: string;
}

export function ArticleShareBar({ title, slug }: ArticleShareBarProps) {
  const [copied, setCopied] = useState(false);
  const articleUrl = `${SITE_CONFIG.url}/blog/${slug}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(articleUrl);
    setCopied(true);
    toast.success("Article link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnX = () => {
    const text = encodeURIComponent(`"${title}" by @owlstudio\n\n${articleUrl}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={shareOnX}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-dark/15 bg-white text-brand-dark hover:border-brand-dark hover:bg-accent transition-colors text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark"
        title="Share on X"
        aria-label="Share on X"
      >
        𝕏
      </button>

      <button
        onClick={shareOnLinkedIn}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-dark/15 bg-white text-brand-dark hover:border-brand-dark hover:bg-accent transition-colors text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark"
        title="Share on LinkedIn"
        aria-label="Share on LinkedIn"
      >
        in
      </button>

      <button
        onClick={copyToClipboard}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-dark/15 bg-white text-brand-dark hover:border-brand-dark hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark"
        title="Copy article link"
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-brand-dark" />
        ) : (
          <Copy className="h-3.5 w-3.5 text-brand-dark" />
        )}
      </button>
    </div>
  );
}
