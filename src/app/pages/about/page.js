import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const page = () => {
  return (
    <>
      <main>
        <section>
          <article className='pt-[75px]'>
            <div className='bg-[#a99595] gap-y-5 flex flex-col justify-center items-center border-2 border-green-800 h-[50vh] text-white'>
              <div className='text-5xl font-bold text-[#ffedd5]'>About Us</div>
              <div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default page