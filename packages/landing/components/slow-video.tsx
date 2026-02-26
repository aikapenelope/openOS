"use client";

import { useEffect, useRef } from "react";

/**
 * Slow-motion hero video. Applies playbackRate on mount AND on every
 * "play" event so the browser can't reset it when the video loops.
 */
export function SlowVideo({
  src,
  playbackRate = 0.6,
  className,
}: {
  src: string;
  playbackRate?: number;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const applyRate = () => {
      video.playbackRate = playbackRate;
    };

    // Apply immediately and re-apply on every play/loop restart.
    applyRate();
    video.addEventListener("play", applyRate);
    video.addEventListener("ratechange", () => {
      if (video.playbackRate !== playbackRate) {
        video.playbackRate = playbackRate;
      }
    });

    return () => {
      video.removeEventListener("play", applyRate);
    };
  }, [playbackRate]);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
