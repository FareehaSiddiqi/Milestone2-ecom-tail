import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {
  return (
    <div className="hero">
      <div className="img">
      <div className="info">
        <h1 className="name">Hello <br /> I am <br /> Fareeha Siddiqi</h1>
        <div className="btn2">
          <Link href="/" className="btn">About Me</Link>
          <Link href="/contact" className="btn">Contact Me</Link>
        </div>
        <Image src="/images/p2.jpeg" alt="fareehasiddiqui" width="200" height="200" />
      </div>
      </div>
    </div>
  );
}

export default Hero;
