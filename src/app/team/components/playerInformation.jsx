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
import { Separator } from "@/components/ui/separator"


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
      className={`flex md:flex-row flex-col items-center  justify-around text-sm text-slate-100 font-Michroma tracking-widest lg:gap-5 gap-3`}>
      <Card className="text-center shadow-md overflow-hidden lg:h-[80%] h-52  border-2 lg:w-2/5 w-full hover:scale-105 cursor-pointer transition-all duration-300 lg:my-auto card">
        <Image
          src={props.imgUrl}
          width={1000}
          height={1000}
          className='w-full h-full'
          alt={props.name}
        />
      </Card >
      <Separator className="md:w-[0.5px] md:h-[300px] h-[1px] w-full  bg-slate-300 mx-[1px]" />
      <Card className="flex flex-col md:gap-2 gap-1">
        <CardHeader className="flex flex-col md:gap-2 gap-1  font-cyberstar tracking-[0.2em]">
          <CardTitle className="md:text-base text-xs w-48 underline">{props.name}</CardTitle>
          <CardDescription className="md:text-base text-xs">{props.about}</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-2">
          <div className='flex gap-2 place-items-center'>
            <BiPhoneCall className='md:h-5 md:w-5 h-3 w-3' /> <p className='md:text-sm text-[0.6rem]'>{props.phone}</p>
          </div>
          <div className='flex flex-row gap-2'>
            <Link href={props.linkedIn} >
              <BsLinkedin className='h-5 w-5 hover:scale-125 transition-all duration-300' />
            </Link>
            <Link href="#">
              <AiOutlineMail className='h-5 w-5 hover:scale-125 transition-all duration-300' />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div >
  )
}
