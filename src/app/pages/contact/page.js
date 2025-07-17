import React from 'react'
import SubSectionheadings from '@/components/SubSectionheadings'
import AboutLoaderWrapper from "@/components/AboutLoaderWrapper";
import { contactCards, descriptionItems } from '@/constants';

export const metadata = {
  title: "Contact",
  description: "Vragen over motorrijlessen of direct een les boeken? Neem contact op via telefoon, e-mail of WhatsApp. Wij helpen je graag verder!"
};

export default function Page() {
  return (
    <AboutLoaderWrapper>
      <main>
        <section>
          <article>
            <div>
              <div className='pt-[75px]'>
                <SubSectionheadings Head="Contact" mainPage="Home" currentPage="Contact" />
              </div>
              <h1 className="text-center text-green-400 text-3xl font-medium title-font my-10">Contact</h1>
              <div className='flex flex-col items-center gap-y-10 justify-evenly'>
                <div className='flex flex-col md:flex-row gap-10 justify-center items-center'>
                  {contactCards.map((card, index) => (
                    <div key={index} className="rounded-3xl py-10 gap-y-3 w-[80vw] md:w-[30vw] flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1] h-48 shadow-lg">
                      <div className='text-2xl font-bold text-center'>{card.title}</div>
                      {card.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className={`hover:text-green-400 text-xl ${detailIndex === 0 && card.title === "NoLimitBikers" ? "text-center" : "font-semibold"}`}>
                          {detail}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <dl className='flex flex-col gap-y-5 my-16 mx-5'>
              {descriptionItems.map((item, index) => (
                <React.Fragment key={index}>
                  <dt className='text-3xl font-semibold text-gray-700'>{item.title}</dt>
                  {item.descriptions.map((desc, descIndex) => (
                    <dd key={descIndex} className='text-gray-700'>{desc}</dd>
                  ))}
                </React.Fragment>
              ))}
            </dl>
          </article>
        </section>
      </main>
    </AboutLoaderWrapper>
  )
}