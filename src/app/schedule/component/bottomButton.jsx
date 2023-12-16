"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"


const style = "shadow-inner card border-2  text-center md:text-xs text-[0.4rem] font-cyberblack  tracking-widest p-1  md:p-3 uppercase w-16  md:w-32 hover:scale-110 transition-all duration-300 "

export default function BottomButton() {

    const pathname = usePathname();

    const item = {
        hidden: { opacity: 0, y: 14 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 60,
                delay: 1,
                duration: 2,
            }
        },

    }


    return (
        <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="flex md:w-[40%] w-full gap-4 text-purple-300 items-center justify-center place-self-center">
            <Link className={`${style} ${pathname.startsWith("/schedule/day1") ? "shadow-red-300 border-red-400 text-red-200" : "border-amber-600 shadow-amber-300 text-amber-300"}`} href={"/schedule/day1"}>level 1</Link>
            <Link className={`${style} ${pathname.startsWith("/schedule/day2") ? "shadow-red-300 border-red-400 text-red-200" : "border-amber-600 shadow-amber-300 text-amber-300"}`} href={"/schedule/day2"}>level 2</Link>
            <Link className={`${style} ${pathname.startsWith("/schedule/day3") ? "shadow-red-300 border-red-400 text-red-200" : "border-amber-600 shadow-amber-300 text-amber-300"}`} href={"/schedule/day3"}>level 3</Link>
        </motion.div>
    )
}
