import React from 'react'
import EventCard from '../components/eventCardBox'



export default function page() {
  return (
    <div className='flex  custom  flex-wrap gap-6  justify-center mx-auto w-fit'>
      <EventCard navigateUrl={"/cultural/rahul"} eventName={"Rahul"}/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
      <EventCard/>
    </div>
  )
}
