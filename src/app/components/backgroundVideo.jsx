"use client";
import React, { useRef, useEffect } from "react";

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
        className={`${intro == true ? "md:object-contain  object-cover" : "object-cover"} w-full h-full ${intro == true ? "md:-rotate-90 " : ""}`}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
