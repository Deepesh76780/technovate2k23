"use client"
import React from "react";
import Image from "next/image";
import LandingPage from "./components/sideButton";
import Navbar from "../components/nav";
import { usePathname } from "next/navigation";


export default function EventLayout(props) {

  const pathname=usePathname();

  const overflow=(pathname==="/event/cultural" || pathname==="/event/pronight" || pathname==="/event/informal" || pathname==="/event/technical") ? "overflow-y-scroll custom":"overflow-hidden";

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
      <main className=" flex flex-col min-h-screen items-center justify-between overflow-x-hidden p-16">
        <div className="flex flex-row relative z-1 h-full w-full my-auto">
          <LandingPage/>
         <div className={`shadow-inner shadow-black lg:h-[400px] xl:h-[500px] ${overflow} text-white p-5 w-full rounded-xl bg-[#bf5dbf29]`}>
          {props.children}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
