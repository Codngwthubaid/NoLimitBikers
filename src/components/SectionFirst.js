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
    { id: 1, name: "AVB Pakket Silver", price: "€749,00", selectBtn: "Beginnen met basis", features: ["12 uur rijles", "Vaste instructeur", "Nieuwe les motor", "Leskaart &amp; Advies"] },
    { id: 2, name: "AVB Pakket Gold Mega Deal", price: "€999,00", selectBtn: "Selecteer Goud", features: ["16 uur rijles", "Vaste instructeur", "Nieuwe les motor", "Leskaart &amp; Advies"] },
    { id: 3, name: "AVB Pakket Platinum", price: "€1299,00", selectBtn: "Kies Platina", features: ["20 uur rijles", "Vaste instructeur", "Nieuwe les motor", "Leskaart &amp; Advies"] },
    { id: 4, name: "AVD Pakket Silver", price: "€799,00", selectBtn: "Beginnen met basis", features: ["12 uur rijles", "Vaste instructeur", "Nieuwe les motor", "Leskaart &amp; Advies"] },
    { id: 5, name: "AVD Pakket Gold Mega Deal", price: "€1199,00", selectBtn: "Selecteer Goud", features: ["18 uur rijles", "Vaste instructeur", "Nieuwe les motor", "Leskaart &amp; Advies"] },
    { id: 6, name: "AVD Pakket Platinum", price: "€1299,00", selectBtn: "Kies Platina", features: ["20 uur rijles", "Vaste instructeur", "Nieuwe les motor", "Leskaart &amp; Advies"] },

]


const SectionFirst = () => {
    const router = useRouter()

    const handleSubmit = () => {
        router.push("/pages/pricing")
    }

    return (
        <>
            {/* <main>
                <section className="container mx-auto pt-24 w-full">
                    <article className="flex justify-center items-center flex-col gap-y-5 lg:flex-row">
                        <div className="flex flex-col justify-center items-center lg:items-start gap-y-12 lg:w-[50vw] w-[95vw]">
                            <div className=" flex flex-col gap-y-4">
                                <div className="text-xl font-semibold">Ontwikkel uw rijvaardigheid</div>
                                <div className="text-3xl sm:text-5xl font-bold">Leer
                                    <span className="rounded-xl bg-orange-400 text-white px-3 mx-2">ermee rijden</span>
                                </div>
                                <div className="text-3xl sm:text-5xl font-bold">Vertrouwen</div>
                            </div>
                            <div>
                                <Link href="/pages/courses">
                                    <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">ONTDEK CURSUSSEN
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
                        <Carousel className="w-[70vw] bg-[#ffeed5] lg:w-[30vw] mt-16">
                            <CarouselContent>
                                {packages.map((pkg) => (
                                    <CarouselItem key={pkg.id}>
                                        <div className="p-1">
                                            <Card className="flex flex-col items-center bg-[#ffeed5] shadow-[0_10px_20px_rgba(251,_146,_60,_1)] m-1 rounded-2xl">
                                                <CardHeader>
                                                    <CardTitle className="text-[#a99595] font-bold text-2xl">{pkg.name}</CardTitle>
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
                                                        className="w-full bg-orange-500 hover:bg-orange-600"
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
            </main> */}
        <main className="bg-[#C1E1C1]">
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
        </main>
        </>
    )
}

export default SectionFirst
