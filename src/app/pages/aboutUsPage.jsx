"use client";
import React from "react";

export default function AboutUsPage() {


  return (
    <div className="relative overflow-hidden w-full">
      <section className="pt-32 pb-32 relative">
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat  bg-fixed"
          style={{
            backgroundImage: `url(/png_images/test2.jpg)`,
          }}
        >
        </div>
        <div className="w-full p-10">
          <h1 className="pink_selector card font-cyberstar border-2 border-pink-500 text-slate-300 text-base display-2 text-center relative max-w-[80rem]  mx-auto font-bold tracking-widest bg-[#1410109a] p-10 shadow-pink-400 shadow-inner">
            Technovate, the annual symphony of technology and culture at
            IIIT-NR, is a splendid convergence of mind and artistry. In the
            enchanting month of November, this grand affair unfurls a spectacle
            of brilliance that encompasses enthralling Coding competitions,
            electrifying Hacking Competitions, pulsating Battle of Bands, and
            captivating keynote sessions by luminaries from the realms of
            innovation and creativity. Over the course of three extraordinary
            days, Technovate unveils a dynamic world, carefully designed to
            cultivate inventive thinking and unveil the brilliance of human
            potential. It serves as a majestic platform for not only unveiling
            ingenious ideas but also for showcasing one's cultural virtuosity,
            spanning from captivating stand-up performances to the soul-stirring
            melodies of renowned singers and the pulsating beats of EDM. In the
            previous edition, Technovate witnessed the enthusiasm of more than
            5000 participants, each leaving their unique mark on this grand
            canvas. In this year's edition, as the scale of the event expands
            and the anticipation grows, we envisage an even greater turnout of
            over 7000+ participants. At its core, Technovate is a dynamic oasis
            that empowers students to celebrate their skills and passions in the
            fields of their dreams.
          </h1>
        </div>
      </section>
    </div>
  );
}
