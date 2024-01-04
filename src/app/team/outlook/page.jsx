import React from 'react'
import PlayerCard from "../components/playerCard"
import { team } from "../../../styles/data"


export default function page() {

  const data = team.filter(item => item.criteria === "outlook")

  return (

    data.map((item) => {
      return <PlayerCard key={item.id} navigateUrl={`outlook/${item.id}`} playerName={item.name} imgUrl={item.imgUrl} />
    })

  )
}
