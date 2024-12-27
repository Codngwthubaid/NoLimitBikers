"use client"
import React, { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SubSectionheadings from "@/components/SubSectionheadings"
import PricingPopUpCard from "@/components/PricingPopUpCard"
import Loader from '@/components/Loader/Loader'


const Page = () => {

    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])



    const drivingLessons = [
        { name: "Proefles (50 min)", price: "€ 70,00" },
        { name: "Losse motorrijles (50 min)", price: "€55,00" }
    ]

    const examFees = [
        { name: "CBR AVB Praktijk examen  ", price: "€ 215,00" },
        { name: "CBR AVD Praktijk examen ", price: "€ 279,00" },
        { name: "CBR A no Naderonderzoek examen ", price: "€ 289,00" },
    ]


    return (
        <div>
            {loader && <Loader />}
            <section className="body-font overflow-hidden pt-[75px]">
                <SubSectionheadings Head="Tarieven" mainPage="Home" currentPage="Tarieven" />
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-5">
                        <h1 className="text-green-400 text-2xl font-medium title-font mb-2">Prijzen en Pakketten</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl font-semibold text-gray-700">Kies uit onze meest waardevolle rijlespakketten. Wij bieden duidelijke tarieven en flexibele opties, zodat je altijd een pakket vindt dat past bij jouw wensen en budget.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center py-10 px-4">
                    <div className="my-12">
                        <h2 className="text-green-400 text-2xl lg:text-4xl font-bold mb-6 text-center">
                            MOTOREXAMEN VOERTUIGBEHEERSING <span className="text-[#050B30]">AVB</span>
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <Card className="flex flex-col items-center bg-white">
                                <CardHeader>
                                    <CardTitle className="text-gray-800 text-lg">AVB Pakket Silver</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-4xl font-bold text-gray-800 mt-4">€749,00</p>
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
                                        Op3="AVB Pakket Platinum" />
                                </CardFooter>
                            </Card>

                            <Card className="relative flex flex-col items-center  bg-[#050B30] text-white">
                                <div className="absolute -top-4 bg-green-500 text-white text-xs px-4 py-1 rounded-full font-semibold">
                                    Aanbevolen
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg mt-4">AVB Pakket Gold </CardTitle>
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

                            <Card className="flex flex-col items-center  bg-green-100">
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
                    </div>

                    <div className="my-12">
                        <h2 className="text-green-400 text-2xl lg:text-4xl font-bold mb-6 text-center">
                            MOTOREXAMEN VERKEERSDEELNAME <span className="text-[#050B30]">AVD</span>
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <Card className="flex flex-col items-center  bg-white">
                                <CardHeader>
                                    <CardTitle className="text-gray-800 text-lg">AVD Pakket Silver</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-4xl font-bold text-gray-800 mt-4">€799,00</p>
                                    <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                                        <li>12 uur rijles</li>
                                        <li>Vaste instructeur</li>
                                        <li>Nieuwe lesmotor</li>
                                        <li>Leskaart &amp; Advies</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <PricingPopUpCard
                                        Op1="AVD Pakket Silver"
                                        Op2="AVD Pakket Gold "
                                        Op3="AVD Pakket Platinum" />
                                </CardFooter>
                            </Card>

                            <Card className="relative flex flex-col items-center  bg-[#050B30] text-white">
                                <div className="absolute -top-4 bg-green-500 text-white text-xs px-4 py-1 rounded-full font-semibold">
                                    Aanbevolen
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg mt-4">AVD Pakket Gold </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-4xl font-bold mt-4">€1199,00</p>
                                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                                        <li>18 uur rijles</li>
                                        <li>Vaste instructeur</li>
                                        <li>Nieuwe lesmotor</li>
                                        <li>Leskaart &amp; Advies</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <PricingPopUpCard
                                        Op1="AVD Pakket Silver"
                                        Op2="AVD Pakket Gold "
                                        Op3="AVD Pakket Platinum" />
                                </CardFooter>
                            </Card>

                            <Card className="flex flex-col items-center  bg-green-100">
                                <CardHeader>
                                    <CardTitle className="text-gray-800 text-lg">AVD Pakket Platinum</CardTitle>
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
                                        Op1="AVD Pakket Silver"
                                        Op2="AVD Pakket Gold "
                                        Op3="AVD Pakket Platinum" />
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="h-[2px] w-11/12 bg-green-400 mx-auto my-14"></div>

                <div className='my-12 text-5xl font-bold text-center text-gray-700'>Losse Lessen en Examen Prijzen</div>

                <div className="container mx-auto px-4 py-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className='flex items-center justify-between text-gray-700 bg-[#c1e1c1]'>
                                <h2 className="text-2xl font-semibold p-4">Rijles tarieven</h2>
                                <div className="px-4 py-3 font-medium">Tarief in €</div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {drivingLessons.map((item, index) => (
                                    <div key={index} className="flex justify-between px-4 py-3 hover:bg-gray-50">
                                        <span className="text-gray-700">{item.name}</span>
                                        <span className="text-gray-700 font-medium">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className='flex items-center justify-between text-gray-700 bg-[#c1e1c1]'>
                                <h2 className="text-2xl font-semibold p-4">Examen tarieven</h2>
                                <div className="px-4 py-3 font-medium">Tarief in €</div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {examFees.map((item, index) => (
                                    <div key={index} className="flex justify-between px-4 py-3 hover:bg-gray-50">
                                        <span className="text-gray-700">{item.name}</span>
                                        <span className="text-gray-700 font-medium">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page
