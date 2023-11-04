"use client"
import React from "react";
import Image from "next/legacy/image";
import SideButton from "./components/sideButton";
import Navbar from "../components/nav";
import { usePathname } from "next/navigation";

const ALLOWED_PATHNAMES = ["/event/cultural", "/event/pronight", "/event/informal", "/event/technical"];

export default function EventLayout(props) {
  const pathname = usePathname();
  const isOverflow = ALLOWED_PATHNAMES.includes(pathname) ? "overflow-y-scroll custom" : "overflow-hidden";
  const navbarBgColor = "bg-[#a85dd1e1]";

  return (
    <>
      <Image
        layout="fill"
        className="object-cover"
        src={"/background_images/events.jpg"}
        alt={"title"}
        objectFit="center"
        priority={true}
      />
      <Navbar bgcolor={navbarBgColor} />
      <main className="flex flex-col min-h-screen items-center justify-between overflow-x-hidden pt-16 px-9 p-5">
        <div className="flex flex-row relative z-1 h-[70vh] w-[80%] my-auto">
          <div className={`p-5 card h-full w-full shadow-inner flex border-2 border-purple-300 shadow-purple-400 ${isOverflow} text-white w-full`}>
            {props.children}
          </div>
        </div>
        <SideButton />
      </main>
    </>
  );
}
