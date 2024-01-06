import React from "react";
import EventCard from "../../components/mainCardBox";
import { sportsEvent } from "../../../../styles/data";

export default function Page({ params }) {
  const data = sportsEvent.find((item) => item.SNO === +params.slug);

  return (<EventCard store={data} rulebook="https://drive.google.com/file/d/1PGrg8Ug_pgRyXChmdFrzUfwemJSV9Dc6/view?usp=sharing"/>);
}
