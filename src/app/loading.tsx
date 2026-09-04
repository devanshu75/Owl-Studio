export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-primary">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-black tracking-widest text-white">
          OWL<span className="text-accent">.STUDIO</span>
        </h2>
        <div className="h-0.5 w-32 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-12 rounded-full bg-accent animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
