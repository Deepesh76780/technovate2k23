"use client"
import React from 'react'
import {
  Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent
} from "@/components/ui/card"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"



export default function EventCard({ store }) {

  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        stiffness: 260,
        duration: 2,
      }
    }
  }

  return (
    <motion.div
      animate="show"
      initial="hidden"
      variants={item}
      className=" flex md:flex-row flex-col md:gap-0 gap-5  justify-evenly  md:m-5 place-items-center w-full"  >
      <Card
        className="card  bg-[#9c149c6e] h-full lg:w-2/5 w-3/5 text-center shadow-inner shadow-black  lg:p-2 p-1 "
      >
        <Image
          src={"/past_star_images/ash_king.png"}
          width={500}
          height={500}
          className='h-full w-full'
          alt={"jai shree ram"}
          priority
        />
      </Card>
      <Separator className=" md:hidden visible h-[1px] w-full bg-slate-500 mx-[1px]" />
      <Card className="flex flex-col gap-5">
        <CardHeader>
          {store.Event}
          <Badge variant="outline" >
            {store.Mode}
          </Badge>
        </CardHeader>
        <CardTitle className="flex flex-col items-start">
          {
            store.Distribution.map((item, index) => {
              return <div key={index}>
                {item}
              </div>
            })
          }
        </CardTitle>
        <CardFooter className="flex flex-col items-start">
          {
            store.Event_Heads.map((item, index) => {
              return <div key={index}>
                {item}
              </div>
            })
          }
        </CardFooter>
      </Card>
    </motion.div >
  )
}
