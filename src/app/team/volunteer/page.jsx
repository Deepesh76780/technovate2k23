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
      <div className="h-full md:w-2/6 md:flex md:flex-col grid grid-cols-3 flex-wrap  w-full items-center justify-center md:gap-2 gap-2">
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
      <div className="cus h-full w-5/6  overflow-y-scroll custom flex flex-col  items-center">
        <p className="text-center font-Michroma tracking-wider md:text-2xl text-sm underline text-white ">
          {data}
        </p>
        <div className="text-white   mx-6 mt-10 grid md:grid-cols-4 grid-cols-1 justify-items-start justify-stretch  gap-3" >
          {volunteerlist[0].map((item, index) => (
            <li key={index} className=" rounded-2xl md:text-base text-sm h-fit font-Chakra list-disc ">{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
