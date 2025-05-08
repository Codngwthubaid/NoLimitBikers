import React from 'react'
import Image from 'next/image';
import SubSectionheadings from '@/components/SubSectionheadings'
import { avbPackagesForCourses, avdPackagesForCourses } from '@/constants';
import AboutLoaderWrapper from '@/components/AboutLoaderWrapper';

export const metadata = {
  title: "Pakketten",
  description: "Bij NoLimitBikers vind je motorrijlessen op maat, van beginner tot gevorderde. Kies uit verschillende pakketten en krijg persoonlijke begeleiding om veilig en zelfverzekerd je motorrijbewijs te halen. Start vandaag nog!",
};

export default function Page() {
  return (
    <AboutLoaderWrapper>
      <main>
        <section>
          <article className='pt-[75px]'>
            <div>
              <SubSectionheadings Head="Pakketten" mainPage="Home" currentPage="Pakketten" />

              <div className='flex flex-col justify-center items-center gap-y-2'>

                <div className="text-green-400 text-3xl font-medium title-font mt-10 mb-2">Pakket AVB</div>
                <div>
                  <section className="text-gray-600 body-font">
                    <div className="px-5 py-12">
                      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        {avbPackagesForCourses.map((pkg, index) => (
                          <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                            <div className="rounded-lg h-64 overflow-hidden">
                              <Image
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src={pkg.image}
                                width={pkg.width}
                                height={pkg.height}
                              />
                            </div>
                            <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                              <div>{pkg.title}</div>
                            </h2>
                            <p className="text-base leading-relaxed mt-2">
                              {pkg.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>

                <div className="text-green-400 text-3xl font-medium title-font mb-2">Pakket AVD</div>
                <div>
                  <section className="text-gray-600 body-font">
                    <div className="px-5 py-12">
                      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        {avdPackagesForCourses.map((pkg, index) => (
                          <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col justify-start items-start gap-y-3">
                            <div className="rounded-lg h-64 overflow-hidden">
                              <Image
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src={pkg.image}
                                width={pkg.width}
                                height={pkg.height}
                              />
                            </div>
                            <h2 className="text-xl flex justify-start items-center gap-x-3 font-medium title-font text-gray-900 mt-5">
                              <div>{pkg.title}</div>
                            </h2>
                            <p className="text-base leading-relaxed mt-2">
                              {pkg.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="h-[2px] w-11/12 bg-green-400 my-14"></div>
            </div>
          </article>
        </section>
      </main>
    </AboutLoaderWrapper>
  )
}

