"use client";

import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";

const links = [
    {id: 1, title: "Homepage", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "Working Hours", url: "/"},
    {id: 4, title: "Contact", url: "/"},
];


const Menu = () => {
    const [open, setOpen] = useState(false)
    const user = false

    return (
        <div>
            {open ?
                (<Image onClick={() => setOpen(false)} src="/close.png" alt="" width={20} height={20}/>) :
                (<Image onClick={() => setOpen(true)} src="/open.png" alt="" width={20} height={20}/>)
            }

            <div className={`
                bg-red-500
                text-white
                absolute
                left-0
                right-0
                top-24
                h-[calc(100vh-6rem)]
                flex
                flex-col
                gap-8
                z-10
                items-center
                justify-center
                text-3xl
                ${open ? 'block' : 'hidden'}
            `}>
                {links.map(item => (
                    <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                        {item.title}
                    </Link>
                ))}
                {!user ?
                    (
                        <Link href="/login" onClick={() => setOpen(false)}>
                            Login
                        </Link>
                    ) :
                    (
                        <Link href="/orders" onClick={() => setOpen(false)}>
                            Orders
                        </Link>
                    )}
                <CartIcon />
            </div>
        </div>
    );
};

export default Menu;
