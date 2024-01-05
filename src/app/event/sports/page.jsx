import React from 'react'
import EventCard from '../components/eventCardBox'
import { sportsEvent } from '../../../styles/data'

export default function page() {
  return (
    <div className='flex  custom  flex-wrap gap-2 lg:gap-10  justify-center mx-auto w-fit'>
      {sportsEvent.map((item, index) => {
        return <EventCard
          navigateUrl={`/sports/${item.SNO}`}
          eventName={item.Event}
          imgUrl={item.imgUrl}
          key={item.SNO}
        />
      })}
    </div>
  )
}
