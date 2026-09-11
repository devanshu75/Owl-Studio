interface CaseStudyNarrativeProps {
  challenge: string;
  idea: string;
  strategy: string;
  execution: string;
}

export function CaseStudyNarrative({
  challenge,
  idea,
  strategy,
  execution,
}: CaseStudyNarrativeProps) {
  const sections = [
    {
      num: "01",
      tag: "The Obstacle",
      title: "The Challenge",
      copy: challenge,
    },
    {
      num: "02",
      tag: "The Concept",
      title: "The Creative Idea",
      copy: idea,
    },
    {
      num: "03",
      tag: "Positioning & Funnel",
      title: "Strategic Direction",
      copy: strategy,
    },
    {
      num: "04",
      tag: "Production & Aesthetics",
      title: "Execution & Craft",
      copy: execution,
    },
  ];

  return (
    <div className="py-20 border-b border-brand-dark/10">
      <div className="max-w-2xl mb-12">
        <div className="text-xs font-mono uppercase tracking-widest text-accent-dark font-bold mb-2">
          Editorial Case Breakdown
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-brand-dark uppercase tracking-tight">
          Strategy, Concept &amp; Craft
        </h2>
        <p className="mt-2 text-sm sm:text-base text-brand-muted">
          How Owl Studio deconstructed the brief, articulated the creative thesis, and brought the vision to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((sec) => (
          <div
            key={sec.num}
            className="rounded-3xl border border-brand-dark/10 bg-white p-8 sm:p-10 shadow-owl-sm flex flex-col justify-between hover:border-brand-dark/30 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between border-b border-brand-dark/10 pb-4 mb-6">
                <span className="font-mono text-xs font-bold text-accent-dark uppercase tracking-wider">
                  {sec.num} // {sec.tag}
                </span>
                <span className="font-mono text-2xl font-black text-brand-dark/15">
                  {sec.num}
                </span>
              </div>
              <h3 className="text-2xl font-black text-brand-dark tracking-tight uppercase">
                {sec.title}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-brand-muted leading-relaxed">
                {sec.copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
