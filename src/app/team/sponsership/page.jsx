import React from 'react'
import PlayerCard from "../components/playerCard"
import { team } from "../../../styles/data"


export default function page() {

  const data = team.filter(item => item.criteria === "sponsership")

  return (

    data.map((item) => {
      return <PlayerCard key={item.id} navigateUrl={`sponsership/${item.id}`} playerName={item.name} imgUrl={item.imgUrl} />
    })

  )
}
