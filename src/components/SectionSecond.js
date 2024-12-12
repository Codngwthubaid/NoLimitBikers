import React from 'react'
import Card from './Card'
import ELD from "../public/img/ELD.png"
import IT from "../public/img/IT.png"
import RTP from "../public/img/RTP.png"
import CYSAT from "../public/img/CYSAT.png"

const SectionSecond = () => {
    return (
        <>
            <main>
                <section className="container mx-auto">
                    <article>
                        <div className="flex justify-center items-center flex-col gap-y-3">
                            <div className="text-2xl font-semibold text-orange-400">Onze diensten</div>
                            <div className="text-4xl font-bold">Wij bieden service voor u</div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 my-10">
                            <div className="flex gap-x-5 justify-center items-center gap-y-5 flex-col sm:flex-row">
                                <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                                    <Card img={ELD} data="Gemakkelijk leren autorijden" details="Onze Cursusmodule is heel gemakkelijk te begrijpen" />
                                </div>
                                <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                                    <Card img={IT} data="Instructeursopleiding" details="Brainstorm over woorden die verband houden met uw vaardigheden en zelfvertrouwen." />
                                </div>
                            </div>
                            <div className="flex gap-x-5 justify-center items-center flex-col sm:flex-row gap-y-5">
                                <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                                    <Card img={CYSAT} data="Gemakkelijk leren autorijden" details="Onze Cursusmodule is heel gemakkelijk te begrijpen." />
                                </div>
                                <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                                    <Card img={RTP} data="Gemakkelijk leren autorijden" details="Onze Cursusmodule is heel gemakkelijk te begrijpen." />
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
              {/* <main className="bg-[#F0FF42]">
      <section className="container mx-auto py-16">
        <article>
          <div className="flex justify-center items-center flex-col gap-y-3 mb-10">
            <div className="text-2xl font-semibold text-[#CCFF00] bg-white px-4 py-1 rounded-full shadow-md">Onze diensten</div>
            <div className="text-4xl font-bold text-[#2D3100]">Wij bieden service voor u</div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 my-10">
            <div className="flex gap-x-5 justify-center items-center gap-y-5 flex-col sm:flex-row">
              <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                <Card img={ELD} data="Gemakkelijk leren autorijden" details="Onze Cursusmodule is heel gemakkelijk te begrijpen" />
              </div>
              <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                <Card img={IT} data="Instructeursopleiding" details="Brainstorm over woorden die verband houden met uw vaardigheden en zelfvertrouwen." />
              </div>
            </div>
            <div className="flex gap-x-5 justify-center items-center flex-col sm:flex-row gap-y-5">
              <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                <Card img={CYSAT} data="Gemakkelijk leren autorijden" details="Onze Cursusmodule is heel gemakkelijk te begrijpen." />
              </div>
              <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                <Card img={RTP} data="Gemakkelijk leren autorijden" details="Onze Cursusmodule is heel gemakkelijk te begrijpen." />
              </div>
            </div>
          </div>
        </article>
      </section>
    </main> */}
        </>
    )
}

export default SectionSecond
