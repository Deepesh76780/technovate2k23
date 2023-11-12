"use client"
import React from 'react'
import {
  Card,
} from "@/components/ui/card"
import Image from 'next/image'
import { motion } from 'framer-motion'


export default function EventCard() {

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
      className=" flex flex-row justify-between  lg:m-5 place-items-center w-full"  >
      <Card
        className="card  bg-[#9c149c6e] h-full w-2/5 text-center shadow-inner shadow-black p-2  "
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
      <Card>
        jai shree ram
      </Card>
    </motion.div >
  )
}
