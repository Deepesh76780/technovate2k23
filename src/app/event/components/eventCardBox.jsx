import React from 'react'
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

export default function EventCard({navigateUrl,eventName}) {
  return (
    <Link href={`/event/${navigateUrl}`}>
    <Card className="card bg-[#400c4097]  text-center shadow-inner shadow-black p-5 w-fit hover:scale-105  hover:bg-[#00000038]  cursor-pointer transition-all duration-300">
      <CardHeader>
        <Image 
          src={"/star_images/ash_king.jpg"}
          width={1000}
          height={1000}
          className='w-full h-20'
          alt={"jai shree ram"}
        />
      </CardHeader>
      <CardFooter className="text-center mx-auto w-fit mt-2 ">
         {eventName}
      </CardFooter>
    </Card>
  </Link>
    )
}
