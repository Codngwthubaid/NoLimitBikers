'use client'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import PricingPopUpCard from "@/components/PricingPopUpCard"
import frontImage from "@/public/frontImage.jpg"

const SectionFirst = () => {
    return (
        <>
            <main>
                <section className="pt-36 w-full bg-cover bg-center pb-20" style={{ backgroundImage: `url(${frontImage.src})`}}>
                    <p className='text-3xl mb-16 md:text-4xl text-center text-white font-bold'>Klaar om de weg op te gaan? Begin vandaag met NoLimitBikers!</p>
                    <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                        <Card className="w-10/12 lg:w-[25vw] justify-center relative flex flex-col items-center bg-white transition-all duration-300 ease-in-out hover:scale-105">
                            <div className="absolute -top-4 bg-red-500 text-white text-base px-4 py-1 rounded-full font-semibold">
                                MEGA DEAL
                            </div>
                            <CardHeader>
                                <CardTitle className="text-gray-800 text-lg">AVB DAG CURSUS</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-4xl font-bold text-gray-800 mt-4">€799</p>
                                <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                                    <li>Starttijd: 07:00 uur</li>
                                    <li>Hele dag lessen inbegrepen</li>
                                    <li>Inclusief AVB-examen</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <PricingPopUpCard
                                    details="Wil je een motorrijles plannen? Neem vandaag nog contact met ons op via telefoon of onderstaand formulier en zet de eerste stap naar zelfverzekerd motorrijden. We helpen je graag met het vinden van een tijdstip dat bij jou past!"
                                    btnName="Selecteer deze cursus"
                                    Op1="AVB DAG CURSUS"
                                    Op2="  "
                                    Op3="  "
                                />
                            </CardFooter>
                        </Card>

                        <Card className="w-10/12 lg:w-[25vw] justify-center relative flex flex-col items-center  bg-[#050B30] text-white transition-all duration-300 ease-in-out hover:scale-105">
                            <div className="absolute -top-4 bg-red-500 text-white text-base px-4 py-1 rounded-full font-semibold">
                                MEGA DEAL
                            </div>
                            <CardHeader>
                                <CardTitle className=" text-lg">AVB HERKANSING</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-4xl font-bold  mt-4">€499</p>
                                <ul className="mt-4 space-y-2  text-gray-300 text-sm">
                                    <li>Starttijd: 07:00 uur</li>
                                    <li>6 rijlessen</li>
                                    <li>Inclusief AVB-examen</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <PricingPopUpCard
                                    details="Wil je een motorrijles plannen? Neem vandaag nog contact met ons op via telefoon en zet de eerste stap naar zelfverzekerd motorrijden. We helpen je graag met het vinden van een tijdstip dat bij jou past!"
                                    btnName="Selecteer deze cursus"
                                    Op1="AVB herkansing"
                                    Op2="  "
                                    Op3="  "
                                />

                            </CardFooter>
                        </Card>

                        <Card className="w-10/12 lg:w-[25vw] justify-center relative flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-105">

                            <div className="absolute -top-4 bg-red-500 text-white text-base px-4 py-1 rounded-full font-semibold">
                                MEGA DEAL
                            </div>
                            <CardHeader>
                                <CardTitle className="text-lg">AVD DAG CURSUS</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-4xl font-bold mt-4">€799</p>
                                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                    <li>Starttijd: 07:00 uur</li>
                                    <li>Hele dag lessen inbegrepen</li>
                                    <li>Inclusief AVD-examen</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <PricingPopUpCard
                                    details="Wil je een motorrijles plannen? Neem vandaag nog contact met ons op via telefoon en zet de eerste stap naar zelfverzekerd motorrijden. We helpen je graag met het vinden van een tijdstip dat bij jou past!"
                                    btnName="Selecteer deze cursus"
                                    Op1="AVD DAG CURSUS"
                                    Op2="  "
                                    Op3="  "
                                />
                            </CardFooter>

                        </Card>

                        <Card className="w-10/12 lg:w-[25vw] justify-center relative flex flex-col items-center  bg-[#050B30] text-white transition-all duration-300 ease-in-out hover:scale-105">
                            <div className="absolute -top-4 bg-red-500 text-white text-base px-4 py-1 rounded-full font-semibold">
                                MEGA DEAL
                            </div>
                            <CardHeader>
                                <CardTitle className=" text-lg">AVD HERKANSING</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-4xl font-bold  mt-4">€499</p>
                                <ul className="mt-4 space-y-2  text-gray-300 text-sm">
                                    <li>Starttijd: 07:00 uur</li>
                                    <li>6 rijlessen</li>
                                    <li>Inclusief AVD-examen</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <PricingPopUpCard
                                    details="Wil je een motorrijles plannen? Neem vandaag nog contact met ons op via telefoon en zet de eerste stap naar zelfverzekerd motorrijden. We helpen je graag met het vinden van een tijdstip dat bij jou past!"
                                    btnName="Selecteer deze cursus"
                                    Op1="AVD herkansing"
                                    Op2="  "
                                    Op3="  "
                                />

                            </CardFooter>
                        </Card>
                    </div>
                </section>
            </main>

        </>
    )
}

export default SectionFirst
