import React from 'react'
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'


export default function PlayerCard({navigateUrl,playerTask}) {
  return (
    <Link href={`/event/${navigateUrl}`}>
    <Card className="text-center shadow-xl shadow-cyan-500 p-1 w-44 hover:scale-105  hover:shadow-cyan-400  cursor-pointer transition-all duration-300">
        <Image 
          src={"/star_images/ash_king.jpg"}
          width={1000}
          height={1000}
          className='w-full h-full'
          alt={"jai shree ram"}
        />
      <CardFooter className="mx-auto mt-2 uppercase bg-cyan-200 p-1 text-sm w-full">
        <p className='truncate mx-auto'>
         {playerTask}
        </p>
      </CardFooter>
    </Card>
  </Link>
  )
}
