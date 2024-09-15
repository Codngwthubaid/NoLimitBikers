"use client"
import React,{useState} from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <header className="bg-blue-600 border-b border-white">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href="#" className="text-2xl font-bold text-white">Driving Lessons</Link>
        <ul className="hidden md:flex justify-between items-center">
          <li className="mr-5">
            <Link href="#" className="text-lg text-white hover:text-gray-900">Home</Link>
          </li>
          <li className="mr-5">
            <Link href="#" className="text-lg text-white hover:text-gray-900">About</Link>
          </li>
          <li className="mr-5">
            <Link href="#" className="text-lg text-white hover:text-gray-900">Courses</Link>
          </li>
          <li className="mr-5">
            <Link href="#" className="text-lg text-white hover:text-gray-900">Pages</Link>
          </li>
          <li className="mr-5">
            <Link href="#" className="text-lg text-white hover:text-gray-900">Contact</Link>
          </li>
          <li className="mr-5">
            <Link href="#" className="text-lg text-white hover:text-gray-900">Help</Link>
          </li>
        </ul>
        <div className="md:hidden flex justify-center" onClick={handleMobileMenu}>
          <svg
            className={`w-6 h-6 text-white transition duration-300 ease-in-out ${
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
          className={`md:hidden flex flex-col justify-center items-center absolute top-16 left-0 w-full h-[90vh] bg-blue-600 shadow-md transition duration-300 ease-in-out ${
            mobileMenuActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '100ms' }}>
            <Link href="#" className="text-lg text-white hover:text-gray-900">Home</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '200ms' }}>
            <Link href="#" className="text-lg text-white hover:text-gray-900">About</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <Link href="#" className="text-lg text-white hover:text-gray-900">Courses</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <Link href="#" className="text-lg text-white hover:text-gray-900">Pages</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <Link href="#" className="text-lg text-white hover:text-gray-900">Contact</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <Link href="#" className="text-lg text-white hover:text-gray-900">Help</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;