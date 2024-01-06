import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' h-12 md:24 p-4 lg:p-20 xl:p-10 text-primary flex items-center justify-between'>
      <Link href='/'>
       <img src="/logo.png" alt="logo" width={50} height={30} />
      </Link>
      <p className=' font-bold'>All rights reserved @ 2024</p>
    </div>
  )
}

export default Footer