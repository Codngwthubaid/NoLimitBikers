import React from 'react'
import Gallery from './Gallery'
import G1 from "../public/Gallery/G1.jpg"
import G2 from "../public/Gallery/G2.jpg"
import G3 from "../public/Gallery/G3.jpg"
import G4 from "../public/Gallery/G4.jpg"
import G5 from "../public/Gallery/G5.jpg"
import G6 from "../public/Gallery/G6.jpg"

const SectionSeventh = () => {
    return (
        <>
            <main>
                <section>
                    <article>
                        <div className="flex flex-col justify-center items-center gap-y-5">
                            <div className="text-2xl font-semibold text-green-400">Onze galerij</div>
                            <div className="text-4xl sm:text-5xl font-bold text-center text-gray-700">Bekijk onze rijpraktijkgalerij</div>
                        </div>
                        <div className="flex flex-row md:flex-col gap-y-7 mt-10 justify-center items-center px-5">
                            <div className="flex justify-center items-center gap-x-7 flex-col-reverse md:flex-row gap-y-5">
                                <Gallery source={G1} desc="" />
                                <Gallery source={G2} desc="" />
                                <Gallery source={G3} desc="" />
                            </div>
                            <div className="flex justify-center items-center gap-x-7 flex-col-reverse md:flex-row gap-y-5">
                                <Gallery source={G4} desc="" />
                                <Gallery source={G5} desc="" />
                                <Gallery source={G6} desc="" />
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}

export default SectionSeventh
