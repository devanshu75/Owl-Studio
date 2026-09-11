import { ProjectGalleryItem } from "@/lib/projects-data";

interface CaseStudyVisualShowcaseProps {
  gallery: ProjectGalleryItem[];
}

export function CaseStudyVisualShowcase({ gallery }: CaseStudyVisualShowcaseProps) {
  return (
    <div className="py-20 border-b border-brand-dark/10">
      <div className="max-w-2xl mb-12">
        <div className="text-xs font-mono uppercase tracking-widest text-accent-dark font-bold mb-2">
          Visual Studies &amp; Collateral
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-brand-dark uppercase tracking-tight">
          Craft &amp; Aesthetic Artifacts
        </h2>
        <p className="mt-2 text-sm sm:text-base text-brand-muted">
          Art-directed frames, layout compositions, typographic treatments, and media assets designed for this project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        {gallery.map((item, idx) => {
          // Asymmetric visual grid:
          // Item 0: 8-col wide
          // Item 1: 4-col portrait / square
          // Item 2: 6-col
          // Item 3: 6-col
          let colSpan = "md:col-span-6";
          if (idx === 0) colSpan = "md:col-span-8";
          else if (idx === 1) colSpan = "md:col-span-4";
          else colSpan = "md:col-span-6";

          return (
            <div
              key={idx}
              className={`${colSpan} rounded-3xl border border-brand-dark/10 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-owl-sm hover:shadow-owl-md transition-shadow`}
            >
              <div>
                {/* Visual Canvas */}
                <div
                  className={`aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl bg-gradient-to-br ${item.color} mb-6 border border-brand-dark/10 p-6 flex flex-col justify-between shadow-inner`}
                >
                  <div className="flex justify-between items-start">
                    <span className="inline-block rounded bg-white/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono uppercase text-brand-dark font-bold">
                      Frame 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-brand-dark/60 font-semibold">
                      Spec Artifact
                    </span>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-brand-dark uppercase">
                      {item.title}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-brand-dark tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
