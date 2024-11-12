import React from 'react'
import Card from './Card'
import ELD from "../public/img/ELD.png"
import IT from "../public/img/IT.png"
import RTP from "../public/img/RTP.png"
import CYSAT from "../public/img/CYSAT.png"

const SectionSecond = () => {
    return (
        <>
            <main>
                <section className="container mx-auto">
                    <article>
                        <div className="flex justify-center items-center flex-col gap-y-3">
                            <div className="text-2xl font-semibold text-orange-400">Our Services</div>
                            <div className="text-4xl font-bold">We Provide Service For You</div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 my-10">
                            <div className="flex gap-x-5 justify-center items-center gap-y-5 flex-col sm:flex-row">
                                <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                                    <Card img={ELD} data="Easy Learn Driving" details="Our Course module is very easy to understand." />
                                </div>
                                <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                                    <Card img={IT} data="Instructor Training" details="Brainstrom words related to your skills and confidence." />
                                </div>
                            </div>
                            <div className="flex gap-x-5 justify-center items-center flex-col sm:flex-row gap-y-5">
                                <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                                    <Card img={CYSAT} data="Easy Learn Driving" details="Our Course module is very easy to understand." />
                                </div>
                                <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                                    <Card img={RTP} data="Easy Learn Driving" details="Our Course module is very easy to understand." />
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}

export default SectionSecond
