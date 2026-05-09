"use client";

import { useRef, useState } from "react";

export function ClientVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  function handleEnded() {
    setPlaying(false);
  }

  return (
    <section className="bg-[#1b291f] py-20 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-[#ffe55d]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Client Stories
            </p>
          </div>
          <h2
            className="font-heading text-3xl font-semibold text-white md:text-4xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Hear It From Our Clients
          </h2>
          <p className="mt-3 text-sm text-[#8f9c93] leading-relaxed max-w-xl mx-auto">
            Real results, real voices — see how Enercore is transforming energy costs for businesses across India.
          </p>
        </div>

        {/* Video player — portrait format, centered */}
        <div className="flex justify-center">
        <div
          className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
          style={{ aspectRatio: "478/850" }}
          onClick={handlePlay}
        >
          <video
            ref={videoRef}
            src="/videos/client-review.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={handleEnded}
            playsInline
          />

          {/* Overlay — hidden while playing */}
          <div
            className={`absolute inset-0 bg-[#1b291f]/50 flex flex-col items-center justify-center transition-opacity duration-300 ${
              playing ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            {/* Play button */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ffe55d] shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 text-[#1b291f] translate-x-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="mt-4 text-sm font-semibold text-white/70 tracking-wide">
              Play Client Testimonial
            </p>
          </div>

          {/* Pause overlay — visible only while playing, on hover */}
          {playing && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        </div>

        {/* Attribution */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
            Verified Client Testimonial
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
