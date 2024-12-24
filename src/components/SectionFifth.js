import React from 'react'
import CardOWP from './CardOWP'

const SectionFifth = () => {
    return (
        <>
            <main>
                <section>
                    <article>
                        <div className="container mx-auto flex flex-col justify-center items-start gap-y-10">
                            <div className='text-center'>
                                <div className="text-2xl font-semibold text-green-400">Ons werkproces</div>
                                <div className="text-4xl font-bold text-gray-700">Zo haal je met NoLimitBikers je motorrijbewijs!</div>
                            </div>
                            <div>
                                <CardOWP />
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}

export default SectionFifth
