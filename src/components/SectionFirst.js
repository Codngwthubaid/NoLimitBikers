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
import PricingPopUpCard from "@/components/PricingPopUpCard"

const packages = [
    { id: 1, name: "AVB DAG CURSUS", price: "€699,00", selectBtn: "Selecteer deze cursus", features: ["Starttijd: 07:00 uur", "Hele dag lessen inbegrepen", "Inclusief AVB-examen"] },
    { id: 2, name: "AVD DAG CURSUS", price: "€699,00", selectBtn: "Selecteer deze cursus", features: ["Starttijd: 07:00 uur", "Hele dag lessen inbegrepen", "Inclusief AVD-examen"] }
]


const SectionFirst = () => {
    const router = useRouter()

    const handleSubmit = () => {
        router.push("/pages/pricing")
    }

    return (
        <>
            <main>
                <section className="container mx-auto pt-36 w-full">
                    {/* <article className="flex justify-center items-center flex-col gap-y-5 lg:flex-row">
                        <div className="flex flex-col justify-center items-center lg:items-start gap-y-12 lg:w-[50vw] w-[95vw]">
                            <div className=" flex flex-col gap-y-4">
                                <div className="text-xl font-semibold text-gray-700">Ontwikkel uw rijvaardigheid</div>
                                <div className="text-3xl sm:text-5xl font-bold text-gray-700">Leer
                                    <span className="rounded-xl bg-[#c1e1c1] text-white px-3 mx-2">rijden</span>
                                </div>
                                <div className="text-3xl sm:text-5xl font-bold text-gray-700">met vertrouwen</div>
                                <div className="text-xl font-semibold text-gray-700">in Rotterdam e.o.</div>
                            </div>
                            <div>
                                <Link href="/pages/courses">
                                    <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-green-400 p-4 rounded-xl">ONTDEK ONZE PAKKETTEN
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
                        <div className='flex flex-col justify-center items-center'>
                            <div className='relative top-[90px] z-10 text-white bg-red-500 rounded-[40px] font-semibold p-3'><span>MEGA DEAL</span></div>
                            <Carousel className="w-[75vw] bg-white rounded-full lg:w-[30vw] mt-16">
                                <CarouselContent>
                                    {packages.map((pkg) => (
                                        <CarouselItem key={pkg.id}>
                                            <div className="p-1 rounded-2xl">
                                                <Card className="flex flex-col items-center bg-white shadow-[0_10px_20px_rgba(193,_225,_193,_1)] m-1 rounded-[40px]">
                                                    <CardHeader>
                                                        <CardTitle className="text-gray-700 font-bold text-xl">{pkg.name}</CardTitle>
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
                        </div>
                    </article> */}
                    <p className='text-[50px] text-center text-gray-900 font-bold mb-10'>Begin vandaag nog uw reis met NoLimitBikers</p>
                    <div className="flex flex-col lg:flex-row gap-8 justify-center">
                        <Card className="w-[25vw] relative flex flex-col items-center bg-white transition-all duration-300 ease-in-out hover:scale-105">
                        <div className="absolute -top-4 bg-red-500 text-white text-base px-4 py-1 rounded-full font-semibold">
                              MEGA DEAL
                            </div>
                            <CardHeader>
                                <CardTitle className="text-gray-800 text-lg">AVB DAG CURSUS</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-4xl font-bold text-gray-800 mt-4">€699,00</p>
                                <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                                    <li>12 uur rijles</li>
                                    <li>Vaste instructeur</li>
                                    <li>Nieuwe lesmotor</li>
                                    <li>Leskaart &amp; Advies</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <PricingPopUpCard
                                    Op1="AVB Pakket Silver"
                                    Op2="AVB Pakket Gold "
                                    Op3="AVB Pakket Platinum"
                                />
                            </CardFooter>
                        </Card>

                        <Card className="w-[25vw] relative flex flex-col items-center  bg-[#050B30] text-white transition-all duration-300 ease-in-out hover:scale-105">
                            <div className="absolute -top-4 bg-red-500 text-white text-base px-4 py-1 rounded-full font-semibold">
                              MEGA DEAL
                            </div>
                            <CardHeader>
                                <CardTitle className="text-lg">AVB Pakket Gold </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-4xl font-bold mt-4">€999,00</p>
                                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                                    <li>16 uur rijles</li>
                                    <li>Vaste instructeur</li>
                                    <li>Nieuwe lesmotor</li>
                                    <li>Leskaart &amp; Advies</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <PricingPopUpCard
                                    Op1="AVB Pakket Silver"
                                    Op2="AVB Pakket Gold "
                                    Op3="AVB Pakket Platinum" />
                            </CardFooter>
                        </Card>

                        <Card className="w-[25vw] relative flex flex-col items-center  bg-green-100 transition-all duration-300 ease-in-out hover:scale-105">
                        <div className="absolute -top-4 bg-red-500 text-white text-base px-4 py-1 rounded-full font-semibold">
                              MEGA DEAL
                            </div>
                            <CardHeader>
                                <CardTitle className="text-gray-800 text-lg">AVB Pakket Platinum</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-4xl font-bold text-gray-800 mt-4">€1299,00</p>
                                <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                                    <li>20 uur rijles</li>
                                    <li>Vaste instructeur</li>
                                    <li>Nieuwe lesmotor</li>
                                    <li>Leskaart &amp; Advies</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <PricingPopUpCard
                                    Op1="AVB Pakket Silver"
                                    Op2="AVB Pakket Gold "
                                    Op3="AVB Pakket Platinum" />
                            </CardFooter>
                        </Card>
                    </div>
                </section>
            </main>

        </>
    )
}

export default SectionFirst
