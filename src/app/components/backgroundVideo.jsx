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
    <div className="relative w-screen md:h-screen h-[100dvh] overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className={cn("w-full h-full object-cover", {
          "md:object-contain  object-cover md:-rotate-90": intro,
        })}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default React.memo(BackgroundVideo);
