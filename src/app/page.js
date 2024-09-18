"use client"
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main>
          <Navbar />
          <section className=" h-[85vh] bg-cover bg-center" >
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay for darkening the background */}

            <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-6xl mx-auto px-6 text-white">
              {/* Subheading */}
              <p className="text-lg mb-4">Start With A Best Course</p>

              {/* Main Heading */}
              <h1 className="text-5xl font-bold mb-6">
                Learn Car <span className="text-blue-500">Driving</span> With Us
              </h1>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Explore Courses →
                </button>

                <button className="flex items-center space-x-2 px-6 py-3 bg-transparent border border-white rounded-lg hover:bg-white hover:text-black transition">
                  <span>Watch Our Story</span>
                </button>
              </div>
            </div>
          </section>
      </main>
    </>
  );
}
