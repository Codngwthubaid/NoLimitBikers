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
                <SubSectionheadings Head="Course Details" mainPage="Home" currentPage="Course Details" />
              </div>
              <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>
              <div>
                <MainCourseDetails Head="Professional Driving" Level="Intermediate" Duration="9 weeks" contentParaFirst="Defensive driving is an important aspect of safe and responsible driving. By being aware of potential hazards and anticipating the actions of other drivers, a defensive driver is better prepared to avoid accidents and minimize the risks of driving. Defensive driving techniques are especially important in today’s fast-paced and unpredictable driving environment, where distractions and aggressive driving are common." contentParaSecond="One of the key principles of defensive driving is maintaining a safe following distance. By keeping a safe distance from the vehicle in front, a driver has more time to react to sudden stops or maneuvers, reducing the risk of rear-end collisions. Another important principle is scanning the road ahead for potential hazards, such as pedestrians, other vehicles, or road debris. By being aware of these hazards, a driver can anticipate potential dangers and take steps to avoid them." Price="$150.00" />
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default page
