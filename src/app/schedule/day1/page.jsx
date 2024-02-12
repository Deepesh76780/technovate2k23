import React from "react";
import ScheduleTable from "../component/scheduleTable";
import Image from "next/image";

const day1 = [
  {
    time: "8:00 A.M. Onwards",
    name: "Hack-O-Harbour hackathon Starts",
    venue: "Data Science Lab",
  },
  {
    time: "9:00 A.M - 10:00 A.M.",
    name: "Inauguration Ceremony",
    venue: "Auditorium",
  },
  {
    time: "11:00 A.M. Onwards",
    name: "Tech Expo",
    venue: "Palm Park",
  },
  {
    time: "12:00 P.M. - 4:00 P.M.",
    name: "Comic-Expo",
    venue: "Academic Building",
  },
  {
    time: "12:00 P.M. Onwards",
    name: "Unlock The Technoverse Launch",
    venue: "Online",
  },
  {
    time: "12:00 P.M. Onwards",
    name: "Rangmela",
    venue: "Audi to FG Pathway",
  },
  {
    time: "2:00 P.M. - 6:00 P.M.",
    name: "Awaaz-Nukkad Natak",
    venue: "Amphitheatre",
  },
  {
    time: "3:00 P.M. - 6:00 P.M.",
    name: "AlgoSprint",
    venue: "Online (GFG)",
  },
  {
    time: "6:00 P.m. - 8:00 P.M.",
    name: "Speaker Session",
    venue: "Auditorium",
  },
  {
    time: "7:00 P.M. - 10:00 P.M.",
    name: "Silent Disco - Open",
    venue: "Football Ground",
  },
  {
    time: "10:00 P.M. - 12:00 P.M.",
    name: "Silent Disco - IIIT Students",
    venue: "Football Ground",
  },
];

const Page = () => {
  return (
    <>
      <Image
        src="/map/Map.png"
        width={1000}
        height={1000}
        className="md:absolute md:h-[95%] md:w-[45%] md:top-[3%] md:left-[2.5%] md:z-0 md:object-cover mw-[95%] object-contain flex justify-center mx-auto z-10"
        alt="Map"
      />
      <div className="w-full flex justify-between">
        <div className=""></div>
        <div className="flex md:w-[50%] w-full">
          <ScheduleTable data={day1} />
        </div>
      </div>
    </>
  );
};

export default Page;
