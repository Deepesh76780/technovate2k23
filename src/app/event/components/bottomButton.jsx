"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"


const style = "shadow-inner card border-2  text-center  md:text-xs  text-[0.4rem] font-cyberblack  tracking-widest md:p-3 p-1  uppercase  md:w-32 w-fit-content hover:scale-110 transition-all duration-300"

export default function SideButton() {

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
      className="flex md:w-[40%]  w-full gap-3 lg:gap-4 text-purple-300 items-center justify-center place-self-center">
      <Link className={`${style} ${pathname.startsWith("/event/pronight") ? "shadow-pink-400 border-pink-400 text-pink-300" : "border-purple-400 shadow-pink-300"}`} href={"/event/pronight"}>Pronight</Link>
      <Link className={`${style} ${pathname.startsWith("/event/cultural") ? "shadow-pink-400 border-pink-400 text-pink-300" : "border-purple-400 shadow-pink-300"}`} href={"/event/cultural"}>Cultural</Link>
      <Link className={`${style} ${pathname.startsWith("/event/informal") ? "shadow-pink-400 border-pink-400 text-pink-300" : "border-purple-400 shadow-pink-300"}`} href={"/event/informal"}>informal</Link>
      <Link className={`${style} ${pathname.startsWith("/event/technical") ? "shadow-pink-400 border-pink-400 text-pink-300" : "border-purple-400 shadow-pink-300"}`} href={"/event/technical"}>technical</Link>
    </motion.div>
  )
}
