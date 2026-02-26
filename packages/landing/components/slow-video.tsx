"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Slow-motion hero video.
 *
 * Uses a ref-callback so playbackRate is set the instant the
 * <video> element mounts — before autoPlay fires. A lightweight
 * "playing" listener re-applies the rate on every loop iteration
 * in case the browser resets it.
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
