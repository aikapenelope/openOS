"use client";

import { useEffect, useRef } from "react";

/**
 * Slow-motion hero video. Sets playbackRate on mount so the
 * demo cursor doesn't look rushed.
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
    if (ref.current) {
      ref.current.playbackRate = playbackRate;
    }
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
