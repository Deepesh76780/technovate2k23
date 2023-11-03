"use client"
import React from 'react'
import {
    Card,
    CardFooter,
    CardTitle
} from "@/components/ui/card"
import Image from 'next/image'
import { motion } from "framer-motion"

export default function SponserCard({ sponserName }) {

    const item = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                stiffness: 260,
                duration: 2
            }
        }

    }

    return (
        <motion.div
            variants={item}
            animate="show"
            initial="hidden"
        >
            <Card className="text-center card shadow-inner border-2 hover:shadow-emerald-600 w-48 h-56 overflow-hidden cursor-pointer transition-all duration-300">
                <CardTitle className='relative w-full h-[90%]'>
                    <Image
                        src={"/past_star_images/ash_king.png"}
                        alt={"Sponsers Card"}
                        fill
                    />
                </CardTitle>
                <CardFooter className="mx-auto justify-center font-cyberstar font-medium tracking-widest uppercase bg-emerald-300 p-1 text-sm h-[10%] w-full">
                    {sponserName}
                </CardFooter>
            </Card>
        </motion.div>
    )
}
