import React from "react";
import Image from "next/legacy/image";
import BottomButton from "./component/bottomButton"
import Navbar from "../components/nav";


const Wrapper = ({ children }) => {




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
            <Navbar bgcolor={"bg-[#dba240]"} resColor="#dba240" />
            <main className="flex flex-col md:min-h-screen h-[100dvh] overflow-x-hidden pt-16 p-5 items-end ">
                <div className="md:w-[45%] w-full bg-blackparent p-2 rounded-xl  relative z-1 h-[60vh] my-auto">
                    <div className="overflow-y-scroll cus h-full p-1">
                        {children}
                    </div>
                </div>
                <BottomButton />
            </main>
        </React.Fragment >
    )
}

export default Wrapper