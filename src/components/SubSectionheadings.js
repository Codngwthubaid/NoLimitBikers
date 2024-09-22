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
                <div className='bg-[#a99595] gap-y-5 flex flex-col justify-center items-center h-[50vh] text-white'>
                    <div className='text-5xl font-bold text-[#ffedd5]'>{props.Head}</div>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-white text-lg hover:text-white hover:font-semibold">{props.mainPage}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-orange-400 font-medium text-lg">{props.currentPage}</BreadcrumbPage>
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
