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

                    <div className='flex flex-col md:flex-row  gap-x-10 items-start '>
                        <div className='md:w-[45%]'>
                            <div className='text-2xl font-bold text-gray-700 my-6'>Toegestaan schoeisel</div>
                            <dl >
                                <dt className='text-xl text-gray-700 font-semibold'>✔ Stevige, enkelbedekkende schoenen van slijtvast materiaal, zoals:</dt>
                                <dd>➡️ Chelsea boots</dd>
                                <dd>➡️ Allstars</dd>
                                <dd>➡️ Nike Air Jordans</dd>
                                <dd>➡️ Schoenen met elastische banden</dd>
                            </dl>
                        </div>
                        <div className='md:w-[45%]'>
                            <div className='text-2xl font-bold text-gray-700 my-6'>Niet toegestaan schoeisel</div>
                            <dl >
                                <dt className='text-xl text-gray-700 font-semibold'>❌ Schoenen die onvoldoende bescherming bieden, zoals:</dt>
                                <dd>➡️ Bergschoenen van stevig leer</dd>
                                <dd>➡️ Timberlands</dd>
                                <dd>➡️ Werkschoenen die minimaal S3-gecertificeerd zijn</dd>
                                <dd>➡️ Motorsneakers met goedkeuring</dd>
                            </dl>
                            <div className='text-green-500 my-10'>🔹Als je niet de juiste schoenen draagt, word je niet toegelaten tot het examen.</div>
                        </div>

                    </div>

                    <div className='flex flex-col md:flex-row items-start gap-x-10'>
                        <div className='md:w-[45%]'>
                            <div className='text-2xl font-bold text-gray-700 my-6'>Eisen motorkleding</div>
                            <dl>
                                <dt className='text-xl text-gray-700 font-semibold'> Tijdens het praktijkexamen moet je volledige beschermende motorkleding dragen, waaronder:</dt>
                                <dd>➡️  Motorhelm: Moet ECE-gecertificeerd zijn en goed passen. Een helm zonder vizier is toegestaan als je een bril draagt.</dd>
                                <dd>➡️ Handschoenen: Moeten de handen en polsen volledig bedekken en beschermen.</dd>
                                <dd>➡️ Jas & broek: Moeten het lichaam volledig bedekken, voorzien zijn van CE-gecertificeerde knie-, heup-, elleboog- en schouderprotectoren.</dd>
                                <dd>➡️ Schoenen: Enkelbedekkend en gemaakt van slijtvast materiaal.</dd>
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
                                    <dd>🔵 Remmen (2 oefeningen op examen)</dd>
                                    <dd>🔵 Snelle oefeningen (2 oefeningen op examen)</dd>
                                    <dd>🔵 Langzame oefeningen (2 oefeningen op examen)</dd>
                                    <dd>🔵 Parkeren (1 oefening op examen)</dd>
                                </div>

                            </dl>
                            <div className='text-green-500 my-10'>
                                <div>
                                    🔹 Je mag 2 onvoldoendes halen, maar niet binnen dezelfde categorie. Als je bijvoorbeeld 2 onvoldoende scores hebt bij de snelle oefeningen, zak je.
                                </div>
                                <div>
                                    📌 Elke oefening mag je één keer herkansen. Als je de herkansing goed uitvoert, wordt de oefening alsnog als voldoende beoordeeld.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row  items-start gap-x-10'>
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
                                <dt className='text-xl text-gray-700 font-semibold'>Het motorrijbewijs is opgedeeld in drie categorieen:</dt>
                                <dd>🏍️ A1 (Lichte Motor) - Max 125 CC, Max. 11kW</dd>
                                <dd>🏍️ A2 (Middelzware Motor) - Max. 35kW</dd>
                                <dd>
                                    🏍️ A (Zware Motor) - onbeperkt vermogen
                                </dd>
                            </dl>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row  items-start gap-x-10'>
                        <div className='md:w-[45%]'>
                            <div className='text-2xl font-bold text-gray-700 mt-16 mb-5'>Wanneer mag je welk motorrijbewijs halen?</div>
                            <dl>
                                <dt className='text-xl text-gray-700 font-semibold'>✅ Vanaf 18 jaar → A1-rijbewijs (max. 125cc)</dt>
                                <dd className='ml-10 my-2'>Na 2 jaar ervaring kun je doorgaan naar A2.</dd>
                            </dl>
                            <dl>
                                <dt className='text-xl text-gray-700 font-semibold'>✅ Vanaf 20 jaar → A2-rijbewijs</dt>
                                <dd className='ml-10 my-2'>Je krijgt een code 80, waardoor je 2 jaar alleen op A2-motoren mag rijden. Daarna kun je het volledige A-rijbewijs behalen.</dd>
                            </dl>
                            <dl>
                                <dt className='text-xl text-gray-700 font-semibold'>✅ Vanaf 21 jaar → A-rijbewijs (beperkt)</dt>
                                <dd className='ml-10 my-2'>Je krijgt een code 80, waardoor je 2 jaar op A2-motoren moet rijden. Na 2 jaar wordt dit automatisch omgezet naar een volledig A-rijbewijs.</dd>
                            </dl>
                            <dl>
                                <dt className='text-xl text-gray-700 font-semibold'>✅ Vanaf 24 jaar → Direct het volledige A-rijbewijs</dt>
                                <dd className='ml-10 my-2'>Geen beperkingen, je mag meteen alle motoren rijden.</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page