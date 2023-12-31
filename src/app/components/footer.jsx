import React from 'react'
import Link from 'next/link'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

const footerData = [
  {
    link: "https://twitter.com/technovateIIIT/status/1736086672771838254?t=sH-PP-60JdZ_nwbRM0fJAA&s=19",
    icon: <BsTwitter />
  },
  {
    link: "https://www.instagram.com/technovate_iiitnr/",
    icon: <BsInstagram />
  },
  {
    link: "https://www.linkedin.com/posts/technovate_iiitnr_technovate-technovateiiitnr-iterate-activity-7141854203169193984-KKc0?utm_source=share&utm_medium=member_android",
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
