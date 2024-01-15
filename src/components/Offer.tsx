import React from 'react'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row'>
      <div className='flex-1 flex-col justify-center items-center text-center gap-8 p-6 text-white '>
        <h1 className='text-5xl font-bold'> Our Delicious and creamy Burger offer </h1>
        <p> Get our large burger when you buy a $50 worth of pizza</p>
        <button className='bg-primary text-black p-2 mt-4 font-medium rounded-md'>Order Now</button>
      </div>
      <div className='flex-1 w-full relative'>
        <img src="/offer/burger.png" alt="" className='object-cover' />
      </div>
    </div>
  )
}

export default Offer