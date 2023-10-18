import Image from "next/image";
import React from "react";
import BackgroundVideo from "../components/backgroundVideo";

const IntroVideo = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <BackgroundVideo src={"/background_videos/intro_video.mp4"} speed={1} />
      <div className="absolute w-full h-full z-10 overlay">
        <img
          src="/cityP.png"
          alt="City"
          className="object-contain h-full w-full"
        />
      </div>
    </div>
  );
};

export default IntroVideo;
