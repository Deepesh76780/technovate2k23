import React from "react";
import Image from "next/legacy/image";
import Navbar from "../components/nav";
import SideButton from "./components/sideButton";


const Wrapper = ({ children }) => {
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
                    <div className='p-1 card h-full w-full border-2 shadow-inner shadow-emerald-300 bg-blackparent border-emerald-200'>
                        <div className=" overflow-y-scroll cus h-full w-full p-5 flex flex-row flex-wrap overflow-auto gap-10 justify-center">
                            {children}
                        </div>
                    </div>
                </div>
                <SideButton />
            </main>
        </React.Fragment>
    )
}

export default Wrapper