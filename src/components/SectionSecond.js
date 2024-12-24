import React from 'react'
import Card from './Card'
import ELD from "../public/img/ELD.png"
import IT from "../public/img/IT.png"
import RTP from "../public/img/RTP.png"
import CYSAT from "../public/img/CYSAT.png"

const SectionSecond = () => {
  return (
    <>
      <main>
        <section className="container mx-auto">
          <article>
            <div className="flex justify-center items-center flex-col gap-y-3">
              <div className="text-2xl font-semibold text-green-400">Onze diensten</div>
              <div className="text-4xl font-bold text-gray-700">Wij helpen je vol vertrouwen en veilig de weg op!</div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 my-10">
              <div className="flex gap-x-5 justify-center items-center gap-y-5 flex-col sm:flex-row">
                <div className="flex justify-center items-center gap-5 flex-col sm:flex-row">
                  <Card
                    img={ELD}
                    data="🏍️ Motorrijlessen"
                    details="Bij NoLimitBikers bieden we motorrijlessen die aansluiten op jouw tempo en ervaring. Onze lessen zijn gericht op veiligheid, controle en plezier, zodat jij zonder zorgen je motorrijbewijs haalt." />
                  <Card
                    img={IT}
                    data="🏁 AVB en AVD Dagcursussen"
                    details="Wil je snel en efficiënt je voertuigbeheersing (AVB) of verkeersdeelname (AVD) examen halen? Kies dan voor onze dagcursussen. Perfect voor iedereen die in één dag wil focussen op een specifiek onderdeel van het rijexamen." />
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>

    </>
  )
}

export default SectionSecond
