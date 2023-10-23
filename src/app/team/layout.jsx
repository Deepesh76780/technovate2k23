import React from "react";
import Navbar from "../components/nav";

export default function TeamLayout({children}) {
  return (
    
    <React.Fragment>
      <Navbar bgcolor={"bg-[#40d0db]"}  />
      {children}
    </React.Fragment>
    
  );
}
