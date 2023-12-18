import React from "react";
import {
  Card,
} from "@/components/ui/card";
import Image from "next/image";

export default function EventCard({ Img }) {
  return (
    <Card className="bg-[#14101084] card flex shadow-inner shadow-pink border-2 border-pink-500  text-slate-100 md:w-80 w-64 lg:h-[22rem] h-[20rem]  mx-12">
      <Image
        src={Img}
        width={1000}
        height={1000}
        alt={"pronights stars"}
        className="bg-contain w-full h-full "
        priority={true}
      />
    </Card>
  );
}
