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
      <section class="pt-32 pb-32 relative">
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat  bg-fixed"
          style={{
            backgroundImage: `url(/png_images/test3.jpg)`,
          }}
        ></div>
        <div className="w-full">
          <Marquee>
            {
              imgData.map((item, index) => {
                return <EventCard Img={item.href} key={index} />
              })
            }
          </Marquee>
        </div>
      </section>
    </div>
  )
}
