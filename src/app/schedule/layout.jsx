
import React from "react";
import Navbar from "../components/nav"



export default function ScheduleLayout({children}) {
  return (
    <React.Fragment>
    <Navbar bgcolor={"bg-[#dba240]"}  />
      {children}
    </React.Fragment>
  );
}
