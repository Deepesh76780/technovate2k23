import React from "react";
import Navbar from "../components/nav"


export default function SponsersLayout({children}) {
  return (
    <React.Fragment>
    <Navbar bgcolor={"bg-[#40dbb2]"}  />
      {children}
    </React.Fragment>
  );
}
