import React from 'react'
import EventCard from '../../components/mainCardBox'
import { culturalEvent } from '../../../../styles/data'

export default function Page({ params }) {

  const data = culturalEvent.find(item => item.SNO === +params.slug)

  return (
    <EventCard store={data} />
  )
}
