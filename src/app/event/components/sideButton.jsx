"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const style = "shadow-inner card border-2  text-center text-sm font-cyberblack  tracking-widest  p-3 uppercase w-32 hover:scale-110 transition-all duration-300"

export default function SideButton() {

  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className="flex w-[40%] gap-4 text-purple-300 items-center justify-center">
      <Link className={`${style} ${pathname === "/event/pronight" ? "shadow-pink-400 border-pink-400 text-pink-300" : "border-purple-400 shadow-pink-300"}`} href={"/event/pronight"}>Pronight</Link>
      <Link className={`${style} ${pathname === "/event/cultural" ? "shadow-pink-400 border-pink-400 text-pink-300" : "border-purple-400 shadow-pink-300"}`} href={"/event/cultural"}>Cultural</Link>
      <Link className={`${style} ${pathname === "/event/informal" ? "shadow-pink-400 border-pink-400 text-pink-300" : "border-purple-400 shadow-pink-300"}`} href={"/event/informal"}>informal</Link>
      <Link className={`${style} ${pathname === "/event/technical" ? "shadow-pink-400 border-pink-400 text-pink-300" : "border-purple-400 shadow-pink-300"}`} href={"/event/technical"}>technical</Link>
    </div>
  )
}
