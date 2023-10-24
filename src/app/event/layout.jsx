import React from "react";
import Image from "next/image";
import LandingPage from "./components/sideButton";
import Navbar from "../components/nav";


export default function EventLayout({ children }) {
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
         <div className="shadow-inner shadow-black lg:h-[400px] xl:h-[500px] text-white p-5 w-full rounded-xl bg-[#bf5dbf29]">
          {children}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

