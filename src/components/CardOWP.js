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
          <div className='flex justify-center gap-x-5 flex-col sm:flex-row gap-y-5'>
            <div className='flex flex-col gap-y-5 justify-center items-center lg:flex-row gap-x-5'>
              <div className='border border-orange-400 rounded-xl p-2 flex flex-col gap-y-5 w-10/12  lg:w-[22vw] hover:text-orange-400 h-60'>
                <div className='flex justify-around items-end'>
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
                </div>
                <div className='flex flex-col text-center gap-y-2'>
                  <div className='text-xl font-bold'>Selecteer uw abonnement</div>
                  <div>Voordat u met een cursus begint, selecteert u een plan als vereiste om uw doel op tijd te bereiken.</div>
                </div>
              </div>
              <div className='border border-orange-400 rounded-xl p-2 flex flex-col gap-y-5 w-10/12  lg:w-[22vw] hover:text-orange-400 h-60'>
                <div className='flex justify-around items-center'>
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
                </div>
                <div className='flex flex-col text-center gap-y-2'>
                  <div className='text-xl font-bold'>Overleg</div>
                  <div>Als u problemen ondervindt bij het starten van uw programma, staat ons ondersteuningsteam altijd klaar om met hen te overleggen.</div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-y-5 justify-center items-center lg:flex-row gap-x-5'>
              <div className='border border-orange-400 rounded-xl p-2 flex flex-col gap-y-5 w-10/12  lg:w-[22vw] hover:text-orange-400 h-60'>
                <div className='flex justify-around items-center'>
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
                </div>
                <div className='flex flex-col text-center gap-y-2'>
                  <div className='text-xl font-bold'>Koop uw cursussen</div>
                  <div>Zodra u klaar bent om met de cursus te beginnen, kunt u de door u gekozen cursus online of fysiek kopen.</div>
                </div>
              </div>
              <div className='border border-orange-400 rounded-xl p-2 flex flex-col gap-y-5 w-10/12  lg:w-[22vw] hover:text-orange-400 h-60'>
                <div className='flex justify-around items-center'>
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
                </div>
                <div className='flex flex-col text-center gap-y-2'>
                  <div className='text-xl font-bold'>Begin met uw training</div>
                  <div>Als je eindelijk elk proces hebt afgerond, is het tijd om regelmatig bij ons te gaan trainen.</div>
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
