import React from "react";
import ScheduleTable from "../component/scheduleTable";
import Image from "next/image";

const day1 = [
  {
    time: "9:00 A.M. Onwards",
    name: "Cricket Finals",
    venue: "Uparwara Ground",
  },
  {
    time: "10:00 A.M Onwards",
    name: "Volley-Ball Finals",
    venue: "Volleyball Court",
  },
  {
    time: "10:00 A.M. - 2:00 P.M.",
    name: "Orator's Comclave",
    venue: "Academic Building",
  },
  {
    time: "10:30 P.M. - 12:30 P.M.",
    name: "Fiducia - Round 1",
    venue: "Auditorium",
  },
  {
    time: "11:00 P.M. Onwards",
    name: "Futsal Finals",
    venue: "",
  },
  {
    time: "1:00 P.M. - 5:00 P.M.",
    name: "Let's Nacho",
    venue: "Auditorium",
  },
  {
    time: "1:30 P.M.- 7:30 P.M.",
    name: "Robolution",
    venue: "Academic Building",
  },
  {
    time: "2:00 P.M. Onwards",
    name: "Table Tennis Finals",
    venue: "Incubation Complex",
  },
  {
    time: "2:30 P.m. - 5:30 P.M.",
    name: "Coding Speedrun",
    venue: "Academic Building",
  },
  {
    time: "4:00 P.M. Onwards",
    name: "Badminton Finals",
    venue: "Bhabha House",
  },
  {
    time: "5:00 P.M. - 7:00 P.M.",
    name: "Fiducia - Finals",
    venue: "Auditorium",
  },
  {
    time: "7:30 P.M.- 11:30 P.M.",
    name: "Pro-Night : Bollywood Night",
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
