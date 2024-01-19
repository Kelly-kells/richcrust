import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

const menuPage = () => {
  return (
    <div className='p-4 lg:p-20 xl:p-10 flex flex-col md:flex-row items-center'>
     {menu.map(category=>(
      <Link href={category.slug} key={category.id}>

      </Link>
     ))}
      </div>
  )
}

export default menuPage