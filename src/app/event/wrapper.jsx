"use client"
import React from "react";
import Image from "next/legacy/image";
import SideButton from "./components/bottomButton";
import Navbar from "../components/nav";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"

const ALLOWED_PATHNAMES = ["/event/cultural", "/event/pronight", "/event/informal", "/event/technical"];

export default function Wrapper({ children }) {
    const pathname = usePathname();
    const isOverflow = ALLOWED_PATHNAMES.includes(pathname) ? "overflow-y-scroll" : "overflow-hidden";

    return (
        <>
            <Image
                layout="fill"
                className="object-cover"
                src={"/background_images/events2.jpg"}
                alt={"title"}
                objectFit="center"
                priority={true}
            />
            <Navbar bgcolor={"bg-[#a85dd1e1]"} resColor="#a85dd1e1" />
            <main className="flex flex-col h-[100dvh] md:min-h-screen  overflow-x-hidden pt-7 md:pt-16 md:px-16 px-6 md:p-5 p-1">
                <div className="lg:w-[50%]  w-full flex flex-row justify-start relative z-1 md:skew-x-12 h-[60vh] my-auto">
                    <motion.div
                        className={`p-1 styleEvent h-full w-full  bg-blackparent  text-white border-2 border-purple-400 shadow-md shadow-purple-400`}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: "just" }}
                    >
                        <div className={`overflow-y-scroll overflow-x-hidden cus h-full w-full p-1 flex flex-row flex-wrap ${isOverflow} lg:gap-5 gap-2 justify-center`}>
                            {children}
                        </div>
                    </motion.div>
                </div>
                <SideButton />
            </main>
        </>
    );
}
