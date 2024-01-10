import React from 'react'

const FeaturedItems = () => {
  return (
    <div className=' w-screen overflow-x-scroll text-black'>
      {/*WRAPPER */}
      <div className=" w-max flex">
        {/*SINGLE Container */}

        <div className="w-screen h-[50vh] flex  flex-col items-center justify-around">
          {/*Image container */}
          <div className="relative ">
            <img src="/pizza-menu/pepperoni.png" alt="" width={200} />
          </div>

          <div className="">
            <h1>Title</h1>
            <p>discription</p>
            <span>price</span>
            <button>Add to Cart</button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default FeaturedItems