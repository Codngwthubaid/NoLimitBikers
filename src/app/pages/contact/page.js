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
              <div className="h-[2px] w-11/12 bg-green-400 my-14"></div>
              <div className='flex flex-col items-center gap-y-10 justify-evenly'>
                <div className='flex gap-10 justify-center items-center container mx-auto'>
                  <div className="rounded-3xl py-10 gap-y-3 w-[80vw] md:w-[30vw] border border-green-400 flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1] h-48">
                    <div className='text-2xl font-bold'>NoLimitBikers</div>
                    {/* <div className='hover:text-green-400'>Rotterdam</div> */}
                    <div className='hover:text-green-400'>KVK 50463829</div>
                    <div className='hover:text-green-400'> BTW Nr. NL134561028B01</div>
                  </div>
                  <div className="rounded-3xl py-10 gap-y-3  w-[80vw] md:w-[30vw] border border-green-400 flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1] h-48">
                    <div className='text-2xl font-bold'>Service & vragen</div>
                    <div className='hover:text-green-400'>Info@nolimitbikers.nl</div>
                    <div className='hover:text-green-400'>Appen? +316 14 38 20 99</div>
                  </div>
                  <div className="rounded-3xl py-10 gap-y-3 w-[80vw] md:w-[30vw] border border-green-400 flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1] h-48">
                    <div className='text-2xl font-bold'>Heeft u een vraag?</div>
                    <div className='hover:text-green-400'>06 14 38 20 99</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-y-5 container mx-auto my-16'>
              <h4 className='text-3xl font-semibold text-gray-700'>Contact Driving School Speedway in Rotterdam</h4>
              <div className='text-gray-700'>Welcome to Rijschool Speedway, your partner for affordable and high-quality driving lessons in Rotterdam. Our professional instructors are ready to guide you to your driver's license. Whether you are looking for car driving lessons, motorcycle driving lessons, or scooter driving lessons, you have come to the right place.
              </div>
              <div className='text-gray-700'>We understand that everyone has unique needs when it comes to driving lessons, which is why we offer flexible lesson times and tailor-made lesson packages. Contact us today via email, phone, or WhatsApp for more information or to book your first driving lesson.
              </div>
              <div className='text-gray-700'>At Driving School Speedway we strive for the highest pass rate and customer satisfaction. Our instructors have years of experience and a personal approach that helps you to confidently and safely go on the road. Do not hesitate to contact us for all your questions about driving lessons and rates.</div>
              <div className='text-gray-700'>We look forward to helping you pass your driving test and welcome you to Driving School Speedway in Rotterdam.</div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Page

