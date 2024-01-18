import { featuredProducts } from '@/data'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const FeaturedItems = () => {
  return (
    <div className=' overflow-x-scroll text-black m-8 p4'>
      
      {/*WRAPPER */}
      <div className=" w-max flex">
        {/*SINGLE Container */}
        {featuredProducts.map((item) => (

          <div key={item.id} className="w-screen  flex  flex-col items-center bg-[#ffe863]
justify-around p-4 hover:transition-all duration-300 md:w-[50vw] xl:w-[33vw] lg:h-[90vh]">
            {/*Image container */}

            {item.img && (
              <div className="relative mt-2 hover:rotate-[60deg] transition-all duration-500">
                <img src={item.img} alt="" width={200} className='object-contain' />

              </div>
            )}

            <div className=" flex flex-col justify-center items-center text-center gap-2">
              <h1 className=' text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
              <p className='p-6 2xl:p-8'>{item.desc}</p>
              <span className='text-xl font-bold'>${item.price}</span>
              <button className='bg-black text-primary p-2 mt-4 font-medium rounded-md'>Add to Cart</button>
            </div>
          </div>

        )


        )}

      </div>

    </div>
  )
}

export default FeaturedItems