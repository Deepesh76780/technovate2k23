import React from 'react'
import EventCard from '../../components/mainCardBox'

export default function Page({params}) {
  return (
    <div className='flex flex-row justify-between h-full'>
      <div className='h-full place-self-center'>
        <EventCard />
      </div>
      <div className='place-self-center'>{params.slug}</div>
    </div>
  )
}
