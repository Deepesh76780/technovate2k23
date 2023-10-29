"use client"
import React from 'react'
import Link from 'next/link'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'


export default function Footer() {
  return (
    <footer className="bg-black p-4 flex flex-col justify-center items-center gap-4">
      <div className="flex space-x-4 ">
        <Link href="#" className="text-slate-100 hover:text-pink-600"><BsTwitter /></Link>
        <Link href="#" className="text-slate-100 hover:text-pink-600"><BsFacebook /></Link>
        <Link href="#" className="text-slate-100 hover:text-pink-600"><BsInstagram /></Link>
        <Link href="#" className="text-slate-100 hover:text-pink-600"><BsLinkedin /></Link>
      </div>
      <div className="flex flex-col font-cyberway tracking-[0.3rem] items-center justify-center">
        <p className="text-slate-100 text-xs pink_selector">© 2024 Technovate - All Rights Reserved.</p>
      </div>
    </footer>
  )
}
