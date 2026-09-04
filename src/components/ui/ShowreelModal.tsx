"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, VolumeX, Play, Pause, Maximize2 } from "lucide-react";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 md:p-12"
          onClick={onClose}
        >
          {/* Main Video Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-6xl rounded-3xl border border-white/20 bg-black overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-white/90">
                  Owl Studio · 2026 Creative Showreel (4K HDR)
                </span>
              </div>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white hover:bg-accent hover:text-black transition-colors"
                aria-label="Close Showreel"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Element */}
            <div className="relative aspect-video w-full bg-black">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                loop
                className="h-full w-full object-contain"
                onClick={togglePlay}
              >
                <source src="/video/hero-video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Bottom Control Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-black transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-black transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden sm:inline-block font-mono text-xs text-white/60 uppercase">
                  Press ESC to exit
                </span>
                <button
                  onClick={toggleFullscreen}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-black transition-colors"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
