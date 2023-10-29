import React from 'react'
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

export default function EventCard({ navigateUrl, eventName }) {
  return (
    <Link href={`/event/${navigateUrl}`}>
      <Card className="card bg-[#2304236e]  text-center shadow-inner shadow-black p-2 w-40  hover:scale-90    cursor-pointer transition-all duration-300">
        <Image
          src={"/past_star_images/ash_king.png"}
          width={1000}
          height={1000}
          className='card w-full h-32'
          alt={"jai shree ram"}
        />
        <CardFooter className="text-center mx-auto mt-2 uppercase text-sm w-28 font-cyberstar tracking-widest  p-2">
          <p className='truncate'>
            {eventName}
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}
