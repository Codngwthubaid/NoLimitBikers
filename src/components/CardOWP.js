import React from 'react'
import Image from 'next/image'
import one from "../public/Number/one.png"
import two from "../public/Number/two.png"
import three from "../public/Number/three.png"
import fourth from "../public/Number/fourth.png"
import iconFirst from "../public/iconsProcess/iconFirst.png"
import iconSecond from "../public/iconsProcess/iconSecond.png"
import iconThird from "../public/iconsProcess/iconThird.png"
import iconFour from "../public/iconsProcess/iconFour.png"

const CardOWP = () => {
  return (
    <>
      <main>
        <div>
          <div className='flex justify-center gap-x-5 flex-col sm:flex-row gap-y-5 text-gray-700'>
            <div className='flex flex-col gap-y-5 justify-center items-center lg:flex-row gap-x-5'>
              <div className='border justify-center border-green-400 hover:bg-[#c1e1c1] rounded-xl p-2 flex flex-col gap-y-5 w-10/12  lg:w-[22vw]  h-60'>
                {/* <div className='flex justify-around items-end'>
                  <div>
                    <Image
                      src={one}
                      alt=''
                      className='w-18' />
                  </div>
                  <div>
                    <Image
                      src={iconFirst}
                      alt=''
                      className='w-10' />
                  </div>
                </div> */}
                <div className='flex flex-col text-center gap-y-2'>
                  <div className='text-xl font-bold'>🏍️ Kies je lespakket</div>
                  <div>Kies het lespakket dat past bij jouw behoeften en planning. Of je nu voor losse lessen gaat of een compleet traject, wij helpen je je doel te bereiken.</div>
                </div>
              </div>
              <div className='border justify-center border-green-400 hover:bg-[#c1e1c1] rounded-xl p-2 flex flex-col gap-y-5 w-10/12  lg:w-[22vw]  h-60'>
                {/* <div className='flex justify-around items-center'>
                  <div>
                    <Image
                      src={two}
                      alt=''
                      className='w-12' />
                  </div>
                  <div>
                    <Image
                      src={iconSecond}
                      alt=''
                      className='w-[42px]' />
                  </div>
                </div> */}
                <div className='flex flex-col text-center gap-y-2'>
                  <div className='text-xl font-bold'>🤝 Persoonlijk overleg</div>
                  <div>Heb je vragen of weet je niet waar je moet beginnen? Ons team staat voor je klaar om je persoonlijk te adviseren over de beste aanpak voor jouw situatie.</div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-y-5 justify-center items-center lg:flex-row gap-x-5'>
              <div className='border justify-center border-green-400 hover:bg-[#c1e1c1] rounded-xl p-2 flex flex-col gap-y-5 w-10/12  lg:w-[22vw]  h-60'>
                {/* <div className='flex justify-around items-center'>
                  <div>
                    <Image
                      src={three}
                      alt=''
                      className='w-18' />
                  </div>
                  <div>
                    <Image
                      src={iconThird}
                      alt=''
                      className='w-10' />
                  </div>
                </div> */}
                <div className='flex flex-col text-center gap-y-2'>
                  <div className='text-xl font-bold'>🛒 Plan je lessen</div>
                  <div>Boek je motorrijlessen eenvoudig online of neem contact op met ons team. Wij zorgen ervoor dat alles soepel verloopt, zodat jij snel van start kunt.</div>
                </div>
              </div>
              <div className='border justify-center border-green-400 hover:bg-[#c1e1c1] rounded-xl p-2 flex flex-col gap-y-5 w-10/12  lg:w-[22vw]  h-60'>
                {/* <div className='flex justify-around items-center'>
                  <div>
                    <Image
                      src={fourth}
                      alt=''
                      className='w-12' />
                  </div>
                  <div>
                    <Image
                      src={iconFour}
                      alt=''
                      className='w-[38px]' />
                  </div>
                </div> */}
                <div className='flex flex-col text-center gap-y-2'>
                  <div className='text-xl font-bold'>🚦 Start je training</div>
                  <div>Na het plannen is het tijd om op de motor te stappen! Volg onze professionele lessen en werk stap voor stap toe naar je motorrijbewijs.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </>
  )
}

export default CardOWP
