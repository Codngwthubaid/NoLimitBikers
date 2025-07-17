import React from 'react'
import SubSectionheadings from '@/components/SubSectionheadings'
import { ageRequirementItems, allowedFootwear, avbCategories, avbExamDetails, avdExamDetails, clothingRequirements, licenseCategories, notAllowedFootwear } from '@/constants'
import AboutLoaderWrapper from '@/components/AboutLoaderWrapper'

export const metadata = {
    title: "Examens",
    description: "Bereid je optimaal voor op je motorpraktijkexamen met info over kleding, onderdelen en categorieën. NoLimitBikers helpt je stap voor stap!",
}

export default function Page() {
    return (
        <AboutLoaderWrapper>
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
                                {avbExamDetails.map((detail, index) => (
                                    <dd key={index}>➡️ {detail}</dd>
                                ))}
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
                                {avdExamDetails.map((detail, index) => (
                                    <dd key={index}>➡️ {detail}</dd>
                                ))}
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
                            {ageRequirementItems.map((item, index) => (
                                <div key={index}>
                                    <div className='text-2xl font-bold text-gray-700 mt-16 mb-5'>{item.title}</div>
                                    <dl>
                                        {item.requirements.map((req, reqIndex) => (
                                            <React.Fragment key={reqIndex}>
                                                <dt className='text-xl text-gray-700 font-semibold'>✅ {req.age} → {req.license}</dt>
                                                <dd className='ml-10 my-2'>{req.note}</dd>
                                            </React.Fragment>
                                        ))}
                                    </dl>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </AboutLoaderWrapper>
    )
}