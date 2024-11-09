"use client";


import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-blue-800 text-gray-950 h-auto sm:h-12 py-2 px-3 flex flex-col sm:flex-row justify-between place-items-center">
                <div className='mb-4 sm:mb-0'>
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold">
                        <a href="#!">E-Commerce</a> 
                    </h1>
                </div>
                <div className='w-full sm:w-auto mb-4 sm:mb-0'>
                    <ul className="flex gap-5">
                        <li>
                            <Link href="/" className=" hover:text-red-700">Home</Link>
                        </li>
                        <li>
                            <Link href="/aboutus" className=" hover:text-red-700">About Us</Link>
                        </li>
                        <li>
                            <Link href="/contactus" className=" hover:text-red-700">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-3">

                        <li><Link href="#!" className=" hover:text-red-700">Login</Link></li>
                        <li><Link href="#!" className=" hover:text-red-700">SignUp</Link></li>
                    </ul>





                </div>
            </nav>
        </div>
    );
};

export default Navbar;
