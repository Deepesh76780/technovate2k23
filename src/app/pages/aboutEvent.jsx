"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import EventCard from "../components/celebCard";
import Title from "../components/Title";

const imgData = [
  {
    href: "/past_star_images/1.jpg",
  },
  {
    href: "/past_star_images/2.JPG",
  },
  {
    href: "/past_star_images/3.JPG",
  },
  {
    href: "/past_star_images/4.JPG",
  },
  {
    href: "/past_star_images/5.JPG",
  },
  {
    href: "/past_star_images/6.JPG",
  },
  {
    href: "/past_star_images/7.JPG",
  },
  {
    href: "/past_star_images/8.JPG",
  },
  {
    href: "/past_star_images/9.JPG",
  },
  {
    href: "/past_star_images/gajendra_verma.jpg",
  },
  {
    href: "/past_star_images/11.JPG",
  },
];

export default function AboutEvent() {
  return (
    <div className="relative overflow-hidden w-full">
      <section className="lg:pt-32 lg:pb-32 pb-20 pt-20 relative">
        <div className="absolute w-full h-full top-0 left-0 bg-event-parallex bg-cover bg-center bg-no-repeat opacity-90  bg-fixed"></div>
        <div className="w-full flex flex-col lg:gap-28 gap-14">
          <Title title={"PAST PERFORMANCES"} />
          <Marquee direction="left" pauseOnClick={true}>
            {imgData.map((item, index) => {
              return <EventCard Img={item.href} key={index} />;
            })}
          </Marquee>
        </div>
      </section>
    </div>
  );
}
