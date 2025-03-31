import React from 'react'

interface AboutMeProps {
    scrollToSection: (sectionId: string) => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ scrollToSection }) => {
    const features = [
        {
            title: "Rychlost a efektivita webových stránek",
            description: "Rychlé weby přitahují více návštěv a konverzí."
        },
        {
            title: "Moderní design a uživatelská přívětivost",
            description: "Vytvářím moderní přívětivé a intuitivní rozhraní."
        },
        {
            title: "Pokročilé technologie a inovativní přístupy",
            description: "Aktivně sleduji nejnovější trendy a technologie v oboru."
        },
        {
            title: "Osobní přístup a spokojenost klientů",
            description: "Každý projekt přizpůsobuji individuálním potřebám klientů."
        }
    ]

    return (
        <section className="py-20 bg-gray-50" id="omne">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#394042] mb-6">
                    Proč zrovna já?
                </h2>
                <p className="text-[#728087] max-w-2xl mb-12">
                    Jsem zkušený webový vývojář specializující se na moderní a efektivní řešení. Moje dlouholeté zkušenosti mi umožňují implementaci s využitím nejnovějších technologií.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-[#394042] mb-4">{feature.title}</h3>
                            <p className="text-[#728087]">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutMe 