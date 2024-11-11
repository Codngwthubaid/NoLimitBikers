import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import rightArrowWhite from "../public/img/rightArrowWhite.png"
const SectionEight = () => {
  return (
    <>
    <main>
    <section>
          <article>
            <div className="bg-[#a99595] min-h-fit h-[60vh] px-5 flex flex-col justify-center items-center gap-y-10">
              <div className="text-orange-400 font-semibold text-2xl">(+163) 6972 9901</div>
              <div className="flex flex-col justify-center items-start sm:items-center">
                <div className="text-4xl lg:text-5xl text-[#ffedd5] font-bold">Book Your First Driving Lesson</div>
                <div className="text-4xl lg:-5xl text-[#ffedd5] font-bold">And Contact Us</div>
              </div>
              <div className="flex justify-center items-center gap-x-3">
                <div>
                  <Link href="pages/courses">
                    <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">BOOK NOW
                      <Image
                        src={rightArrowWhite}
                        width={18}
                        height={20}
                        alt="Picture of the author"
                      />
                    </button>
                  </Link>
                </div>
                <div>
                  <Link href="pages/courses">
                    <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">CONTACT US
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
          </article>
        </section>
    </main>
    </>
  )
}

export default SectionEight
