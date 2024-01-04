"use client";
import React from "react";
import { motion } from "framer-motion"
import Title from "../components/Title";

export default function AboutUsPage() {


  return (
    <div className="relative overflow-hidden w-full">
      <section className="lg:pt-32 lg:pb-32 pt-20 pb-20 relative">
        <div
          className="absolute w-full h-full top-0 left-0 bg-about-parallex bg-cover bg-center bg-no-repeat opacity-90 bg-fixed"
        >
        </div>
        <Title title="OUR STORY" />
        <div className="w-full md:p-10 p-5 mt-20">
          <motion.h1 className="pink_selector sty font-Chakra border-2  border-pink-500 text-slate-300 lg:text-base text-xs display-2 text-center relative max-w-[60rem]  mx-auto font-bold tracking-widest bg-blackparent p-10 shadow-pink-400 shadow-inner"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={true}
          >
            Technovate at IIIT-NR is an annual fusion of technology and culture,
            featuring coding competitions, hacking contests,
            a battle of bands, and keynote sessions by innovation experts.
            Over three dynamic days in November, it offers a platform for inventive thinking,
            showcasing both ingenious ideas and cultural talents, with stand-up performances,
            soul-stirring melodies, and EDM beats. The previous edition saw 5000 participants,
            and this year anticipates an even larger turnout of over 7000, making Technovate a
            vibrant oasis empowering students to celebrate their skills and passions.
          </motion.h1>
        </div>
      </section>
    </div>
  );
}
