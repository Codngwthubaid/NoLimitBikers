import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import rightArrowWhite from "../public/img/rightArrowWhite.png"
const SectionEight = () => {
  return (
    <>
      <main>
        <section>
          <article className='container mx-auto'>  
            <div className="min-h-fit h-[60vh] px-5 flex flex-col justify-center items-center gap-y-10">
              <div className="text-green-400 font-semibold text-2xl">📞 06 14 38 20 99</div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-center text-4xl lg:text-5xl text-gray-700 font-bold">Neem vandaag nog contact met ons op en start je avontuur op de weg!</div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default SectionEight
