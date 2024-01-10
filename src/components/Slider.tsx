"use client";
import React, { useEffect, useState } from 'react';
import 'animate.css';

const data = [
  {
    id: 1,
    title: "Always Fresh and Sumptuous",
    Image: "./herobg1.jpg"
  },

  {
    id: 2,
    title: "The best pizza to share with your family",
    Image: "./pizza2.jpg"
  },

  {
    id: 3,
    title: "We make deliveries everywhere within Abuja",
    Image: "./delivery.jpg"
  },
]

const Slider = () => {

  const [currentSlider, setCurrentSlider] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev + 1) % data.length); // Use modulo to loop back to the first item
    }, 3000);;


    return () => clearInterval(interval);
  }, []);
  return (

    <div className="bg-cover bg-center h-screen flex items-center justify-center transition-opacity ease-in-out"
      style={{ backgroundImage: `url(${data[currentSlider].Image})` }}>
      <div className='bg-primary  m-4 p-8 opacity-85'>
        <h1 className="text-white text-4xl md:text-5xl w-full text-center font-extrabold animate__animated animate__bounceInDown ">{data[currentSlider].title}
        </h1>
        <button className='bg-black text-primary text-xl md:text-2xl ml-8 font-semibold rounded-md p-2 mt-6'>Order now!</button>
      </div>
    </div>
  )
}

export default Slider