import React from "react";
import ScheduleTable from "../component/scheduleTable";
import Image from "next/image";

const day1 = [
  {
    time: "10:00 A.M. - 2:00 P.M.",
    name: "Quiz Runner 2049",
    venue: "Academic Building",
  },
  {
    time: "11:00 A.M - 12:30 P.M.",
    name: "Photgraphy and rangmela Showcase",
    venue: "Academic Building",
  },
  {
    time: "11:00 A.M. - 1:00 P.M.",
    name: "Chess Finals",
    venue: "Academic Building",
  },
  {
    time: "12:00 P.M.",
    name: "Unlock the Technoverse Ends",
    venue: "Online",
  },
  {
    time: "2:00 P.M. - 5:00 P.M.",
    name: "Venture Vista",
    venue: "Academic Building",
  },
  {
    time: "2:00 P.M. - 6:00 P.M.",
    name: "Robolution",
    venue: "Academic Building",
  },
  {
    time: "2:00 P.M. - 5:30 P.M.",
    name: "Raag-Ratri",
    venue: "Auditorium",
  },
  {
    time: "2:00 P.M. - 4:00 P.M.",
    name: "BGMI Finals Screening",
    venue: "Academic Building",
  },
  {
    time: "4:00 P.m. - 6:00 P.M.",
    name: "Valorant Finals Screening",
    venue: "Academic Building",
  },
  {
    time: "5:00 P.M.- 7:30 P.M.",
    name: "Battle of Bands",
    venue: "Football Ground",
  },
  {
    time: "8:00 P.M.",
    name: "Hack-o-harbour Ends",
    venue: "Academic Building",
  },
  {
    time: "7:30 P.M.- 11:30 P.M.",
    name: "Pro-Night : EDM Night",
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
