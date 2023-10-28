import React from "react";
import {
  Card,
} from "@/components/ui/card";
import Image from "next/image";

export default function EventCard({ Img }) {
  return (
    <Card className="bg-[#14101084] card flex shadow-inner shadow-pink border-2 border-pink-500  text-slate-100 w-80 h-[22rem]  mx-12  ">
      <Image
        src={Img}
        width={1000}
        height={1000}
        className="bg-contain w-full h-full"
        priority
      />
    </Card>
  );
}
