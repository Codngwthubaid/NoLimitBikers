import React from 'react'
import SubSectionheadings from '@/components/SubSectionheadings'
import NumberTicker from "@/components/magicui/number-ticker";
import Image from 'next/image';
import G8 from "@/public/Gallery/G8.jpg"
import G9 from "@/public/Gallery/G9.jpg"
import G10 from "@/public/Gallery/G10.jpg"
import Link from 'next/link';
import rightArrowWhite from "@/public/img/rightArrowWhite.png"


const page = () => {
  return (
    <>
      <main>
        <section>
          <article className='pt-[75px]'>
            <div>
              <SubSectionheadings Head="Courses" mainPage="Home" currentPage="Courses" />
              <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>
              <div className='flex flex-col justify-center items-center gap-y-2'>
                <div className='text-2xl font-semibold text-orange-400'>Our Trending Courses</div>
                <div className='text-5xl font-bold text-center'>Our Popular Driving Courses</div>
                <div>
                  <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-center items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={G8}
                              width={1203}
                              height={503}
                            />
                          </div>
                          <h2 className="text-xl flex justify-center items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>Defensive Driving</div>
                            <div className='text-orange-400 font-semibold text-3xl'>$80</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Defensive driving is a set of driving techniques that help minimize the risks of accidents and improve overall safety.
                          </p>
                          <div>
                            <Link href="/pages/coursedetails/DefensiveDriving">
                              <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">READ MORE
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
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-center items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={G9}
                              width={1204}
                              height={504}
                            />
                          </div>
                          <h2 className="text-xl flex justify-center items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>Professional Driving</div>
                            <div className='text-orange-400 font-semibold text-3xl'>$150</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            Professional driving involves driving for a living, such as delivery drivers, taxi drivers, and truck drivers it requires.
                          </p>
                          <div>
                            <Link href="/pages/coursedetails/ProfessionalDriving">
                              <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">READ MORE
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
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-center items-start gap-y-3">
                          <div className="rounded-lg h-64 overflow-hidden">
                            <Image
                              alt="content"
                              className="object-cover object-center h-full w-full"
                              src={G10}
                              width={1205}
                              height={505}
                            />
                          </div>
                          <h2 className="text-xl flex justify-center items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                            <div>Traffic Science</div>
                            <div className='text-orange-400 font-semibold text-3xl'>$70</div>
                          </h2>
                          <p className="text-base leading-relaxed mt-2">
                            The Traffic Science course covers the principles and practices of traffic engineering, including traffic flow theory.
                          </p>
                          <div>
                            <Link href="/pages/coursedetails/TrafficScience">
                              <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">READ MORE
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
                  </section>
                </div>
              </div>
              <div className='bg-orange-400 flex justify-around items-center py-16'>
                <div className='flex flex-col justify-center items-center'>
                  <div className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white">
                    <NumberTicker className="text-[#ffedd5]" value={150} />
                    <span className='text-[#a99595]'>&#43;</span>
                  </div>
                  <div className="text-[#ffedd5]">Learn Form Here</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <div className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white">
                    <NumberTicker className="text-[#ffedd5]" value={50} />
                    <span className='text-[#a99595]'>&#43;</span>
                  </div>
                  <div className="text-[#ffedd5]">Current Students</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <div className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white">
                    <NumberTicker className="text-[#ffedd5]" value={5} />
                    <span className='text-[#a99595]'>&#43;</span>
                  </div>
                  <div className="text-[#ffedd5]">Expert Instructor</div>
                </div>
              </div>

              <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default page