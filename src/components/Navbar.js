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
        <Link href="#" className="text-2xl font-bold text-white">Driving Lessons</Link>
        <ul className="hidden md:flex justify-between items-center">
          <li className="mr-8">
            <Link href="/" className="text-lg text-white hover:text-gray-800">Home</Link>
          </li>
          <li className="mr-8">
            <Link href="/pages/about" className="text-lg text-white hover:text-gray-800">About</Link>
          </li>
          <li className="mr-8">
            <Link href="/pages/courses" className="text-lg text-white hover:text-gray-800">Courses</Link>
          </li>
          <li className="mr-8">
            <Link href="/pages/contact" className="text-lg text-white hover:text-gray-800">Contact</Link>
          </li>
          <li className="mr-8">
            <Link href="/pages/help" className="text-lg text-white hover:text-gray-800">Help</Link>
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
          className={`md:hidden flex flex-col justify-center items-center absolute top-16 left-0 w-full h-[90vh] bg-orange-400 shadow-md transition duration-300 ease-in-out ${
            mobileMenuActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '100ms' }}>
            <Link href="#" className="text-lg text-white hover:text-gray-800">Home</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '200ms' }}>
            <Link href="#" className="text-lg text-white hover:text-gray-800">About</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <Link href="#" className="text-lg text-white hover:text-gray-800">Courses</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <Link href="#" className="text-lg text-white hover:text-gray-800">Pages</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <Link href="#" className="text-lg text-white hover:text-gray-800">Contact</Link>
          </li>
          <li className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <Link href="#" className="text-lg text-white hover:text-gray-800">Help</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;


// import Link from 'next/link';
// import Image from 'next/image';

// export default function Navbar() {
//   return (
//     <>
//       {/* First navigation bar */}
//       <nav className="bg-white border-gray-200 dark:bg-gray-900">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
//           <Link href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
//               {/* Use Next.js Image for optimized image loading */}
//               <Image
//                 src="https://flowbite.com/docs/images/logo.svg"
//                 alt="Flowbite Logo"
//                 width={32}
//                 height={32}
//                 className="h-8"
//               />
//               <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//                 Bike Driving 
//               </span>
//           </Link>

//           <div className="flex items-center space-x-6 rtl:space-x-reverse">
//             <Link href="tel:5541251234" className="text-sm text-gray-mr-800 dark:text-white hover:underline">
//               (555) 412-1234
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Second navigation bar */}
//       <nav className="bg-gray-mr-80 dark:bg-gray-700">
//         <div className="max-w-screen-xl px-4 py-3 mx-auto">
//           <div className="flex items-center">
//             <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
//               <li>
//                 <Link href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">
//                     Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-900 dark:text-white hover:underline">About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-900 dark:text-white hover:underline">Courses
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-900 dark:text-white hover:underline">Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }


