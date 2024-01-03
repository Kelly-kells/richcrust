import Link from 'next/link'
import React from 'react'
import { BsCart4 } from "react-icons/bs";

const CartIcon = () => {

  return (
    <Link href="/cart" className='flex items-center '>
      <div className='relative w-10 h10 text-primary'>
        <BsCart4 style={{ fontSize: '24px' }}/>
      </div>
      <span >Cart(3)</span>
    </Link>
  )
}

export default CartIcon