import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import rightArrowWhite from "@/public/img/rightArrowWhite.png"

const PricingCard = ({ plan, price, features, isPopular }) => {
  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <div className={`h-full p-6 rounded-lg border-2 ${isPopular ? 'border-orange-400' : 'border-[#a99595]'} flex flex-col overflow-hidden gap-y-1`}>
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{plan}</h2>
        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-[#a99595]">
          <span>{price}</span>
          {price !== 'Free' && <span className="text-lg ml-1 font-normal text-gray-500">/Per Course</span>}
        </h1>
        {features.map((feature, index) => (
          <p key={index} className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
            {feature}
          </p>
        ))}
        <div>
          <Link href="/pages/courses">
            <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">CHOOSE PACKAGES
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
  );
};

export default PricingCard
