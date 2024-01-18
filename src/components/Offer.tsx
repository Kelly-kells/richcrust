import React from 'react'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row'>
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6 text-white '>
        <h1 className='text-5xl font-bold'> Our Delicious and creamy Burger offer </h1>
        <p className=" xl:text-xl"> Get our large burger when you buy a $50 worth of pizza</p>
        <button className=' bg-red-700 text-white py-3 px-6 mt-4 font-bold rounded-md '>Order Now</button>
      </div>
      <div className='flex-1 w-full relative animate-bounce'>
        <img src="/offer/burger.png" alt="" className='object-cover' />
      </div>
    </div>
  )
}

export default Offer