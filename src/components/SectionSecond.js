import React from 'react'
import Card from './Card'

export default function SectionSecond() {
  return (
    <main>
      <div className="flex justify-center items-center flex-col gap-y-3 mx-5">
        <div className="text-2xl font-semibold text-green-400">Onze diensten</div>
        <div className="text-4xl font-bold text-gray-700 text-center">Wij helpen je vol vertrouwen en veilig de weg op – professioneel, efficiënt en betaalbaar!</div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 my-10">
        <div className="flex gap-x-5 justify-center items-center gap-y-5 flex-col mx-auto sm:flex-row">
          <div className="flex justify-center items-center gap-5 lg:mx-10 flex-col sm:flex-row">
            <div className='mx-10 lg:mx-0'>
              <Card
                data="🏍️ Motorrijlessen"
                details="Bij NoLimitBikers volg je de beste en goedkoopste motor rijlessen in Rotterdam, volledig afgestemd op jouw tempo en niveau. Onze professionele instructeurs zorgen voor veiligheid, controle en plezier. Zoek je de dichtstbijzijnde motor rijschool of gewoon goedkope motorrijlessen in Rotterdam? Wij staan voor je klaar!" />
            </div>
            <div className='mx-10 lg:mx-0'>
              <Card
                data="🏁 AVB en AVD Dagcursussen"
                details="Wil je snel je rijbewijs halen? Kies dan voor onze efficiënte dagcursussen voor motor rijlessen in Rotterdam. Perfect om je voertuigbeheersing (AVB) of verkeersdeelname (AVD) in één dag te trainen met ervaren begeleiding. Snel, professioneel en zonder gedoe." />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


