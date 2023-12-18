"use client";
import Link from "next/link";
import React from "react";
import { NavButton } from "./navButton";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sling as Hamburger } from 'hamburger-react'
import Audio from "./backgroundAudio";

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
    y: 600,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "smooth",
      duration: 1,
    },
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

const Navbar = ({ bgcolor, resColor }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <motion.div
        variants={container}
        initial={"hidden"}
        animate={"visible"}
        className="p-2 z-1 lg:flex  justify-between fixed gap-5 mt-1 w-full lg:visible hidden"
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
        <div className="z-20 fixed flex flex-row place-items-center justify-between w-full px-4">
          <Audio />
          <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color={resColor} />
        </div>
        {
          isOpen ?
            <motion.div
              variants={responsive}
              initial={"hidden"}
              animate={"visible"}
              exit={{
                opacity: 0,
                y: 0,
              }}
              className="z-10 flex flex-col border-2 border-pink-700 h-full  fixed top-0 gap-5 place-items-center justify-around w-full bg-blackparent"
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
      </div>
    </>
  );
};

export default Navbar;
