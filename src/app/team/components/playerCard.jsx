
"use client"
import React from 'react'
import {
  Card,
  CardFooter,
} from "@/components/ui/card"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PlayerCard({ navigateUrl, playerName, imgUrl, playerTask }) {
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

        <Link href={`/team/${navigateUrl}`}>
          <Card className="card text-center shadow-md overflow-hidden  border-2  w-48  cursor-pointer transition-all duration-300">
            <Image
              src={imgUrl}
              width={1500}
              height={1500}
              className='w-full h-48 md:h-52 scale-100 hover:scale-125 transition-all duration-300 '
              alt={playerName}
            />
            <CardFooter className="bg-cyan-200 py-1 tracking-wider text-[0.7rem] md:text-xs w-full">
              <p className='truncate mx-auto font-Orbitron '>
                {playerTask}
              </p>
            </CardFooter>
            <CardFooter className="mx-auto font-cyberstar tracking-widest uppercase bg-cyan-200 p-1 px-5 text-xs md:text-sm w-full">
              <p className='mx-auto font-blackop line-clamp-2 h-[40px] flex items-center justify-center'>
                {playerName}
              </p>
            </CardFooter>
          </Card>
        </Link>
      </motion.div>
  )
}
