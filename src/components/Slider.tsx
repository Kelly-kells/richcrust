"use client";
import React, { useState } from 'react';


import 'animate.css';

const data =[
  {id: 1,
    title: "Always Fresh and Sumptuous",
    Image:"./pizza.jpg"
  },

  {id: 2,
    title: "The best pizza to share with your family",
    Image:"./pizza2.jpg"
  },

  {id: 3,
    title: "We make deliveries everywhere within Abuja",
    Image:"./delivery.jpg"
  },
]

const Slider = () => {

  const[currentSlider, setCurrentSlider]=useState(0)
  return (
 
    <div className="bg-cover bg-center h-screen flex items-center justify-center"
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