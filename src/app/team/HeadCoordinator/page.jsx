import React from 'react'
import PlayerCard from "../components/playerCard"
import { team } from "../../../styles/data"


export default function page() {

  return (

    team.map((item) => {
      return <PlayerCard key={item.id} navigateUrl={`HeadCoordinator/${item.id}`} playerName={item.name} imgUrl={item.imgUrl} playerTask={item.about} />
    })

  )
}
