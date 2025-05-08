import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"
import { faqItems } from '@/constants'

export default function AccordionCom() {
    return (
        <div className="my-10 flex flex-col gap-y-4">
            {faqItems.map((item, index) => (
                <div key={index} className="bg-white text-black px-3 rounded-xl">
                    <Accordion type="single" collapsible>
                        <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger className="text-lg text-start">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-lg">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            ))}
        </div>
    )
}

