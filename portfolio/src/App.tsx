import React from 'react'
import Scene3D from './components/Scene3D'

const App: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-[#2B81EB] hover:text-[#4D87C0] transition-colors"
            >
              Honza Gregor
            </button>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('sluzby')}
                className="text-[#394042] hover:text-[#2B81EB]"
              >
                Služby
              </button>
              <button
                onClick={() => scrollToSection('omne')}
                className="text-[#394042] hover:text-[#2B81EB]"
              >
                O mně
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-[#394042] hover:text-[#2B81EB]"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-[#394042] hover:text-[#2B81EB]"
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

      {/* Hero Section */}
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
                <button className="border border-[#728087] text-[#394042] px-8 py-3 rounded-md hover:bg-gray-50">
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

      {/* Stats Section */}
      <section className="py-20 bg-gray-50" id="sluzby">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#394042] mb-6">
            Rychlost a úspěch na prvním místě
          </h2>
          <p className="text-[#728087] max-w-2xl mx-auto mb-12">
            Mé služby se zaměřují na moderní a efektivní webové řešení. Vytvářím webové stránky, které nejen vypadají skvěle, ale také plně odpovídají.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-[#2B81EB] mb-4">50%</h3>
              <p className="text-[#728087]">Zvýšení zisku díky přítomnosti v online službách</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-[#2B81EB] mb-4">50%</h3>
              <p className="text-[#728087]">Efektivita při navazování a spravování webových stránek</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#394042] mb-12">
            Jaké technologie používám pro váš úspěch.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pro design dodržující praktiky UI/UX designu",
                description: "Mé pracovní postupy kombinují inovativní technologie a osvědčené metody pro maximální efektivitu."
              },
              {
                title: "Pro nejvyšší rychlost a responzivitu vašeho webu",
                description: "Používám nejmodernější technologie, které zajistí kvalitní a rychlé řešení."
              },
              {
                title: "Pro bezpečnost vašich dat a soukromých údajů na webu",
                description: "Dbám také na denní kontroly, abychom zjistili vaše data bezpečná."
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-[#728087] aspect-video rounded-md mb-6"></div>
                <h3 className="text-xl font-semibold text-[#394042] mb-4">{tech.title}</h3>
                <p className="text-[#728087] mb-4">{tech.description}</p>
                <a href="#" className="text-[#2B81EB] hover:text-[#4D87C0] inline-flex items-center">
                  Zjistit více <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me Section - Updated ID */}
      <section className="py-20 bg-gray-50" id="omne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#394042] mb-6">
            Proč zrovna já?
          </h2>
          <p className="text-[#728087] max-w-2xl mb-12">
            Jsem zkušený webový vývojář specializující se na moderní a efektivní řešení. Moje dlouholeté zkušenosti mi umožňují implementaci s využitím nejnovějších technologií.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
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
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#394042] mb-4">{feature.title}</h3>
                <p className="text-[#728087]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#394042] mb-6">
            Case study (portfolio)
          </h2>
          <p className="text-[#728087] max-w-2xl mx-auto mb-12">
            Díky zkušenostem nejrůznějších projektů a řešení jsem vytvořil moderní webových stránek. Mé služby zahrnují design, programování a optimalizaci pro výkon.
          </p>
          <div className="bg-[#728087] aspect-video rounded-lg max-w-4xl mx-auto"></div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="bg-[#394042] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold mb-4 md:mb-0 hover:text-[#2B81EB] transition-colors"
            >
              Honza Gregor
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
    </div>
  )
}

export default App
