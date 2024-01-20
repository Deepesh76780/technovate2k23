"use client";
import React from "react";
import SponserCard from "./sponserCard";
export default async function SponserTile({ data }) {
  return (
    <>
      {data.map((item, index) => {
        return <SponserCard sponserdata={item} key={item.name} />;
      })}
    </>
  );
}
