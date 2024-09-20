import React from 'react'
import Image from 'next/image'

const Gallery = (props) => {
    return (
        <>
            <main>
                <div className='flex justify-center items-center'>
                    <Image
                        src={props.source}
                        className='w-11/12 md:w-[45vw] lg:w-[30vw] rounded-2xl hover:scale'
                        alt={props.desc}
                    />
                </div>
            </main>
        </>
    )
}

export default Gallery

