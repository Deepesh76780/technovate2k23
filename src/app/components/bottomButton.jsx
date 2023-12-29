"use client"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"



const style = "shadow-inner card border-2  text-center  md:text-xs  text-[0.4rem] font-cyberblack  tracking-widest md:p-3 p-1  uppercase  min-w-32 max-w-full hover:scale-110 transition-all duration-300"



// component will re-render only if paths or layout changes @Deepesh76780 
const BottomButton = React.memo(({ paths, layout }) => {
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
            className="flex md:w-[40%]  w-full gap-3 lg:gap-4 items-center justify-center place-self-center">
            {paths?.map((item, index) => {
                return <Link className={`${style} ${pathname.startsWith(item.href) ? "shadow-pink-400 border-pink-400 text-pink-300" : layout}`} href={item.href} key={index}>{item.name}</Link>
            })}
        </motion.div>
    )
})

export default BottomButton