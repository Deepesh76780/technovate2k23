import React from 'react'
import EventCard from '../components/eventCardBox'
import { technicalEvent } from '../../../styles/data'

export default function page() {
  return (
    <div className='flex  custom  flex-wrap gap-2 lg:gap-10  justify-center mx-auto w-fit'>
      {technicalEvent.map((item, index) => {
        return <EventCard
          navigateUrl={`/technical/${item.SNO}`}
          eventName={item.Event}
          key={item.SNO}
        />
      })}
    </div>
  )
}
