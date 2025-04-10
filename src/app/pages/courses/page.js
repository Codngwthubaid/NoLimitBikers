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

  const avbPackages = [
    {
      title: "AVB Pakket Silver",
      image: nlb1,
      width: 1203,
      height: 503,
      description: "Ben je een beginner of wil je je rijvaardigheden verbeteren? Het AVB Pakket Silver biedt jou een solide basis om vol vertrouwen te starten met motorrijden. Dit pakket is zorgvuldig samengesteld om je optimaal voor te bereiden op het voertuigbeheersingsexamen (AVB)."
    },
    {
      title: "AVB Pakket Gold",
      image: nlb2,
      width: 1204,
      height: 504,
      description: "Wil je een stap verder gaan? Het AVB Pakket Gold biedt een uitgebreidere opleiding, perfect voor wie meer lessen en extra voordelen wil tijdens de voorbereiding op het AVB-examen. Combineer kwaliteit, comfort en een voordelige deal in één pakket."
    },
    {
      title: "AVB Pakket Platinum",
      image: nlb3,
      width: 1205,
      height: 505,
      description: "Wil je de meest uitgebreide voorbereiding op je motorrijbewijs? Het AVB Pakket Platinum biedt persoonlijke begeleiding en een uitgebreid aantal rijlessen, zodat je vol vertrouwen en uitstekend voorbereid het AVB-examen kunt afleggen. Perfect voor wie niets aan het toeval wil overlaten."
    }
  ]

  const avdPackages = [
    {
      title: "AVD Pakket Silver",
      image: nlb1,
      width: 1203,
      height: 503,
      description: "Wil je een solide basis leggen voor het behalen van je motorrijbewijs? Het AVD Pakket Silver combineert praktijkgerichte lessen met persoonlijke begeleiding. Ideaal voor beginners of voor wie zijn rijvaardigheden wil aanscherpen."
    },
    {
      title: "AVD Pakket Gold",
      image: nlb2,
      width: 1204,
      height: 504,
      description: "Klaar voor de volgende stap? Het AVD Pakket Gold biedt een uitgebreide rijopleiding met extra lessen en persoonlijke ondersteuning. Perfect voor wie grondig wil oefenen en zeker wil zijn van een veilige en zelfverzekerde voorbereiding op het AVD-examen."
    },
    {
      title: "AVD Pakket Platinum",
      image: nlb3,
      width: 1205,
      height: 505,
      description: "Voor een complete en diepgaande voorbereiding kies je het AVD Pakket Platinum. Met persoonlijke begeleiding en een uitgebreide reeks lessen krijg je alle tools om je motorrijbewijs te halen."
    }
  ]

  return (
    <>
      {loader && <Loader />}
      <main>
        <section>
          <article className='pt-[75px]'>
            <div>
              <SubSectionheadings Head="Pakketten" mainPage="Home" currentPage="Pakketten" />

              <div className='flex flex-col justify-center items-center gap-y-2'>
                {/* ... Keep your existing introductory text ... */}

                <div className='text-4xl mt-5 font-bold text-green-400'>Pakket AVB</div>
                <div>
                  <section className="text-gray-600 body-font">
                    <div className="px-5 py-12">
                      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        {avbPackages.map((pkg, index) => (
                          <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                            <div className="rounded-lg h-64 overflow-hidden">
                              <Image
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src={pkg.image}
                                width={pkg.width}
                                height={pkg.height}
                              />
                            </div>
                            <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                              <div>{pkg.title}</div>
                            </h2>
                            <p className="text-base leading-relaxed mt-2">
                              {pkg.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>

                <div className='text-4xl mt-5 font-bold text-green-400'>Pakket AVD</div>
                <div>
                  <section className="text-gray-600 body-font">
                    <div className="px-5 py-12">
                      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        {avdPackages.map((pkg, index) => (
                          <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                            <div className="rounded-lg h-64 overflow-hidden">
                              <Image
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src={pkg.image}
                                width={pkg.width}
                                height={pkg.height}
                              />
                            </div>
                            <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                              <div>{pkg.title}</div>
                            </h2>
                            <p className="text-base leading-relaxed mt-2">
                              {pkg.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="h-[2px] w-11/12 bg-green-400 my-14"></div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Page