"use client"
import React from "react";
import {Card} from "@/components/ui/card"
import { cn } from "../../../@/lib/utils";

const IntroVideo = () => {
  return (
    <div className="relative min-h-[100dvh]  bg-[#00000071] flex py-auto items-center justify-evenly w-full md:px-4 ">
      <Card className="w-3/5 font-Chakra hidden md:block">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-3xl md:text-4xl text-white font-bold text-center">
            Glimpse Of <span className="text-pink-400">Technovate 2022</span>
          </h1>
          <p className="text-white text-center text-lg md:text-2xl">
            The annual techno-cultural fest of <span className="text-pink-400">IIIT Naya Raipur</span>
          </p>
        </div>
      </Card>
      <div>
      <video
        autoPlay
        loop
        muted
        className={cn("w-full h-full object-cover", {
          "md:object-contain  shadow-2xl border-2 h-[60vh] hidden md:block": true,
        })}
      >
        <source src={"/background_videos/intro_video _desktop.mp4"} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        className={cn("md:object-cover shadow-2xl min-h-screen w-screen block md:hidden")}
      >
        <source src={"/background_videos/intro_video.mp4"} type="video/mp4" />
      </video>
      </div>
    </div >
  );
};

export default IntroVideo;
