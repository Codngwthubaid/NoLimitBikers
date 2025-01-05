"use client"
import SubSectionheadings from '@/components/SubSectionheadings'
import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { TriangleAlert } from "lucide-react"
import { Loader2 } from 'lucide-react'
import Loader from '@/components/Loader/Loader'

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
              <div className="h-[2px] w-11/12 bg-green-400 mx-auto my-14"></div>
              <div className='flex flex-col sm:flex-row items-center justify-evenly'>
                <div className='flex gap-10 justify-center items-center flex-col'>
                  <div className="rounded-3xl py-10 gap-y-3 w-[80vw] md:w-[30vw] border border-green-400 flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1]">
                    <div>NoLimitBikers</div>
                    <div className='text-xl font-bold hover:text-green-400'>Rotterdam</div>
                  </div>
                  <div className="rounded-3xl py-10 gap-y-3  w-[80vw] md:w-[30vw] border border-green-400 flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1]">
                    <div>Heeft u een vraag?</div>
                    <div className='text-xl font-bold hover:text-green-400'>06 14 38 20 99</div>
                  </div>
                  <div className="rounded-3xl py-10 gap-y-3  w-[80vw] md:w-[30vw] border border-green-400 flex justify-center items-center flex-col text-gray-700 hover:bg-[#c1e1c1]">
                    <div>E-mail ons</div>
                    <div className='text-xl font-bold hover:text-green-400'>Info@nolimitbikers.nl</div>
                  </div>
                </div>

                <div className="bg-[#c1e1c1] lg:w-1/3 md:w-1/2 flex flex-col w-full md:py-8 mt-8 md:mt-0 p-5 rounded-2xl">
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
                      placeholder='Laat ons weten waarmee we je kunnen help'
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
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Page

