import React from "react";
import Image from "next/legacy/image";
import BottomButton from "./component/bottomButton"
import Navbar from "../components/nav";


export default function SponsersLayout({ children }) {


  const navbarBgcolor = "bg-[#dba240]";

  return (
    <React.Fragment>
      <Image
        layout="fill"
        className="object-cover"
        src={"/background_images/schedule.jpg"}
        alt={"title"}
        objectFit="center"
        priority={true}
      />
      <Navbar bgcolor={navbarBgcolor} />
      <main className="flex flex-col min-h-screen  overflow-x-hidden pt-16 p-5 items-end ">
        <div className="w-[50%] bg-blackparent p-2 rounded-xl  relative z-1 h-[60vh] my-auto">
          <div className="overflow-y-scroll cus h-full p-1">
            {children}
          </div>
        </div>
        <BottomButton />
      </main>
    </React.Fragment >
  );
}




