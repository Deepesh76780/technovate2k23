"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavButton } from "./navButton";
import { useState } from "react";

const NavResponsive = ({ navData, bgColor }) => {
  const [isOpen, setOpen] = useState(false);

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

  return (
    <div className="w-full lg:hidden visible">
      <div className="z-20 fixed flex flex-row place-items-center justify-between w-full px-4 ">
        <Link href="/">
          <Image src="/logo/logo.png" height={30} width={30} alt="logo" />
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
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 56"
              id="menu"
            >
              <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
            </symbol>
          </svg>
        </>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            variants={responsive}
            key={"modal"}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            className={`z-10 flex flex-col border-2  border-pink-700 h-[100dvh] fixed  top-0 gap-5 place-items-center justify-around w-full bg-[#0000009a]`}
          >
            <div className="flex flex-col gap-10 items-center">
              {navData.map((item, index) => {
                return (
                  <Link href={item.href} key={index}>
                    <NavButton
                      Title={item.title}
                      subTitle={item.subTitle}
                      bgcolor={bgColor}
                      href={item.href}
                    />
                  </Link>
                );
              })}
              <a
                href="https://unstop.com/competitions/campus-ambassador-program-technovate-2024-international-institute-of-information-technology-iiit-naya-raipu-848020"
                className=" text-pink-400 font-blackop tracking-wider shadow-2xl shadow-pink-500  bg-blackparent p-2 rounded-2xl border-2   cursor-pointer text-xl scale-100  "
                target="_blank"
              >
                * campus ambassador *
              </a>
            </div>
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavResponsive;
