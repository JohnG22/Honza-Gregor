import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

interface FooterProps {
    scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
    return (
        <footer className="bg-[#394042] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-2xl font-bold mb-4 md:mb-0 hover:text-[#2B81EB] transition-colors flex items-center gap-2"
                    >
                        <FontAwesomeIcon icon={faCode} className="text-xl" />
                        <span className="hidden sm:inline">Honza Gregor</span>
                    </button>
                    <div className="flex gap-8 mb-4 md:mb-0">
                        <button
                            onClick={() => scrollToSection('sluzby')}
                            className="text-white hover:text-[#2B81EB]"
                        >
                            Služby
                        </button>
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="text-white hover:text-[#2B81EB]"
                        >
                            Portfolio
                        </button>
                        <button
                            onClick={() => scrollToSection('kontakt')}
                            className="text-white hover:text-[#2B81EB]"
                        >
                            Kontakt
                        </button>
                    </div>
                    <div className="flex gap-4">
                        {/* Social media icons will be added here */}
                    </div>
                </div>
                <div className="text-center pt-8 border-t border-gray-700">
                    <p>© 2024 All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer 