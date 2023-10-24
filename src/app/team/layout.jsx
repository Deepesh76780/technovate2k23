import React from "react";
import Image from "next/image";


export default function EventLayout({ children }) {
  return (
    <React.Fragment>
      <Image
        layout="fill"
        className="object-cover"
        src={"/background_images/teams.jpg"}
        alt={"title"}
        objectFit="center"
        priority={true}
      />
      {children}
    </React.Fragment>
  );
}