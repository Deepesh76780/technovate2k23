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
        className={cn("w-full h-full", intro == true ? "md:object-contain  object-covermd:-rotate-90" : "object-cover")}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
