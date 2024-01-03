"use client";
import React, { useRef, useEffect } from "react";
import { cn } from "../../../@/lib/utils";

const useVideoPlaybackSpeed = (videoRef, playbackSpeed) => {
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [videoRef, playbackSpeed]);
};

const BackgroundVideo = ({ src, speed, intro = false }) => {
  const videoRef = useRef();
  useVideoPlaybackSpeed(videoRef, speed);

  return (
    <div className={cn("relative w-screen h-[100dvh] overflow-hidden")}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className={cn("w-full h-full object-cover", {
          "md:object-contain  md:-rotate-90 shadow-2xl": intro,
        })}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default React.memo(BackgroundVideo);
