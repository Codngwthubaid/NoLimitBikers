"use client"
import SectionFirst from "@/components/SectionFirst";
import SectionSecond from "@/components/SectionSecond";
import SectionThird from "@/components/SectionThird";
import SectionFourth from "@/components/SectionFourth";
import SectionFifth from "@/components/SectionFifth";
import SectionSixth from "@/components/SectionSixth";
import SectionSeventh from "@/components/SectionSeventh";
import SectionEight from "@/components/SectionEight";
export default function Home() {
  return (
    <>
      <main>
        <SectionFirst />
        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>
        <SectionSecond/>
        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>
        <SectionThird/>
        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>
        <SectionFourth/>
        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>
        <SectionFifth/>
        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>
        <SectionSixth/>
        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>
        <SectionSeventh/>
        <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>
        <SectionEight/>
      </main>
    </>
  );
}
