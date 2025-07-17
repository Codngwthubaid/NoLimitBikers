"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TriangleAlert, Check, Loader2, SquareArrowOutUpRight } from "lucide-react";
import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { trialLessonBenefits } from "@/constants";
import { Input } from "@/components/ui/input";


export default function Page() {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        number: "",
        submit: "", // Added submit error
    });
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    }, []);

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            name: "",
            email: "",
            number: "",
            submit: "",
        };

        if (!name.trim()) {
            newErrors.name = "Please enter your name";
            isValid = false;
        }

        if (!email.trim()) {
            newErrors.email = "Please enter your email";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email";
            isValid = false;
        }

        if (!number.trim()) {
            newErrors.number = "Please enter your phone number";
            isValid = false;
        } else if (!/^\+?\d{10,15}$/.test(number.replace(/\s/g, ""))) {
            newErrors.number = "Please enter a valid phone number";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        setSubmitted(false);
        setErrors((prev) => ({ ...prev, submit: "" }));

        try {
            const response = await axios.post("/api/triallesson", {
                name,
                email,
                number,
            });

            if (response.data.success) {
                setSubmitted(true);
                setName("");
                setEmail("");
                setNumber("");
            } else {
                setErrors((prev) => ({
                    ...prev,
                    submit: "Failed to send message. Please try again.",
                }));
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrors((prev) => ({
                ...prev,
                submit: "An error occurred. Please try again later.",
            }));
        } finally {
            setIsLoading(false); // Always stop loading spinner
        }
    };

    return (
        <>
            {loader && <Loader />}
            {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Vraag een proefles aan
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Dat is supersnel geregeld. Vraag nu een proefles aan en ervaar het zelf!
                    </p>
                    <p className="text-gray-600 mb-8">
                        Vul het onderstaande formulier in en wij nemen zo snel mogelijk contact met je op.
                    </p>
                    <div className="flex items-center mb-8">
                        <span className="text-gray-600 mr-2">Beoordeling: 9,3 / 10</span>
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
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col space-y-1.5 items-start">
                                <Input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    placeholder="Naam"
                                    id="name"
                                    className="text-black col-span-3"
                                />
                                {errors.name && (
                                    <span className="text-red-500 font-semibold flex">
                                        <TriangleAlert className="mr-2" /> <span>{errors.name}</span>
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col space-y-1.5 items-start">
                                <Input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    placeholder="E-mail"
                                    id="email"
                                    className="text-black col-span-3"
                                />
                                {errors.email && (
                                    <span className="text-red-500 font-semibold flex">
                                        <TriangleAlert className="mr-2" /> <span>{errors.email}</span>
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col space-y-1.5 items-start">
                                <Input
                                    type="tel"
                                    onChange={(e) => setNumber(e.target.value)}
                                    value={number}
                                    placeholder="Telefoonnummer"
                                    id="number"
                                    className="text-black col-span-3"
                                />
                                {errors.number && (
                                    <span className="text-red-500 font-semibold flex">
                                        <TriangleAlert className="mr-2" /> <span>{errors.number}</span>
                                    </span>
                                )}
                            </div>
                            {errors.submit && (
                                <span className="text-red-500 font-semibold flex">
                                    <TriangleAlert className="mr-2" /> <span>{errors.submit}</span>
                                </span>
                            )}
                            {submitted && (
                                <p className="mt-4 text-green-800 font-semibold">
                                    Thank you for your message. We&apos;ll get back to you soon!
                                </p>
                            )}
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full sm:w-auto"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        versturen...
                                    </>
                                ) : (
                                    "Plan mijn proefles"
                                )}
                            </Button>
                        </form>
                        <div className="mt-4">
                            <Link
                                href="https://wa.me/+310614382099"
                                className="hover:text-blue-600 text-green-600 font-semibold flex items-center"
                            >
                                <SquareArrowOutUpRight className="mr-2" />
                                WhatsApp
                            </Link>
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
                                Onze garanties
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Uitgebreide ervaring",
                                    "Hoog slagingspercentage",
                                    "Lessen op nieuwe lesmotoren",
                                    "Meest betaalbaar in Rotterdam en omgeving",
                                    "Vandaag inschrijven = morgen rijden",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-10 prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">
                        Waarom een proefles bij NoLimitBikers?
                    </h2>
                    <p className="mb-4 text-gray-900">
                        Bij NoLimitBikers begrijpen we hoe belangrijk het is om een goede eerste indruk te krijgen van je motorrijschool.
                    </p>
                    <p className="mb-4 text-gray-900">
                        Onze proefles is speciaal ontworpen om jou op je gemak te stellen en een duidelijk beeld te geven van wat je kunt verwachten tijdens de motorrijlessen.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        Voordelen van een proefles bij NoLimitBikers:
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-900">
                        {trialLessonBenefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                    <div className="text-base my-5 text-black">
                        Ontdek zelf waarom NoLimitBikers dé keuze is voor jouw motorrijopleiding!
                    </div>
                </div>
            </main> */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Proefles Motorrijles in Rotterdam aanvragen
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Ervaar motorrijden bij dé motorrijschool van Rotterdam. Boek vandaag nog je vrijblijvende proefles!
                    </p>
                    <p className="text-gray-600 mb-8">
                        Vul het onderstaande formulier in en wij nemen snel contact met je op om jouw motorrijles in te plannen.
                    </p>
                    <div className="flex items-center mb-8">
                        <span className="text-gray-600 mr-2">Beoordeling: 9,3 / 10</span>
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
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col space-y-1.5 items-start">
                                <Input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    placeholder="Naam"
                                    id="name"
                                    className="text-black col-span-3"
                                />
                                {errors.name && (
                                    <span className="text-red-500 font-semibold flex">
                                        <TriangleAlert className="mr-2" /> <span>{errors.name}</span>
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col space-y-1.5 items-start">
                                <Input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    placeholder="E-mail"
                                    id="email"
                                    className="text-black col-span-3"
                                />
                                {errors.email && (
                                    <span className="text-red-500 font-semibold flex">
                                        <TriangleAlert className="mr-2" /> <span>{errors.email}</span>
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col space-y-1.5 items-start">
                                <Input
                                    type="tel"
                                    onChange={(e) => setNumber(e.target.value)}
                                    value={number}
                                    placeholder="Telefoonnummer"
                                    id="number"
                                    className="text-black col-span-3"
                                />
                                {errors.number && (
                                    <span className="text-red-500 font-semibold flex">
                                        <TriangleAlert className="mr-2" /> <span>{errors.number}</span>
                                    </span>
                                )}
                            </div>
                            {errors.submit && (
                                <span className="text-red-500 font-semibold flex">
                                    <TriangleAlert className="mr-2" /> <span>{errors.submit}</span>
                                </span>
                            )}
                            {submitted && (
                                <p className="mt-4 text-green-800 font-semibold">
                                    Thank you for your message. We&apos;ll get back to you soon!
                                </p>
                            )}
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full sm:w-auto"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Versturen...
                                    </>
                                ) : (
                                    "Plan mijn proefles"
                                )}
                            </Button>
                        </form>
                        <div className="mt-4">
                            <Link
                                href="https://wa.me/+310614382099"
                                className="hover:text-blue-600 text-green-600 font-semibold flex items-center"
                            >
                                <SquareArrowOutUpRight className="mr-2" />
                                WhatsApp
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="text-gray-900 bg-gray-50 p-6 rounded-lg mb-8">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Onze garanties
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Ervaren motorinstructeurs met persoonlijke aanpak",
                                    "Hoog slagingspercentage in Rotterdam",
                                    "Moderne lesmotoren voor maximaal rijcomfort",
                                    "Betaalbare motorrijlespakketten",
                                    "Flexibel starten – rij wanneer het jou uitkomt",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-10 prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">
                        Waarom een proefles bij NoLimitBikers in Rotterdam?
                    </h2>
                    <p className="mb-4 text-gray-900">
                        Onze proefles motorrijles is dé manier om kennis te maken met onze motorrijschool in Rotterdam. Je ervaart meteen hoe wij lesgeven en hoe comfortabel onze motoren zijn.
                    </p>
                    <p className="mb-4 text-gray-900">
                        Tijdens de proefles word je begeleid door een ervaren instructeur die je inzicht geeft in jouw rijvaardigheid en het traject richting je motorrijbewijs.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        Wat kun je verwachten van de proefles:
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-900">
                        {[
                            "Kennismaking met je motorinstructeur",
                            "Rijden op een moderne en veilige lesmotor",
                            "Advies op maat over jouw rijopleiding",
                            "Geen verplichtingen – gewoon ervaren",
                            "Direct starten met jouw motorrijbewijstraject",
                        ].map((benefit, i) => (
                            <li key={i}>{benefit}</li>
                        ))}
                    </ul>
                    <div className="text-base my-5 text-black">
                        Wacht niet langer! Start vandaag nog met je motorrijopleiding in Rotterdam via een vrijblijvende proefles bij NoLimitBikers.
                    </div>
                </div>
            </main>

        </>
    );
}
