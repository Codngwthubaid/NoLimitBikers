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
                            <Image
                                src={mainDriving}
                                className="lg:w-[50vw] w-11/12 rounded-3xl object-cover"
                                alt="Picture of the author"
                            />
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}

export default SectionFirst
