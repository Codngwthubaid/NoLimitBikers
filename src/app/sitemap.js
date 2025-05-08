export default function sitemap() {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.00,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/pages/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.80,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/pages/courses`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.80,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/pages/exams`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.80,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/pages/pricing`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.80,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/pages/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.80,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/pages/triallesson`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.80,
        },
    ];
}