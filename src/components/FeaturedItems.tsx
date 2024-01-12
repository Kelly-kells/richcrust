import React from 'react'

const FeaturedItems = () => {
  return (
    <div className=' w-screen overflow-x-scroll text-black m-4'>
      {/*WRAPPER */}
      <div className=" w-max flex">
        {/*SINGLE Container */}

        <div className="w-screen h-[50vh] flex  flex-col items-center justify-around p-4">
          {/*Image container */}
          <div className="relative ">
            <img src="/pizza-menu/pepperoni.png" alt=""  width={200} className='object-contain' />
          </div>

          <div className=" flex flex-col gap-2">
            <h1 className=' text-xl font-bold uppercase'>Sicilian pizza</h1>
            <p>discription</p>
            <span className='text-xl font-bold'>NGN7000</span>
            <button className='bg-black text-primary p-2  font-medium rounded-md'>Add to Cart</button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default FeaturedItems