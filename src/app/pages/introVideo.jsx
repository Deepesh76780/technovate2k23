"use client"
import React from "react";
import BackgroundVideo from "../components/backgroundVideo";

const IntroVideo = () => {
  return (
    <div className="relative w-screen md:h-screen h-[100dvh]   bg-[#00000071]">
      <BackgroundVideo src={"/past_star_images/rr.mp4"} speed={1} intro={true} />
    </div>
  );
};

export default IntroVideo;
