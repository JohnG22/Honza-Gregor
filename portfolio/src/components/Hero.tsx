import React from 'react'
import Scene3D from './Scene3D'

interface HeroProps {
    scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" id="hero">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#394042] leading-tight mb-6">
                            Nejmodernější<br />webové řešení dělané<br />na míru pro vás
                        </h1>
                        <p className="text-[#728087] text-lg mb-8">
                            Efektivní a inovativní webové stránky, které zajistí vaše očekávání a naplní komerční cíle, které dělají vaše podnikání úspěšné.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#2B81EB] text-white px-8 py-3 rounded-md hover:bg-[#4D87C0]">
                                Zjistit více
                            </button>
                            <button
                                onClick={() => scrollToSection('kontakt')}
                                className="border border-[#728087] text-[#394042] px-8 py-3 rounded-md hover:bg-gray-50"
                            >
                                Kontaktujte nás
                            </button>
                        </div>
                    </div>
                    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                        <Scene3D />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero 