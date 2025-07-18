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
import Image from 'next/image';
import MainLogo from "@/public/img/MainLogo.png";
import { navLinks } from '@/constants';

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="bg-black fixed w-full z-20">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className='flex justify-center items-center'>
          <Link href="/">
            <Image
              src={MainLogo}
              alt="Logo"
              className='w-[300px]'
            />
          </Link>
        </div>

        <ul className="hidden lg:flex justify-between items-center">
          {navLinks.map((link, index) => (
            <li key={index} className="mr-8 p-1">
              <Link href={link.href} className="text-xl text-green-400 hover:font-semibold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='hidden lg:block'>
          <button className='bg-green-500 text-black font-semibold text-lg p-3 rounded-md hover:text-white transition duration-300 ease-in-out'>
            <Link href="/pages/triallesson">DIRECT PROEFLES</Link>
          </button>
        </div>

        <div className="lg:hidden flex justify-center">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger>
              <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="40" height="40" viewBox="0 0 50 50">
                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <ul className='h-[100vh] flex flex-col justify-center items-center space-y-4'>
                    {navLinks.map((link, index) => (
                      <li key={index} onClick={handleLinkClick}>
                        <Link href={link.href} className="text-xl text-gray-700 hover:font-semibold">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button onClick={handleLinkClick} className='bg-green-500 text-black font-semibold text-lg p-3 rounded-md'>
                        <Link href="/pages/triallesson">DIRECT PROEFLES</Link>
                      </button>
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