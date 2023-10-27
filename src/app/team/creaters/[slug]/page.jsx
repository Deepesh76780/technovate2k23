import React from 'react'
import PlayerInfo from "../../components/playerInformation"
import {
  Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent
} from "@/components/ui/card"
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import {BiPhoneCall} from "react-icons/bi"
import Link from 'next/link'

export default function page({ params }) {
  return (
    <div className={`flex flex-row items-center  justify-around text-sm text-slate-100 font-Michroma tracking-widest`}>
      <PlayerInfo />
      <Card className="flex flex-col gap-2">
        <CardHeader className="flex flex-col gap-2">
          <CardTitle className="text-xs w-48 truncate">Deepesh Agrawal</CardTitle>
          <CardDescription >Website Head</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-2">
          <div className='flex gap-2'>
            <BiPhoneCall className='h-5 w-5'/> <p className='text-xs'>+916213876128</p>
          </div>
          <div className='flex flex-row gap-2'>
            <Link href="#">
              <BsLinkedin className='h-5 w-5'/>
            </Link>
            <Link href="#">
              <AiOutlineMail className='h-5 w-5'/>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
