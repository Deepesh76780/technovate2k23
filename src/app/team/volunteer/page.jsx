"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "../../../../@/lib/utils";
import { useState } from "react";
import { volunteerData } from "../../../styles/data";

export default function page() {
  const [data, setData] = useState("Cultural Events Team");
  const volunteerlist = volunteerData
    .filter((item) => item.name === data)
    .map((item) => item.data);
    console.log(volunteerlist)
  return (
    <div className="w-full h-full md:flex md:flex-row items-center flex flex-col-reverse justify-center gap-2 ">
      <div className="h-full w-2/6 flex flex-col items-center justify-center gap-2">
        {volunteerData.map((item) => {
          return (
            <Badge
              href="#"
              className={cn(
                "text-center md:text-xs text-[0.4rem] font-blackop cursor-pointer tracking-widest uppercase min-w-32 max-w-full hover:scale-110 transition-all duration-300 text-cyan-500",
                {
                  "text-white": data === item.name,
                }
              )}
              onClick={(e) => setData(item.name)}
              key={item.name}
            >
              {(data===item.name) && "▶  "} 
              {item.name}
            </Badge>
          );
        })}
      </div>
      <Separator className="md:w-[0.5px] md:h-[300px] h-[1px] w-full  bg-slate-300 mx-[1px] " />
      <div className="cus h-full w-5/6  overflow-y-scroll custom flex flex-col justify-evenly items-center">
        <p className="text-center font-Michroma tracking-wider md:text-2xl text-sm underline text-white h-1/6">
          {data}
        </p>
        <div className="text-white h-5/6 flex flex-row flex-wrap gap-3">
          
          {volunteerlist[0].map((item, index) => (
            <p key={index} className=" rounded-2xl mx-3 text-lg h-fit font-Chakra">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
