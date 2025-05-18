"use client"
import SectionFirst from "../components/SectionFirst";
import SectionSecond from "../components/SectionSecond";
import SectionThird from "../components/SectionThird";
import SectionFifth from "../components/SectionFifth";
import SectionSixth from "../components/SectionSixth";
import SectionEight from "../components/SectionEight";
import { useEffect, useState } from "react";
import Loader from '@/components/Loader/Loader'
import SectionFourth from "@/components/SectionFourth";

export default function Home() {

  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }, [])


  return (
    <>
      {loader && <Loader />}
      <main>
        <SectionFirst />
        <div className="h-[2px] w-11/12 bg-[#c1e1c1] mx-auto my-14"></div>
        <SectionThird />
        <div className="h-[2px] w-11/12 bg-[#c1e1c1] mx-auto my-14"></div>
        <SectionFourth />
        <div className="h-[2px] w-11/12 bg-[#c1e1c1] mx-auto my-14"></div>
        <SectionSecond />
        <div className="h-[2px] w-11/12 bg-[#c1e1c1] mx-auto my-14"></div>
        <SectionFifth />
        <div className="h-[2px] w-11/12 bg-[#c1e1c1] mx-auto my-14"></div>
        <SectionSixth />
        <div className="h-[2px] w-11/12 bg-[#c1e1c1] mx-auto my-14"></div>
        <SectionEight />
      </main>
    </>
  );
}
