"use client"
import React, { useState, useEffect } from 'react'
import Loader from '@/components/Loader/Loader'
import SubSectionheadings from '@/components/SubSectionheadings'

const Page = () => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])

    // Data arrays
    const allowedFootwear = [
        "Chelsea boots",
        "Allstars",
        "Nike Air Jordans",
        "Schoenen met elastische banden"
    ]

    const notAllowedFootwear = [
        "Bergschoenen van stevig leer",
        "Timberlands",
        "Werkschoenen die minimaal S3-gecertificeerd zijn",
        "Motorsneakers met goedkeuring"
    ]

    const clothingRequirements = [
        "Motorhelm: Moet ECE-gecertificeerd zijn en goed passen. Een helm zonder vizier is toegestaan als je een bril draagt.",
        "Handschoenen: Moeten de handen en polsen volledig bedekken en beschermen.",
        "Jas & broek: Moeten het lichaam volledig bedekken, voorzien zijn van CE-gecertificeerde knie-, heup-, elleboog- en schouderprotectoren.",
        "Schoenen: Enkelbedekkend en gemaakt van slijtvast materiaal."
    ]

    const avbCategories = [
        "Remmen (2 oefeningen op examen)",
        "Snelle oefeningen (2 oefeningen op examen)",
        "Langzame oefeningen (2 oefeningen op examen)",
        "Parkeren (1 oefening op examen)"
    ]

    const licenseCategories = [
        { type: "A1 (Lichte Motor)", desc: "Max 125 CC, Max. 11kW" },
        { type: "A2 (Middelzware Motor)", desc: "Max. 35kW" },
        { type: "A (Zware Motor)", desc: "onbeperkt vermogen" }
    ]

    const ageRequirements = [
        { 
            age: "Vanaf 18 jaar", 
            license: "A1-rijbewijs (max. 125cc)",
            note: "Na 2 jaar ervaring kun je doorgaan naar A2."
        },
        { 
            age: "Vanaf 20 jaar", 
            license: "A2-rijbewijs",
            note: "Je krijgt een code 80, waardoor je 2 jaar alleen op A2-motoren mag rijden. Daarna kun je het volledige A-rijbewijs behalen."
        },
        { 
            age: "Vanaf 21 jaar", 
            license: "A-rijbewijs (beperkt)",
            note: "Je krijgt een code 80, waardoor je 2 jaar op A2-motoren moet rijden. Na 2 jaar wordt dit automatisch omzet naar een volledig A-rijbewijs."
        },
        { 
            age: "Vanaf 24 jaar", 
            license: "Direct het volledige A-rijbewijs",
            note: "Geen beperkingen, je mag meteen alle motoren rijden."
        }
    ]

    return (
        <div>
            {loader && <Loader />}
            <section className="body-font overflow-hidden pt-[75px]">
                <SubSectionheadings Head="Examens" mainPage="Home" currentPage="Examens" />
                <div className="px-5 py-12">
                    <div className="flex flex-col text-center w-full mb-5">
                        <h1 className="text-green-400 text-3xl font-medium title-font mb-2">Examens</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl font-semibold text-gray-700">Alles wat je moet weten over jouw motorpraktijkexamens.</p>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-700 text-center">Nieuwe eisen voor motorkleding en schoeisel (vanaf 1 januari 2025)</div>
                        <div className='text-black my-4'>Het CBR heeft per 1 januari 2025 nieuwe eisen ingesteld voor de kleding en schoenen die je moet dragen tijdens het praktijkexamen voor de motor (AVB & AVD). Houd hier rekening mee om te voorkomen dat je niet aan het examen mag deelnemen.</div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-x-10 items-start'>
                        <div className='md:w-[45%]'>
                            <div className='text-2xl font-bold text-gray-700 my-6'>Toegestaan schoeisel</div>
                            <dl>
                                <dt className='text-xl text-gray-700 font-semibold'>✔ Stevige, enkelbedekkende schoenen van slijtvast materiaal, zoals:</dt>
                                {allowedFootwear.map((item, index) => (
                                    <dd key={index}>➡️ {item}</dd>
                                ))}
                            </dl>
                        </div>
                        <div className='md:w-[45%]'>
                            <div className='text-2xl font-bold text-gray-700 my-6'>Niet toegestaan schoeisel</div>
                            <dl>
                                <dt className='text-xl text-gray-700 font-semibold'>❌ Schoenen die onvoldoende bescherming bieden, zoals:</dt>
                                {notAllowedFootwear.map((item, index) => (
                                    <dd key={index}>➡️ {item}</dd>
                                ))}
                            </dl>
                            <div className='text-green-500 my-10'>🔹Als je niet de juiste schoenen draagt, word je niet toegelaten tot het examen.</div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row items-start gap-x-10'>
                        <div className='md:w-[45%]'>
                            <div className='text-2xl font-bold text-gray-700 my-6'>Eisen motorkleding</div>
                            <dl>
                                <dt className='text-xl text-gray-700 font-semibold'>Tijdens het praktijkexamen moet je volledige beschermende motorkleding dragen, waaronder:</dt>
                                {clothingRequirements.map((item, index) => (
                                    <dd key={index}>➡️ {item}</dd>
                                ))}
                            </dl>
                            <div className='text-green-500 my-10'>🔹 Tip: Draag kleding met reflecterende elementen voor extra zichtbaarheid en overweeg gehoorbescherming.</div>
                        </div>
                        <div className='md:w-[45%]'>
                            <div className='text-2xl font-bold text-gray-700 my-6'>Hoe verloopt het AVB-examen?</div>
                            <dl>
                                <dt className='text-xl text-gray-700 font-semibold'>Het AVB (Voertuigbeheersing) examen test of je de motor goed onder controle hebt.</dt>
                                <dd>➡️ Tijdens het examen doe je 7 oefeningen.</dd>
                                <dd>➡️ In de lessen leer je 12 oefeningen om goed voorbereid te zijn.</dd>
                                <dd>➡️ De oefeningen zijn verdeeld over 4 categorieën:</dd>
                                <div className='ml-5'>
                                    {avbCategories.map((category, index) => (
                                        <dd key={index}>🔵 {category}</dd>
                                    ))}
                                </div>
                            </dl>
                            <div className='text-green-500 my-10'>
                                <div>🔹 Je mag 2 onvoldoendes halen, maar niet binnen dezelfde categorie.</div>
                                <div>📌 Elke oefening mag je één keer herkansen.</div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row items-start gap-x-10'>
                        <div className='md:w-[45%]'>
                            <div className='text-2xl font-bold text-gray-700 my-6'>Hoe verloopt het AVD-examen?</div>
                            <dl>
                                <dt className='text-xl text-gray-700 font-semibold'>Het AVD (Verkeersdeelname) examen test of je veilig en zelfstandig kunt deelnemen aan het verkeer.</dt>
                                <dd>➡️ Je rijdt ongeveer 35 minuten onder begeleiding van een examinator.</dd>
                                <dd>➡️ De examinator beoordeelt of je inzichtelijk, vlot en veilig rijdt.</dd>
                                <dd>➡️ Tijdens de rit krijg je een stop-and-go opdracht.</dd>
                                <dd>➡️ Na afloop hoor je direct of je geslaagd bent.</dd>
                            </dl>
                        </div>
                        <div className='md:w-[45%]'>
                            <div className='text-2xl font-bold text-gray-700 my-6'>Motorrijbewijs categorieën</div>
                            <dl>
                                <dt className='text-xl text-gray-700 font-semibold'>Het motorrijbewijs is opgedeeld in drie categorieën:</dt>
                                {licenseCategories.map((category, index) => (
                                    <dd key={index}>🏍️ {category.type} - {category.desc}</dd>
                                ))}
                            </dl>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row items-start gap-x-10'>
                        <div className='md:w-[45%]'>
                            <div className='text-2xl font-bold text-gray-700 mt-16 mb-5'>Wanneer mag je welk motorrijbewijs halen?</div>
                            {ageRequirements.map((req, index) => (
                                <dl key={index}>
                                    <dt className='text-xl text-gray-700 font-semibold'>✅ {req.age} → {req.license}</dt>
                                    <dd className='ml-10 my-2'>{req.note}</dd>
                                </dl>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page