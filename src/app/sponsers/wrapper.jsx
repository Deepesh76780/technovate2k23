"use client"
import React from "react";
import Image from "next/legacy/image";
import Navbar from "../components/nav";
import SideButton from "./components/sideButton";
import { motion } from "framer-motion"

const Wrapper = ({ children }) => {
    return (
        <React.Fragment>
            <Image
                layout="fill"
                className="object-cover"
                src={"/background_images/sponsers1.jpg"}
                alt={"title"}
                objectFit="center"
                priority={true}
            />
            <Navbar bgcolor={"bg-[#40dbb2]"} resColor="#40dbb2" />
            <main className=" flex flex-col md:min-h-screen h-[100dvh] items-center justify-between overflow-x-hidden pt-16 md:px-9 p-5">
                <div className="flex flex-row relative z-1 h-[70vh] md:w-[80%] w-full my-auto">
                    <motion.div className='p-1 h-full w-full border-2 styleEvent shadow-inner shadow-emerald-300 bg-blackparent border-emerald-200'
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: "just" }}
                    >
                        <div className=" overflow-y-scroll cus h-full w-full md:p-5 p-3 flex flex-row flex-wrap overflow-auto gap-10 justify-center">
                            {children}
                        </div>
                    </motion.div>
                </div>
                <SideButton />
            </main>
        </React.Fragment>
    )
}

export default Wrapper