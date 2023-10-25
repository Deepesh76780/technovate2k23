"use client"
import Link from "next/link"
import {usePathname} from "next/navigation"


const style="shadow-inner text-center font-Chakra shadow-pink-300 tracking-widest rounded-2xl p-3 uppercase w-32 hover:scale-110 transition-all duration-300"

export default function LandingPage() {

  const pathname=usePathname();
  console.log(pathname)
  return (
      <div className="flex flex-col w-[35%] gap-4 text-purple-300 items-center justify-center">
            <Link className={`${style} ${pathname==="/event/pronight" ? "shadow-pink-500 text-pink-300":""}`} href={"/event/pronight"}>Pronight</Link>
            <Link className={`${style} ${pathname==="/event/cultural" ? "shadow-pink-500 text-pink-300":""}`} href={"/event/cultural"}>Cultural</Link>
            <Link className={`${style} ${pathname==="/event/informal" ? "shadow-pink-500 text-pink-300":""}`} href={"/event/informal"}>informal</Link>
            <Link className={`${style} ${pathname==="/event/technical" ? "shadow-pink-500 text-pink-300":""}`} href={"/event/technical"}>technical</Link>
      </div>
  )
}
