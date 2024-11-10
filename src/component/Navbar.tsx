"use client";


import React from 'react';
import Link from 'next/link';
import About from '../app/about/page';
import project from '../app/project/page';
import contactUs from '../app/contactUs/page';

const Navbar = () => {
    return (
        <header className='=nav' >
            <div className='logo'><h2>FSM</h2>


            </div>
            <div className='navigate'>
                <ul>
                    <li><Link className="link" href="/">Home</Link></li>
                    <li><Link className="link" href="/about">About</Link></li>
                        <li><Link className="link" href="/project">Projects</Link></li>
                        <li><Link className="link" href="/contactUs">Contact Us</Link></li>
                    </ul>
            </div>
            <div className='btn'>

                <button> Download CV</button>
            </div>
        </header>
    );
};

export default Navbar;
