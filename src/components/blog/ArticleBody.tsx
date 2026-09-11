import { Sparkles, Lightbulb } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface ArticleBodyProps {
  post: BlogPost;
}

export function ArticleBody({ post }: ArticleBodyProps) {
  return (
    <div className="py-12 space-y-12">
      {/* Featured Visual Canvas */}
      <div
        className={`relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-3xl border border-brand-dark/10 bg-gradient-to-br ${post.visualAccent} p-8 sm:p-12 flex flex-col justify-between overflow-hidden shadow-owl-sm`}
      >
        <div className="flex justify-between items-start">
          <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm border border-brand-dark/10 px-4 py-1 text-xs font-mono font-bold text-brand-dark uppercase">
            {post.category} Focus
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-brand-dark/60 font-semibold bg-white/60 px-3 py-1 rounded-full">
            Owl Studio Field Notes
          </span>
        </div>

        <div className="max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-brand-dark/10 shadow-owl-sm">
          <div className="text-xs font-mono uppercase tracking-widest text-accent-dark font-bold mb-1">
            Core Thesis
          </div>
          <p className="text-sm sm:text-base font-bold text-brand-dark leading-snug">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Main Reading Container */}
      <div className="max-w-3xl mx-auto space-y-10 text-brand-dark">
        {/* Lead Paragraph */}
        <p className="text-xl sm:text-2xl text-brand-dark font-medium leading-relaxed pb-4 border-b border-brand-dark/10">
          {post.content.lead}
        </p>

        {/* Structured Sections */}
        {post.content.sections.map((section, idx) => (
          <div key={idx} className="space-y-6 pt-4">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark uppercase tracking-tight">
              {section.heading}
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
              {section.body.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            {/* Editorial Pull Quote */}
            {section.quote && (
              <blockquote className="my-8 rounded-2xl border-l-4 border-accent bg-[#FBF9F2] p-6 sm:p-8">
                <p className="text-lg sm:text-xl font-bold text-brand-dark italic leading-relaxed">
                  "{section.quote}"
                </p>
              </blockquote>
            )}

            {/* Studio Key Takeaway */}
            {section.takeaway && (
              <div className="my-8 rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-owl-sm flex items-start gap-4">
                <div className="h-9 w-9 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Lightbulb className="h-4 w-4 text-brand-dark" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-dark mb-1">
                    Studio Takeaway
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {section.takeaway}
                  </p>
                </div>
              </div>
            )}

            {/* Code / Framework Snippet */}
            {section.codeSnippet && (
              <div className="my-8 rounded-2xl bg-brand-dark text-white p-6 font-mono text-xs overflow-x-auto shadow-owl-sm">
                <pre>{section.codeSnippet}</pre>
              </div>
            )}
          </div>
        ))}

        {/* Tags Cluster */}
        <div className="pt-10 border-t border-brand-dark/10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-muted mb-3">
            Article Tags:
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-white border border-brand-dark/10 px-3 py-1 text-xs font-medium text-brand-dark"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
