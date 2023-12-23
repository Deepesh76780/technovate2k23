"use client"
import React from 'react'
import {
  Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent
} from "@/components/ui/card"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'



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
    <>
      <motion.div
        animate="show"
        initial="hidden"
        variants={item}
        className=" flex md:flex-row flex-col lg:justify-evenly justify-evenly  md:m-5 place-items-center w-full md:gap-0 gap-3">
        <Card
          className="card  bg-[#9c149c6e] h-full md:w-2/5 w-3/5 text-center shadow-inner shadow-black  lg:p-2 p-1 place-self-start"
        >
          <Image
            src={"/past_star_images/ash_king.png"}
            width={500}
            height={500}
            className='h-full w-full'
            alt={"event"}
            priority
          />
        </Card>
        <Separator className="md:w-[0.5px] md:h-[300px] h-[1px] w-full  bg-slate-300 mx-[1px]" />
        <Card className="flex flex-col gap-5 md:w-[220px] w-full ">
          <CardHeader className="text-sm font-cyberstar">
            {store?.Event && store.Event}
            <Badge variant="destructive" >
              {store?.Mode && `Mode - ${store.Mode}`}
            </Badge>
          </CardHeader>
          <CardContent className="text-muted text-xs text-purple-200 underline font-glitch">
            {store?.about && store.about}
          </CardContent>
          <CardTitle className="flex flex-col items-start text-xs font-Chakra" >
            <div className='flex md:gap-5 gap-3 mb-2'>
              <p className='text-[0.6rem] text-black bg-purple-300 p-1 rounded-xl hover:bg-slate-50 px-2  transition-all duration-500  cursor-pointer' >
                rule book
              </p>
              <p className='text-[0.6rem] text-black bg-purple-300 p-1 rounded-xl hover:bg-slate-50  px-2 transition-all duration-300 cursor-pointer'>
                register
              </p>
            </div>
            Prices:
            {
              store?.Distribution && store.Distribution.map((item, index) => {
                return <div key={index}>
                  {item}
                </div>
              })
            }
          </CardTitle>
          <CardFooter className="flex flex-col items-start text-xs text-purple-200 font-Chakra">
            Heads :
            {store?.Event_Heads &&
              store.Event_Heads.map((item, index) => {
                return <div key={index}>
                  {item}
                </div>
              })
            }
          </CardFooter>
        </Card>
      </motion.div >
    </>
  )
}
