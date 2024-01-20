"use client";
import React from "react";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SponserCard({ sponserdata }) {
  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        stiffness: 260,
        duration: 2,
      },
    },
  };

  return (
    <motion.div variants={item} animate="show" initial="hidden">
      <Card className="text-center shadow-md overflow-hidden  w-64  transition-all duration-300 rounded">
        <Image
          src={sponserdata.logo}
          width={1500}
          height={1500}
          className="w-full h-48 md:h-52 scale-125 hover:scale-100 transition-all duration-300 object-fill"
          alt={sponserdata.name}
          priority
        />
        <CardFooter className="bg-emerald-400 py-1 tracking-wider text-[0.7rem] md:text-xs w-full">
          <p className="truncate mx-auto font-Orbitron ">{sponserdata.sub}</p>
        </CardFooter>
        <CardFooter className="mx-auto font-cyberstar  uppercase bg-emerald-400 p-1 px-5 text-xs md:text-[0.8rem] w-full">
          <p className="mx-auto font-blackop line-clamp-2 h-[32px] flex items-center justify-center">
            {sponserdata.name}
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
