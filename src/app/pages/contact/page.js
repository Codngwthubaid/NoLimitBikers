"use client"
import SubSectionheadings from '@/components/SubSectionheadings'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TriangleAlert } from "lucide-react"
import { Loader2 } from 'lucide-react'
import Loader from '@/components/Loader/Loader'
import { Check } from 'lucide-react'

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
        <section>
          <article>
            <div>
              <div className='pt-[75px]'>
                <SubSectionheadings Head="Contact" mainPage="Home" currentPage="Contact" />
              </div>
              <div className="h-[2px] w-11/12 bg-green-400 mx-auto my-14 container "></div>
              <div className='flex flex-col items-center gap-y-10 justify-evenly'>
                <div className='flex gap-10 justify-center items-center container mx-auto'>
                  <div className="rounded-3xl py-10 gap-y-3 w-[80vw] md:w-[30vw] border border-green-400 flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1] h-48">
                    <div className='text-2xl font-bold'>NoLimitBikers</div>
                    {/* <div className='hover:text-green-400'>Rotterdam</div> */}
                    <div className='hover:text-green-400'>KVK 50463829</div>
                    <div className='hover:text-green-400'> BTW Nr. NL134561028B01</div>
                  </div>
                  <div className="rounded-3xl py-10 gap-y-3  w-[80vw] md:w-[30vw] border border-green-400 flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1] h-48">
                    <div className='text-2xl font-bold'>Service & vragen</div>
                    <div className='hover:text-green-400'>Info@nolimitbikers.nl</div>
                    <div className='hover:text-green-400'>Appen? +316 14 38 20 99</div>
                  </div>
                  <div className="rounded-3xl py-10 gap-y-3 w-[80vw] md:w-[30vw] border border-green-400 flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1] h-48">
                    <div className='text-2xl font-bold'>Heeft u een vraag?</div>
                    <div className='hover:text-green-400'>06 14 38 20 99</div>
                  </div>
                </div>

                {/* <div className="bg-[#c1e1c1] lg:w-1/3 md:w-1/2 flex flex-col w-full md:py-8 mt-8 md:mt-0 p-5 rounded-2xl">
                  <h2 className="text-3xl mb-1 font-semibold title-font text-gray-700 text-center">Neem contact met ons op</h2>
                  <p className="leading-relaxed mb-5 text-gray-700 text-center">
                    Heb je vragen over onze motorrijlessen of wil je persoonlijk advies? Vul het formulier in, en we helpen je graag verder!
                  </p>
                  <div className="relative mb-4 text-gray-700">
                    <label htmlFor="name" className="text-base font-semibold leading-7  text-gray-700">
                      Naam
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
                      E-mail
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
                      Bericht
                    </label>
                    <textarea
                      placeholder='Laat ons weten waarmee we je kunnen helpen'
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
                      'Indienen'
                    )}
                  </button>
                </div> */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Request a trial lesson
                      </h1>
                      <p className="text-gray-600 mb-6">
                        That&apos;s arranged super fast. Request a trial lesson now and experience it yourself!
                      </p>
                      <p className="text-gray-600 mb-8">
                        Fill in the form below and we will contact you as soon as possible.
                      </p>
                      <div className="flex items-center mb-8">
                        <span className="text-gray-600 mr-2">Rating is a 9.3 / 10</span>
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <div className="bg-[#c1e1c1] flex flex-col w-full md:py-8 mt-8 md:mt-0 p-5 rounded-2xl">
                        <h2 className="text-3xl mb-1 font-semibold title-font text-gray-700 text-center">Neem contact met ons op</h2>
                        <p className="leading-relaxed mb-5 text-gray-700 text-center">
                          Heb je vragen over onze motorrijlessen of wil je persoonlijk advies? Vul het formulier in, en we helpen je graag verder!
                        </p>
                        <div className="relative mb-4 text-gray-700">
                          <label htmlFor="name" className="text-base font-semibold leading-7  text-gray-700">
                            Naam
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
                            E-mail
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
                            Bericht
                          </label>
                          <textarea
                            placeholder='Laat ons weten waarmee we je kunnen helpen'
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
                            'Indienen'
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-900 bg-gray-50 p-6 rounded-lg mb-8">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Our guarantees
                        </h2>
                        <ul className="space-y-3">
                          {[
                            'Extensive experience',
                            'High success rate',
                            'Lessons in new vehicles',
                            'Most affordable in Rotterdam & surroundings',
                            'Register today = drive tomorrow'
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="w-5 h-5 text-green-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">
                          Why a trial driving lesson at Speedway Driving School?
                        </h2>
                        <p className="mb-4 text-gray-900">
                          At Driving School Speedway we understand how important it is to get a good first impression of your driving school. That is why we offer a free trial lesson. During this lesson you will get to know our experienced instructors, the teaching vehicles, and our teaching methods. This will help you make a well-considered decision before you sign up for a full lesson package.
                        </p>
                        <p className="mb-4 text-gray-900">
                          Our trial lesson is specially designed to put you at ease and give you an idea of what to expect during your driving lessons. We ensure that you can take your first steps in driving with confidence.
                        </p>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Benefits of a trial driving lesson at Speedway Driving School:
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-900">
                          <li>Free, no-obligation introduction</li>
                          <li>Experienced and patient instructors</li>
                          <li>Insight into our teaching methods and vehicles</li>
                          <li>Direct feedback and a personal lesson plan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Page

