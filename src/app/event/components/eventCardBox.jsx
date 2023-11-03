"use client"
import { motion } from 'framer-motion'
import React from 'react'
import {
  Card,
  CardFooter,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

export default function EventCard({ navigateUrl, eventName }) {

  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 60,
        duration: 2,
      }
    }
  }

  return (
    <motion.div
      variants={item}
      animate="show"
      initial="hidden"
    >
      <Link href={`/event/${navigateUrl}`}>
        <Card className="card bg-[#2304236e]  text-center shadow-inner shadow-black p-2 w-40  hover:scale-95    cursor-pointer transition-all duration-300">
          <Image
            src={"/past_star_images/ash_king.png"}
            width={1000}
            height={1000}
            className='card w-full h-32'
            alt={"jai shree ram"}
          />
          <CardFooter className="text-center mx-auto mt-2 uppercase text-sm w-28 font-cyberstar tracking-widest  p-2">
            <p className='truncate'>
              {eventName}
            </p>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
