"use client"
import React from 'react'
import {
  Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent
} from "@/components/ui/card"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useRouter } from 'next/navigation'



export default function EventCard({ store }) {

  const router = useRouter()

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
        className=" flex md:flex-row flex-col lg:justify-evenly justify-evenly  place-items-center w-full md:gap-0 gap-3">
        <Card
          className=" bg-[#9c149c6e] h-[30vh] md:h-[60vh] lg:w-[41%] md:w-[20%] w-full text-center shadow-inner shadow-black  lg:p-2 p-1 place-self-start"
        >
          <Image
            src={store.imgUrl ?? "/events/technical/algosprint_mobile.png"}
            width={1500}
            height={1500}
            className='h-full w-full'
            alt={"event"}
            priority
          />
        </Card>
        <Separator className="md:w-[0.5px] md:h-[300px] h-px w-full  bg-slate-300 mx-[1px]" />
        <Card className="flex flex-col gap-5 md:w-[520px]   w-full font-Chakra">
          <CardHeader className="flex flex-row justify-between">
            <div className='text-xl text-white'>
              {store?.Event && store.Event}
              <Badge variant="destructive" >
                {store?.Mode && `Mode - ${store.Mode}`}
              </Badge>
            </div>
            <button className='text-white border-2 p-2  md:text-[1rem] rounded-3xl text-[0.8rem]  cursor-pointer hover:scale-125 transition-all duration-500' title="go back" onClick={() => {
              router.back()
            }}>
              &larr; 
            </button>
          </CardHeader>
          <CardContent className="text-muted lg:text-base text-sm text-purple-200 underline font-Chakra">
            {store?.about && store.about}
          </CardContent>
          <CardTitle className="flex flex-col items-start lg:text-base text-sm" >
            <div className='flex md:gap-5 gap-3 mb-2'>
              <p className='lg:text-base text-sm text-black bg-purple-300 p-1 rounded-2xl hover:bg-slate-50 px-3 hover:rounded-xl transition-all duration-700 font-Chakra  cursor-pointer' >
                rule book
              </p>
              <p className='lg:text-base text-sm text-black bg-purple-300 p-1 rounded-2xl font-Chakra hover:bg-slate-50  px-3 hover:rounded-xl transition-all duration-700 cursor-pointer'>
                register
              </p>
            </div>
            <div className='text-white mt-2 font-Chakra'>
              Prizes:
              {
                store?.Distribution && store.Distribution.map((item, index) => {
                  return <div key={index} >
                    {item}
                  </div>
                })
              }
            </div>
          </CardTitle>
          <CardFooter className="flex flex-col items-start lg:text-base text-sm text-purple-200 font-Chakra">
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
