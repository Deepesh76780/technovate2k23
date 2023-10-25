
"use client"
import { Suspense } from "react";
import Navbar from "../components/nav";


export default async function Team() {

  await new Promise((resolve)=>{setTimeout(resolve, 2000)})

  return (
    <>
      <Navbar bgcolor={"bg-[#40d0db]"} />
        <main className=" flex flex-col min-h-screen items-center justify-between overflow-x-hidden p-16">
          <div className="relative z-1 h-full w-full my-auto">
            deepesh
          </div>
        </main>
    </>
  );
}
