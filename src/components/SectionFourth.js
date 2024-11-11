import React from 'react'
import CardWCU from './CardWCU'
import rightTick from "../public/img/rightTick.png"
import G7 from "../public/Gallery/G7.jpg"
import Image from 'next/image'

const SectionFourth = () => {
    return (
        <>
            <main>
                <section>
                    <article className="flex lg:justify-around justify-center items-center bg-[#a99595] py-10 flex-col md:flex-row gap-y-10">
                        <div className="lg:w-[50vw] w-11/12 flex flex-col gap-y-10">
                            <div className="flex flex-col justify-center items-start gap-y-5">
                                <div className="text-2xl text-orange-400 font-semibold">Why Choosing Us</div>
                                <div className="text-5xl font-bold text-[#ffedd5]">Get Behind The Wheel And Take The Lead</div>
                            </div>
                            <div className="flex flex-col justify-center items-start gap-y-5">
                                <div className="flex justify-around items-center gap-x-2">
                                    <div>
                                        <CardWCU src={rightTick} heading="Affordable Fee" details="All of our course fee are very affordable for everyone." />
                                    </div>
                                    <div>
                                        <CardWCU src={rightTick} heading="Affordable Fee" details="All of our course fee are very affordable for everyone." />
                                    </div>
                                </div>
                                <div className="flex justify-around items-center gap-x-2">
                                    <div>
                                        <CardWCU src={rightTick} heading="Affordable Fee" details="All of our course fee are very affordable for everyone." />
                                    </div>
                                    <div>
                                        <CardWCU src={rightTick} heading="Affordable Fee" details="All of our course fee are very affordable for everyone." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:w-[40vw] lg:flex justify-center">
                            <Image
                                src={G7}
                                className="w-96 rounded-2xl"
                                alt=""
                            />
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}

export default SectionFourth
