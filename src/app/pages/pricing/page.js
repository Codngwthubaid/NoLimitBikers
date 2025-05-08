"use client"
import React, { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SubSectionheadings from "@/components/SubSectionheadings"
import PricingPopUpCard from "@/components/PricingPopUpCard"
import Loader from '@/components/Loader/Loader'
import { avbPackagesForPricing, avdPackagesForPricing, drivingLessons, examFees } from "@/constants"

const Page = () => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])


    return (
        <div>
            {loader && <Loader />}
            <section className="body-font overflow-hidden pt-[75px]">
                <SubSectionheadings Head="Tarieven" mainPage="Home" currentPage="Tarieven" />
                <div className="px-5 pt-12">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="text-green-400 text-3xl font-medium title-font mb-2">Tarieven</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl font-semibold text-gray-700">Kies uit onze meest waardevolle rijlespakketten.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center py-10 px-4">
                    <div className="my-12">
                        <h2 className="text-green-400 text-2xl lg:text-4xl font-bold mb-6 text-center">
                            MOTOREXAMEN VOERTUIGBEHEERSING <span className="text-[#050B30]">AVB</span>
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-8">
                            {avbPackagesForPricing.map((pkg, index) => (
                                <Card key={index} className={`relative flex flex-col items-center ${pkg.bgColor}`}>
                                    {pkg.badge && (
                                        <div className="relative -top-4 bg-red-500 text-white text-xs px-4 py-1 rounded-full font-semibold">
                                            {pkg.badge}
                                        </div>
                                    )}
                                    <CardHeader className={pkg.badge ? "pt-1 pb-4" : ""}>
                                        <CardTitle className={`text-lg ${pkg.textColor}`}>{pkg.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p className={`text-4xl font-bold ${pkg.textColor} mt-4`}>{pkg.price}</p>
                                        <ul className={`mt-4 space-y-2 text-sm ${pkg.listColor}`}>
                                            {pkg.features.map((feature, fIndex) => (
                                                <li key={fIndex}>{feature}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <PricingPopUpCard
                                            details="Boek vandaag nog je motorrijles!"
                                            btnName="Selecteer dit pakket"
                                            Op1="AVB Pakket Silver"
                                            Op2="AVB Pakket Gold"
                                            Op3="AVB Pakket Platinum"
                                        />
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="my-12">
                        <h2 className="text-green-400 text-2xl lg:text-4xl font-bold mb-6 text-center">
                            MOTOREXAMEN VERKEERSDEELNAME <span className="text-[#050B30]">AVD</span>
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-8">
                            {avdPackagesForPricing.map((pkg, index) => (
                                <Card key={index} className={`relative flex flex-col items-center ${pkg.bgColor}`}>
                                    {pkg.badge && (
                                        <div className="relative -top-4 bg-red-500 text-white text-xs px-4 py-1 rounded-full font-semibold">
                                            {pkg.badge}
                                        </div>
                                    )}
                                    <CardHeader className={pkg.badge ? "pt-1 pb-4" : ""}>
                                        <CardTitle className={`text-lg ${pkg.textColor}`}>{pkg.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p className={`text-4xl font-bold ${pkg.textColor} mt-4`}>{pkg.price}</p>
                                        <ul className={`mt-4 space-y-2 text-sm ${pkg.listColor}`}>
                                            {pkg.features.map((feature, fIndex) => (
                                                <li key={fIndex}>{feature}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <PricingPopUpCard
                                            details="Boek vandaag nog je motorrijles!"
                                            btnName="Selecteer dit pakket"
                                            Op1="AVD Pakket Silver"
                                            Op2="AVD Pakket Gold"
                                            Op3="AVD Pakket Platinum"
                                        />
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="h-[2px] w-11/12 bg-green-400 mx-auto my-14"></div>

                <div className='my-12 text-3xl lg:text-5xl font-bold text-center text-gray-700'>Losse lessen en examen prijzen</div>

                <div className="px-4 py-8">
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
                    <div>
                        <div className="mt-12 text-3xl font-bold text-gray-700">Annuleringsbeleid dagcursus en examen</div>
                        <div className="mt-5 text-black">
                            Wanneer u niet op komt dagen voor uw geplande dagcursus en examen, bent u het volledige bedrag verschuldigd aan de rijschool.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page