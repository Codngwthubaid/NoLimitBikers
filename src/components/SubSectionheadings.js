import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

const SubSectionheadings = (props) => {
    return (
        <>
            <main>
                <div className='bg-[#c1e1c1] py-10 h-[50vh] gap-y-5 flex flex-col justify-center items-center text-green-400'>
                    <div className='text-5xl font-bold text-black'>{props.Head}</div>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-green-400 text-lg hover:text-green-400 hover:font-semibold hover:underline">{props.mainPage}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-green-400 font-medium text-lg">{props.currentPage}</BreadcrumbPage>
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
