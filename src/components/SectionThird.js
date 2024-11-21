import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutTick from './AboutTick'
import bikeFirst from "../public/img/bikeFirst.jpg"
import bikeSecond from "../public/img/bikeSecond.jpg"
import bikeThird from "../public/img/bikeThird.jpg"
import bikeFour from "../public/img/bikeFour.jpg"
import rightArrowWhite from "../public/img/rightArrowWhite.png"
import rightTick from "../public/img/rightTick.png"

const SectionThird = () => {
  return (
    <>
    <main>
    <section className="container mx-auto">
          <article>
            <div className="flex justify-evenly items-center gap-x-5 flex-col sm:flex-row gap-y-10">
              <div className="sm:w-[45vw] flex justify-center items-center gap-x-3">
                <div className="flex flex-col gap-y-2">
                  <Image
                    src={bikeFirst}
                    className="sm:w-[200px] rounded-3xl object-cover"
                    alt="Picture of the author"
                  />
                  <Image
                    src={bikeSecond}
                    className="sm:w-[200px] h-auto rounded-3xl object-cover"
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <Image
                    src={bikeFour}
                    className="sm:w-[200px] rounded-3xl object-cover"
                    alt="Picture of the author"
                  />
                  <Image
                    src={bikeThird}
                    className="sm:w-[200px] h-auto rounded-3xl object-cover"
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-y-5 sm:w-[45vw]">
                  <div className="text-2xl font-semibold text-orange-400">Over ons</div>
                  <div className="text-4xl font-bold">Leer autorijden, rijd veilig en onder controle</div>
                  <div className="text-lg">Om veilig en beheerst te leren rijden, moet u zich eerst vertrouwd maken met het voertuig en de verkeersregels naleven. Houd een veilige volgafstand aan, gebruik richtingaanwijzers en controleer regelmatig de spiegels en dode hoeken.</div>
                  <div className="flex justify-evenly font-semibold my-3">
                    <div className="flex flex-col items-start gap-y-1">
                      <AboutTick src={rightTick} data="Basis van rijvaardigheid" />
                      <AboutTick src={rightTick} data="Practice Defensive Driving" />
                      <AboutTick src={rightTick} data="Road test preparation" />
                    </div>
                    <div className="flex flex-col items-start gap-y-1">
                      <AboutTick src={rightTick} data="Beheers uw snelheid in bochten" />
                      <AboutTick src={rightTick} data="Beheers de basis" />
                      <AboutTick src={rightTick} data="Blijf kalm tijdens lange ritten" />
                    </div>
                  </div>
                  <div>
                    <Link href="/pages/about">
                      <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">OVER MEER
                        <Image
                          src={rightArrowWhite}
                          width={18}
                          height={20}
                          alt="Picture of the author"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
    </main>
    </>
  )
}

export default SectionThird
