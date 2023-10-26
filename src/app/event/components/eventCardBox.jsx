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
    <Card className="card bg-[#400c4097]  text-center shadow-inner shadow-black p-5 w-36 hover:scale-105  hover:bg-[#00000038]  cursor-pointer transition-all duration-300">
        <Image 
          src={"/star_images/ash_king.jpg"}
          width={1000}
          height={1000}
          className='w-full h-28'
          alt={"jai shree ram"}
        />
      <CardFooter className="text-center mx-auto mt-2 uppercase text-sm w-28">
        <p className='truncate'>
         {eventName}
        </p>
      </CardFooter>
    </Card>
  </Link>
    )
}
