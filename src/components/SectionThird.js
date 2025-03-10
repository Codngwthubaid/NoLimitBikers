import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutTick from './AboutTick'
import bike8 from "../public/img/bike8.jpg"
import bike7 from "../public/img/bike7.jpg"
import bike4 from "../public/img/bike4.jpg"
import bike9 from "../public/img/bike9.jpg"
import rightArrowWhite from "../public/img/rightArrowWhite.png"

const SectionThird = () => {
  return (
    <>
    <main>
    <section>
          <article className='container mx-auto'>
            <div className="flex justify-evenly items-center gap-x-5 flex-col sm:flex-row gap-y-10 ">
              <div className="sm:w-[45vw] flex justify-center items-center gap-x-3 ">
                <div className="flex flex-col gap-y-2">
                  <Image
                    src={bike8}
                    className="sm:w-[200px] rounded-3xl object-cover"
                    alt="Picture of the author"
                  />
                  <Image
                    src={bike7}
                    className="sm:w-[200px] h-auto rounded-3xl object-cover"
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <Image
                    src={bike4}
                    className="sm:w-[200px] rounded-3xl object-cover"
                    alt="Picture of the author"
                  />
                  <Image
                    src={bike9}
                    className="sm:w-[200px] h-auto rounded-3xl object-cover"
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-y-5 sm:w-[45vw]">
                  <div className="text-2xl text-center font-semibold text-green-400">Over ons</div>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-700">De vrijheid van motorrijden begint hier, veilig en onder controle.</div>
                  <div className="text-lg text-black">Bij NoLimitBikers draait alles om passie voor motorrijden! Wij bieden hoogwaardige motorrijlessen aan in Rotterdam en omgeving, afgestemd op jouw tempo en ervaring. Of je nu een beginner bent die voor het eerst de weg op gaat, of een ervaren motorrijder die zijn skills wil perfectioneren, bij ons ben je aan het juiste adres. Met een persoonlijke aanpak, ervaren instructeurs en een focus op veiligheid en plezier zorgen wij dat jij vol vertrouwen de weg op gaat. Ontdek de vrijheid van motorrijden met NoLimitBikers!</div>
                  <div className="flex flex-col md:flex-row justify-evenly  font-semibold my-3 text-black">
                    <div className="flex flex-col items-start gap-y-1">
                      <AboutTick data="De basis van motorbeheersing - van starten tot stoppen, alles begint hier." />
                      <AboutTick data="Defensief rijden - anticipeer op het verkeer en rijd met vertrouwen." />
                      <AboutTick data="Voorbereiding op het praktijkexamen - haal je rijbewijs zonder stress." />
                    </div>
                    <div className="flex flex-col items-start gap-y-1">
                      <AboutTick data="Snelheidscontrole in bochten - soepel en veilig door elke bocht." />
                      <AboutTick data="Balans en beheersing - de fundamenten van zelfverzekerd motorrijden." />
                      <AboutTick data="Relaxed rijden op lange ritten - blijf comfortabel, ook tijdens lange afstanden." />
                    </div>
                  </div>
                  <div>
                    <Link href="/pages/about">
                      <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-green-400 p-4 rounded-xl">MEER
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
