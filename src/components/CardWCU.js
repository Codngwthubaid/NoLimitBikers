import React from 'react'
import Image from 'next/image'

const CardWCU = (props) => {
    return (
        <>
            <main>
                <div className='flex justify-center items-start flex-col w-[20vw] bg-orange-400 p-5 gap-y-3 text-white rounded-2xl'>
                    <div className='flex justify-center items-center gap-x-2'>
                        <div>
                            <Image
                                src={props.src}
                                className="w-7 rounded-3xl object-cover"
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='font-semibold text-2xl'>{props.heading}</div>
                    </div>
                    <div className='text-base'>{props.details}</div>
                </div>
            </main>
        </>
    )
}

export default CardWCU
