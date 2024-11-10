import Link from "next/link"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import SubSectionheadings from "@/components/SubSectionheadings"
const page = () => {
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
                                    <CardTitle className="text-gray-800 text-lg">AVB Pakket Silver</CardTitle>
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
                                    <CardTitle className="text-lg mt-4">AVB Pakket Gold Mega Deal</CardTitle>
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
                </div>
            </section>
        </div>
    )
}

export default page
