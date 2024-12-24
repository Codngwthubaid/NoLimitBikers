import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (


        <footer className=" bg-white mt-10">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-3xl font-bold whitespace-nowrap text-gray-700">NoLimitBikers</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6">
                        <div>
                            <h2 className="mb-6 text-lg font-bold text-gray-700 uppercase dark:text-white ">Contact</h2>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="https://flowbite.com/" className="hover:text-green-400">06 14 38 20 99</Link>
                                </li>
                                <li>
                                    <Link href="https://tailwindcss.com/" className="hover:text-green-400">Info@nolimitbikers.nl</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-bold text-gray-700 uppercase dark:text-white ">Volg ons</h2>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="https://github.com/themesberg/flowbite" className=" hover:text-green-400">Instagram</Link>
                                </li>
                                <li>
                                    <Link href="https://discord.gg/4eeurUVvTy" className="hover:text-green-400">Facebook</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2024 <Link href="/" className="hover:text-green-400 hover:underline">Driving Lessons</Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>

    );
};


export default Footer;
