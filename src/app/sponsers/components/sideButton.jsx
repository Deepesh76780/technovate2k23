"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const style = "shadow-inner card border-2  text-center text-xs font-cyberblack  tracking-widest  p-3 uppercase w-48 hover:scale-110 transition-all duration-300"

export default function SideButton() {

  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className="flex w-[40%] gap-6 text-purple-300 items-center justify-center">
      <Link className={`${style} ${pathname === "/sponsers/overall_sponser" ? "shadow-pink-400 border-pink-400 text-pink-300" : "border-emerald-400 shadow-emerald-300 text-emerald-200"}`} href={"/sponsers/overall_sponser"}>Sponser</Link>
      <Link className={`${style} ${pathname === "/sponsers/event_sponser" ? "shadow-pink-400 border-pink-400 text-pink-300" : "border-emerald-400 shadow-emerald-300 text-emerald-200"}`} href={"/sponsers/event_sponser"}>Event Sponser</Link>
    </div>
  )
}
