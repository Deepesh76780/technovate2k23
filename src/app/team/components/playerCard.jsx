import React from 'react'
import {
  Card,
  CardFooter,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

export default function PlayerCard({ navigateUrl, playerTask }) {
  return (
    <Link href={`/team/${navigateUrl}`}>
      <Card className="text-center shadow-md overflow-hidden  border-2  w-44 hover:scale-105 cursor-pointer transition-all duration-300">
        <Image
          src={"/star_images/ash_king.jpg"}
          width={1000}
          height={1000}
          className='w-full h-full'
          alt={"jai shree ram"}
        />
        <CardFooter className="mx-auto uppercase bg-cyan-200 p-1 text-sm w-full">
          <p className='truncate mx-auto'>
            {playerTask}
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}
