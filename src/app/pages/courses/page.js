import React from 'react'
import SubSectionheadings from '@/components/SubSectionheadings'
import NumberTicker from "@/components/magicui/number-ticker";
import Image from 'next/image';
import G8 from "@/public/Gallery/G8.jpg"
import G9 from "@/public/Gallery/G9.jpg"
import G10 from "@/public/Gallery/G10.jpg"
import Link from 'next/link';
import rightArrowWhite from "@/public/img/rightArrowWhite.png"
import PricingPopUpCard from '@/components/PricingPopUpCard';

const Page = () => {
  return (
    <>
      <main>
        <section>
          <article className='pt-[75px]'>
            <div>
              <SubSectionheadings Head="Cursussen" mainPage="Home" currentPage="Cursussen" />
              <div className="h-[2px] w-11/12 bg-green-400 mx-auto my-14"></div>
              <div className='flex flex-col justify-start items-center gap-y-2'>
                <div className='text-2xl font-semibold text-green-400'>Onze populaire cursussen</div>
                <div className='text-5xl font-bold text-center text-gray-700'>Onze populaire rijcursussen</div>
                <div className='text-4xl mt-5 font-bold text-green-400'>Package AVB</div>
                <div>
                  <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={G8}
                              width={1203}
                              height={503}
                            />
                          </div>
                          <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>AVB Pakket Silver</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Het AVB Pakket Silver is een zorgvuldig samengesteld rijlespakket dat is ontworpen om leerlingen de beste voorbereiding te bieden voor het behalen van hun motorrijbewijs. Dit pakket is ideaal voor zowel beginners als voor degenen die hun rijvaardigheden willen verbeteren.
                          </p>
                          <div>
                            <PricingPopUpCard
                              Op1="AVB Pakket Silver"
                              Op2="AVB Pakket Gold Mega Deal"
                              Op3="AVB Pakket Platinum" />

                          </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={G9}
                              width={1204}
                              height={504}
                            />
                          </div>
                          <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>AVB Pakket Gold Mega Deal</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Het AVB Pakket Gold Mega Deal is een premium rijlespakket dat speciaal is ontworpen voor leerlingen die de hoogste kwaliteit en een uitgebreide opleiding willen ervaren op weg naar het behalen van hun motorrijbewijs. Dit pakket biedt niet alleen meer rijlessen, maar ook extra voordelen die de leerervaring verbeteren.
                          </p>
                          <div>

                            <PricingPopUpCard
                              Op1="AVB Pakket Silver"
                              Op2="AVB Pakket Gold Mega Deal"
                              Op3="AVB Pakket Platinum" />

                          </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={G10}
                              width={1205}
                              height={505}
                            />
                          </div>
                          <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>AVB Pakket Platinum</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Het AVB Pakket Platinum is een exclusief en uitgebreid rijlespakket dat is ontworpen voor leerlingen die serieus zijn over het behalen van hun motorrijbewijs. Dit pakket biedt niet alleen een aanzienlijke hoeveelheid rijlessen, maar ook persoonlijke begeleiding en de nieuwste lesmotoren, wat bijdraagt aan een optimale leerervaring.
                          </p>
                          <div>

                            <PricingPopUpCard
                              Op1="AVB Pakket Silver"
                              Op2="AVB Pakket Gold Mega Deal"
                              Op3="AVB Pakket Platinum" />

                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div className='text-4xl mt-5 font-bold text-green-400'>Package AVD</div>
                <div>
                  <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={G8}
                              width={1203}
                              height={503}
                            />
                          </div>
                          <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>AVD Pakket Silver</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Het AVD Pakket Silver is een zorgvuldig samengesteld rijlespakket dat is ontworpen voor leerlingen die hun motorrijbewijs willen behalen met een solide basis en persoonlijke begeleiding. Dit pakket biedt een uitstekende combinatie van praktijkervaring en ondersteuning, waardoor het een ideale keuze is voor zowel beginners als voor degenen die hun rijvaardigheden willen verbeteren.
                          </p>
                          <div>

                            <PricingPopUpCard
                              Op1="AVD Pakket Silver"
                              Op2="AVD Pakket Gold Mega Deal"
                              Op3="AVD Pakket Platinum" />

                          </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={G9}
                              width={1204}
                              height={504}
                            />
                          </div>
                          <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>AVD Pakket Gold Mega Deal</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Het AVD Pakket Gold Mega Deal is een premium rijlespakket dat speciaal is ontworpen voor leerlingen die hun motorrijbewijs willen behalen met een uitgebreide en persoonlijke aanpak. Dit pakket biedt niet alleen een aanzienlijke hoeveelheid rijlessen, maar ook de ondersteuning en middelen die nodig zijn om zelfverzekerd en veilig te leren motorrijden.
                          </p>
                          <div>

                            <PricingPopUpCard
                              Op1="AVD Pakket Silver"
                              Op2="AVD Pakket Gold Mega Deal"
                              Op3="AVD Pakket Platinum" />

                          </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={G10}
                              width={1205}
                              height={505}
                            />
                          </div>
                          <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>AVD Pakket Platinum</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Het AVD Pakket Platinum is een exclusief en uitgebreid rijlespakket dat is ontworpen voor leerlingen die hun motorrijbewijs willen behalen met de hoogste kwaliteit van instructie en ondersteuning. Dit pakket biedt een ongeëvenaarde leerervaring, waarbij leerlingen de kans krijgen om hun vaardigheden te ontwikkelen en zich goed voor te bereiden op het motorrijden in diverse omstandigheden.
                          </p>
                          <div>

                            <PricingPopUpCard
                              Op1="AVD Pakket Silver"
                              Op2="AVD Pakket Gold Mega Deal"
                              Op3="AVD Pakket Platinum" />

                          </div>
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