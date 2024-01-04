import React from 'react'
import EventCard from '../components/eventCardBox'
import ComingSoonText from '../../components/comingSoon'

export default function page() {
  return (
    <div className='flex  custom  flex-wrap gap-2 lg:gap-10 justify-center mx-auto w-fit'>
        <ComingSoonText/>
    </div>
  )
}
