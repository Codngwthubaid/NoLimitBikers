"use client"
import SubSectionheadings from '@/components/SubSectionheadings'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import iconCall from "@/public/iconsProcess/iconCall.png"
import iconEmail from "@/public/iconsProcess/iconEmail.png"
import iconLocation from "@/public/iconsProcess/iconLocation.png"
import axios from 'axios'

const page = () => {
  const ref = useRef(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const SubmitName = (e) => {
    setName(e.target.value)
  }
  const SubmitEmail = (e) => {
    setEmail(e.target.value)
  }
  const SubmitMessage = (e) => {
    setMessage(e.target.value)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Sending');

  //   let data = {
  //     name,
  //     email,
  //     message
  //   };

  //   axios.post('/api/contact', {
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //     .then((res) => {
  //       console.log('Response received');
  //       if (res.ok) {
  //         console.log('Response succeeded!');
  //         setSubmitted(true);
  //         setName('');
  //         setEmail('');
  //         setMessage('');
  //       } else {
  //         console.error('Response failed:', res.status, res.statusText);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error occurred during fetch:', error);
  //     });
  // };


  const handleSubmit = async (e) => {
    e.preventDefault()
    alert('Sending');
    setError('')
    setSubmitted(false)

    try {
      const response = await axios.post('/api/contact', { name, email, message })
      console.log(name,email,message);
      
      if (response.data.success) {
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setError('An error occurred. Please try again later.')
    }
  }

  return (
    <>
      <main>
        <section>
          <article>
            <div>
              <div className='pt-[75px]'>
                <SubSectionheadings Head="Contact" mainPage="Home" currentPage="Contact" />
              </div>

              <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>

              <div className='gap-y-10 md:gap-x-7 mx-auto flex justify-center items-center flex-col md:flex-row'>
                <div className="rounded-3xl py-10 gap-y-3 w-[80vw] md:w-[30vw] border border-orange-400 flex justify-center items-center flex-col">
                  <div>
                    <Image
                      src={iconCall}
                      alt=""
                      className="" />
                  </div>
                  <div>OUR OFFICE LOCATION</div>
                  <div className='text-xl font-bold hover:text-orange-400'>1254 FH Abu Dhabi</div>
                </div>
                <div className="rounded-3xl py-10 gap-y-3  w-[80vw] md:w-[30vw] border border-orange-400 flex justify-center items-center flex-col">
                  <div>
                    <Image
                      src={iconEmail}
                      alt=""
                      className="" />
                  </div>
                  <div>HAVE A QUESTION?</div>
                  <div className='text-xl font-bold hover:text-orange-400'>06143 82099</div>
                </div>
                <div className="rounded-3xl py-10 gap-y-3  w-[80vw] md:w-[30vw] border border-orange-400 flex justify-center items-center flex-col">
                  <div>
                    <Image
                      src={iconLocation}
                      alt=""
                      className="" />
                  </div>
                  <div>Email Us On</div>
                  <div className='text-xl font-bold hover:text-orange-400'>Info@nolimitbikers.nl</div>
                </div>
              </div>

              <div className="h-[2px] w-11/12 bg-orange-400 mx-auto my-14"></div>


              <div className='mb-20'>
                <section className="text-gray-600 body-font relative">
                  <div className="container px-5 z-0 mx-auto flex flex-col md:flex-row">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                      <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                        style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                      ></iframe>
                      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                          <h2 className="title-font font-semibold hover:text-orange-400 text-gray-900 tracking-widest text-xs">
                            ADDRESS
                          </h2>
                          <p className="mt-1">
                            Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
                          </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                          <h2 className="title-font font-semibold hover:text-orange-400 text-gray-900 tracking-widest text-xs">
                            EMAIL
                          </h2>
                          <a href="mailto:example@email.com" className="text-yellow-500 leading-relaxed">
                            Info@nolimitbikers.nl
                          </a>
                          <h2 className="title-font font-semibold hover:text-orange-400 text-gray-900 tracking-widest text-xs mt-4">
                            PHONE
                          </h2>
                          <p className="leading-relaxed">06143 82099</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-orange-400 lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-5 rounded-2xl">
                      <h2 className="text-3xl mb-1 font-medium title-font text-[#ffedd5] text-center">Get A Free Quote</h2>
                      <p className="leading-relaxed mb-5 text-[#ffedd5] text-center">
                        Car driver instructor must also have good communication skills patience confidence and teaching skills.
                      </p>
                      <div className="relative mb-4 text-[#ffedd5]">
                        <label htmlFor="name" className="text-base font-semibold leading-7  text-[#ffedd5]">
                          Name
                        </label>
                        <input
                          ref={ref} onChange={(e) => { setName(e.target.value) }}
                          type="text"
                          id="name"
                          name="name"
                          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                          required="Please fill out this field. ..."
                        />
                      </div>
                      <div className="relative mb-4 text-[#ffedd5]">
                        <label htmlFor="email" className="leading-7 text-base font-semibold text-[#ffedd5]">
                          Email
                        </label>
                        <input
                          ref={ref} onChange={(e) => { setEmail(e.target.value) }}
                          type="email"
                          id="email"
                          name="email"
                          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                        />
                      </div>
                      <div className="relative mb-4 text-[#ffedd5]">
                        <label htmlFor="message" className="leading-7 text-base font-semibold text-[#ffedd5]">
                          Message
                        </label>
                        <textarea
                          ref={ref} onChange={(e) => { setMessage(e.target.value) }}
                          id="message"
                          name="message"
                          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                        ></textarea>
                      </div>
                      <button onClick={(e) => { handleSubmit(e) }} className="bg-[#a99595] border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg text-white font-semibold ">
                        Submit Now
                      </button>
                      {submitted && <p className="mt-4 text-green-800 font-semibold">Thank you for your message. We'll get back to you soon!</p>}
                      {error && <p className="mt-4 text-red-800 font-semibold">{error}</p>}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default page

