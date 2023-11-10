"use client"
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className='text-slate-200 font-bold flex w-full h-full  justify-center items-center'>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#a85dd1e1"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  )
}