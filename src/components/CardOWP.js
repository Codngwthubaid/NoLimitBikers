import { cards } from '@/constants'
import React from 'react'

export default function CardOWP() {
  return (
    <div className='flex justify-center gap-x-5 flex-col sm:flex-row gap-y-5 text-gray-700'>
      <div className='flex flex-col gap-y-5 justify-center items-center lg:flex-row gap-x-5'>
        {cards.slice(0, 2).map((card, index) => (
          <div key={index} className='border justify-center border-green-400 hover:bg-[#c1e1c1] rounded-xl p-2 flex flex-col gap-y-5 w-10/12 lg:w-[22vw] h-64'>
            <div className='flex flex-col text-center gap-y-2'>
              <div className='text-xl font-bold'>{card.emoji} {card.title}</div>
              <div>{card.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-y-5 justify-center items-center lg:flex-row gap-x-5'>
        {cards.slice(2, 4).map((card, index) => (
          <div key={index} className='border justify-center border-green-400 hover:bg-[#c1e1c1] rounded-xl p-2 flex flex-col gap-y-5 w-10/12 lg:w-[22vw] h-64'>
            <div className='flex flex-col text-center gap-y-2'>
              <div className='text-xl font-bold'>{card.emoji} {card.title}</div>
              <div>{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

