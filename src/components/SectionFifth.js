import React from 'react'
import CardOWP from './CardOWP'

const SectionFifth = () => {
    return (
        <>
            <main>
                <section>
                    <article>
                        <div className="container mx-auto flex flex-col justify-center items-start gap-y-10">
                            <div>
                                <div className="text-2xl font-semibold">Our Work Process</div>
                                <div className="text-5xl font-bold">Start The Dride Learning Process</div>
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
