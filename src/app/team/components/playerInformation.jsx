import React from 'react'
import {
  Card,
} from "@/components/ui/card"
import Image from 'next/image'

export default function PlayerInfo() {
  return (
    <Card className="text-center shadow-md overflow-hidden h-[80%]  border-2 w-2/5 hover:scale-105 cursor-pointer transition-all duration-300 my-auto card">
      <Image
        src={"/past_star_images/ash_king.jpg"}
        width={1000}
        height={1000}
        className='w-full h-full'
        alt={"jai shree ram"}
      />
    </Card>
  )
}
