"use client"
import React from "react";
import BackgroundVideo from "../components/backgroundVideo";

const IntroVideo = () => {
  return (
    <div className="relative w-screen min-h-[100dvh]  bg-[#00000071]">
      <BackgroundVideo src={"/background_videos/intro_video.mp4"} speed={1} intro={true} />
    </div >
  );
};

export default IntroVideo;
