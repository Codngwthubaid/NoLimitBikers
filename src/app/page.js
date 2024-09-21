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
import FAQ from "../components/FAQ"
import Card from "@/components/Card";
import AccordionCom from "@/components/AccordionCom";
import Gallery from "@/components/Gallery";
import G1 from "../public/Gallery/G1.jpg"
import G2 from "../public/Gallery/G2.jpg"
import G3 from "../public/Gallery/G3.jpg"
import G4 from "../public/Gallery/G4.jpg"
import G5 from "../public/Gallery/G5.jpg"
import G6 from "../public/Gallery/G6.jpg"
import G7 from "../public/Gallery/G7.jpg"
import CardWCU from "@/components/CardWCU";
import CardOWP from "@/components/CardOWP";

export default function Home() {
  return (
    <>
      <main>
        <section className="container mx-auto pt-24 w-full">
          <article className="flex justify-center items-center flex-col gap-y-5 lg:flex-row">
            <div className="flex flex-col justify-center items-center lg:items-start gap-y-12 lg:w-[50vw] w-[95vw]">
              <div className=" flex flex-col gap-y-4">
                <div className="text-xl font-semibold">Grow up your driving skills</div>
                <div className="text-3xl sm:text-5xl font-bold">Learn to
                  <span className="rounded-xl bg-orange-400 text-white px-3 mx-2">Drive With</span>
                </div>
                <div className="text-3xl sm:text-5xl font-bold">Confidence</div>
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
            <div className="flex justify-center items-center">
              <Image
                src={mainDriving}
                className="lg:w-[50vw] w-11/12 rounded-3xl object-cover"
                alt="Picture of the author"
              />
            </div>
          </article>
        </section>

        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

        <section className="container mx-auto">
          <article>
            <div className="flex justify-center items-center flex-col gap-y-3">
              <div className="text-2xl font-semibold text-orange-400">Our Services</div>
              <div className="text-4xl font-bold">We Provide Service For You</div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 my-10">
              <div className="flex gap-x-5 justify-center items-center gap-y-5 flex-col sm:flex-row">
                <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                  <Card img={ELD} data="Easy Learn Driving" details="Our Course module is very easy to understand." />
                </div>
                <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                  <Card img={IT} data="Instructor Training" details="Brainstrom words related to your skills and confidence." />
                </div>
              </div>
              <div className="flex gap-x-5 justify-center items-center flex-col sm:flex-row gap-y-5">
                <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                  <Card img={CYSAT} data="Easy Learn Driving" details="Our Course module is very easy to understand." />
                </div>
                <div className="w-10/12 sm:w-[45vw] lg:w-[22vw]">
                  <Card img={RTP} data="Easy Learn Driving" details="Our Course module is very easy to understand." />
                </div>
              </div>
            </div>
          </article>
        </section>

        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

        <section className="container mx-auto">
          <article>
            <div className="flex justify-evenly items-center gap-x-5 flex-col sm:flex-row gap-y-10">
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
                <div className="flex flex-col gap-y-5 sm:w-[45vw]">
                  <div className="text-2xl font-semibold text-orange-400">About Us</div>
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
          <article className="flex lg:justify-around justify-center items-center bg-[#a99595] py-10 flex-col md:flex-row gap-y-10">
            <div className="lg:w-[50vw] w-11/12 flex flex-col gap-y-10">
              <div className="flex flex-col justify-center items-start gap-y-5">
                <div className="text-2xl text-orange-400 font-semibold">Why Choosing Us</div>
                <div className="text-5xl font-bold text-[#ffedd5]">Get Behind The Wheel And Take The Lead</div>
              </div>
              <div className="flex flex-col justify-center items-start gap-y-5">
                <div className="flex justify-around items-center gap-x-2">
                  <div>
                    <CardWCU src={rightTick} heading="Affordable Fee" details="All of our course fee are very affordable for everyone." />
                  </div>
                  <div>
                    <CardWCU src={rightTick} heading="Affordable Fee" details="All of our course fee are very affordable for everyone." />
                  </div>
                </div>
                <div className="flex justify-around items-center gap-x-2">
                  <div>
                    <CardWCU src={rightTick} heading="Affordable Fee" details="All of our course fee are very affordable for everyone." />
                  </div>
                  <div>
                    <CardWCU src={rightTick} heading="Affordable Fee" details="All of our course fee are very affordable for everyone." />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:w-[40vw] lg:flex justify-center">
              <Image
                src={G7}
                className="w-96 rounded-2xl"
                alt=""
              />
            </div>
          </article>
        </section>

        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

        <section>
          <article>
            <div className="container mx-auto flex flex-col justify-center items-start gap-y-10">
              <div>
                <div className="text-2xl font-semibold">Our Work Process</div>
                <div className="text-5xl font-bold">Start The Dride Learning Process</div>
              </div>
              <div>
                <CardOWP />
              </div>
            </div>
          </article>
        </section>

        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

        <section>
          <article>
            <div className="bg-[#a99595] max-h-fit ">
              <div className="text-white w-[95vw] mx-auto flex justify-around items-center py-10 flex-col md:flex-row gap-x-5">
                <div className="w-11/12 lg:w-1/2">
                  <div className="flex flex-col gap-y-3">
                    <div className="text-orange-400 font-semibold text-2xl">FAQ</div>
                    <div className="text-[#ffedd5] text-5xl font-bold">Frequently Asked Question</div>
                  </div>
                  <div>
                    <AccordionCom />
                  </div>
                </div>
                <div className="text-[#a99595]">
                  <div>
                    <FAQ />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

        <section>
          <article>
            <div className="flex flex-col justify-center items-center gap-y-5">
              <div className="text-2xl font-semibold text-orange-400">Our Gallery</div>
              <div className="text-4xl sm:text-5xl font-bold text-center">See Our Driving Practice Gallery</div>
            </div>
            <div className="flex flex-row md:flex-col gap-y-7 mt-10 justify-center items-center px-5">
              <div className="flex justify-center items-center gap-x-7 flex-col-reverse md:flex-row gap-y-5">
                <Gallery source={G1} desc="" />
                <Gallery source={G2} desc="" />
                <Gallery source={G3} desc="" />
              </div>
              <div className="flex justify-center items-center gap-x-7 flex-col-reverse md:flex-row gap-y-5">
                <Gallery source={G4} desc="" />
                <Gallery source={G5} desc="" />
                <Gallery source={G6} desc="" />
              </div>
            </div>
          </article>
        </section>

        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

        <section>
          <article>
            <div className="bg-[#a99595] min-h-fit p-5 flex flex-col justify-center items-center gap-y-10">
              <div className="text-orange-400 font-semibold text-2xl">(+163) 6972 9901</div>
              <div className="flex flex-col justify-center items-start sm:items-center">
                <div className="text-4xl lg:text-5xl text-[#ffedd5] font-bold">Book Your First Driving Lesson</div>
                <div className="text-4xl lg:-5xl text-[#ffedd5] font-bold">And Contact Us</div>
              </div>
              <div className="flex justify-center items-center gap-x-3">
                <div>
                  <Link href="pages/courses">
                    <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">BOOK NOW
                      <Image
                        src={rightArrowWhite}
                        width={18}
                        height={20}
                        alt="Picture of the author"
                      />
                    </button>
                  </Link>
                </div>
                <div>
                  <Link href="pages/courses">
                    <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">CONTACT US
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
          </article>
        </section>

        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

      </main>
    </>
  );
}
