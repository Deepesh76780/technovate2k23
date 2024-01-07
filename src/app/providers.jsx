'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

const Providers = ({children}) => {
  return (
    <>
      {children}
      <Next13ProgressBar height="4px" color="white" options={{ showSpinner: false,easing: 'ease', speed: 500, }} showOnShallow />
    </>
  );
};

export default Providers;