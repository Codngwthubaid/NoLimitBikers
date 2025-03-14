import React from 'react'
import Image from 'next/image'
import new1 from '../public/Gallery/new1.png'
import new2 from '../public/Gallery/new2.png'


const SectionFourth = () => {
    return (
        <main>
            <div className="flex justify-center items-center flex-col gap-y-3">
                <div className="text-2xl font-semibold text-green-400">Geslaagden </div>
                <div className="text-4xl text-gray-700 font-bold text-center">Onze trots!</div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 my-10">

                <div className="flex justify-center items-start gap-5 flex-col sm:flex-row w-full">
                    <Image src={new1} alt="image1" width={300} height={400} className='rounded-lg hover:scale-125' />
                    <Image src={new2} alt="image2" width={300} height={300} className='rounded-lg hover:scale-125' />
                </div>
            </div>
        </main>
    )
}

export default SectionFourth