'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import rightArrowWhite from "../public/img/rightArrowWhite.png"
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"

const packages = [
    { id: 1, name: "AVB DAG CURUSUS", price: "€699,00", selectBtn: "Beginnen met basis", features: ["Start 7:00", "Hele dag lessen", "Inclusief AVB examen"] },
    { id: 2, name: "AVD DAG CURUSUS", price: "€699,00", selectBtn: "Selecteer Goud", features: ["Start 7:00", "Hele dag lessen", "Inclusief AVD examen"] }
]


const SectionFirst = () => {
    const router = useRouter()

    const handleSubmit = () => {
        router.push("/pages/pricing")
    }

    return (
        <>
            <main>
                <section className="container mx-auto pt-40 w-full">
                    <article className="flex justify-center items-center flex-col gap-y-5 lg:flex-row">
                        <div className="flex flex-col justify-center items-center lg:items-start gap-y-12 lg:w-[50vw] w-[95vw]">
                            <div className=" flex flex-col gap-y-4">
                                <div className="text-xl font-semibold text-gray-700">Ontwikkel uw rijvaardigheid</div>
                                <div className="text-3xl sm:text-5xl font-bold text-gray-700">Leer
                                    <span className="rounded-xl bg-[#c1e1c1] text-white px-3 mx-2">rijden</span>
                                </div>
                                <div className="text-3xl sm:text-5xl font-bold text-gray-700">met Vertrouwe</div>
                            </div>
                            <div>
                                <Link href="/pages/courses">
                                    <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-green-400 p-4 rounded-xl">ONTDEK CURSUSSEN
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
                        <Carousel className="w-[70vw] bg-white rounded-2xl lg:w-[30vw] mt-16">
                            <CarouselContent>
                                {packages.map((pkg) => (
                                    <CarouselItem key={pkg.id}>
                                        <div className="p-1 rounded-2xl">
                                            <Card className="flex flex-col items-center bg-white shadow-[0_10px_20px_rgba(193,_225,_193,_1)] m-1 rounded-2xl">
                                                <CardHeader>
                                                    <CardTitle className="text-gray-700 font-bold text-2xl">{pkg.name}</CardTitle>
                                                </CardHeader>
                                                <CardContent className="text-center">
                                                    <p className="text-4xl font-bold text-gray-800 mt-4">{pkg.price}</p>
                                                    <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                                                        {pkg.features.map((feature, index) => (
                                                            <li key={index}>{feature}</li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button
                                                        className="w-full bg-green-400"
                                                        onClick={() => handleSubmit(pkg.id)}
                                                    >
                                                        {pkg.selectBtn}
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </article>
                </section>
            </main>
            {/* <main className="bg-[#C1E1C1]">
            <section className="container mx-auto pt-24 w-full">
                <article className="flex justify-center items-center flex-col gap-y-5 lg:flex-row">
                    <div className="flex flex-col justify-center items-center lg:items-start gap-y-12 lg:w-[50vw] w-[95vw]">
                        <div className="flex flex-col gap-y-4">
                            <div className="text-xl font-semibold text-[#4B5F4B]">Ontwikkel uw rijvaardigheid</div>
                            <div className="text-3xl sm:text-5xl font-bold text-[#4B5F4B]">Leer ermee
                                <span className="rounded-xl bg-[#E1C1E1] text-[#4B5F4B] px-3 mx-2 shadow-lg">rijden</span>
                            </div>
                            <div className="text-3xl sm:text-5xl font-bold text-[#4B5F4B]">Vertrouwen</div>
                        </div>
                        <div>
                            <Link href="/pages/courses">
                                <Button
                                    className="flex justify-center items-center gap-x-2 bg-[#E1C1E1] hover:bg-[#D1B1D1] text-[#4B5F4B] font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2 shadow-lg"
                                >
                                    ONTDEK CURSUSSEN
                                    <Image
                                        src={rightArrowWhite}
                                        width={18}
                                        height={20}
                                        alt="Right arrow"
                                    />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <Carousel className="w-[70vw] bg-white lg:w-[30vw] mt-16 rounded-xl shadow-xl">
                        <CarouselContent>
                            {packages.map((pkg) => (
                                <CarouselItem key={pkg.id}>
                                    <div className="p-1 bg-[#c1e1c1] rounded-lg drop-shadow-md">
                                        <Card className="flex flex-col items-center bg-[#E1C1E1] border border-[#C1E1C1] shadow-lg m-1 rounded-2xl">
                                            <CardHeader>
                                                <CardTitle className="text-[#4B5F4B] font-bold text-2xl">{pkg.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-center">
                                                <p className="text-4xl font-bold text-[#4B5F4B] mt-4">{pkg.price}</p>
                                                <ul className="mt-4 space-y-2 text-[#4B5F4B] text-sm">
                                                    {pkg.features.map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button
                                                    className="w-full bg-[#C1E1C1] hover:bg-[#B1D1B1] text-[#4B5F4B] font-bold shadow-md"
                                                    onClick={() => handleSubmit(pkg.id)}
                                                >
                                                    {pkg.selectBtn}
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-[#4B5F4B] bg-white" />
                        <CarouselNext className="text-[#4B5F4B] bg-white" />
                    </Carousel>
                </article>
            </section>
        </main> */}
        </>
    )
}

export default SectionFirst
