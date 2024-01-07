import React from 'react'
import PlayerCard from "../components/playerCard"
import { organizingCommite } from "../../../styles/data"


export default function page() {

  return (
    organizingCommite.map((item) => {
      return <PlayerCard key={item.id} navigateUrl={`organizingCommittee/${item.id}`} playerName={item.name} imgUrl={item.imgUrl} playerTask={item.about} />
    })

  )
}
