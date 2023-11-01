import React from 'react'
import PlayerCard from "../components/playerCard"
import { team } from "../../../styles/data"


export default function page() {

  const data = team.filter(item => item.criteria === "marketing")

  return (
    <React.Fragment>
      {
        data.map((item) => {
          return <PlayerCard key={item.id} navigateUrl={`marketing/${item.id}`} playerTask={item.name} imgUrl={item.imgUrl} />
        })
      }
    </React.Fragment>
  )
}
