"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"


const style = "shadow-inner card border-2  text-center md:text-xs text-[0.4rem] font-cyberblack  tracking-widest  p-1 md:p-3 uppercase w-fit md:w-48 hover:scale-110 transition-all duration-300"

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
      className="flex md:w-[40%] w-full md:gap-6 gap-3 text-purple-300 items-center justify-center">
      <Link className={`${style} ${pathname === "/sponsers/overall_sponser" ? "shadow-pink-400 border-pink-400 text-pink-300" : "border-emerald-400 shadow-emerald-300 text-emerald-200"}`} href={"/sponsers/overall_sponser"}>Sponser</Link>
      <Link className={`${style} ${pathname === "/sponsers/event_sponser" ? "shadow-pink-400 border-pink-400 text-pink-300" : "border-emerald-400 shadow-emerald-300 text-emerald-200"}`} href={"/sponsers/event_sponser"}>Event Sponser</Link>
    </motion.div>
  )
}
