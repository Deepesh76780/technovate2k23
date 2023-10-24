"use client"
import Link from "next/link"
const style="shadow-inner text-center font-Chakra data-[state=active]:shadow-pink-500 data-[state=active]:text-pink-300 shadow-pink-300 tracking-widest rounded-2xl p-3 uppercase w-32 hover:scale-110 transition-all duration-300"

export default function LandingPage() {
  return (
      <div className="flex flex-col w-[35%] gap-4 text-purple-300 items-center justify-center">
            <Link className={style} href={"/event/pronight"}>Pronight</Link>
            <Link className={style} href={"/event/cultural"}>Cultural</Link>
            <Link className={style} href={"/event/informal"}>informal</Link>
            <Link className={style} href={"/event/technical"}>technical</Link>
      </div>
  )
}
