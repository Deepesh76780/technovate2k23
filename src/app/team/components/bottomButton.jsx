"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const style = "shadow-inner card border-2 text-xs  text-center font-cyberblack  tracking-widest  p-3 uppercase w-38 hover:scale-110 transition-all duration-300"

export default function LandingPage() {

  const pathname = usePathname();
  return (
    <div className="flex flex-row w-[35%] gap-4 text-purple-300 items-center justify-center place-self-center">
      <Link className={`${style} ${pathname.startsWith("/team/creators") ? "shadow-pink-400 border-pink-400 text-pink-300" : "text-cyan-100 border-cyan-400 shadow-cyan-300"}`} href={"/team/creators"}>Creators</Link>
      <Link className={`${style} ${pathname.startsWith("/team/outlook") ? "shadow-pink-400 border-pink-400 text-pink-300" : "text-cyan-100 border-cyan-400 shadow-cyan-300"}`} href={"/team/outlook"}>Outlook</Link>
      <Link className={`${style} ${pathname.startsWith("/team/sponsership") ? "shadow-pink-400 border-pink-400 text-pink-300" : "text-cyan-100 border-cyan-400 shadow-cyan-300"}`} href={"/team/sponsership"}>Sponsership</Link>
      <Link className={`${style} ${pathname.startsWith("/team/marketing") ? "shadow-pink-400 border-pink-400 text-pink-300" : "text-cyan-100 border-cyan-400 shadow-cyan-300"}`} href={"/team/marketing"}>Marketing</Link>
      <Link className={`${style} ${pathname.startsWith("/team/technical") ? "shadow-pink-400 border-pink-400 text-pink-300" : "text-cyan-100 border-cyan-400 shadow-cyan-300"}`} href={"/team/technical"}>technical</Link>
    </div>
  )
}
