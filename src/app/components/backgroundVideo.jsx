"use client";
import React, { useRef, useEffect } from "react";

const useVideoPlaybackSpeed = (videoRef, playbackSpeed) => {
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [videoRef, playbackSpeed]);
};

const BackgroundVideo = ({ src, speed }) => {
  const videoRef = useRef();
  useVideoPlaybackSpeed(videoRef, speed);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="object-cover w-full h-full"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
