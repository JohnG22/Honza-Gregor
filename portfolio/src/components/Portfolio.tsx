import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Portfolio: React.FC = () => {
    return (
        <section className="py-20" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#394042] mb-6">
                    Case study (portfolio)
                </h2>
                <p className="text-[#728087] max-w-2xl mx-auto mb-12">
                    Díky zkušenostem nejrůznějších projektů a řešení jsem vytvořil moderní webových stránek. Mé služby zahrnují design, programování a optimalizaci pro výkon.
                </p>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="w-full"
                >
                    {[
                        {
                            title: "E-commerce Platform",
                            description: "Moderní e-shop s pokročilými funkcemi a optimalizovaným výkonem",
                            image: "https://via.placeholder.com/600x400"
                        },
                        {
                            title: "Corporate Website",
                            description: "Profesionální webová prezentace pro velkou společnost",
                            image: "https://via.placeholder.com/600x400"
                        },
                        {
                            title: "Portfolio Website",
                            description: "Kreativní portfolio pro umělce s galerií a animacemi",
                            image: "https://via.placeholder.com/600x400"
                        },
                        {
                            title: "Landing Page",
                            description: "Konverzní landing page pro marketingovou kampaň",
                            image: "https://via.placeholder.com/600x400"
                        }
                    ].map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="aspect-video rounded-md mb-6 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-[#394042] mb-4">{project.title}</h3>
                                <p className="text-[#728087]">{project.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Portfolio 