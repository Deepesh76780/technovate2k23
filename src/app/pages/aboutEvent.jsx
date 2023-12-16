"use client"
import React from 'react'
import Marquee from "react-fast-marquee";
import EventCard from "../components/celebCard";

const imgData = [{
  href: "/past_star_images/ash_king.png",
},
{
  href: "/past_star_images/aashish_solanki.jpg",
}
  ,
{
  href: "/past_star_images/gajendra_verma.jpg",
}
  ,
{
  href: "/past_star_images/carnival.png",
}
]

export default function AboutEvent() {
  return (
    <div className="relative overflow-hidden w-full">
      <section class="lg:pt-32 lg:pb-32 pb-20 pt-20 relative">
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat  bg-fixed"
          style={{
            backgroundImage: `url(/png_images/test3.jpg)`,
          }}
        ></div>
        <div className="w-full flex flex-col lg:gap-28 gap-14">
          <div className=' md:w-[400px] w-[85%]  border-2 font-cyberway tracking-[0.3em]  shadow-xl rounded-2xl   text-slate-100 text:base lg:text-2xl  display-2 text-center relative max-w-[80rem]  mx-auto font-bold  bg-blackparent p-4 shadow-black '>
            PAST PERFORMERS
          </div>
          <Marquee>
            {
              imgData.map((item, index) => {
                return <EventCard Img={item.href} key={index} />
              })
            }
          </Marquee>
        </div>
      </section >
    </div >
  )
}
