
"use client"
import { Suspense } from "react";
import Navbar from "../components/nav";


export default function Sponsers() {
  return (
    <>
      <Navbar bgcolor={"bg-[#40d0db]"} />
      <Suspense fallback={<h1>jsdlsldlsajdlskjdskl</h1>}>
        <main className=" flex flex-col min-h-screen items-center justify-between overflow-x-hidden p-16">
          <div className="relative z-1 h-full w-full my-auto">
            deepesh
          </div>
        </main>
      </Suspense>
    </>
  );
}
