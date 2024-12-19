import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = (props) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center text-center gap-y-3 border border-green-400 py-5 rounded-2xl text-gray-700 h-60 hover:bg-[#c1e1c1]'>
                <div>
                    {/* <Image
                        src={props.img}
                        width={50}
                        alt="Picture of the author"
                    /> */}
                </div>
                <div className='font-semibold text-xl'>{props.data}</div>
                <div>{props.details}</div>
                <div className='flex justify-center items-center gap-x-2 cursor-pointer'>
                    <Link href="/pages/about" className='font-semibold underline text-sm'>LEES MEER</Link>
                </div>
            </div>
           
        </>
    )
}

export default Card
