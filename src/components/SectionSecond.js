import React from 'react'
import Card from './Card'

export default function SectionSecond() {
  return (
    <main>
      <div className="flex justify-center items-center flex-col gap-y-3 mx-5">
        <div className="text-2xl font-semibold text-green-400">Onze diensten</div>
        <div className="text-4xl font-bold text-gray-700 text-center">Wij helpen je vol vertrouwen en veilig de weg op!</div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 my-10">
        <div className="flex gap-x-5 justify-center items-center gap-y-5 flex-col mx-auto sm:flex-row">
          <div className="flex justify-center items-center gap-5 flex-col sm:flex-row">
            <div className='md: max-w-[45vw]'>
              <Card
                data="🏍️ Motorrijlessen"
                details="Bij NoLimitBikers bieden we motorrijlessen die aansluiten op jouw tempo en ervaring. Onze lessen zijn gericht op veiligheid, controle en plezier, zodat jij zonder zorgen je motorrijbewijs haalt." />
            </div>
            <div className='md: max-w-[45vw]'>
              <Card
                data="🏁 AVB en AVD Dagcursussen"
                details="Wil je snel en efficiënt je voertuigbeheersing (AVB) of verkeersdeelname (AVD) examen halen? Kies dan voor onze dagcursussen. Perfect voor iedereen die in één dag wil focussen op een specifiek onderdeel van het rijexamen." />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


