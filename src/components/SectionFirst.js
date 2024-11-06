import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import G1 from "../public/Gallery/G1.jpg"
import G2 from "../public/Gallery/G2.jpg"
import G3 from "../public/Gallery/G3.jpg"
import G4 from "../public/Gallery/G4.jpg"
import G5 from "../public/Gallery/G5.jpg"
import G6 from "../public/Gallery/G6.jpg"
import rightArrowWhite from "../public/img/rightArrowWhite.png"
const SectionFirst = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = [G1,G2,G3,G4,G5,G6]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
        return () => clearInterval(interval)
    }, [])


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
                            <div className="lg:w-[50vw] w-11/12 rounded-3xl object-cover" aria-roledescription="carousel">
                                <div className="relative h-56 overflow-hidden rounded-lg md:h-[77vh]">
                                    {slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                                }`}
                                            aria-hidden={index !== currentSlide}
                                        >
                                            <Image
                                                src={slide}
                                                alt={`Slide ${index + 1}`}
                                                layout="fill"
                                                objectFit="cover"
                                                priority={index === currentSlide}
                                            />
                                        </div>
                                    ))}
                                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                        {slides.map((_, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                                                    }`}
                                                aria-current={index === currentSlide}
                                                aria-label={`Slide ${index + 1}`}
                                                onClick={() => goToSlide(index)}
                                            ></button>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}

export default SectionFirst
