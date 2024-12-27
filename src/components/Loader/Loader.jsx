import React from 'react'
import Image from 'next/image'
import MainLogo from "../../public/img/MainLogo.png"

const loader = () => {
  return (
    <div className='bg-black flex justify-center items-center h-screen fixed'>
        <Image src={MainLogo} alt='Loading..'/>
    </div>
  )
}

export default loader