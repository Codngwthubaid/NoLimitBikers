"use client"
import React,{useState} from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <header className="bg-orange-400 fixed w-full">
      <nav className="container mx-auto p-5 flex justify-between items-center">
        <Link href="#" className="text-3xl font-bold text-[#FFEED5]">Driving Lessons</Link>
        <ul className="hidden md:flex justify-between items-center">
          <li className="mr-8 p-1">
            <Link href="/" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Home</Link>
          </li>
          <li className="mr-8 p-1">
            <Link href="/pages/about" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">About</Link>
          </li>
          <li className="mr-8 p-1">
            <Link href="/pages/courses" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Courses</Link>
          </li>
          <li className="mr-8 p-1">
            <Link href="/pages/contact" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Contact</Link>
          </li>
          <li className="mr-8 p-1">
            <Link href="/pages/help" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Help</Link>
          </li>
        </ul>
        <div className="md:hidden flex justify-center" onClick={handleMobileMenu}>
          <svg
            className={`w-6 h-6 text-[#FFEED5] transition duration-300 ease-in-out ${
              mobileMenuActive ? 'rotate-90' : ''
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="4" y="4" width="8" height="8" rx="1" fill="#fff" />
            <rect x="12" y="4" width="8" height="8" rx="1" fill="#fff" />
            <rect x="4" y="12" width="8" height="8" rx="1" fill="#fff" />
          </svg>
        </div>
      </nav>
      {mobileMenuActive && (
        <ul
          className={`md:hidden flex flex-col justify-center items-center absolute top-16 left-0 w-full min-h-[100vh] bg-orange-400 shadow-md transition duration-300 ease-in-out ${
            mobileMenuActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '100ms' }}>
            <Link href="#" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Home</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '200ms' }}>
            <Link href="#" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">About</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <Link href="#" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Courses</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <Link href="#" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Pages</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <Link href="#" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Contact</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <Link href="#" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Help</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
