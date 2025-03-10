"use client"
import SubSectionheadings from '@/components/SubSectionheadings'
import React, { useState, useEffect } from 'react'
import Loader from '@/components/Loader/Loader'

const Page = () => {

  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }, [])


  return (
    <>
      {loader && <Loader />}
      <main>
        <section>
          <article>
            <div>
              <div className='pt-[75px]'>
                <SubSectionheadings Head="Contact" mainPage="Home" currentPage="Contact" />
              </div>
              <div className="h-[2px] w-11/12 bg-green-400 my-14 mx-auto"></div>
              <div className='flex flex-col items-center gap-y-10 justify-evenly'>
                <div className='flex flex-col md:flex-row gap-10 justify-center items-center container mx-auto'>
                  <div className="rounded-3xl py-10 gap-y-3 w-[80vw] md:w-[30vw] flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1] h-48 shadow-lg">
                    <div className='text-2xl font-bold text-center'>NoLimitBikers</div>
                    <div className='text-xl text-center'>(Onderdeel van Rijschool Speedway)</div>
                    <div className='hover:text-green-400 text-xl font-semibold'>KVK 50463829</div>
                    <div className='hover:text-green-400 text-xl font-semibold'> BTW Nr. NL134561028B01</div>
                  </div>
                  <div className="rounded-3xl py-10 gap-y-3  w-[80vw] md:w-[30vw] shadow-lg flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1] h-48">
                    <div className='text-2xl font-bold'>Service & vragen</div>
                    <div className='hover:text-green-400 text-xl font-semibold'>Info@nolimitbikers.nl</div>
                    <div className='hover:text-green-400 text-xl font-semibold'>Appen? +316 14 38 20 99</div>
                  </div>
                  <div className="rounded-3xl py-10 gap-y-3 w-[80vw] md:w-[30vw] shadow-lg flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1] h-48">
                    <div className='text-2xl font-bold'>Heeft u een vraag?</div>
                    <div className='hover:text-green-400 text-xl font-semibold'>06 14 38 20 99</div>
                  </div>
                </div>
              </div>
            </div>
            <dl className='flex flex-col gap-y-5 container mx-auto my-16'>
              <dt className='text-3xl font-semibold text-gray-700'>Contact NoLimitBikers in Rotterdam</dt>
              <dd className='text-gray-700'>Welkom bij NoLimitBikers, jouw partner voor betaalbare en hoogwaardige motorrijlessen in Rotterdam en omgeving. Onze ervaren instructeurs staan klaar om jou te begeleiden naar jouw motorrijbewijs. Of je nu een beginner bent of jouw vaardigheden wilt perfectioneren, bij ons ben je aan het juiste adres.</dd>
              <dd className='text-gray-700'>Wij begrijpen dat iedereen unieke behoeften heeft als het gaat om motorrijlessen. Daarom bieden wij flexibele lestijden en op maat gemaakte lespakketten. Neem vandaag nog contact met ons op via e-mail, telefoon of WhatsApp voor meer informatie of om je eerste motorrijles in te plannen.</dd>
              <dd className='text-gray-700'>Bij NoLimitBikers streven we naar de hoogste slagingspercentages en klanttevredenheid. Onze instructeurs hebben jarenlange ervaring en hanteren een persoonlijke aanpak, zodat jij met zelfvertrouwen en veiligheid de weg op gaat.</dd>
              <dd className='text-gray-700'>Aarzel niet om contact met ons op te nemen voor al je vragen over motorrijlessen en tarieven. Wij staan klaar om je te helpen op weg naar succes.</dd>
              <dd className='text-gray-700'>We kijken ernaar uit om jou te helpen slagen voor je motorrijbewijs en heten je van harte welkom bij NoLimitBikers in Rotterdam!</dd>

            </dl>
          </article>
        </section>
      </main>
    </>
  )
}

export default Page

