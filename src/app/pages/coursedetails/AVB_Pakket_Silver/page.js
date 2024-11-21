import React from 'react'
import SubSectionheadings from '@/components/SubSectionheadings'
import MainCourseDetails from '@/components/MainCourseDetails'

const page = () => {
  return (
    <>
      <main>
        <section>
          <article>
            <div className='pt-[75px]'>
              <div>
                <SubSectionheadings Head="Cursusdetails" mainPage="Thuis" currentPage="Cursusdetails" />
              </div>
              <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>
              <div>
                <MainCourseDetails
                  Head="AVB Pakket Silver"
                  Duration="Nan"
                  contentParaFirst="12 uur rijles: Dit pakket omvat in totaal 12 uur aan praktijklessen. Deze lessen zijn essentieel voor het ontwikkelen van de benodigde vaardigheden en het opbouwen van vertrouwen op de weg. De lessen worden gegeven in een gestructureerde en veilige omgeving, zodat leerlingen zich op hun gemak voelen terwijl ze leren."
                  contentParaSecond="Vaste instructeur: Leerlingen krijgen de kans om les te krijgen van een vaste instructeur. Dit zorgt voor continuïteit en een betere relatie tussen leerling en instructeur, wat bijdraagt aan een effectievere leerervaring. De instructeur kan beter inspelen op de persoonlijke leerbehoeften van de leerling."
                  contentParaThird="Nieuwe lesmotor: Het pakket biedt toegang tot een nieuwe lesmotor. Dit is belangrijk omdat het rijden op moderne en goed onderhouden motoren niet alleen de veiligheid bevordert, maar ook helpt bij het ontwikkelen van goede rijtechnieken met actuele technologieën."
                  contentParaFourth="Leskaart & Advies: Bij het pakket hoort ook een leskaart, die leerlingen helpt om hun voortgang bij te houden. Daarnaast ontvangen zij waardevol advies over hun rijopleiding en tips om zich optimaal voor te bereiden op het examen."
                  Price="€749.00" />
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default page
