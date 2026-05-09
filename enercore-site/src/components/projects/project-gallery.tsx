"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

type MediaItem = { type: "image"; src: string } | { type: "video"; src: string };

export function ProjectGallery({
  images = [],
  videos = [],
  projectName,
}: {
  images?: string[];
  videos?: string[];
  projectName: string;
}) {
  const media: MediaItem[] = [
    ...images.map((src) => ({ type: "image" as const, src })),
    ...videos.map((src) => ({ type: "video" as const, src })),
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  const close = useCallback(() => {
    lightboxVideoRef.current?.pause();
    setActiveIndex(null);
  }, []);

  const prev = useCallback(() => {
    lightboxVideoRef.current?.pause();
    setActiveIndex((i) => (i === null ? null : (i - 1 + media.length) % media.length));
  }, [media.length]);

  const next = useCallback(() => {
    lightboxVideoRef.current?.pause();
    setActiveIndex((i) => (i === null ? null : (i + 1) % media.length));
  }, [media.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, prev, next]);

  if (media.length === 0) return null;

  const active = activeIndex !== null ? media[activeIndex] : null;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {media.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="group relative overflow-hidden rounded-xl bg-[#f7f6ef] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe55d]"
            style={{ aspectRatio: "4/3" }}
            aria-label={`View ${projectName} ${item.type} ${i + 1}`}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`${projectName} site photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            ) : (
              <video
                src={item.src}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                muted
                preload="metadata"
                playsInline
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#1b291f]/0 transition-colors duration-300 group-hover:bg-[#1b291f]/35 rounded-xl">
              {item.type === "video" ? (
                /* Video badge — always visible */
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 text-white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="text-[10px] font-semibold text-white/90 uppercase tracking-wide">Video</span>
                </div>
              ) : null}
              <span className="scale-0 text-white text-3xl transition-transform duration-300 group-hover:scale-100 drop-shadow-lg">
                {item.type === "video" ? "▶" : "⊕"}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative mx-4 flex items-center justify-center"
            style={{ maxHeight: "90vh", maxWidth: "90vw", width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            {active.type === "image" ? (
              <div className="relative w-full" style={{ maxHeight: "85vh" }}>
                <Image
                  src={active.src}
                  alt={`${projectName} photo ${activeIndex + 1}`}
                  width={1600}
                  height={1200}
                  className="max-h-[85vh] w-auto max-w-full mx-auto object-contain rounded-lg"
                  priority
                />
              </div>
            ) : (
              <video
                ref={lightboxVideoRef}
                src={active.src}
                className="max-h-[85vh] w-auto max-w-full mx-auto rounded-lg"
                controls
                autoPlay
                playsInline
              />
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm">
              {activeIndex + 1} / {media.length}
            </div>
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-xl backdrop-blur-sm"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev */}
          {media.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-xl backdrop-blur-sm"
              aria-label="Previous"
            >
              ←
            </button>
          )}

          {/* Next */}
          {media.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-xl backdrop-blur-sm"
              aria-label="Next"
            >
              →
            </button>
          )}
        </div>
      )}
    </>
  );
}
