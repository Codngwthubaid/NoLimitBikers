import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import HeroImage from "@/public/hero-section.png"

const SubSectionheadings = (props) => {
    return (
        <>
            <main>
                <div className='py-10 h-[50vh] gap-y-5 flex flex-col justify-center items-center bg-cover bg-center' style={{
                    backgroundImage: `url(${HeroImage.src})`,
                    filter: 'grayscale(100%)',
                }}>
                    <div className='text-5xl font-bold text-white'>{props.Head}</div>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-white text-lg hover:font-semibold hover:underline">{props.mainPage}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-white font-medium text-lg">{props.currentPage}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SubSectionheadings
