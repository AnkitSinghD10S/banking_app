'use client';
import React from 'react'
import CountUp from 'react-countup';
const AnimatedCounter = ({amount}:{amount :number}) => {
  return (
    <div className='W-full'>
        <CountUp
        decimals={2}
        decimal=','
        prefix='₹'
        end={amount} />
    </div>
  )
}

export default AnimatedCounter