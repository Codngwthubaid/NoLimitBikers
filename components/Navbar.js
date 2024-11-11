"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <header className="bg-orange-400 fixed w-full z-10">
      <nav className="container mx-auto p-5 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-[#FFEED5]">Driving Lessons</Link>
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
            <Link href="/pages/pricing" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Pricing</Link>
          </li>
          <li className="mr-8 p-1">
            <Link href="/pages/contact" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Contact</Link>
          </li>
        </ul>
        <div className="md:hidden flex justify-center" onClick={handleMobileMenu}>
          <Sheet>
            <SheetTrigger>
              <svg
                className={`w-6 h-6 text-[#FFEED5] transition duration-300 ease-in-out ${mobileMenuActive ? 'rotate-90' : ''
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
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <ul className='h-[100vh] flex flex-col justify-center border border-red-500'>
                    <li onClick={handleMobileMenu} className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '100ms' }}>
                      <Link href="/" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Home</Link>
                    </li>
                    <li onClick={handleMobileMenu} className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '200ms' }}>
                      <Link href="/pages/about" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">About</Link>
                    </li>
                    <li onClick={handleMobileMenu} className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
                      <Link href="/pages/courses" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Courses</Link>
                    </li>
                    <li onClick={handleMobileMenu} className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
                      <Link href="/pages/pricing" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Pricing</Link>
                    </li>
                    <li onClick={handleMobileMenu} className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
                      <Link href="/pages/contact" className="text-xl text-[#FFEED5] hover:text-white hover:font-semibold">Contact</Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
