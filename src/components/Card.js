import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = (props) => {
    return (
        <>
            {/* <div className='flex flex-col justify-center items-center text-center gap-y-3 border border-orange-300 py-5 rounded-2xl hover:text-orange-400 h-60'>
                <div>
                    <Image
                        src={props.img}
                        width={50}
                        alt="Picture of the author"
                    />
                </div>
                <div className='font-semibold text-xl'>{props.data}</div>
                <div>{props.details}</div>
                <div className='flex justify-center items-center gap-x-2 cursor-pointer'>
                    <Link href="/pages/about" className='font-semibold underline text-sm'>LEES MEER</Link>
                </div>
            </div> */}
            <div className="flex flex-col justify-center items-center text-center gap-y-3 border-2 border-[#CCFF00] py-5 px-4 rounded-2xl hover:bg-[#CCFF00] transition-colors duration-300 h-60 group">
                <div className="bg-white p-3 rounded-full">
                    <Image
                        src={props.img}
                        width={50}
                        height={50}
                        alt={`Icon for ${props.data}`}
                        className="text-[#2D3100]"
                    />
                </div>
                <h3 className='font-semibold text-xl text-[#2D3100] group-hover:text-white transition-colors duration-300'>{props.data}</h3>
                <p className='text-[#2D3100] group-hover:text-white transition-colors duration-300'>{props.details}</p>
                <div className='flex justify-center items-center gap-x-2 cursor-pointer mt-2'>
                    <Link
                        href="/pages/about"
                        className='font-semibold underline text-sm text-[#2D3100] group-hover:text-white transition-colors duration-300'
                    >
                        LEES MEER
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card
