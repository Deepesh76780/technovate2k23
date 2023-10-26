import React from 'react'
import {
  Card,
} from "@/components/ui/card"
import Image from 'next/image'

export default function EventCard() {
  return (
    <Card className="card bg-[#400c4097]  text-center shadow-inner shadow-black p-5 h-full w-[60%]">
        <Image 
          src={"/star_images/ash_king.jpg"}
          width={500}
          height={500}
          className='h-full'
          alt={"jai shree ram"}
          priority
        />
    </Card>
    )
}
