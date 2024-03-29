"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

function PlayerInfo({ props }) {
  const router = useRouter();

  const itemVariants = {
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
    <motion.div
      variants={itemVariants}
      animate="show"
      initial="hidden"
      className={`flex md:flex-row w-[70%] flex-col items-center  md:justify-around justify-evenly text-sm text-slate-100 font-Michroma tracking-widest lg:gap-5 md:gap-3 gap-7`}
    >
      <button
        className="text-white md:absolute md:right-5 hover:bg-white hover:text-black pb-0.5 relative hidden md:block md:top-10 border-2 px-2  md:text-[1rem] rounded-full text-[0.8rem]  cursor-pointer  transition-all duration-500"
        title="go back"
        onClick={() => {
          router.back();
        }}
      >
        ◄ Back
      </button>
      <Card className="text-center shadow-md overflow-hidden lg:h-[60vh] h-64  border-2 lg:w-2/5 w-full  transition-all duration-300 lg:my-auto card">
        <Image
          src={props.imgUrl}
          width={1000}
          height={1000}
          className="w-full h-full"
          alt={props.name}
        />
      </Card>
      <Separator className="md:w-[0.5px] md:h-[300px] h-[1px] w-full  bg-slate-300 mx-[1px]" />
      <Card className="flex flex-col md:gap-2 gap-1">
        <CardHeader className="flex flex-col md:gap-2 gap-1  font-Chakra tracking-[0.2em]">
            <CardTitle className="md:text-2xl text-sm  underline font-Chakra">
              {props.name}
            </CardTitle>
          
          <CardDescription className="md:text-lg text-sm font-Chakra">
            {props.about}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-2">
          <div className="flex gap-2 place-items-center">
            <BiPhoneCall className="md:h-5 md:w-5 h-5 w-4" />
            <p className="md:text-lg text-sm font-Chakra">{props.phone}</p>
          </div>
          <div className="flex flex-row gap-2">
            <a href={`https://${props.linkedIn}`} target="_blank" >
              <BsLinkedin className="h-5 w-5 hover:scale-125 transition-all duration-300" />
            </a>
            <a href="#" target="_blank">
              <AiOutlineMail className="h-5 w-5 hover:scale-125 transition-all duration-300" />
            </a>
            <button
              className="text-white md:hidden block   px-2   rounded-full text-[0.8rem]  cursor-pointer  transition-all duration-500"
              title="go back"
              onClick={() => {
                router.back();
              }}
            >
              ◄ Back
            </button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default PlayerInfo;
