"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../@/lib/utils";

const IntroVideo = () => {
  const [hover, sethover] = useState(false);

  return (
    <div className="relative min-h-[100dvh]  bg-[#00000071] flex py-auto items-center justify-evenly w-full md:px-4 ">
      <AnimatePresence>
        {hover && (
          <motion.p
            className={cn(
              "-z-20 absolute text-slate-700 text-[8rem] font-greek opacity-50 left-0 animate-fadeIn"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            CAMPUS AMBASSADOR
          </motion.p>
        )}
      </AnimatePresence>
      <Card className="w-3/5 z-20 font-Chakra hidden md:block">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-3xl md:text-4xl text-white font-bold text-center">
            Glimpse Of <span className="text-pink-400">Technovate 2022</span>
          </h1>
          <p className="text-white text-center text-lg md:text-2xl">
            The annual techno-cultural fest of{" "}
            <span className="text-pink-400">IIIT Naya Raipur</span>
          </p>
          <p className="text-white text-center text-lg md:text-2xl ">
            Apply For&nbsp;
            <a
              className=" text-pink-400 shadow-inner campusA cursor-pointer text-2xl scale-100  hover:underline transition-all duration-300"
              onMouseEnter={() => sethover(true)}
              onMouseLeave={() => sethover(false)}
            >
              campus ambassador
            </a>
          </p>
        </div>
      </Card>
      <div>
        <div className="z-10">
          <video
            autoPlay
            loop
            muted
            className={cn(
              "w-full  h-full object-cover transition-all  duration-300 z-20",
              {
                "md:object-contain  shadow-2xl border-2 h-[60vh]  hidden md:block": true,
                "border-pink-500 ": hover,
              }
            )}
          >
            <source
              src={"/background_videos/intro_video _desktop.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
        <video
          autoPlay
          loop
          muted
          className={cn(
            "md:object-cover shadow-2xl min-h-screen w-screen block md:hidden"
          )}
        >
          <source src={"/background_videos/intro_video.mp4"} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default IntroVideo;
