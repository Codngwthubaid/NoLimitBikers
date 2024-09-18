"use client"
import Image from "next/image";
import rightArrowWhite from "../public/img/rightArrowWhite.png"
import mainDriving from "../public/img/mainDriving.jpg"
import Card from "@/components/Card";

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
                  <span className="bg-orange-400 text-white px-3 mx-2">Drive With</span>
                </div>
                <div className="text-5xl font-bold">Confidence</div>
              </div>
              <div className="">
                <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">EXPLORE COURSES
                  <Image
                    src={rightArrowWhite}
                    width={18}
                    height={20}
                    alt="Picture of the author"
                  />
                </button>
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

        <div className="h-1 w-11/12 bg-orange-400 mx-auto my-14"></div>

        <section className="container mx-auto">
          <article>
            <div className="flex flex-col gap-y-3">
              <div className="text-xl font-semibold text-orange-400">Our Services</div>
              <div className="text-4xl font-bold">We Provide Service For You</div>
            </div>

            <div className="flex">
              <Card data="Easy Learn Driving" details="Our Course module is very easy to understand." />
              <Card data="Instructor Training" details="Brainstrom words related to your skills and confidence." />
              <Card data="Easy Learn Driving" details="Our Course module is very easy to understand." />
              <Card data="Easy Learn Driving" details="Our Course module is very easy to understand." />
            </div>
          </article>
        </section>

        <div className="h-1 w-11/12 bg-orange-400 mx-auto my-14"></div>

        <section className="container mx-auto">
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, necessitatibus totam tempora officia facere ipsam voluptatem ipsa dolores consequuntur. Doloremque ut assumenda amet odit! Consectetur odio iure eligendi deserunt at.
          </article>
        </section>

      </main>
    </>
  );
}
