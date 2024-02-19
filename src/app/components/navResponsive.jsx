"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { NavButton } from "./navButton";
import { useState } from "react";

const NavResponsive = ({ navData, bgColor }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full lg:hidden visible ">
      <div className="z-20 fixed right-0 w-fit px-4 ">
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
      {isOpen ? (
        <div
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
            <div
              href="https://unstop.com/competitions/campus-ambassador-program-technovate-2024-international-institute-of-information-technology-iiit-naya-raipu-848020"
              target="_blank"
            >
              <button
                className={
                  "border-2    shadow-inner  cursor-pointer relative uppercase card text-white   w-[220px]  text-[0.8rem]   h-[65px]"
                }
              >
                <div
                  className={
                    "flex items-center justify-center absolute top-[5px]  inset-[0.101rem] transition-all duration-500 font-cyberway  font-extrabold tracking-[0.3rem] "
                  }
                >
                  {"campus ambassador [CLOSED]"}
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavResponsive;
