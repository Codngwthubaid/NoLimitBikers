import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = (props) => {
    return (
        <>
            <div className='border-2 border-red-600 '>
                <div>
                    {/* <Image
                            src={ }
                            width={18}
                            height={20}
                            alt="Picture of the author"
                        />  */}
                </div>
                <div>{props.data}</div>
                <div>{props.details}</div>
                <div>
                    <Link href="/pages/about" className='underline'>READ MORE
                        {/* <Image
                            src={ }
                            width={18}
                            height={20}
                            alt="Picture of the author"
                        /> */}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card
