"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Slow-motion hero video.
 *
 * Starts inert (no autoplay, preload=none) to avoid downloading 5MB+
 * on mobile reload. After hydration, detects viewport width:
 *   - Desktop (>=768px): starts autoplay at reduced playbackRate
 *   - Mobile (<768px): stays paused, shows play controls on tap
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rateRef = useRef(playbackRate);
  rateRef.current = playbackRate;

  // null = not yet determined (SSR/hydration), true/false after mount
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Once we know it's desktop, start playback programmatically
  useEffect(() => {
    const v = videoRef.current;
    if (!v || isDesktop !== true) return;
    v.playbackRate = rateRef.current;
    v.muted = true;
    v.loop = true;
    v.preload = "metadata";
    v.play().catch(() => {
      /* autoplay blocked — user will see controls */
    });
  }, [isDesktop]);

  // Force the rate whenever the video starts playing a segment.
  const enforce = useCallback(() => {
    const v = videoRef.current;
    if (v && v.playbackRate !== rateRef.current) {
      v.playbackRate = rateRef.current;
    }
  }, []);

  // Ref-callback: attach rate-enforcement listeners.
  const refCallback = useCallback(
    (node: HTMLVideoElement | null) => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("playing", enforce);
        videoRef.current.removeEventListener("seeked", enforce);
      }

      videoRef.current = node;

      if (node) {
        node.addEventListener("playing", enforce);
        node.addEventListener("seeked", enforce);
      }
    },
    [enforce],
  );

  // Re-apply on playbackRate prop change.
  useEffect(() => {
    const v = videoRef.current;
    if (v) v.playbackRate = playbackRate;
  }, [playbackRate]);

  const isMobile = isDesktop === false;

  return (
    <video
      ref={refCallback}
      muted
      playsInline
      controls={isMobile}
      preload="none"
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
