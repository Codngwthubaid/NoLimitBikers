import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"

const AccordionCom = () => {
    return (
        <>
            <div className="my-10 flex flex-col gap-y-4 ">
                <div className="bg-orange-400 px-3 rounded-xl">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">Can I book lessons online?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Yes, our website allows you to easily book lessons online with a few clicks.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="bg-orange-400 px-3 rounded-xl">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">How long is each bike driving lesson?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Each lesson typically lasts between 60 to 90 minutes, depending on your chosen package.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="bg-orange-400 px-3 rounded-xl">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">How many lessons will I need to become a confident rider?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                The number of lessons varies depending on your individual progress, but most learners require 10-15 lessons to gain confidence.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="bg-orange-400 px-3 rounded-xl">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">What safety gear do I need for lessons?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                We provide helmets and basic protective gear. We recommend wearing gloves, jackets, and sturdy footwear for additional protection.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default AccordionCom
