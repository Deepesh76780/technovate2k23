"use client";
import React from "react";
import { motion } from "framer-motion";
import Title from "../components/Title";

export default function AboutUsPage() {
  return (
    <div className="relative overflow-hidden w-full">
      <section className="lg:pt-32 lg:pb-32 pt-20 pb-20 relative">
        <div className="absolute w-full h-full top-0 left-0 bg-about-parallex bg-cover bg-center bg-no-repeat opacity-90 bg-fixed"></div>
        <Title title="OUR STORY" />
        <div className="w-full md:p-10 p-3 mt-[4.5rem]">
          <motion.h1
            className="pink_selector sty font-Chakra border-2  border-pink-500 text-slate-300 lg:text-base text-xs display-2 text-center relative max-w-[60rem]  mx-auto font-bold tracking-widest bg-blackparent md:p-10 py-10 px-5 shadow-pink-400 shadow-inner"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={true}
          >
            Technovate at IIIT-NR is an annual convergence of technology and
            culture, encompassing coding competitions, hacking contests, 
            battle of bands, and keynote sessions by innovation experts.
            Spanning three dynamic days, it provides a platform for
            inventive thinking, spotlighting ingenious ideas and cultural
            talents. Attendees can engage in collaborative learning, network
            with like-minded individuals, and explore cutting-edge
            technologies.The event includes stand-up performances, soul-stirring
            melodies, and EDM beats, creating a vibrant oasis where students can
            celebrate their skills and passions. Following the success of the
            previous edition with 5000 participants, this year anticipates an
            even larger turnout of over 7000, solidifying Technovate as a
            thriving celebration of creativity and expertise. With its dynamic
            mix of events and a growing community, Technovate continues to
            evolve as a significant platform where technology and culture
            converge harmoniously.
          </motion.h1>
        </div>
      </section>
    </div>
  );
}
