"use client"
import React from "react";
import Image from "next/legacy/image";
import Navbar from "../components/nav";
import { motion } from "framer-motion"
import { cn } from "../../../@/lib/utils"
import BottomButton from "./bottomButton"



export default function Wrapper({ children, bgImage, navColor, borderColor, paths, layout ,flexClass}) {

    return (
        <React.Fragment>
            <Image
                layout="fill"
                className="object-cover opacity-80"
                src={bgImage}
                alt={"title"}
                objectFit="center"
                priority={true}
            />
            <Navbar bgcolor={navColor} />
            <main className="flex flex-col h-[100dvh] md:min-h-screen  overflow-x-hidden pt-7 md:pt-16 md:px-16 px-6 md:p-5 p-1">
                <div className="w-full  relative z-1 h-[70vh] my-auto">
                    <motion.div
                        className={cn("p-1 styleEvent h-full w-full  bg-[#0000008f]   border-2", borderColor)}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: "just" }}
                    >
                        <div className={cn("overflow-y-scroll  overflow-x-hidden cus h-full w-full p-1 flex flex-row flex-wrap  lg:gap-5 gap-2 justify-center place-items-center",flexClass)}>
                            {children}
                        </div>
                    </motion.div>
                </div>
                <BottomButton paths={paths} layout={layout} />
            </main>
        </React.Fragment>
    );
}