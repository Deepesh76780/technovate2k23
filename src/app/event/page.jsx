"use client"
import LandingPage from "./pages/landingPage";
import Image from "next/image";
import Navbar from "../components/nav";


export default function Event() {
  return (
    <>
    <Navbar bgcolor={"bg-[#a85dd1e1]"} />
    <main className=" flex flex-col min-h-screen items-center justify-between overflow-x-hidden p-16">   
        <div className="relative z-1 h-full w-full my-auto">
          <LandingPage/>
        </div>
    </main>
    </>
  );
}
