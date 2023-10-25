
"use client"
import Navbar from "../components/nav";


export default async function Schedule() {

  await new Promise((resolve)=>{setTimeout(resolve, 2000)})

  return (
    <>
      <Navbar bgcolor={"bg-[#dba240]"}  />
       <main className=" flex flex-col min-h-screen items-center justify-between overflow-x-hidden p-16">
        <div className="relative z-1 h-full w-full my-auto">
          deepesh
        </div>
      </main>
    </>
  );
}


