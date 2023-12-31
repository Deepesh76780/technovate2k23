"use client";
import Link from "next/link";
import React from "react";
import { NavButton } from "./navButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";


const container = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 60,
      duration: 2,
    },
  },
};
const responsive = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },

};

const navData = [
  {
    href: "/",
    title: "Home",
    subTitle: "©"
  },
  {
    href: "/event/pronight",
    title: "Events",
    subTitle: "2"
  },
  {
    href: "/team/HeadCoordinator",
    title: "Team",
    subTitle: "0"
  },
  {
    href: "/sponsers/overall_sponser",
    title: "Sponsors",
    subTitle: "2"
  },
  {
    href: "/schedule/day1",
    title: "Schedule",
    subTitle: "4"
  }
]

const Navbar = ({ bgcolor }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <motion.div
        variants={container}
        initial={"hidden"}
        animate={"visible"}
        className="p-2 z-50 lg:flex  justify-between fixed gap-5 mt-1 w-full lg:visible hidden"
      >
        {
          navData.map((item, index) => {
            return <Link href={item.href} key={index}>
              <NavButton Title={item.title} subTitle={item.subTitle} bgcolor={bgcolor} />
            </Link>
          })
        }
      </motion.div>
      <div className="w-full lg:hidden visible">
        <div className="z-20 fixed flex flex-row place-items-center justify-between w-full px-4 ">
          <Link href="/">
            <Image
              src='/logo/logo.png'
              height={30}
              width={30}
              alt='logo'
            />
          </Link>
          <>
            <div className="nav" onClick={() => setOpen(!isOpen)}>
              <input type="checkbox" />
              <svg>
                <use xlinkHref="#menu" />
                <use xlinkHref="#menu" />
              </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
              <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 56" id="menu">
                <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
              </symbol>
            </svg>
          </>
        </div>
        <AnimatePresence>

          {
            isOpen ?
              <motion.div
                variants={responsive}
                key={"modal"}
                initial={"hidden"}
                animate={"visible"}
                exit={"exit"}
                className={`z-10 flex flex-col border-2  border-pink-700 h-[100dvh] fixed  top-0 gap-5 place-items-center justify-around w-full bg-blackparent`}
              >
                <div className="flex flex-col gap-10">
                  {
                    navData.map((item, index) => {
                      return <Link href={item.href} key={index}>
                        <NavButton Title={item.title} subTitle={item.subTitle} bgcolor={bgcolor} />
                      </Link>
                    })
                  }
                </div>
              </motion.div >
              : <></>
          }
        </AnimatePresence>
      </div >
    </>
  );
};

export default Navbar;
