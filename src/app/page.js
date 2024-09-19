"use client"
import Image from "next/image";
import rightArrowWhite from "../public/img/rightArrowWhite.png"
import mainDriving from "../public/img/mainDriving.jpg"
import rightTick from "../public/img/rightTick.png"
import AboutTick from "@/components/AboutTick";
import Link from "next/link";
import ELD from "../public/img/ELD.png"
import IT from "../public/img/IT.png"
import RTP from "../public/img/RTP.png"
import CYSAT from "../public/img/CYSAT.png"
import bikeFirst from "../public/img/bikeFirst.jpg"
import bikeSecond from "../public/img/bikeSecond.jpg"
import bikeThird from "../public/img/bikeThird.jpg"
import bikeFour from "../public/img/bikeFour.jpg"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import FAQ from "../components/FAQ"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <>
      <main>
        <section className="container mx-auto pt-24 w-full">
          <article className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-start gap-y-12 w-[40vw]">
              <div className=" flex flex-col gap-y-4">
                <div className="text-xl font-semibold">Grow up your driving skills</div>
                <div className="text-5xl font-bold">Learn to
                  <span className="rounded-xl bg-orange-400 text-white px-3 mx-2">Drive With</span>
                </div>
                <div className="text-5xl font-bold">Confidence</div>
              </div>
              <div>
                <Link href="/pages/courses">
                  <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">EXPLORE COURSES
                    <Image
                      src={rightArrowWhite}
                      width={18}
                      height={20}
                      alt="Picture of the author"
                    />
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src={mainDriving}
                className="sm:w-[50vw] rounded-3xl object-cover"
                alt="Picture of the author"
              />
            </div>
          </article>
        </section>

        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

        <section className="container mx-auto">
          <article>
            <div className="flex flex-col gap-y-3">
              <div className="text-xl font-semibold text-orange-400">Our Services</div>
              <div className="text-4xl font-bold">We Provide Service For You</div>
            </div>

            <div className="flex gap-x-5 my-10">
              <Card img={ELD} data="Easy Learn Driving" details="Our Course module is very easy to understand." />
              <Card img={IT} data="Instructor Training" details="Brainstrom words related to your skills and confidence." />
              <Card img={CYSAT} data="Easy Learn Driving" details="Our Course module is very easy to understand." />
              <Card img={RTP} data="Easy Learn Driving" details="Our Course module is very easy to understand." />
            </div>
          </article>
        </section>

        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

        <section className="container mx-auto">
          <article>
            <div className="flex justify-center items-center">
              <div className="sm:w-[45vw] flex justify-center items-center gap-x-3">
                <div className="flex flex-col gap-y-2">
                  <Image
                    src={bikeFirst}
                    className="sm:w-[200px] rounded-3xl object-cover"
                    alt="Picture of the author"
                  />
                  <Image
                    src={bikeSecond}
                    className="sm:w-[200px] h-auto rounded-3xl object-cover"
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <Image
                    src={bikeFour}
                    className="sm:w-[200px] rounded-3xl object-cover"
                    alt="Picture of the author"
                  />
                  <Image
                    src={bikeThird}
                    className="sm:w-[200px] h-auto rounded-3xl object-cover"
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-y-5 w-[45vw]">
                  <div className="text-xl font-semibold text-orange-400">About Us</div>
                  <div className="text-4xl font-bold">Learn To Drive, Drive With Safety And Control</div>
                  <div className="text-lg">To learn to drive safely and with control, first familiarize yourself with the vehicle and obey traffic laws. Keep a safe following distance, use turn signals, and regularly check mirrors and blind spots.</div>
                  <div className="flex justify-evenly font-semibold my-3">
                    <div className="flex flex-col items-start gap-y-1">
                      <AboutTick src={rightTick} data="Basic of driving skills" />
                      <AboutTick src={rightTick} data="Road test preparation" />
                      <AboutTick src={rightTick} data="Master the Basics" />
                    </div>
                    <div className="flex flex-col items-start gap-y-1">
                      <AboutTick src={rightTick} data="Practice Defensive Driving" />
                      <AboutTick src={rightTick} data="Control Your Speed Around Turns" />
                      <AboutTick src={rightTick} data="Stay Calm During Long Drives" />
                    </div>
                  </div>
                  <div>
                    <Link href="/pages/about">
                      <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">ABOUT MORE
                        <Image
                          src={rightArrowWhite}
                          width={18}
                          height={20}
                          alt="Picture of the author"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

        <section>
          <article>
            <div className="bg-[#a99595] max-h-fit ">
              <div className="text-white w-[95vw] mx-auto flex justify-around items-center py-10">
                <div className="w-1/2">
                  <div className="flex flex-col gap-y-3">
                    <div className="text-orange-400 font-semibold text-2xl">FAQ</div>
                    <div className="text-[#ffedd5] text-5xl font-bold">Frequently Asked Question</div>
                  </div>
                  <div className="my-10 flex flex-col gap-y-4 ">
                    <div className="bg-orange-400 px-3 rounded-xl">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg">Can I book lessons online?</AccordionTrigger>
                          <AccordionContent className="text-lg">
                            Yes, our website allows you to easily book lessons online with a few clicks.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="bg-orange-400 px-3 rounded-xl">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg">How long is each bike driving lesson?</AccordionTrigger>
                          <AccordionContent className="text-lg">
                            Each lesson typically lasts between 60 to 90 minutes, depending on your chosen package.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="bg-orange-400 px-3 rounded-xl">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg">How many lessons will I need to become a confident rider?</AccordionTrigger>
                          <AccordionContent className="text-lg">
                            The number of lessons varies depending on your individual progress, but most learners require 10-15 lessons to gain confidence.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="bg-orange-400 px-3 rounded-xl">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-lg">What safety gear do I need for lessons?</AccordionTrigger>
                          <AccordionContent className="text-lg">
                            We provide helmets and basic protective gear. We recommend wearing gloves, jackets, and sturdy footwear for additional protection.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
                <div className="w-[40vw] text-[#a99595]">
                  <div>
                    <FAQ />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

      </main>
    </>
  );
}
