import SubSectionheadings from "@/components/SubSectionheadings";
import SectionThird from "@/components/SectionThird";
import nlb1 from "@/public/Gallery/nlb1.webp";
import rightArrowWhite from "@/public/img/rightArrowWhite.png";
import Image from "next/image";
import Link from "next/link";
import AboutLoaderWrapper from "@/components/AboutLoaderWrapper";
import React from "react";

export const metadata = {
  title: "Over ons",
  description: "Ontdek waarom NoLimitBikers de juiste keuze is voor motorrijlessen. Veiligheid, persoonlijke begeleiding en expertise.",
};

export default function Page() {
  return (
    <AboutLoaderWrapper>
      <article className="pt-[100px]">
        <SubSectionheadings Head="Over ons" mainPage="Home" currentPage="Over ons" />
        <div className="h-[2px] w-11/12 bg-[#c1e1c1] mx-auto my-14"></div>
        <div className="flex justify-center items-center lg:gap-x-5 lg:flex-row flex-col-reverse gap-y-10">
          <div className="px-6 lg:w-[50vw] flex justify-center items-start flex-col gap-y-5">
            <div className="text-green-400 font-semibold text-xl">Meer over ons</div>
            <div className="text-4xl lg:text-5xl font-bold text-gray-700">Waarom kiezen voor NoLimitBikers?</div>
            <div className="text-lg text-black">
              Bij NoLimitBikers geloven we in motorrijden met vertrouwen, controle en plezier. Wij bieden professionele motor rijlessen in Rotterdam aan die passen bij elk niveau – of je nu op zoek bent naar de goedkoopste motor rijlessen in Rotterdam, of juist de beste begeleiding.
              <div>Met onze ervaren instructeurs, flexibele pakketten en persoonlijke aanpak kies je voor de beste, goedkoopste en dichtstbijzijnde motor rijlessen in Rotterdam.
                Benieuwd naar onze aanpak? Ontdek onze cursussen voor motor rijlessen in Rotterdam en ervaar zelf het verschil bij NoLimitBikers!</div>
              {/* <div>Benieuwd naar onze aanpak? Ontdek onze pakketten en ervaar zelf het verschil!</div> */}
            </div>
            <div>
              <Link href="/pages/courses">
                <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-green-400 p-4 rounded-xl">
                  ONTDEK ONZE PAKKETTEN
                  <Image src={rightArrowWhite} width={18} height={20} alt="right arrow" />
                </button>
              </Link>
            </div>
          </div>
          <div className="px-10 lg:w-[45vw]">
            <Image src={nlb1} className="rounded-full" alt="biker image" />
          </div>
        </div>

        <div className="h-[2px] w-11/12 bg-green-400 mx-auto my-14"></div>
        <SectionThird />
        <div className="h-[2px] w-11/12 bg-green-400 mx-auto my-14"></div>
      </article>

    </AboutLoaderWrapper>
  );
}
