"use client";
import React from "react";
import Navbar from "../components/nav";
import { motion } from "framer-motion";
import Audio from "../components/backgroundAudio";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

const container = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 60,
      delay: 1,
      duration: 2,
    },
  },
};

const LandingPageContent = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 z-10 overlay">
      <Navbar />
      <motion.div
        className="w-full h-[50%] flex "
        variants={container}
        initial={"hidden"}
        animate={"visible"}
      >
        <h1 className="font-Chakra text-9xl tracking-widest text-center  text-slate-50 place-self-center w-full font-semibold">
          Technovate
          <motion.div className="text-2xl mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >4th - 5th Feb</motion.div>
        </h1>
      </motion.div>
      <div className="w-full h-[20%] flex justify-end max-w-[150rem] mx-auto">
        <div className="rotate-90 w-fit text-2xl text-slate-200 h-fit place-self-end">
          <div className="flex gap-2">
            <p className="place-self-center text-sm font-Orbitron tracking-wider">
              scroll down
            </p>
            <div className="place-self-center">
              <ChevronDoubleRightIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <Audio />
    </div>
  );
};

export default LandingPageContent;
