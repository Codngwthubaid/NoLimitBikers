import React from 'react'
import SectionThird from '@/components/SectionThird'
import SectionFourth from '@/components/SectionFourth'
import G8 from "@/public/Gallery/G8.jpg"
import Link from 'next/link'
import Image from 'next/image'
import SubSectionheadings from '@/components/SubSectionheadings'
import rightArrowWhite from "@/public/img/rightArrowWhite.png"


const page = () => {
  return (
    <>
      <main>
        <section>
          <article className='pt-[75px]'>
            <SubSectionheadings Head="Over ons" mainPage="Thuis" currentPage="Over ons" />

            <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

            <div className='mx-auto flex justify-center items-center lg:gap-x-5 lg:flex-row flex-col-reverse  gap-y-10'>
              <div className='px-6 lg:w-[50vw] flex justify-center items-start flex-col gap-y-5'>
                <div className='text-orange-400 font-semibold text-xl'>Je krijgt meer te weten</div>
                <div className='text-4xl lg:text-5xl font-bold'>Wij<span>&apos;</span>re Zeer ervaren en 98% studenten slagen voor het rijexamen bij de eerste poging</div>
                <div className='text-lg'>Defensief rijden omvat het beheersen van je snelheid, vooruitkijken en voorbereid zijn op onverwachte gebeurtenissen, alert en vrij van afleiding zijn en voorbereid zijn op allerlei acties en reacties van andere bestuurders.</div>
                <div>
                  <Link href="/pages/courses">
                    <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">ONTDEK CURSUSSEN
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
              <div className='px-10 lg:w-[45vw]'>
                <div>
                  <Image
                    src={G8}
                    className='rounded-full'
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>

            <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

            <div>
              <SectionThird />
            </div>

            <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

            <div>
              <SectionFourth />
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default page