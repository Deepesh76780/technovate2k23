import React from 'react'
import {
  Card,
} from "@/components/ui/card"
import Image from 'next/image'

export default function EventCard() {
  return (
    <Card className="card bg-[#25052597]  text-center shadow-inner shadow-black p-5 h-full w-[60%]">
      <Image
        src={"/past_star_images/ash_king.png"}
        width={500}
        height={500}
        className='h-full'
        alt={"jai shree ram"}
        priority
      />
    </Card>
  )
}
