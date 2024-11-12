import React from 'react'
import FAQ from './FAQ'
import AccordionCom from './AccordionCom'

const SectionSixth = () => {
   
    return (
        <>
            <main>
                <section>
                    <article>
                        <div className="bg-[#a99595] max-h-fit ">
                            <div className="text-white w-[95vw] mx-auto flex justify-around items-center py-10 flex-col md:flex-row gap-x-5">
                                <div className="w-11/12 lg:w-1/2">
                                    <div className="flex flex-col gap-y-3">
                                        <div className="text-orange-400 font-semibold text-2xl">FAQ</div>
                                        <div className="text-[#ffedd5] text-5xl font-bold">Frequently Asked Question</div>
                                    </div>
                                    <div>
                                        <AccordionCom />
                                    </div>
                                </div>
                                <div className="text-[#a99595]">
                                    <div>
                                        <FAQ />
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}

export default SectionSixth
