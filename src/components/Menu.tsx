"use client";

import Link from "next/link";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import CartIcon from "./CartIcon";

const navMenu = () => {

    const IconStyle = {
        color: '#e4b61a',
        fontSize: '24px',
    };
    const [open, setOpen] = useState(false)
    const user= false

    const links = [
        { id: 1, title: "Home", url: "/" },
        { id: 2, title: "Menu", url: "/menu" },
        { id: 3, title: "Working Hours", url: "/working hours" },
        { id: 4, title: "contact", url: "/ contact" }
    ]
    return (
        <div>
            {!open ? (
                <GiHamburgerMenu style={IconStyle} onClick={() => setOpen(true)} />
            ) : (
                <MdClose style={IconStyle} onClick={() => setOpen(false)} />
            )
            }
            <div className="bg-gray-950 text-white 
            absolute left-0 top-24 h-1/2 w-40 rounded-md flex flex-col items-center  justify-center gap-4 z-10 ">
                {links.map(item => (
                    <Link href={item.url} key={item.id}>
                        {item.title}
                    </Link>
                ))}
                {!user ? (
                <Link href="/login">Login</Link>
                ):
               ( <Link href="/order">Order</Link>)}
               <Link href="/cart">
                <CartIcon/>
               </Link>
            </div>
        </div>
    )
}
export default navMenu