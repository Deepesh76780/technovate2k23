"use client";
import React from "react";
import SponserCard from "../components/sponserCard";
import ComingSoonText from "../../components/comingSoon";
import { sponsers } from "../../../styles/data";


export default async function Sponsers() {
  return (
    <div className='flex custom  flex-col gap-8 md:gap-14  justify-center mx-auto w-fit'>
      {sponsers.map((item, index) => {
        return (
          <div
            className="flex flex-col  w-full h-full gap-8"
            key={index}
          >
            <h1 className="text-2xl md:text-4xl tracking-widest font-bold text-center font-glitch text-emerald-300">
              OUR PARTNER
            </h1>
            {item.data.length ? (
              <div className="flex flex-wrap w-full justify-center gap-9 ">
                {item.data.map((item) => {
                  return <SponserCard sponserdata={item} key={item.name} />;
                })}
              </div>
            ) : (
              <div className="text-center">
                <ComingSoonText />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
