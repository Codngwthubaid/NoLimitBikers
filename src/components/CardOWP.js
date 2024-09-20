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
          <div className='flex justify-center gap-x-5'>
            <div className='border border-orange-400 rounded-xl p-4 flex flex-col gap-y-5 w-[22vw]'>
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
                <div className='text-xl font-bold'>Select Your Plan</div>
                <div>Before starting any course please select a plan as your requirement to achieve your goal in time.</div>
              </div>
            </div>
            <div className='border border-orange-400 rounded-xl p-4 flex flex-col gap-y-5 w-[22vw]'>
              <div className='flex justify-around items-center'>
                <div>
                  <Image
                    src={two}
                    alt=''
                    className='w-14' />
                </div>
                <div>
                  <Image
                    src={iconSecond}
                    alt=''
                    className='w-[42px]' />
                </div>
              </div>
              <div className='flex flex-col text-center gap-y-2'>
                <div className='text-xl font-bold'>Consultation</div>
                <div>If you face any problem to start your program our support team is always ready consult with them.</div>
              </div>
            </div>
            <div className='border border-orange-400 rounded-xl p-4 flex flex-col gap-y-5 w-[22vw]'>
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
                <div className='text-xl font-bold'>Buy Your Courses</div>
                <div>Once you are ready to start the course please purchase your choosen course via online or physically.</div>
              </div>
            </div>
            <div className='border border-orange-400 rounded-xl p-4 flex flex-col gap-y-5 w-[22vw]'>
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
                <div className='text-xl font-bold'>Start Your Training</div>
                <div>Finally when you finished every process then it is time to start your training with us regularly.</div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </>
  )
}

export default CardOWP
