import React from 'react'
import Link from 'next/link'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

const footerData = [
  {
    link: "#",
    icon: <BsTwitter />
  },
  {
    link: "#",
    icon: <BsFacebook />
  },
  {
    link: "https://www.instagram.com/technovate_iiitnr/",
    icon: <BsInstagram />
  },
  {
    link: "#",
    icon: <BsLinkedin />
  },
]

export default function Footer() {
  return (
    <footer className=" mt-10 p-4 flex flex-col justify-center items-center  gap-4 w-full">
      <div className="flex space-x-4 ">
        {footerData.map((item, index) => {
          return <Link href={item.link} className="text-slate-100 hover:text-pink-600" key={index}>
            {item.icon}
          </Link>
        }
        )}
      </div>
      <div className="flex flex-col font-cyberway tracking-[0.3rem] items-center justify-center gap-2 ">
        <p className="text-slate-100 lg:text-xs text-[0.5rem] pink_selector">© 2024 Technovate - All Rights Reserved.</p>
      </div>
    </footer>
  )
}
