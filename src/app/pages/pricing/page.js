"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SubSectionheadings from "@/components/SubSectionheadings"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { TriangleAlert } from 'lucide-react';

const page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [formError, setFormError] = useState("");

    const onSubmit = (data) => {
        if (Object.keys(errors).length === 0) {
            console.log(data);
        } else {
            console.log("Please fill all required fields");
        }
    }

    return (
        <div>
            <section className="body-font overflow-hidden pt-[75px]">
                <SubSectionheadings Head="Pricing" mainPage="Home" currentPage="Pricing" />
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="text-orange-400 text-2xl font-medium title-font mb-2">Pricing Plan</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-5xl font-bold">Our Most Valuable Pricing Packages</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-r from-orange-500 py-10 px-4">
                    <div className="my-12">
                        <h2 className="text-white text-2xl lg:text-4xl font-bold mb-6 text-center">
                            MOTOREXAMEN VOERTUIGBEHEERSING <span className="text-[#050B30]">AVB</span>
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <Card className="flex flex-col items-center bg-white">
                                <CardHeader>
                                    <CardTitle className="text-gray-800 text-lg">AVB Pakket Silver</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-4xl font-bold text-gray-800 mt-4">€749,00</p>
                                    <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                                        <li>12 uur rijles</li>
                                        <li>Vaste instructeur</li>
                                        <li>Nieuwe les motor</li>
                                        <li>Leskaart &amp; Advies</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="bg-orange-500 hover:text-white hover:bg-orange-600 text-white" variant="outline">Beginnen met basis</Button>
                                        </DialogTrigger>
                                        <DialogContent className="bg-[#ffedd5] sm:max-w-[425px]" onSubmit={handleSubmit(onSubmit)}>
                                            <DialogHeader>
                                                <DialogTitle className="font-bold text-4xl text-orange-400">Book Your Lesson</DialogTitle>
                                                <DialogDescription className="text-black text-base">
                                                    Book your lesson today! Choose your preferred time for driving lessons and start your journey towards becoming a confident driver!
                                                </DialogDescription>
                                            </DialogHeader>
                                            <form className="grid gap-4 py-4">
                                                <div className="flex flex-col space-y-1.5 items-start">
                                                    <Input placeholder="Name" id="name" className="col-span-3" {...register("name", { required: true })} />
                                                    {errors.name && <span className="text-red-500 font-semibold flex"><TriangleAlert /> <span>Please enter your name</span></span>}
                                                </div>
                                                <div className="flex flex-col space-y-1.5 items-start">
                                                    <Input placeholder="Email" id="email" className="col-span-3" {...register("email", { required: true })} />
                                                    {errors.email && <span className="text-red-500 font-semibold flex"><TriangleAlert /> <span>Please enter your name</span></span>}
                                                </div>
                                                <div className="flex flex-col space-y-1.5 items-start">
                                                    <Input placeholder="Number" id="number" className="col-span-3" {...register("number", { required: true })} />
                                                    {errors.number && <span className="text-red-500 font-semibold flex"><TriangleAlert /> <span>Please enter your number</span></span>}
                                                </div>
                                                <div className="flex flex-col space-y-1.5 items-start">
                                                    <Label htmlFor="framework" className="text-base text-orange-400">Select Course</Label>
                                                    <Select>
                                                        <SelectTrigger id="framework">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent className="bg-[#ffedd5]" position="popper">
                                                            <SelectItem className="cursor-pointer" value="AVB Pakket Silver">AVB Pakket Silver</SelectItem>
                                                            <SelectItem className="cursor-pointer" value="AVB Pakket Gold Mega Deal">AVB Pakket Gold Mega Deal</SelectItem>
                                                            <SelectItem className="cursor-pointer" value="AVB Pakket Platinum">AVB Pakket Platinum</SelectItem>
                                                            <SelectItem className="cursor-pointer" value="AVD Pakket Silver">AVD Pakket Silver</SelectItem>
                                                            <SelectItem className="cursor-pointer" value="AVD Pakket Gold Mega Deal">AVD Pakket Gold Mega Deal</SelectItem>
                                                            <SelectItem className="cursor-pointer" value="AVD Pakket Platinum">AVD Pakket Platinum</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </form>
                                            <DialogFooter className="flex justify-between">
                                                <DialogTrigger>
                                                    <Button variant="outline">Cancel</Button>
                                                </DialogTrigger>
                                                <Button type="button" className="bg-orange-400 hover:bg-[#a99595]" onClick={() => {
                                                    handleSubmit((data) => {
                                                        if (Object.keys(errors).length === 0) {
                                                            console.log(data);
                                                        } else {
                                                            setFormError("Please fill all required fields");
                                                        }
                                                    })();
                                                }}>Submit</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </CardFooter>
                            </Card>

                            <Card className="relative flex flex-col items-center  bg-[#050B30] text-white">
                                <div className="absolute -top-4 bg-green-500 text-white text-xs px-4 py-1 rounded-full font-semibold">
                                    Recommended
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg mt-4">AVB Pakket Gold Mega Deal</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-4xl font-bold mt-4">€999,00</p>
                                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                                        <li>16 uur rijles</li>
                                        <li>Vaste instructeur</li>
                                        <li>Nieuwe les motor</li>
                                        <li>Leskaart &amp; Advies</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                                        <Link href="/pages/contact">Selecteer Goud</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card className="flex flex-col items-center  bg-orange-100">
                                <CardHeader>
                                    <CardTitle className="text-gray-800 text-lg">AVB Pakket Platinum</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-4xl font-bold text-gray-800 mt-4">€1299,00</p>
                                    <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                                        <li>20 uur rijles</li>
                                        <li>Vaste instructeur</li>
                                        <li>Nieuwe les motor</li>
                                        <li>Leskaart &amp; Advies</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                                        <Link href="/pages/contact">Kies Platina</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <div className="my-12">
                        <h2 className="text-white text-2xl lg:text-4xl font-bold mb-6 text-center">
                            MOTOREXAMEN VERKEERSDEELNAME <span className="text-[#050B30]">AVD</span>
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <Card className="flex flex-col items-center  bg-white">
                                <CardHeader>
                                    <CardTitle className="text-gray-800 text-lg">AVD Pakket Silver</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-4xl font-bold text-gray-800 mt-4">€799,00</p>
                                    <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                                        <li>12 uur rijles</li>
                                        <li>Vaste instructeur</li>
                                        <li>Nieuwe les motor</li>
                                        <li>Leskaart &amp; Advies</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                                        <Link href="/pages/contact">Beginnen met basis</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card className="relative flex flex-col items-center  bg-[#050B30] text-white">
                                <div className="absolute -top-4 bg-green-500 text-white text-xs px-4 py-1 rounded-full font-semibold">
                                    Recommended
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg mt-4">AVD Pakket Gold Mega Deal</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-4xl font-bold mt-4">€1199,00</p>
                                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                                        <li>18 uur rijles</li>
                                        <li>Vaste instructeur</li>
                                        <li>Nieuwe les motor</li>
                                        <li>Leskaart &amp; Advies</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                                        <Link href="/pages/contact">Selecteer Goud</Link>
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card className="flex flex-col items-center  bg-orange-100">
                                <CardHeader>
                                    <CardTitle className="text-gray-800 text-lg">AVD Pakket Platinum</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-4xl font-bold text-gray-800 mt-4">€1299,00</p>
                                    <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                                        <li>20 uur rijles</li>
                                        <li>Vaste instructeur</li>
                                        <li>Nieuwe les motor</li>
                                        <li>Leskaart &amp; Advies</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                                        <Link href="/pages/contact">Kies Platina</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
