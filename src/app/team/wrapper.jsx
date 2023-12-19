"use client"
import React from "react";
import Image from "next/legacy/image";
import Navbar from "../components/nav";
import BottomButton from "./components/bottomButton";
import { motion } from "framer-motion"

export default function Wrapper({ children }) {
    return (
        <React.Fragment>
            <Image
                layout="fill"
                className="object-cover"
                src={"/background_images/teams.jpg"}
                alt={"title"}
                objectFit="center"
                priority={true}
            />
            <Navbar bgcolor={"bg-[#40d0db]"} resColor="#40d0db" />
            <main className="flex flex-col md:min-h-screen  h-[100dvh] justify-between w-full overflow-x-hidden pt-16 md:p-5 p-3 ">
                <div className="relative z-1 h-[70vh] md:w-[43%] w-full my-auto">
                    <motion.div className='p-1 styleEvent  h-full w-full  border-2 shadow-inner bg-blackparent shadow-cyan-200 border-cyan-200 '
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: "just" }}
                    >
                        <div className=" overflow-y-scroll cus h-full w-full p-2 md:p-5 flex flex-row flex-wrap overflow-auto gap-5 md:gap-10 justify-center">
                            {children}
                        </div>
                    </motion.div>
                </div>
                <BottomButton />
            </main>
        </React.Fragment>
    );
}