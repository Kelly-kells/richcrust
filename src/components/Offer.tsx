import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='bg-black flex justify-center items-center flex-col md:flex-row '>
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6 text-white '>
        <h1 className='text-3xl font-bold md:text-5xl'> Our Delicious and creamy Burger offer </h1>
        <p className=" text-xl"> Get our large burger when you buy a $50 worth of pizza</p>
        <CountDown />
        <button className=' bg-red-700 text-white py-3 px-6 mt-4 font-meduim rounded-md '>Order Now</button>
      </div>
      <div className=' flex-1   w-full relative animate-pulse'>
        <img src="/offer/burger.png" alt="burger" width={500} className='object-cover' />
      </div>
    </div>
  )
}

export default Offer