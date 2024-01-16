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
        <a href={rulebook} target="_blank">
          <button
            className="text-white md:absolute md:right-32 hover:bg-white hover:text-black pb-0.5 relative hidden md:block md:top-10 border-2 px-2  md:text-[1rem] rounded-full text-[0.8rem]  cursor-pointer  transition-all duration-500"
            title={"Event rules"}
          >
            General rule
          </button>
        </a>
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
        <Card className="flex flex-col gap-5 md:w-[520px]   w-full font-Chakra overflow-y-scroll h-full custom">
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
          <CardContent className="text-muted lg:text-base text-sm text-purple-200 underline font-Chakra">
            {store?.about && store.about}
          </CardContent>
          <CardTitle className="flex flex-col items-start lg:text-base text-sm">
            <div className="flex md:gap-5 gap-3 mb-2">
              <a
                href={store.brochure}
                target="_blank"
                className="lg:text-base text-sm text-black bg-purple-300 p-1 rounded-2xl hover:bg-slate-50 px-3 hover:rounded-xl transition-all duration-700 font-Chakra  cursor-pointer no-underline"
              >
                Rule Book
              </a>
              <a
                href={store.register}
                target="_blank"
                className="lg:text-base text-sm text-black  bg-purple-300 p-1 hover:bg-slate-50 px-3 hover:rounded-xl rounded-2xl font-Chakra  transition-all duration-700 cursor-pointer no-underline"
              >
                Register
              </a>
            </div>

            <div className="text-white mt-2 font-Chakra">
              Prizes:
              {store?.Distribution &&
                store.Distribution.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
            </div>
          </CardTitle>
          <CardFooter className="flex flex-col items-start lg:text-base text-sm text-purple-200 font-Chakra">
            Heads :
            {store?.Event_Heads &&
              store.Event_Heads.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
          </CardFooter>
          <a href={rulebook} target="_blank">
            <button
              className="text-white md:hidden block hover:bg-white hover:text-black w-full mb-2 border-2 px-2   rounded-full text-[0.8rem]  cursor-pointer  transition-all duration-500"
              title="go back"
            >
              General Rules
            </button>
          </a>
        </Card>
      </motion.div>
    </>
  );
}
