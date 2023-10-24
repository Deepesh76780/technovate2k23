import Image from "next/image";
import React from "react";
import BackgroundVideo from "../components/backgroundVideo";

const IntroVideo = () => {
  return (
    <div className="relative w-screen h-screen  bg-[#00000071] shadow-2xl shadow-green-400">
      <div className="rotate-12 border-2 border-pink-400">
        <BackgroundVideo src={"/background_videos/intro_video.mp4"} speed={1} />
      </div>
    </div>
  );
};

export default IntroVideo;
