"use client"
import SubSectionheadings from '@/components/SubSectionheadings'
import React, { useState } from 'react'
import Image from 'next/image'
import iconCall from "@/public/iconsProcess/iconCall.png"
import iconEmail from "@/public/iconsProcess/iconEmail.png"
import iconLocation from "@/public/iconsProcess/iconLocation.png"
import axios from 'axios'
import { TriangleAlert } from "lucide-react"
import { Loader2 } from 'lucide-react'

const Page = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    number: '',
    course: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const SubmitName = (e) => {
    setName(e.target.value)
  }
  const SubmitEmail = (e) => {
    setEmail(e.target.value)
  }
  const SubmitMessage = (e) => {
    setMessage(e.target.value)
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      name: '',
      email: '',
      message: ''
    }

    if (!name.trim()) {
      newErrors.name = 'Please enter your name'
      isValid = false
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter your email'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email'
      isValid = false
    }

    if (!message.trim()) {
      newErrors.name = 'Please enter your name'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsLoading(true)
    setSubmitted(false)

    try {
      const response = await axios.post('/api/contact', { name, email, message })
      console.log(name, email, message);

      if (response.data.success) {
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setErrors(prev => ({ ...prev, submit: 'Failed to send message. Please try again.' }))
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors(prev => ({ ...prev, submit: 'An error occurred. Please try again later.' }))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <main>
        <section>
          <article>
            <div>
              <div className='pt-[75px]'>
                <SubSectionheadings Head="Contact" mainPage="Thuis" currentPage="Contact" />
              </div>

              <div className="h-[2px] w-11/12 bg-green-400 mx-auto my-14"></div>

              <div className='gap-y-10 md:gap-x-7 mx-auto flex justify-center items-center flex-col md:flex-row'>
                <div className="rounded-3xl py-10 gap-y-3 w-[80vw] md:w-[30vw] border border-green-400 flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1]">
                  {/* <div>
                    <Image
                      src={iconCall}
                      alt=""
                      className="" />
                  </div> */}
                  <div>ONZE KANTOORLOCATIE</div>
                  <div className='text-xl font-bold hover:text-green-400'>1254 FH Abu Dhabi</div>
                </div>
                <div className="rounded-3xl py-10 gap-y-3  w-[80vw] md:w-[30vw] border border-green-400 flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1]">
                  {/* <div>
                    <Image
                      src={iconEmail}
                      alt=""
                      className="" />
                  </div> */}
                  <div>HEEFT U EEN VRAAG?</div>
                  <div className='text-xl font-bold hover:text-green-400'>06143 82099</div>
                </div>
                <div className="rounded-3xl py-10 gap-y-3  w-[80vw] md:w-[30vw] border border-green-400 flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1]">
                  {/* <div>
                    <Image
                      src={iconLocation}
                      alt=""
                      className="" />
                  </div> */}
                  <div>E-mail ons</div>
                  <div className='text-xl font-bold hover:text-green-400'>Info@nolimitbikers.nl</div>
                </div>
              </div>

              <div className="h-[2px] w-11/12 bg-green-400 mx-auto my-14"></div>


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
                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%Netherlands+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                        style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                      ></iframe>
                      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                          <h2 className="title-font font-semibold hover:text-green-400 text-gray-900 tracking-widest text-xs">
                          ADRES
                          </h2>
                          <p className="mt-1">
                           Netherlands Home Address
                          </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                          <h2 className="title-font font-semibold hover:text-green-400 text-gray-900 tracking-widest text-xs">
                          E-MAIL
                          </h2>
                          <a href="mailto:example@email.com" className="text-green-400 leading-relaxed">
                            Info@nolimitbikers.nl
                          </a>
                          <h2 className="title-font font-semibold hover:text-green-400 text-gray-900 tracking-widest text-xs mt-4">
                            PHONE
                          </h2>
                          <p className="leading-relaxed">06143 82099</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#c1e1c1] lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-5 rounded-2xl">
                      <h2 className="text-3xl mb-1 font-semibold title-font text-gray-700 text-center">Ontvang een gratis offerte</h2>
                      <p className="leading-relaxed mb-5 text-gray-700 text-center">
                      De autobestuurder-instructeur moet ook beschikken over goede communicatieve vaardigheden, geduld, vertrouwen en onderwijsvaardigheden.
                      </p>
                      <div className="relative mb-4 text-gray-700">
                        <label htmlFor="name" className="text-base font-semibold leading-7  text-gray-700">
                          Name
                        </label>
                        <input
                          onChange={(e) => { setName(e.target.value) }}
                          type="text"
                          id="name"
                          name="name"
                          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                        />
                        {errors.name && <span className="text-red-500 font-semibold flex"><TriangleAlert className="mr-2" /> <span>{errors.name}</span></span>}
                      </div>
                      <div className="relative mb-4 text-gray-700">
                        <label htmlFor="email" className="leading-7 text-base font-semibold text-gray-700">
                          Email
                        </label>
                        <input
                          onChange={(e) => { setEmail(e.target.value) }}
                          type="email"
                          id="email"
                          name="email"
                          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                        />
                      </div>
                      {errors.email && <span className="text-red-500 font-semibold flex"><TriangleAlert className="mr-2" /> <span>{errors.email}</span></span>}
                      <div className="relative mb-4 text-gray-700">
                        <label htmlFor="message" className="leading-7 text-base font-semibold text-gray-700">
                          Message
                        </label>
                        <textarea
                          onChange={(e) => { setMessage(e.target.value) }}
                          id="message"
                          name="message"
                          className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                        ></textarea>
                        {errors.message && <span className="text-red-500 font-semibold flex"><TriangleAlert className="mr-2" /> <span>{errors.message}</span></span>}

                      </div>

                      <div> {submitted && <p className="mt-4 text-green-800 font-semibold">Thank you for your message. We&apos;ll get back to you soon!</p>}
                      </div>

                      <button type="button"
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="text-white flex justify-center items-end gap-x-2 bg-green-400 p-4 rounded-xl font-semibold text-lg hover:bg-green-500">
                        {isLoading ? (
                          <>
                            <div className='flex justify-center items-center'>
                              <span><Loader2 className="mr-2 h-4 w-4 animate-spin" /></span>
                              <span>Submitting...</span>
                            </div>
                          </>
                        ) : (
                          'Submit'
                        )}
                      </button>
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

export default Page

