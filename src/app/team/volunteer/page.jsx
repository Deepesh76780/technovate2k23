"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "../../../../@/lib/utils";
import { useState } from "react";
import { volunteerData } from "../../../styles/data";

export default function page() {
  const [data, setData] = useState("Content Writing Team");
  const volunteerlist = volunteerData
    .filter((item) => item.name === data)
    .map((item) => item.data);
  return (
    <div className="w-full h-full md:flex md:flex-row items-center flex flex-col-reverse justify-center gap-2">
      <div className="h-full w-1/6 flex flex-col items-center justify-center gap-1">
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
      <Separator className="md:w-[0.5px] md:h-[300px] h-[1px] w-full  bg-slate-300 mx-[1px]" />
      <div className="cus h-full w-5/6  overflow-y-scroll custom">
        <p className="text-center font-Michroma tracking-wider text-2xl text-white">
          {data}
        </p>

        <p className="text-white">
          {volunteerlist.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
      </div>
    </div>
  );
}
