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

const Navbar = () => {
  return (
    <motion.div
      variants={container}
      initial={"hidden"}
      animate={"visible"}
      className=" mt-2 p-2 flex w-fit justify-end fixed gap-5"
    >
      <Link href="/">
        <NavButton Title="Events" subTitle="2" />
      </Link>
      <Link href="/">
        <NavButton Title="Team" subTitle="0" />
      </Link>
      <Link href="/">
        <NavButton Title="Sponsors" subTitle="2" />
      </Link>
      <Link href="/">
        <NavButton Title="Schedule" subTitle="4" />
      </Link>
    </motion.div>
  );
};

export default Navbar;
