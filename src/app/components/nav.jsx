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

const Navbar = ({ bgcolor }) => {
  return (
    <motion.div
      variants={container}
      initial={"hidden"}
      animate={"visible"}
      className="p-2 z-1 flex  justify-between fixed gap-5 mt-1 w-full"
    >
      <Link href="/">
        <NavButton Title="Home" subTitle="©" bgcolor={bgcolor} />
      </Link>
      <Link href="/event/pronight">
        <NavButton Title="Events" subTitle="2" bgcolor={bgcolor} />
      </Link>
      <Link href="/team/creators">
        <NavButton Title="Team" subTitle="0" bgcolor={bgcolor} />
      </Link>
      <Link href="/sponsers/overall_sponser">
        <NavButton Title="Sponsors" subTitle="2" bgcolor={bgcolor} />
      </Link>
      <Link href="/schedule">
        <NavButton Title="Schedule" subTitle="4" bgcolor={bgcolor} />
      </Link>
    </motion.div>
  );
};

export default Navbar;
