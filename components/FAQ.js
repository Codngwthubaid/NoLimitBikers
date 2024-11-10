import React from 'react'
import { Button } from "../components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { useForm } from "react-hook-form"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select"

const FAQ = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <Card className="w-[85vw] md:w-[40vw] bg-[#ffedd5]">
                <CardHeader>
                    <CardTitle className="text-3xl text-center text-orange-400 font-bold">Asking Question Now</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="name">
                                    <Input type='text' id='name' placeholder='Enter Name '{...register("name", { required: true })} />
                                    {errors.name && <span>This field is required</span>}
                                </label>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="email">
                                    <Input type='email' id='email' placeholder='Enter Email '{...register("email", { required: true })} />
                                    {errors.email && <span>This field is required</span>}
                                </label>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <label htmlFor="number">
                                    <Input type='number' id='number' placeholder='Enter Number  '{...register("number", { required: true })} />
                                    {errors.number && <span>This field is required</span>}
                                </label>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Select Course</Label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Next.js</SelectItem>
                                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                        <SelectItem value="astro">Astro</SelectItem>
                                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline">Cancel</Button>
                            <Button className="bg-orange-400 hover:bg-[#a99595]">Submit</Button>
                        </CardFooter>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default FAQ
