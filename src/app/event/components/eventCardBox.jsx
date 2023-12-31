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
        stiffness: 260,
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
        <Card className="card bg-[#9c149c6e]  text-center shadow-inner shadow-black p-2 w-32 md:w-44  hover:scale-95  cursor-pointer transition-all duration-300">
          <Image
            src={"/events/technical/algosprint_mobile.png"}
            width={1000}
            height={1000}
            className='w-full h-24 md:h-36'
            alt={eventName}
          />
          <CardFooter className="mx-auto mt-2 uppercase text-xs w-full font-cyberstar tracking-widest p-1 md:p-2">
            <p className='text-center mx-auto text-white'>
              {eventName}
            </p>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
