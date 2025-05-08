import nlb1 from '@/public/Gallery/nlb1.webp'
import nlb2 from '@/public/Gallery/nlb2.webp'
import nlb3 from '@/public/Gallery/nlb3.webp'
import bike8 from "../public/img/bike8.jpg"
import bike7 from "../public/img/bike7.jpg"
import bike4 from "../public/img/bike4.jpg"
import bike9 from "../public/img/bike9.jpg"

export const drivingLessons = [
    { name: "Proefles (100 min)", price: "€ 80,00" },
    { name: "Losse motorrijles (50 min)", price: "€55,00" }
]

export const examFees = [
    { name: "CBR AVB Praktijk examen  ", price: "€ 215,00" },
    { name: "CBR AVD Praktijk examen ", price: "€ 279,00" },
]

export const avbPackagesForPricing = [
    {
        title: "AVB Pakket Silver",
        price: "€750",
        features: [
            "12 uur rijlesuren van 50 min + AVB examen",
            "Vaste instructeur",
            "Nieuwe lesmotor",
            "Leskaart & Advies"
        ],
        bgColor: "bg-white",
        textColor: "text-gray-800",
        listColor: "text-gray-700"
    },
    {
        title: "AVB Pakket Gold",
        price: "€1050",
        features: [
            "16 uur rijlesuren van 50 min + AVB examen",
            "Vaste instructeur",
            "Nieuwe lesmotor",
            "Leskaart & Advies"
        ],
        bgColor: "bg-[#050B30]",
        textColor: "text-white",
        listColor: "text-gray-300",
        badge: "Aanbevolen"
    },
    {
        title: "AVB Pakket Platinum",
        price: "€1300",
        features: [
            "20 uur rijlesuren van 50 min + AVB examen",
            "Vaste instructeur",
            "Nieuwe lesmotor",
            "Leskaart & Advies"
        ],
        bgColor: "bg-green-100",
        textColor: "text-gray-800",
        listColor: "text-gray-700"
    }
]

export const avdPackagesForPricing = [
    {
        title: "AVD Pakket Silver",
        price: "€810",
        features: [
            "12 uur rijlesuren van 50 min + AVD examen",
            "Vaste instructeur",
            "Nieuwe lesmotor",
            "Leskaart & Advies"
        ],
        bgColor: "bg-white",
        textColor: "text-gray-800",
        listColor: "text-gray-700"
    },
    {
        title: "AVD Pakket Gold",
        price: "€1099",
        features: [
            "16 uur rijlesuren van 50 min + AVD examen",
            "Vaste instructeur",
            "Nieuwe lesmotor",
            "Leskaart & Advies"
        ],
        bgColor: "bg-[#050B30]",
        textColor: "text-white",
        listColor: "text-gray-300",
        badge: "Aanbevolen"
    },
    {
        title: "AVD Pakket Platinum",
        price: "€1350",
        features: [
            "20 uur rijlesuren van 50 min + AVD examen",
            "Vaste instructeur",
            "Nieuwe lesmotor",
            "Leskaart & Advies"
        ],
        bgColor: "bg-green-100",
        textColor: "text-gray-800",
        listColor: "text-gray-700"
    }
]

export const allowedFootwear = [
    "Chelsea boots",
    "Allstars",
    "Nike Air Jordans",
    "Schoenen met elastische banden"
]

export const notAllowedFootwear = [
    "Bergschoenen van stevig leer",
    "Timberlands",
    "Werkschoenen die minimaal S3-gecertificeerd zijn",
    "Motorsneakers met goedkeuring"
]

export const clothingRequirements = [
    "Motorhelm: Moet ECE-gecertificeerd zijn en goed passen. Een helm zonder vizier is toegestaan als je een bril draagt.",
    "Handschoenen: Moeten de handen en polsen volledig bedekken en beschermen.",
    "Jas & broek: Moeten het lichaam volledig bedekken, voorzien zijn van CE-gecertificeerde knie-, heup-, elleboog- en schouderprotectoren.",
    "Schoenen: Enkelbedekkend en gemaakt van slijtvast materiaal."
]

export const avbCategories = [
    "Remmen (2 oefeningen op examen)",
    "Snelle oefeningen (2 oefeningen op examen)",
    "Langzame oefeningen (2 oefeningen op examen)",
    "Parkeren (1 oefening op examen)"
]

export const licenseCategories = [
    { type: "A1 (Lichte Motor)", desc: "Max 125 CC, Max. 11kW" },
    { type: "A2 (Middelzware Motor)", desc: "Max. 35kW" },
    { type: "A (Zware Motor)", desc: "onbeperkt vermogen" }
]

