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
          <div className="align-center w-full">
            <div className="my-8 md:my-16 w-full">
              <h1 className="text-4xl font-bold text-center text-white font-glitch">
                {item.tier}
              </h1>
            </div>

            {item.data.length ? (
              <div className="flex flex-row w-full justify-evenly">
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
