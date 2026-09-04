"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Share2, Check, Copy } from "lucide-react";
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
    <div className="flex items-center gap-2">
      <button
        onClick={shareOnX}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:border-accent hover:text-accent transition-colors text-xs font-semibold"
        title="Share on X"
        aria-label="Share on X"
      >
        𝕏
      </button>

      <button
        onClick={shareOnLinkedIn}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:border-accent hover:text-accent transition-colors text-xs font-semibold"
        title="Share on LinkedIn"
        aria-label="Share on LinkedIn"
      >
        in
      </button>

      <button
        onClick={copyToClipboard}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:border-accent hover:text-accent transition-colors"
        title="Copy article link"
        aria-label="Copy link"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-accent" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}
