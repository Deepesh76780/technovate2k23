
"use client"
import React from 'react'
import {
  Card,
  CardFooter,
} from "@/components/ui/card"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Suspense } from 'react'

export default function PlayerCard({ navigateUrl, playerName, imgUrl }) {
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
    <Suspense fallback={<div>Loading...</div>}>
      <motion.div
        variants={item}
        animate="show"
        initial="hidden"
      >

        <Link href={`/team/${navigateUrl}`}>
          <Card className="card text-center shadow-md overflow-hidden  border-2  w-48 hover:scale-105 cursor-pointer transition-all duration-300">
            <Image
              src={imgUrl}
              width={1000}
              height={1000}
              className='w-full h-48 md:h-52 '
              alt={playerName}
            />
            <CardFooter className="mx-auto font-cyberstar tracking-widest uppercase bg-cyan-200 p-1 px-5 text-xs md:text-sm w-full">
              <p className='truncate mx-auto font-blackop'>
                {playerName}
              </p>
            </CardFooter>
          </Card>
        </Link>
      </motion.div>
    </Suspense>
  )
}
