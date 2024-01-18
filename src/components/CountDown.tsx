"use client";
import React from 'react';
import Countdown from 'react-countdown';

const CountDown = () => {
  const endDate = new Date('2024-03-15');

  return (
    <div>
      <Countdown className='text-5xl text-primary font-bold' date={endDate} />
    </div>
  );
};

export default CountDown;
;

