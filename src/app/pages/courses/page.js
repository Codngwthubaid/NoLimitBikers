"use client"
import React, { useState, useEffect } from 'react'
import SubSectionheadings from '@/components/SubSectionheadings'
import Image from 'next/image';
import Loader from '@/components/Loader/Loader'
import nlb1 from '@/public/Gallery/nlb1.webp'
import nlb2 from '@/public/Gallery/nlb2.webp'
import nlb3 from '@/public/Gallery/nlb3.webp'


const Page = () => {

  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }, [])


  return (
    <>
      {loader && <Loader />}
      <main>
        <section>
          <article className='pt-[75px]'>
            <div>
              <SubSectionheadings Head="Pakketten" mainPage="Home" currentPage="Pakketten" />

              <div className='flex flex-col justify-center items-center gap-y-2'>
                <div className='text-3xl font-bold text-center text-green-400 mt-10'>Onze toppakketten - Kies het pakket wat bij jou past!</div>
                <div className='container mx-6 my-10'>
                  <div className='text-2xl font-semibold text-gray-700'>Wat is het verschil tussen AVB en AVD?</div>
                  <div className='text-black text-lg py-4'>Als je je motorrijbewijs wilt halen, doorloop je twee belangrijke examens: AVB (Algemene Voertuigbeheersing) en AVD (Algemene Verkeersdeelname). Beide examens zijn essentieel, maar richten zich op verschillende vaardigheden.</div>
                  <div className='text-2xl font-semibold text-gray-700'>AVB: Algemene Voertuigbeheersing</div>
                  <div className='text-black text-lg py-4'>Het AVB-examen draait om het leren beheersen van je motor in verschillende situaties. Je oefent op een afgesloten terrein waar je geen interactie hebt met ander verkeer. Tijdens dit examen voer je verschillende manoeuvres uit, zoals:
                    <li>Langzaam rijden en balanceren</li>
                    <li>Uitwijken</li>
                    <li>Noodstop maken</li>
                    Het doel is om te laten zien dat je volledige controle hebt over je motor.</div>
                  <div className='text-2xl font-semibold text-gray-700'>AVD: Algemene Verkeersdeelname</div>
                  <div className='text-black text-lg py-4'>
                    Het AVD-examen richt zich op je rijvaardigheid in het echte verkeer. Hier rijd je op de openbare weg en wordt je beoordeeld op hoe je omgaat met verkeersregels, andere weggebruikers en verkeerssituaties. Onder begeleiding van een examinator toon je aan dat je veilig en zelfverzekerd kunt rijden.</div>
                  <div className='text-2xl font-semibold text-gray-700'>Waarom beide examens?</div>
                  <div className='text-black text-lg py-4'>
                    Het AVB-examen legt de basis: je leert je motor volledig onder controle te houden. Pas daarna kun je tijdens het AVD-examen laten zien dat je veilig deel kunt nemen aan het verkeer. Beide examens zijn onmisbaar om je motorrijbewijs te halen en met vertrouwen de weg op te gaan.</div>
                </div>

                <div className='text-4xl mt-5 font-bold text-green-400'>Pakket AVB</div>
                <div>
                  <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={nlb1}
                              width={1203}
                              height={503}
                            />
                          </div>
                          <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>AVB Pakket Silver</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Ben je een beginner of wil je je rijvaardigheden verbeteren? Het AVB Pakket Silver biedt jou een solide basis om vol vertrouwen te starten met motorrijden. Dit pakket is zorgvuldig samengesteld om je optimaal voor te bereiden op het voertuigbeheersingsexamen (AVB).
                          </p>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={nlb2}
                              width={1204}
                              height={504}
                            />
                          </div>
                          <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>AVB Pakket Gold</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Wil je een stap verder gaan? Het AVB Pakket Gold biedt een uitgebreidere opleiding, perfect voor wie meer lessen en extra voordelen wil tijdens de voorbereiding op het AVB-examen. Combineer kwaliteit, comfort en een voordelige deal in één pakket.
                          </p>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={nlb3}
                              width={1205}
                              height={505}
                            />
                          </div>
                          <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>AVB Pakket Platinum</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Wil je de meest uitgebreide voorbereiding op je motorrijbewijs? Het AVB Pakket Platinum biedt persoonlijke begeleiding en een uitgebreid aantal rijlessen, zodat je vol vertrouwen en uitstekend voorbereid het AVB-examen kunt afleggen. Perfect voor wie niets aan het toeval wil overlaten.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className='text-4xl mt-5 font-bold text-green-400'>Pakket AVD</div>
                <div>
                  <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={nlb1}
                              width={1203}
                              height={503}
                            />
                          </div>
                          <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>AVD Pakket Silver</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Wil je een solide basis leggen voor het behalen van je motorrijbewijs? Het AVD Pakket Silver combineert praktijkgerichte lessen met persoonlijke begeleiding. Ideaal voor beginners of voor wie zijn rijvaardigheden wil aanscherpen. Dit pakket biedt alles wat je nodig hebt om veilig en met vertrouwen aan je verkeersdeelneming (AVD) examen te beginnen.
                          </p>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={nlb2}
                              width={1204}
                              height={504}
                            />
                          </div>
                          <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>AVD Pakket Gold</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Klaar voor de volgende stap? Het AVD Pakket Gold biedt een uitgebreide rijopleiding met extra lessen en persoonlijke ondersteuning. Perfect voor wie grondig wil oefenen en zeker wil zijn van een veilige en zelfverzekerde voorbereiding op het AVD-examen.
                          </p>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={nlb3}
                              width={1205}
                              height={505}
                            />
                          </div>
                          <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>AVD Pakket Platinum</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Voor een complete en diepgaande voorbereiding kies je het AVD Pakket Platinum. Met persoonlijke begeleiding en een uitgebreide reeks lessen krijg je alle tools om je motorrijbewijs te halen. Dit pakket biedt alles wat je nodig hebt om klaar te zijn voor diverse verkeerssituaties en een succesvolle toekomst op twee wielen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="h-[2px] w-11/12 bg-green-400 mx-auto my-14"></div>

            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Page