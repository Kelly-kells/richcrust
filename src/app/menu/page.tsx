import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

const menuPage = () => {
  return (
    <div className='p-4 lg:p-20 xl:p-10 flex flex-col md:flex-row items-center'>
      {menu.map(category => (
        <Link href={category.slug} key={category.id} 
        className='w-full h-1/3 bg-cover p-8 m-4 md:h-1/2'
        style={{ backgroundImage: `url(${category.img})`, backgroundSize: 'cover',
        backgroundPosition: 'center',
         }} >
          <div>
            <h1 className=' text-white font-bold uppercase p-6'>{category.title}</h1>
            <p className=' text-white'>{category.desc}</p>
            <button className=' bg-primary text-black py-3 px-6 mt-4 font-meduim rounded-md'>Explore  </button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default menuPage