"use client"
import React, { useState , useEffect} from 'react'
import SectionThird from '@/components/SectionThird'
import nlb1 from "@/public/Gallery/nlb1.webp"
import Link from 'next/link'
import Image from 'next/image'
import SubSectionheadings from '@/components/SubSectionheadings'
import rightArrowWhite from "@/public/img/rightArrowWhite.png"
import Loader from '@/components/Loader/Loader'

const Page = () => {

  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000);

  }, [])


  return (
    <>
      {loader && <Loader />}
      <main>
        <section>
          <article className='pt-[100px]'>
            <SubSectionheadings Head="Over ons" mainPage="Home" currentPage="Over ons" />

            <div className="h-[2px] w-11/12 bg-[#c1e1c1] mx-auto my-14"></div>

            <div className='mx-auto flex justify-center items-center lg:gap-x-5 lg:flex-row flex-col-reverse  gap-y-10'>
              <div className='px-6 lg:w-[50vw] flex justify-center items-start flex-col gap-y-5'>
                <div className='text-green-400 font-semibold text-xl'>Meer over ons</div>
                <div className='text-4xl lg:text-5xl font-bold text-gray-700'>Waarom kiezen voor NoLimitBikers?</div>
                <div className='text-lg text-black'>Bij NoLimitBikers geloven we in motorrijden met vertrouwen en controle. Onze lessen richten zich op zowel praktische vaardigheden als defensief rijden, zodat je voorbereid bent op elke situatie op de weg. Of je nu kiest voor reguliere lessen of een intensieve dagcursus, onze ervaren instructeurs staan voor je klaar met persoonlijke begeleiding.
                  <div>Benieuwd naar onze aanpak? Ontdek onze pakketten en ervaar zelf het verschil!</div>
                </div>
                <div>
                  <Link href="/pages/courses">
                    <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-green-400 p-4 rounded-xl">ONTDEK ONZE PAKKETTEN
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
                    src={nlb1}
                    className='rounded-full'
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>

            <div className="h-[2px] w-11/12 bg-green-400 mx-auto my-14"></div>

            <div>
              <SectionThird />
            </div>

            <div className="h-[2px] w-11/12 bg-green-400 mx-auto my-14"></div>

          </article>
        </section>
      </main>
    </>
  )
}

export default Page