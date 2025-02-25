import React from 'react'
import Image from 'next/image'
import Image1 from '../public/Gallery/Image1.jpg'
import Image2 from '../public/Gallery/Image2.jpg'


const SectionFourth = () => {
    return (
        <main>
            <section className="container mx-auto">
                <article>
                    <div className="flex justify-center items-center flex-col gap-y-3">
                        <div className="text-2xl font-semibold text-green-400">Geslaagden </div>
                        <div className="text-4xl font-bold text-gray-700 text-center">Wij helpen je vol vertrouwen en veilig de weg op!</div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 my-10">

                        <div className="flex justify-center items-start gap-5 flex-col sm:flex-row w-full">
                                <Image src={Image1} alt="image1" width={300} height={400} className='rounded-lg hover:scale-125'/>
                                <Image src={Image2} alt="image2" width={300} height={300} className='rounded-lg hover:scale-125'/>
                        </div>
                    </div>

                </article>
            </section>
        </main>
    )
}

export default SectionFourth