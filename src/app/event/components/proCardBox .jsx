"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

export default function EventCard({ store, rulebook }) {
  const router = useRouter();
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
    <>
      <motion.div
        animate="show"
        initial="hidden"
        variants={item}
        className=" flex md:flex-row flex-col lg:justify-evenly justify-evenly  place-items-center w-full md:gap-0 gap-3"
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
        <Card className=" bg-[#9c149c6e] h-[30vh] md:h-[60vh] lg:w-[41%] md:w-[20%] w-full text-center shadow-inner shadow-black  lg:p-2 p-1 place-self-start">
          <Image
            src={store.imgUrl ?? "/events/technical/algosprint_mobile.png"}
            width={1500}
            height={1500}
            className="h-full w-full"
            alt={"event"}
            priority
          />
        </Card>
        <Separator className="md:w-[0.5px] md:h-[300px] h-px w-full  bg-slate-300 mx-[1px]" />
        <Card className="flex flex-col gap-5 md:w-[520px] w-full font-Chakra  h-full custom ">
          <CardHeader className="flex flex-row justify-between">
            <div className="text-xl text-white">
              {store?.Event && store.Event}
              <Badge variant="destructive">
                {store?.Mode && `Mode - ${store.Mode}`}
              </Badge>
            </div>
            <button
              className="text-white md:hidden block   px-2   rounded-full text-[0.8rem]  cursor-pointer  transition-all duration-500"
              title="go back"
              onClick={() => {
                router.back();
              }}
            >
              ◄ Back
            </button>
          </CardHeader>
          <CardFooter className="flex flex-col items-start lg:text-base text-sm text-purple-200 font-Chakra items-center">
            Grab the Tickets :
            <div className="md:flex gap-5 mt-5">
              <a href={store.register} target="_blank">
                <div className="w-full text-black text-center bg-white rounded-[.5rem] pb-[15%]">
                  One Day Pass
                </div>
                <Image
                  src="/logo/logo.png"
                  width={1500}
                  height={1500}
                  className="h-[90%] w-full bg-black rounded-[1rem] border-2 border-white mt-[-15%] mb-5"
                  alt={"event"}
                  priority
                />
              </a>
              <a href="" target="_blank">
                <div className="w-full text-black text-center bg-yellow-500 rounded-[.5rem] pb-[15%]">
                  Combo Pass 2
                </div>
                <Image
                  src="/logo/logo.png"
                  width={1500}
                  height={1500}
                  className="h-[90%] w-full bg-black rounded-[1rem] border-2 border-yellow-500 mt-[-15%] mb-5"
                  alt={"event"}
                  priority
                />
              </a>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
}