export const ageRequirements = [
    {
        age: "Vanaf 18 jaar",
        license: "A1-rijbewijs (max. 125cc)",
        note: "Na 2 jaar ervaring kun je doorgaan naar A2."
    },
    {
        age: "Vanaf 20 jaar",
        license: "A2-rijbewijs",
        note: "Je krijgt een code 80, waardoor je 2 jaar alleen op A2-motoren mag rijden. Daarna kun je het volledige A-rijbewijs behalen."
    },
    {
        age: "Vanaf 21 jaar",
        license: "A-rijbewijs (beperkt)",
        note: "Je krijgt een code 80, waardoor je 2 jaar op A2-motoren moet rijden. Na 2 jaar wordt dit automatisch omzet naar een volledig A-rijbewijs."
    },
    {
        age: "Vanaf 24 jaar",
        license: "Direct het volledige A-rijbewijs",
        note: "Geen beperkingen, je mag meteen alle motoren rijden."
    }
]

export const cards = [
    {
        emoji: '🏍️',
        title: 'Kies je lespakket',
        description: 'Kies het lespakket dat past bij jouw behoeften en planning. Of je nu voor losse lessen gaat of een compleet traject, wij helpen je je doel te bereiken.'
    },
    {
        emoji: '🤝',
        title: 'Persoonlijk overleg',
        description: 'Heb je vragen of weet je niet waar je moet beginnen? Ons team staat voor je klaar om je persoonlijk te adviseren over de beste aanpak voor jouw situatie.'
    },
    {
        emoji: '🛒',
        title: 'Plan je lessen',
        description: 'Neem contact met ons op of vraag direct een proefles aan via onze website. Wij helpen je graag met het plannen van je lessen, zodat je zonder gedoe kunt beginnen aan jouw motorrijavontuur.'
    },
    {
        emoji: '🚦',
        title: 'Start je training',
        description: 'Na het plannen is het tijd om op de motor te stappen! Volg onze professionele lessen en werk stap voor stap toe naar je motorrijbewijs.'
    }
]

export const avbPackagesForCourses = [
    {
        title: "AVB Pakket Silver",
        image: nlb1,
        width: 1203,
        height: 503,
        description: "Ben je een beginner of wil je je rijvaardigheden verbeteren? Het AVB Pakket Silver biedt jou een solide basis om vol vertrouwen te starten met motorrijden. Dit pakket is zorgvuldig samengesteld om je optimaal voor te bereiden op het voertuigbeheersingsexamen (AVB)."
    },
    {
        title: "AVB Pakket Gold",
        image: nlb2,
        width: 1204,
        height: 504,
        description: "Wil je een stap verder gaan? Het AVB Pakket Gold biedt een uitgebreidere opleiding, perfect voor wie meer lessen en extra voordelen wil tijdens de voorbereiding op het AVB-examen. Combineer kwaliteit, comfort en een voordelige deal in één pakket."
    },
    {
        title: "AVB Pakket Platinum",
        image: nlb3,
        width: 1205,
        height: 505,
        description: "Wil je de meest uitgebreide voorbereiding op je motorrijbewijs? Het AVB Pakket Platinum biedt persoonlijke begeleiding en een uitgebreid aantal rijlessen, zodat je vol vertrouwen en uitstekend voorbereid het AVB-examen kunt afleggen. Perfect voor wie niets aan het toeval wil overlaten."
    }
]

export const avdPackagesForCourses = [
    {
        title: "AVD Pakket Silver",
        image: nlb1,
        width: 1203,
        height: 503,
        description: "Wil je een solide basis leggen voor het behalen van je motorrijbewijs? Het AVD Pakket Silver combineert praktijkgerichte lessen met persoonlijke begeleiding. Ideaal voor beginners of voor wie zijn rijvaardigheden wil aanscherpen."
    },
    {
        title: "AVD Pakket Gold",
        image: nlb2,
        width: 1204,
        height: 504,
        description: "Klaar voor de volgende stap? Het AVD Pakket Gold biedt een uitgebreide rijopleiding met extra lessen en persoonlijke ondersteuning. Perfect voor wie grondig wil oefenen en zeker wil zijn van een veilige en zelfverzekerde voorbereiding op het AVD-examen."
    },
    {
        title: "AVD Pakket Platinum",
        image: nlb3,
        width: 1205,
        height: 505,
        description: "Voor een complete en diepgaande voorbereiding kies je het AVD Pakket Platinum. Met persoonlijke begeleiding en een uitgebreide reeks lessen krijg je alle tools om je motorrijbewijs te halen."
    }
]

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pages/about", label: "Over ons" },
    { href: "/pages/courses", label: "Pakketten" },
    { href: "/pages/exams", label: "Examens" },
    { href: "/pages/pricing", label: "Tarieven" },
    { href: "/pages/contact", label: "Contact" },
];

export const images = [
    bike8,
    bike7,
    bike4,
    bike9

];

export const tickData = [
    "De basis van motorbeheersing - van starten tot stoppen, alles begint hier.",
    "Defensief rijden - anticipeer op het verkeer en rijd met vertrouwen.",
    "Voorbereiding op het praktijkexamen - haal je rijbewijs zonder stress.",
    "Snelheidscontrole in bochten - soepel en veilig door elke bocht.",
    "Balans en beheersing - de fundamenten van zelfverzekerd motorrijden.",
    "Relaxed rijden op lange ritten - blijf comfortabel, ook tijdens lange afstanden."
];
