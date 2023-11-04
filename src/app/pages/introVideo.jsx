"use client"
import React from "react";
import BackgroundVideo from "../components/backgroundVideo";

const IntroVideo = () => {
  return (
    <div className="relative w-screen h-screen  bg-[#00000071]">
      <div className="rotate-6 border-2 border-pink-500 card">
        <BackgroundVideo src={"/background_videos/intro_video.mp4"} speed={1} />
      </div>
    </div>
  );
};

export default IntroVideo;
