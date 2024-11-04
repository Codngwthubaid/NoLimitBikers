import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import rightArrowWhite from "../public/img/rightArrowWhite.png"
import mainDriving from "../public/img/mainDriving.jpg"
const SectionFirst = () => {
    return (
        <>
            <main>
                <section className="container mx-auto pt-24 w-full">
                    <article className="flex justify-center items-center flex-col gap-y-5 lg:flex-row">
                        <div className="flex flex-col justify-center items-center lg:items-start gap-y-12 lg:w-[50vw] w-[95vw]">
                            <div className=" flex flex-col gap-y-4">
                                <div className="text-xl font-semibold">Grow up your driving skills</div>
                                <div className="text-3xl sm:text-5xl font-bold">Learn to
                                    <span className="rounded-xl bg-orange-400 text-white px-3 mx-2">Drive With</span>
                                </div>
                                <div className="text-3xl sm:text-5xl font-bold">Confidence</div>
                            </div>
                            <div>
                                <Link href="/pages/courses">
                                    <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">EXPLORE COURSES
                                        <Image
                                            src={rightArrowWhite}
                                            width={18}
                                            height={20}
                                            alt="Picture of the author"
                                        />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            {/* <Image
                                src={mainDriving}
                                className="lg:w-[50vw] w-11/12 rounded-3xl object-cover"
                                alt="Picture of the author"
                            /> */}


                            <div id="default-carousel" class="relative w-full" data-carousel="slide">
                                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                                    <div class="w-[90vw] sm:w-[40vw] duration-700 ease-in-out" data-carousel-item>
                                        <Image src={mainDriving} class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></Image>
                                    </div>
                                    <div class="w-[90vw] sm:w-[40vw] duration-700 ease-in-out" data-carousel-item>
                                        <Image src={rightArrowWhite} class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></Image>
                                    </div>
                                    <div class="w-[90vw] sm:w-[40vw] duration-700 ease-in-out" data-carousel-item>
                                        <Image src={mainDriving} class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></Image>
                                    </div>
                                    <div class="w-[90vw] sm:w-[40vw] duration-700 ease-in-out" data-carousel-item>
                                        <Image src={mainDriving} class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></Image>
                                    </div>
                                    <div class="w-[90vw] sm:w-[40vw] duration-700 ease-in-out" data-carousel-item>
                                        <Image src={mainDriving} class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></Image>
                                    </div>
                                </div>
                                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                                </div>
                                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                        <span class="sr-only">Previous</span>
                                    </span>
                                </button>
                                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span class="sr-only">Next</span>
                                    </span>
                                </button>
                            </div>

                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}

export default SectionFirst
