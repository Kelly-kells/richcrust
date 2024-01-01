import Link from 'next/link'
import React from 'react'
import { BsCart4 } from "react-icons/bs";

const CartIcon = () => {

  return (
    <Link href="/cart" className='flex items-center '>
      <div className='relative w-8 h8'>
        <BsCart4 />
      </div>
      <span>Cart(3)</span>
    </Link>
  )
}

export default CartIcon