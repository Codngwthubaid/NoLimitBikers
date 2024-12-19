import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TriangleAlert, Loader2 } from "lucide-react"
import axios from 'axios'

const FAQ = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        number: '',
        course: ''
    })


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
            <Card className="w-[85vw] md:w-[40vw] bg-white">
                <CardHeader>
                    <CardTitle className="text-3xl text-center text-green-400 font-bold">Nu vraag stellen</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className='flex flex-col gap-y-4'>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="name">
                                    <Input type='text' id='name' placeholder='Voer Naam in' onChange={(e) => { setName(e.target.value) }} />
                                </label>
                                {errors.name && <span className="text-red-500 font-semibold flex"><TriangleAlert className="mr-2" /> <span>{errors.name}</span></span>}
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="email">
                                    <Input type='email' id='email' placeholder='Voer e-mailadres in' onChange={(e) => { setEmail(e.target.value) }} />
                                </label>
                                {errors.email && <span className="text-red-500 font-semibold flex"><TriangleAlert className="mr-2" /> <span>{errors.email}</span></span>}
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Textarea
                                    onChange={(e) => { setMessage(e.target.value) }}
                                    id="message"
                                    name="message"
                                    placeholder="Jouw bericht ..."
                                />
                                {errors.message && <span className="text-red-500 font-semibold flex"><TriangleAlert className="mr-2" /> <span>{errors.message}</span></span>}
                            </div>
                            <div> {submitted && <p className="mt-4 text-green-800 font-semibold">Bedankt voor de vraag. We zullen uw vraag zo snel mogelijk oplossen!</p>}
                            </div>
                        </div>
                        <div>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline">Annuleren</Button>
                                <Button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="w-full sm:w-auto"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Indienen...
                                        </>
                                    ) : (
                                        'Indienen'
                                    )}
                                </Button>
                            </CardFooter>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default FAQ
