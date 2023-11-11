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
          <h1 className="pink_selector card font-cyberstar border-2 border-pink-500 text-slate-300 text-base display-2 text-center relative max-w-[80rem]  mx-auto font-bold tracking-widest bg-blackparent p-10 shadow-pink-400 shadow-inner">
            Technovate at IIIT-NR is an annual fusion of technology and culture,
            featuring coding competitions, hacking contests,
            a battle of bands, and keynote sessions by innovation experts.
            Over three dynamic days in November, it offers a platform for inventive thinking,
            showcasing both ingenious ideas and cultural talents, with stand-up performances,
            soul-stirring melodies, and EDM beats. The previous edition saw 5000 participants,
            and this year anticipates an even larger turnout of over 7000, making Technovate a
            vibrant oasis empowering students to celebrate their skills and passions.
          </h1>
        </div>
      </section>
    </div>
  );
}
