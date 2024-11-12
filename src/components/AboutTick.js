import React from 'react'
import Image from 'next/image'

const AboutTick = (props) => {
    return (
        <>
            <div className="flex justify-center items-end gap-x-2">
                <div>
                    <Image
                        src={props.src}
                        className="w-5 rounded-3xl object-cover"
                        alt="Picture of the author"
                    />
                </div>
                <div>{props.data}</div>
            </div>
        </>
    )
}

export default AboutTick
