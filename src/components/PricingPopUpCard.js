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
import { SquareArrowOutUpRight, TriangleAlert } from 'lucide-react';
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link";

const PricingPopUpCard = (props) => {
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
                                <SelectItem className="cursor-pointer" id={props.Op1} value="AVB Pakket Silver">{props.Op1} </SelectItem>
                                <SelectItem className="cursor-pointer" id={props.Op2} value="AVB Pakket Gold Mega Deal">{props.Op2}</SelectItem>
                                <SelectItem className="cursor-pointer" id={props.Op3} value="AVB Pakket Platinum">{props.Op3} </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Link href="#" className="hover:text-blue-600 text-green-600 font-semibold flex items-center">
                            <span><SquareArrowOutUpRight /></span>
                            <span>WhatsApp</span></Link>
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
    )
}

export default PricingPopUpCard
