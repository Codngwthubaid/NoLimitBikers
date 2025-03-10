import React from 'react'
import FAQ from './FAQ'
import AccordionCom from './AccordionCom'

const SectionSixth = () => {

    return (
        <div className="bg-gray-300 max-h-fit">
            <div className="text-white w-[95vw] mx-auto flex justify-around items-center py-10 flex-col md:flex-row gap-x-5">
                <div className="w-11/12 lg:w-1/2">
                    <div className="flex flex-col gap-y-3">
                        <div className="font-semibold text-2xl text-black">FAQ</div>
                        <div className="text-black text-4xl font-bold">Veelgestelde vragen</div>
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
    )
}

export default SectionSixth
