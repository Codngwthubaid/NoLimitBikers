import React from 'react'
import Image from 'next/image'
import BikeLogo from "../../public/img/BikeLogo.png"


export default function loader() {

  return (
    <div className='bg-black overflow-hidden mx-auto z-10 flex justify-center items-center h-screen relative w-full'>
      <Image className='transition-transform duration-1000 transform hover:scale-125' src={BikeLogo} alt='Loading..' />
    </div>
  )
}

