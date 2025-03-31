import React from 'react'

interface ContactProps {
    scrollToSection: (sectionId: string) => void;
}

const Contact: React.FC<ContactProps> = ({ scrollToSection }) => {
    return (
        <section className="py-20 bg-gray-50" id="kontakt">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#394042] mb-6">
                    Kontakt
                </h2>
                <p className="text-[#728087] mb-12">
                    Kontaktuj mě pro více informací nebo když najdeš jinou sociální médiu.
                </p>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold text-[#394042] mb-2">Email</h3>
                            <p className="text-[#728087]">example@email.cz</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#394042] mb-2">Telefon</h3>
                            <p className="text-[#728087]">+420 000 000 000</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#394042] mb-2">Sídlo</h3>
                            <p className="text-[#728087]">Example Road 1, 1234</p>
                        </div>
                    </div>
                    <div className="bg-[#728087] aspect-video rounded-lg"></div>
                </div>
            </div>
        </section>
    )
}

export default Contact 