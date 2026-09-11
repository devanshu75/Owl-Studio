export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="fixed top-0 left-0 right-0 z-[99999] h-1 bg-[#EDEBE3] overflow-hidden pointer-events-none"
    >
      <div className="h-full w-36 bg-accent animate-[loading_1.2s_ease-in-out_infinite] rounded-full" />
    </div>
  );
}
