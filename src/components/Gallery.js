import React from 'react'
import Image from 'next/image'

const Gallery = (props) => {
    return (
        <>
            <main>
                <div>
                    <Image
                        src={props.source}
                        className='w-[30vw] rounded-2xl hover:scale'
                        alt={props.desc}
                    />
                </div>
            </main>
        </>
    )
}

export default Gallery

