import React from 'react'
import PlayerCard from "../components/playerCard"
import { team } from "../../../styles/data"


export default function page() {

  const data = team.filter(item => (item.criteria === "technical" || item.criteria === "overallCoordinator"))

  return (
    data.map((item) => {
      return <PlayerCard key={item.id} navigateUrl={`technical/${item.id}`} playerTask={item.name} imgUrl={item.imgUrl} />
    })
  )
}
