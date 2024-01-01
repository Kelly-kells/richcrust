import React from 'react'
import Menu from "./Menu"
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className=' h-12 text-black p-4 flex items-center justify-between border-b-2 border-b-primary shadow-md'>
      {/*logo*/}
      <div >
      <Link href='/'>
       <img src="/logo.png" alt="logo" width={30} height={20} />
      </Link>
      </div>
       {/*mobile-menu*/}
       <div>
        <Menu/>
       </div>
    </div>
  )
}

export default Navbar