"use client"
import SectionFirst from "../components/SectionFirst";
import SectionSecond from "../components/SectionSecond";
import SectionThird from "../components/SectionThird";
import SectionFourth from "../components/SectionFourth";
import SectionFifth from "../components/SectionFifth";
import SectionSixth from "../components/SectionSixth";
import SectionSeventh from "../components/SectionSeventh";
import SectionEight from "../components/SectionEight";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NoLimitBikers - Biking Learning Lessons in the Netherlands</title>
        <meta name="description" content="Book your biking lessons with our expert instructors. Learn to ride safely and confidently in the Netherlands." />
        <meta name="keywords" content="biking lessons, NoLimitBikers, AVB, AVD, bike training, Netherlands" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="NoLimitBikers - Biking Learning Lessons in the Netherlands" />
        <meta property="og:description" content="Book your biking lessons with our expert instructors. Learn to ride safely and confidently in the Netherlands." />
        <meta property="og:image" content="https://www.yourwebsite.com/images/home-banner.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NoLimitBikers - Biking Learning Lessons in the Netherlands" />
        <meta name="twitter:description" content="Book your biking lessons with our expert instructors. Learn to ride safely and confidently in the Netherlands." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/images/home-banner.jpg" />
        <link rel="canonical" href="https://www.yourwebsite.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GA_TRACKING_ID');
        `}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NoLimitBikers",
            "url": "https://www.yourwebsite.com",
            "logo": "https://www.yourwebsite.com/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/yourprofile",
              "https://twitter.com/yourprofile",
              "https://www.instagram.com/yourprofile"
            ]
          })}
        </script>
      </Head>
      <main>
        <SectionFirst />
        <div className="h-[2px] w-11/12 bg-[#9FD09F] mx-auto my-14"></div>
        <SectionSecond />
        <div className="h-[2px] w-11/12 bg-[#9FD09F] mx-auto my-14"></div>
        <SectionThird />
        <div className="h-[2px] w-11/12 bg-[#9FD09F] mx-auto my-14"></div>
        <SectionFourth />
        <div className="h-[2px] w-11/12 bg-[#9FD09F] mx-auto my-14"></div>
        <SectionFifth />
        <div className="h-[2px] w-11/12 bg-[#9FD09F] mx-auto my-14"></div>
        <SectionSixth />
        <div className="h-[2px] w-11/12 bg-[#9FD09F] mx-auto my-14"></div>
        <SectionSeventh />
        <div className="h-[2px] w-11/12 bg-[#9FD09F] mx-auto my-14"></div>
        <SectionEight />
      </main>
    </>
  );
}
