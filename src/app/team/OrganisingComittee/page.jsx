import React from "react";
import PlayerCard from "../components/playerCard";
import { team } from "../../../styles/data";

export default function page() {
  const data = team
    .filter((item) => item.criteria === "OrganisingComittee")
    .map(item => {
      if (item.id !== 1) {
        return {
          ...item,
          about: "Student Coordinator"
        };
      }
      return item;
    });

  return data.map((item) => {
    return (
      <PlayerCard
        key={item.id}
        navigateUrl={`OrganisingComittee/${item.id}`}
        playerName={item.name}
        imgUrl={item.imgUrl}
        playerTask={item.about}
      />
    );
  });
}
