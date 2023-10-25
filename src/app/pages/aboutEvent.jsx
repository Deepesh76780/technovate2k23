import React from 'react'
import Marquee from "react-fast-marquee";
import EventCard from "../components/eventCard";


export default function AboutEvent() {
  return (
    <div className="relative overflow-hidden w-full">
    <section class="pt-32 pb-32 relative">
      <div
        class="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat  bg-fixed"
        style={{
          backgroundImage: `url(/png_images/test3.jpg)`,
        }}
      ></div>
      <div class="w-full">
            <Marquee>
              <EventCard Img={"/star_images/ash_king.jpg"}/>
              <EventCard Img={"/star_images/aashish_solanki.jpg"}/>
              <EventCard Img={"/star_images/gajendra_verma.jpg"}/>
            </Marquee>
        </div>
    </section>
  </div>
  )
}
