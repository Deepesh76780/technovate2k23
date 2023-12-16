import React from 'react'
import EventCard from '../components/eventCardBox'
import { culturalEvent } from '../../../styles/data'

export default function page() {
  return (
    <div className='flex  custom  flex-wrap gap-2 lg:gap-10 justify-center mx-auto w-fit'>
      {culturalEvent.map((item, index) => {
        return <EventCard
          navigateUrl={`/cultural/${item.SNO}`}
          eventName={item.Event}
          key={item.SNO}
        />
      })}
    </div>
  )
}
