import React from 'react'
import EventCard from '../../components/mainCardBox'
import { culturalEvent } from '../../../../styles/data'

export async function generateMetadata({params}){
  const data = culturalEvent.find(item => item.SNO === +params.slug)
  return {
    title: data.Event,
    description: data.about,
    openGraph: {
      image: [{
        url:data.imgUrl,
      }],
    },
  }
}

export default function Page({ params }) {

  const data = culturalEvent.find(item => item.SNO === +params.slug)

  return (
    <EventCard store={data} rulebook="https://drive.google.com/file/d/17lsDh0F2krP1_TtGRf5lMJE_Z5F6ESzV/view?usp=sharing"/>
  )
}
