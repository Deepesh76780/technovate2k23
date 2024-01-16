import React from 'react'
import EventCard from '../../components/mainCardBox'
import { technicalEvent } from '../../../../styles/data'

export async function generateMetadata({params}){
  const data = technicalEvent.find(item => item.SNO === +params.slug)
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

  const data = technicalEvent.find(item => item.SNO === +params.slug)

  return (
    <EventCard store={data} rulebook={"https://drive.google.com/file/d/1vg02uSVvAdJFTJ4LVuawovZZjXgYOFqP/view"} />
  )
}
