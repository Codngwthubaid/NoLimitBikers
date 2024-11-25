"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SquareArrowOutUpRight, TriangleAlert } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Link from "next/link";
import axios from "axios"
import {Loader2} from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const PricingPopUpCard = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState("")
    const [selectedCourse, setSelectedCourse] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        number: '',
        course: ''
    })
    const [submitted, setSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const handleCourseChange = (e) => {
        setSelectedCourse(e);
        setErrors(prev => ({ ...prev, course: '' }))
    }

    const validateForm = () => {
        let isValid = true
        const newErrors = {
            name: '',
            email: '',
            number: '',
            course: ''
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

        if (!number.trim()) {
            newErrors.number = 'Please enter your number'
            isValid = false
        }

        if (!selectedCourse) {
            newErrors.course = 'Please select a course'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const SubmitName = (e) => {
        setName(e.target.value)
    }
    const SubmitEmail = (e) => {
        setEmail(e.target.value)
    }
    const SubmitNumber = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) return
        setIsLoading(true)
        setSubmitted(false)

        try {
            const response = await axios.post('/api/pricing', { name, email, number, courseId: selectedCourse })
            console.log(name, email, number, selectedCourse);

            if (response.data.success) {
                setSubmitted(true)
                setName('')
                setEmail('')
                setNumber('')
                setSelectedCourse('')
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
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:text-white hover:bg-orange-600 text-white" variant="outline">Beginnen met basis</Button>
            </DialogTrigger>
            <DialogContent className="bg-[#ffedd5] sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="font-bold text-4xl text-orange-400">Book Your Lesson</DialogTitle>
                    <DialogDescription className="text-black text-base">
                        Book your lesson today! Choose your preferred time for driving lessons and start your journey towards becoming a confident driver!
                    </DialogDescription>
                </DialogHeader>
                <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-1.5 items-start">
                        <Input onChange={(e) => { setName(e.target.value) }} placeholder="Name" id="name" className=" text-black col-span-3" />
                        {errors.name && <span className="text-red-500 font-semibold flex"><TriangleAlert className="mr-2" /> <span>{errors.name}</span></span>}

                    </div>
                    <div className="flex flex-col space-y-1.5 items-start">
                        <Input onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" id="email" className=" text-black col-span-3" />
                        {errors.email && <span className="text-red-500 font-semibold flex"><TriangleAlert className="mr-2" /> <span>{errors.email}</span></span>}
                    </div>
                    <div className="flex flex-col space-y-1.5 items-start">
                        <Input onChange={(e) => { setNumber(e.target.value) }} placeholder="Number" id="number" className=" text-black col-span-3" />
                        {errors.number && <span className="text-red-500 font-semibold flex"><TriangleAlert className="mr-2" /> <span>{errors.number}</span></span>}
                    </div>
                    <div className="flex flex-col space-y-1.5 items-start">
                        <Label htmlFor="framework" className="text-base text-orange-400">Select Course</Label>
                        <Select onValueChange={handleCourseChange}>
                            <SelectTrigger id="framework">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-[#ffedd5] " position="popper">
                                <SelectItem className="cursor-pointer" id={props.Op1} value={props.Op1}>{props.Op1} </SelectItem>
                                <SelectItem className="cursor-pointer" id={props.Op2} value={props.Op2}>{props.Op2}</SelectItem>
                                <SelectItem className="cursor-pointer" id={props.Op3} value={props.Op3}>{props.Op3} </SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.course && <span className="text-red-500 font-semibold flex"><TriangleAlert className="mr-2" /> <span>{errors.course}</span></span>}
                    </div>
                    <div>
                        <Link href="https://wa.me/0614382099" className="hover:text-blue-600 text-green-600 font-semibold">
                            <div className="flex">
                                <span><SquareArrowOutUpRight /></span>
                                <span>WhatsApp</span>
                            </div>
                            <div> {submitted && <p className="mt-4 text-green-800 font-semibold">Thank you for your message. We&apos;ll get back to you soon!</p>}
                            </div>
                        </Link>
                    </div>
                </form>
                <DialogFooter className="flex justify-between">
                    <DialogTrigger>
                        <Button variant="outline">Cancel</Button>
                    </DialogTrigger>
                    <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="w-full sm:w-auto"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            'Submit'
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default PricingPopUpCard
