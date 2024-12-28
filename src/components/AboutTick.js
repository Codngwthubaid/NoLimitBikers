import React from 'react'
import { ArrowRight } from 'lucide-react';


const AboutTick = (props) => {
    return (
        <>
            <div className="flex justify-center sm:items-start gap-x-2">
                <ArrowRight className='text-green-400' />
                <div>{props.data}</div>
            </div>
        </>
    )
}

export default AboutTick
