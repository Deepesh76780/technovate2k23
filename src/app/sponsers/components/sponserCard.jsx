import React from 'react'
import {
    Card,
    CardFooter,
    CardTitle
} from "@/components/ui/card"
import Image from 'next/image'

export default function SponserCard({ sponserName }) {
    return (
        <Card className="text-center card shadow-inner border-2 hover:shadow-emerald-500 w-48 h-56 overflow-hidden cursor-pointer transition-all duration-300">
            <CardTitle className='relative w-full h-[90%]'>
                <Image
                    src={"/past_star_images/ash_king.png"}
                    alt={"Sponsers Card"}
                    fill
                />
            </CardTitle>
            <CardFooter className="mx-auto justify-center uppercase bg-emerald-200 p-1 text-sm h-[10%] w-full">
                {sponserName}
            </CardFooter>
        </Card>
    )
}
