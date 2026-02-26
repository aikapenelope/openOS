"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Slow-motion hero video.
 *
 * Desktop: autoplay at reduced playbackRate with ref-callback approach.
 * Mobile (<768px): shows first frame as poster, no autoplay to save
 * battery/bandwidth. User can tap to play.
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

  // Detect mobile on mount (avoids SSR mismatch by defaulting to false)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Force the rate whenever the video starts playing a segment.
  const enforce = useCallback(() => {
    const v = videoRef.current;
    if (v && v.playbackRate !== rateRef.current) {
      v.playbackRate = rateRef.current;
    }
  }, []);

  // Ref-callback: fires synchronously when React attaches the DOM node,
  // so we can set playbackRate *before* autoPlay kicks in.
  const refCallback = useCallback(
    (node: HTMLVideoElement | null) => {
      // Detach old listeners.
      if (videoRef.current) {
        videoRef.current.removeEventListener("playing", enforce);
        videoRef.current.removeEventListener("seeked", enforce);
      }

      videoRef.current = node;

      if (node) {
        node.playbackRate = rateRef.current;
        node.addEventListener("playing", enforce);
        node.addEventListener("seeked", enforce);
      }
    },
    [enforce],
  );

  // Safety net: re-apply after hydration / lazy-load, and on every
  // playbackRate prop change.
  useEffect(() => {
    const v = videoRef.current;
    if (v) v.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <video
      ref={refCallback}
      autoPlay={!isMobile}
      loop={!isMobile}
      muted
      playsInline
      controls={isMobile}
      preload={isMobile ? "none" : "metadata"}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
