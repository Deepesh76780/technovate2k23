"use client";
import React from "react";
import SponserCard from "../components/sponserCard";
import { eventSponsers } from "../../../styles/data";
export default async function Sponsers() {
  return (
    <>
      {eventSponsers.map((item) => {
        return <SponserCard sponserdata={item} key={item.name} />;
      })}
    </>
  );
}
