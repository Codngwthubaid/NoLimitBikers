import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
    return (
        <footer className=" bg-white mt-10">
            <div className="w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex justify-between">
                    <div className="flex justify-around sm:justify-start gap-x-10">
                        <div>
                            <h2 className="mb-6 text-lg font-bold text-gray-700 uppercase dark:text-white ">Contact</h2>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="#" className="hover:text-green-400">📞 06 14 38 20 99</Link>
                                </li>
                                <li>
                                    <Link href="#" className=" hover:text-green-400">📩 Info@nolimitbikers.nl</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-bold text-gray-700 uppercase dark:text-white ">Volg ons</h2>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="https://www.instagram.com/nolimitbikers_010/" className="flex gap-x-1 items-center hover:text-green-400">
                                        <Image width="24" height="24" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1" />
                                        <div>Instagram</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © {new Date().getFullYear()} <Link href="/" className="hover:text-green-400 hover:underline">NoLimitBikers</Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};



