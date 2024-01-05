"use client"
import React from 'react'
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from '../../../../@/lib/utils';
import { useState } from 'react';

const AllTeam=["Content","Design","Marketing","Cultural","Hospitality ","Technical","Outlook","Video Editing","Website","sponsership"]

export default function page() {

  // const data = team.filter(item => item.criteria === "marketing")
  const [data, setData] = useState("Content")
  console.log(data)
  return (<div className='w-full h-full md:flex md:flex-row items-center flex flex-col-reverse justify-center gap-2'> 
    <div className='h-full w-1/6 flex flex-col items-center justify-center gap-1'>
      {
        AllTeam.map((item)=>{
          return <Badge
          href="#"
          className={cn(
            "text-center  md:text-xs  text-[0.4rem] font-blackop cursor-pointer  tracking-widest   uppercase  min-w-32 max-w-full hover:scale-110 transition-all duration-300  text-cyan-500"
            ,{
              "text-pink-300":data===item,
            })}
            onClick={(e) => setData(item)}>
            {item}
          </Badge>
        })
       
      }
    </div>
    <Separator className="md:w-[0.5px] md:h-[300px] h-[1px] w-full  bg-slate-300 mx-[1px]" />
    <div className='cus h-full w-5/6  overflow-y-scroll custom'>
      <p className='text-center font-Michroma tracking-wider text-2xl text-white'>
        {data} Team
      </p>
     
    </div>
  </div>

    // data.map((item) => {
    //   return <PlayerCard key={item.id} navigateUrl={`marketing/${item.id}`} playerName={item.name} imgUrl={item.imgUrl} />
    // })

  )
}
