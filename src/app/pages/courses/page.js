import React from 'react'
import SubSectionheadings from '@/components/SubSectionheadings'
import Image from 'next/image';
import G8 from "@/public/Gallery/G8.jpg"
import G9 from "@/public/Gallery/G9.jpg"
import G10 from "@/public/Gallery/G10.jpg"
import PricingPopUpCard from '@/components/PricingPopUpCard';

const Page = () => {


  return (
    <>
      <main>
        <section>
          <article className='pt-[75px]'>
            <div>
              <SubSectionheadings Head="Cursussen" mainPage="Home" currentPage="Cursussen" />
             
              <div className='flex flex-col justify-start items-center gap-y-2'>
                <div className='text-2xl font-semibold text-green-400'>Onze topcursussen </div>
                <div className='text-5xl font-bold text-center text-gray-700'>Kies de cursus die bij jou past!</div>
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
                              src={G8}
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
                            Wil je een stap verder gaan? Het AVB Pakket Gold Mega Deal biedt een uitgebreidere opleiding, perfect voor wie meer lessen en extra voordelen wil tijdens de voorbereiding op het AVB-examen. Combineer kwaliteit, comfort en een voordelige deal in één pakket.
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
                            Wil je de meest uitgebreide voorbereiding op je motorrijbewijs? Het AVB Pakket Platinum biedt persoonlijke begeleiding en een uitgebreid aantal rijlessen, zodat je vol vertrouwen en uitstekend voorbereid het AVB-examen kunt afleggen. Perfect voor wie niets aan het toeval wil overlaten.
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
                              src={G8}
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
                            Klaar voor de volgende stap? Het AVD Pakket Gold Mega Deal biedt een uitgebreide rijopleiding met extra lessen en persoonlijke ondersteuning. Perfect voor wie grondig wil oefenen en zeker wil zijn van een veilige en zelfverzekerde voorbereiding op het AVD-examen.
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
                            Voor een complete en diepgaande voorbereiding kies je het AVD Pakket Platinum. Met persoonlijke begeleiding en een uitgebreide reeks lessen krijg je alle tools om je motorrijbewijs te halen. Dit pakket biedt alles wat je nodig hebt om klaar te zijn voor diverse verkeerssituaties en een succesvolle toekomst op twee wielen.
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