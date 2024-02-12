import React from "react";
import ProCard from "../components/proNightCard";
import { proNights } from "../../../styles/data";

export default function page() {
  return (
    <div className="md:flex lg:gap-10 md:h-full justify-center w-full items-center">
      {proNights.map((item, index) => {
        return (
          <ProCard
            navigateUrl={`/pronight/${item.SNO}`}
            eventName={item.Event}
            imgUrl={item.imgUrl}
            key={item.SNO}
          />
        );
      })}
    </div>
  );
}
