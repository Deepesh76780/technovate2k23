"use client"
import React from 'react'
import Image from 'next/image'
import {
  Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent
} from "@/components/ui/card"
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from "react-icons/bi"
import { motion } from "framer-motion"
import Link from 'next/link'

export default function PlayerInfo({ props }) {
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
      className={`flex flex-row items-center  justify-around text-sm text-slate-100 font-Michroma tracking-widest`}>
      <Card className="text-center shadow-md overflow-hidden h-[80%]  border-2 w-2/5 hover:scale-105 cursor-pointer transition-all duration-300 my-auto card">
        <Image
          src={props.imgUrl}
          width={1000}
          height={1000}
          className='w-full h-full'
          alt={"jai shree ram"}
        />
      </Card >
      <Card className="flex flex-col gap-2">
        <CardHeader className="flex flex-col gap-2 font-cyberstar tracking-[0.2em]">
          <CardTitle className="text-xs w-48 truncate">{props.name}</CardTitle>
          <CardDescription >Website Head</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-2">
          <div className='flex gap-2'>
            <BiPhoneCall className='h-5 w-5' /> <p className='text-xs'>+916213876128</p>
          </div>
          <div className='flex flex-row gap-2'>
            <Link href="#">
              <BsLinkedin className='h-5 w-5' />
            </Link>
            <Link href="#">
              <AiOutlineMail className='h-5 w-5' />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
