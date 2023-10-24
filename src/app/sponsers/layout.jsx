import React from "react";
import Image from "next/image";


export default function SponsersLayout({children}) {
  return (
    <React.Fragment>
      <Image
        layout="fill"
        className="object-cover"
        src={"/background_images/sponsers.jpg"}
        alt={"title"}
        objectFit="center"
        priority={true}
      />
      {children}
    </React.Fragment>
  );
}


