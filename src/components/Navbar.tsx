import React from 'react'
import Menu from "./Menu"
import Link from 'next/link'
import CartIcon from './CartIcon'


const Navbar = () => {
  const user= false
  return (
    
    <div className=' h-12 text-black p-4 flex items-center font-bold justify-between border-b-2 border-b-primary shadow-md'>

<div >
      <Link href='/'>
       <img src="/logo.png" alt="logo" width={30} height={20} />
      </Link>
      </div>
      <div className="hidden md:flex gap-4 cursor-pointer">
        <Link href="/"> Home</Link>
        <Link href="/menu"> Menu</Link>
        <Link href="/contact"> Contact</Link>
        
      </div>
      {/*logo*/}
     
       {/*mobile-menu*/}
       <div className='md:hidden'>
        <Menu/>
       </div>
       <div className="hidden md:flex gap-4 items-center">
       {!user ? (
                    <Link href="/login" >Login</Link>
                    ):
                   ( <Link href="/order" >Orders</Link>)}
         <CartIcon/>
        
      </div>
    </div>
  )
}

export default Navbar