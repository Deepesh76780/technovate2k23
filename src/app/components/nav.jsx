"use client";
import Link from "next/link";
import React from "react";
import { NavButton } from "./navButton";
import { motion } from "framer-motion";

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
    href: "/team/creators",
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
  return (
    <motion.div
      variants={container}
      initial={"hidden"}
      animate={"visible"}
      className="p-2 z-1 flex  justify-between fixed gap-5 mt-1 w-full"
    >
      {
        navData.map((item, index) => {
          return <Link href={item.href} key={index}>
            <NavButton Title={item.title} subTitle={item.subTitle} bgcolor={bgcolor} />
          </Link>
        })
      }
    </motion.div>
  );
};

export default Navbar;
