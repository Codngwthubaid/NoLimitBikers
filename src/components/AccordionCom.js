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
                            <AccordionTrigger className="text-lg">Kan ik online lessen boeken?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Ja, op onze website kunt u eenvoudig met een paar klikken online lessen boeken.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="bg-green-400 px-3 rounded-xl">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">Hoe lang duurt elke fietsrijles?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Elke les duurt doorgaans tussen de 60 en 90 minuten, afhankelijk van het door u gekozen pakket.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="bg-green-400 px-3 rounded-xl">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">Hoeveel lessen heb ik nodig om een ​​zelfverzekerde ruiter te worden?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Het aantal lessen varieert afhankelijk van uw individuele vooruitgang, maar de meeste leerlingen hebben 10-15 lessen nodig om vertrouwen te winnen.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="bg-green-400 px-3 rounded-xl">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">Welke veiligheidsuitrusting heb ik nodig voor de lessen?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Wij bieden helmen en basisbeschermingsmiddelen. We raden aan handschoenen, jassen en stevig schoeisel te dragen voor extra bescherming.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default AccordionCom
