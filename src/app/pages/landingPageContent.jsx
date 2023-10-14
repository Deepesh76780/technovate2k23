"use client";
import React from "react";
import Navbar from "../components/nav";
import { motion } from "framer-motion";
import Audio from "../components/audio";

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
      damping: 20,
      duration: 0.2,
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
        <h1 className="font-Orbitron text-8xl tracking-widest text-center  place-self-center w-full">
          Technovate
          <div className="text-2xl mt-2">4th - 5th Feb</div>
        </h1>
      </motion.div>
      <Audio />
    </div>
  );
};

export default LandingPageContent;
