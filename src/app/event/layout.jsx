import React from "react";
import Navbar from "../components/nav";


export default function EventLayout({ children }) {
  return (
      <React.Fragment>
        <Navbar bgcolor={"bg-[#a85dd1e1]"} />
        {children}
      </React.Fragment>
  );
}
