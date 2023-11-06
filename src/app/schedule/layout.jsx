import React from "react";
import Image from "next/legacy/image";


export default function SponsersLayout({ children }) {
  return (
    <React.Fragment>
      <Image
        layout="fill"
        className="object-cover"
        src={"/background_images/schedule.jpg"}
        alt={"title"}
        objectFit="center"
        priority={true}
      />
      {children}
    </React.Fragment>
  );
}




