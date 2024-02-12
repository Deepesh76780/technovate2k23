import React from "react";
import ScheduleTable from "../component/scheduleTable";
import Image from "next/image";
import { day3 } from "../../../styles/data";

const Page = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-between md:flex-row gap-5">
        <div className="">
          <Image
            src="/map/Map.png"
            width={1000}
            height={1000}
            className="md:absolute md:h-[95%] md:w-[45%] md:top-[3%] md:left-[2.5%] md:z-0 md:object-cover mw-[95%] object-contain flex justify-center mx-auto z-10"
            alt="Map"
            priority
          />
        </div>
        <div className="flex md:w-[50%] w-full">
          <ScheduleTable data={day3} />
        </div>
      </div>
    </>
  );
};

export default Page;
