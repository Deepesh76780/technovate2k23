import React from "react";
import Image from "next/image";
import Navbar from "../components/nav";
import BottomButton from "./components/bottomButton";

export default function EventLayout({ children }) {
  return (
    <React.Fragment>
      <Image
        layout="fill"
        className="object-cover"
        src={"/background_images/teams.jpg"}
        alt={"title"}
        objectFit="center"
        priority={true}
      />
      <Navbar bgcolor={"bg-[#40d0db]"} />
      <main className=" flex flex-col min-h-screen justify-between h-full w-full overflow-x-hidden pt-16 p-5">
          <div className="relative z-1 h-[70vh] w-[40%] my-auto">
              <div className='p-5 card h-full w-full border-2 shadow-inner shadow-cyan-200 border-cyan-200 flex flex-row flex-wrap overflow-auto custom gap-10 justify-center'>
              {children}
              </div>
          </div>
           <BottomButton/>
        </main>
    </React.Fragment>
  );
}