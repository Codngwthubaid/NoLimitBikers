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
                <div className="bg-green-400 px-3 rounded-xl">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg text-start">Kan ik mijn lessen online boeken?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                            Ja, bij NoLimitBikers kun je eenvoudig je lessen online plannen via onze website.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="bg-green-400 px-3 rounded-xl">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg text-start">Hoelang duurt een motorrijles?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                            Elke rijles duurt gemiddeld 50 minuten, zodat je voldoende tijd hebt om te oefenen en te groeien.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="bg-green-400 px-3 rounded-xl">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg text-start">Hoeveel lessen heb ik nodig om zelfverzekerd te rijden?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                            Dit verschilt per persoon, maar onze instructeurs helpen je met een persoonlijk plan op basis van jouw leerproces en vooruitgang.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="bg-green-400 px-3 rounded-xl">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg text-start">Welke veiligheidsuitrusting moet ik meenemen?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                            Voor de lessen heb je minimaal een goedgekeurde helm, handschoenen, stevige schoenen en een motorjas nodig. Geen uitrusting? Geen probleem, we kunnen dit voor je regelen!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default AccordionCom
