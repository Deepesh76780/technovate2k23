import Link from "next/link";
import React from "react";
import { NavButton } from "./navButton";

const Navbar = () => {
  return (
    <div className="p-6 flex max-w-[150rem] justify-between mx-auto">
      <div className="flex gap-5">
        <Link href="/">
          <NavButton Title="Events" subTitle="r25" />
        </Link>
        <Link href="/">
          <NavButton Title="Team" subTitle="r25" />
        </Link>
      </div>
      <div className="flex gap-5">
        <Link href="/">
          <NavButton Title="Sponsors" subTitle="r25" />
        </Link>
        <Link href="/">
          <NavButton Title="Schedule" subTitle="r25" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
