
"use client"
import React from 'react'
import {
  Card,
  CardFooter,
} from "@/components/ui/card"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PlayerCard({ navigateUrl, playerTask, imgUrl }) {
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
        <Card className="card text-center shadow-md overflow-hidden  border-2  w-44 hover:scale-105 cursor-pointer transition-all duration-300">
          <Image
            src={imgUrl}
            width={1000}
            height={1000}
            className='w-full h-52'
            alt={"jai shree ram"}
          />
          <CardFooter className="mx-auto font-cyberstar tracking-widest uppercase bg-cyan-200 p-1 px-5 text-sm w-full">
            <p className='truncate mx-auto'>
              {playerTask}
            </p>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
