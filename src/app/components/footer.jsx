import React from "react";
import Link from "next/link";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const footerData = [
  {
    link: "https://twitter.com/technovateIIIT/status/1736086672771838254?t=sH-PP-60JdZ_nwbRM0fJAA&s=19",
    icon: <BsTwitter />,
  },
  {
    link: "https://www.instagram.com/technovate_iiitnr/",
    icon: <BsInstagram />,
  },
  {
    link: "https://www.linkedin.com/posts/technovate_iiitnr_technovate-technovateiiitnr-iterate-activity-7141854203169193984-KKc0?utm_source=share&utm_medium=member_android",
    icon: <BsLinkedin />,
  },
];

export default function Footer() {
  return (
    <footer className=" mt-10 p-4 flex flex-col justify-center items-center  gap-4 w-full">
      <div className="flex space-x-4 ">
        {footerData.map((item, index) => {
          return (
            <a
              target="_blank"
              href={item.link}
              className="text-slate-100 hover:text-pink-600"
              key={index}
            >
              {item.icon}
            </a>
          );
        })}
      </div>
      <div className="flex flex-col font-Orbitron  items-center justify-center gap-2 ">
        <p className="text-slate-100 lg:text-[0.8rem] tracking-[0.2rem] text-[0.5rem] pink_selector text-center">
          <span className="text-pink-400">Design and developed By </span>Deepesh Agrawal, Shivam Kushwaha
          and Kapil Soni
        </p>
        <p className="text-slate-100 lg:text-[0.7rem] tracking-[0.2rem] text-[0.5rem] pink_selector">
          © 2024 Technovate - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
