import React from "react";
import Image from "next/legacy/image";
import Navbar from "../components/nav";
import SideButton from "./components/sideButton";



export default function SponsersLayout({ children }) {



  return (
    <React.Fragment>
      <Image
        layout="fill"
        className="object-cover"
        src={"/background_images/sponsers1.jpg"}
        alt={"title"}
        objectFit="center"
        priority={true}
      />
      <Navbar bgcolor={"bg-[#40dbb2]"} />
      <main className=" flex flex-col min-h-screen items-center justify-between overflow-x-hidden pt-16 px-9 p-5">
        <div className="flex flex-row relative z-1 h-[70vh] w-[80%] my-auto">
          <div className='p-5 card h-full w-full border-2 shadow-inner shadow-emerald-300 bg-[#000000ac] border-emerald-200 flex flex-row flex-wrap overflow-auto custom gap-10 justify-center'>
            {children}
          </div>
        </div>
        <SideButton />
      </main>
    </React.Fragment>
  );
}


