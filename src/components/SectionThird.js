import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutTick from './AboutTick'
import rightArrowWhite from "../public/img/rightArrowWhite.png"
import { images, tickData } from '@/constants'

export default function SectionThird() {
  return (
    <div className="flex justify-evenly items-center gap-x-5 flex-col sm:flex-row gap-y-10 mx-5">
      <div className="sm:w-[45vw] flex justify-center items-center gap-x-3 ">
        <div className="flex flex-col gap-y-2">
          {images.slice(0, 2).map((src, index) => (
            <Image
              key={index}
              src={src}
              className="sm:w-[200px] rounded-3xl object-cover"
              alt="Picture of a motorcycle"
            />
          ))}
        </div>
        <div className="flex flex-col gap-y-2">
          {images.slice(2, 4).map((src, index) => (
            <Image
              key={index}
              src={src}
              className="sm:w-[200px] rounded-3xl object-cover"
              alt="Picture of a motorcycle"
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-y-5 sm:w-[45vw]">
          <div className="text-2xl text-center font-semibold text-green-400">Over ons</div>
          <div className="text-4xl lg:text-5xl font-bold text-gray-700">De vrijheid van motorrijden begint hier – veilig, professioneel en betaalbaar.</div>
          <div className="text-lg text-black">Bij NoLimitBikers ervaar je de ultieme vrijheid van motorrijden met professionele, goedkope én de beste motor rijlessen in Rotterdam. Of je nu beginner bent of ervaren motorrijder, wij bieden persoonlijke begeleiding op jouw niveau.
            Onze ervaren instructeurs helpen je veilig, zelfverzekerd en stressvrij richting je examen. Zoek je de dichtstbijzijnde of goedkoopste motor rijlessen in Rotterdam? Ontdek onze cursussen voor motor rijlessen in Rotterdam – kwaliteit en betaalbaarheid gegarandeerd!</div>
          <div className="flex flex-col md:flex-row justify-evenly font-semibold my-3 text-black">
            <div className="flex flex-col items-start gap-y-1">
              {tickData.slice(0, 3).map((data, index) => (
                <AboutTick key={index} data={data} />
              ))}
            </div>
            <div className="flex flex-col items-start gap-y-1">
              {tickData.slice(3, 6).map((data, index) => (
                <AboutTick key={index} data={data} />
              ))}
            </div>
          </div>
          <div>
            <Link href="/pages/about">
              <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-green-400 p-4 rounded-xl">MEER
                <Image
                  src={rightArrowWhite}
                  width={18}
                  height={20}
                  alt="Right arrow icon"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}
