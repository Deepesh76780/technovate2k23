import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function EventCard({Img}) {
  return (
    <Card className="bg-[#14101084] flex shadow-purple-300 shadow-2xl rounded-2xl text-slate-100 w-80 h-[22rem]  mx-12 overflow-hidden border-2 border-black">
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
