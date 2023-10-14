import React from "react";
import Navbar from "../components/nav";

const LandingPageContent = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 z-10 overlay">
      <Navbar />
      <div className="w-full h-[50%] flex ">
        <h1 className="font-Orbitron text-8xl tracking-widest text-center  place-self-center w-full">
          Technovate
          <div className="text-2xl mt-2">4th - 5th Feb</div>
        </h1>
      </div>
    </div>
  );
};

export default LandingPageContent;
