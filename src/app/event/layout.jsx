"use client"
import React from "react";
import Image from "next/image";
import SideButton from "./components/sideButton";
import Navbar from "../components/nav";
import { usePathname } from "next/navigation";


export default function EventLayout(props) {

  const pathname = usePathname();
  const overflow = (pathname === "/event/cultural" || pathname === "/event/pronight" || pathname === "/event/informal" || pathname === "/event/technical") ? "overflow-y-scroll custom" : "overflow-hidden";

  return (
    <React.Fragment>
      <Image
        layout="fill"
        className="object-cover"
        src={"/background_images/events.jpg"}
        alt={"title"}
        objectFit="center"
        priority={true}
      />
      <Navbar bgcolor={"bg-[#a85dd1e1]"} />
      <main className=" flex flex-col min-h-screen items-center justify-between overflow-x-hidden pt-16 px-9 p-5">
        <div className="flex flex-row relative z-1 h-[70vh] w-[80%] my-auto">
          <div className={`p-5 card h-full w-full shadow-inner flex  border-2 border-purple-300 shadow-purple-400 ${overflow} text-white   w-full`}>
            {props.children}
          </div>
        </div>
        <SideButton />
      </main>
    </React.Fragment>
  );
}
