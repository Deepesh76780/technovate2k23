"use client";
import React from "react";
import SponserTile from "../components/sponserTile";
import SponserCard from "../components/sponserCard";
import ComingSoonText from "../../components/comingSoon";
import { sponsers } from "../../../styles/data";
export default async function Sponsers() {
  return (
    <>
      {sponsers.map((item, index) => {
        return (
          <div className="align-center w-full h-full ">
            <div className="w-full m-2 mb-8">
              <h1 className="text-4xl font-bold text-center font-glitch text-emerald-300">
                {item.tier}
              </h1>
            </div>
            {item.data.length ? (
              <div className="flex flex-row w-full gap-14  justify-center">
                {item.data.map((item, index) => {
                  return <SponserCard sponserdata={item} key={item.name} />;
                })}
              </div>
            ) : (
              <div className="text-center">
                <ComingSoonText />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
