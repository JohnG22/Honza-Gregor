import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

interface NavigationProps {
    activeSection: string;
    scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-2xl font-bold text-[#2B81EB] hover:text-[#4D87C0] transition-colors flex items-center gap-2"
                    >
                        <FontAwesomeIcon icon={faCode} className="text-xl" />
                        <span className="hidden sm:inline">Honza Gregor</span>
                    </button>
                    <div className="hidden md:flex space-x-8">
                        <button
                            onClick={() => scrollToSection('sluzby')}
                            className={`${activeSection === 'sluzby' ? 'text-[#2B81EB]' : 'text-[#394042]'} hover:text-[#2B81EB]`}
                        >
                            Služby
                        </button>
                        <button
                            onClick={() => scrollToSection('omne')}
                            className={`${activeSection === 'omne' ? 'text-[#2B81EB]' : 'text-[#394042]'} hover:text-[#2B81EB]`}
                        >
                            O mně
                        </button>
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className={`${activeSection === 'portfolio' ? 'text-[#2B81EB]' : 'text-[#394042]'} hover:text-[#2B81EB]`}
                        >
                            Portfolio
                        </button>
                        <button
                            onClick={() => scrollToSection('kontakt')}
                            className={`${activeSection === 'kontakt' ? 'text-[#2B81EB]' : 'text-[#394042]'} hover:text-[#2B81EB]`}
                        >
                            Kontakt
                        </button>
                    </div>
                    <button
                        onClick={() => scrollToSection('kontakt')}
                        className="bg-[#2B81EB] text-white px-6 py-2 rounded-md hover:bg-[#4D87C0]"
                    >
                        Kontaktujte nás
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation 