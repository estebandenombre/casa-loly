'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { MapPin, Heart, Leaf, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
    const slides = [
        {
            image: '/about-us.webp',
            title: 'Nuestro Equipo',
            description:
                'Un equipo apasionado que pone amor y dedicación en cada plato. ¡Conócenos y siente la calidez familiar!',
            icon: <Star className="w-10 h-10 text-yellow-400" />,
        },
        {
            image: '/about-philosophy.webp',
            title: 'Nuestra Filosofía',
            description:
                'Creemos en comida casera que cuenta historias. Honestidad, tradición y sabor en cada bocado.',
            icon: <Heart className="w-10 h-10 text-red-500" />,
        },
        {
            image: '/about-ingredients.webp',
            title: 'Ingredientes Frescos',
            description:
                'Trabajamos con ingredientes frescos y locales, apoyando a nuestros productores y garantizando calidad en cada plato.',
            icon: <Leaf className="w-10 h-10 text-green-500" />,
        },
        {
            image: '/about-history.webp',
            title: 'Nuestra Historia',
            description:
                'Más de 10 años llevando sabor y tradición a tu mesa. Nuestra pasión es hacerte sentir como en casa.',
            icon: <MapPin className="w-10 h-10 text-blue-400" />,
        },
    ];

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" id="about">
            <div className="container mx-auto px-4 md:px-6">
                {/* Título principal */}
                <h2 className="text-center font-serif text-4xl font-bold tracking-tight sm:text-5xl mb-12">
                    ¿Por Qué Elegirnos?
                </h2>

                {/* Carrusel */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                    }}
                    autoplay={{ delay: 5000 }}
                    loop
                    className="w-full relative"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="relative">
                            {/* Imagen de fondo */}
                            <div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                                {/* Texto superpuesto */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                                    {slide.icon && <div className="mb-4">{slide.icon}</div>}
                                    <h3 className="font-serif text-4xl font-bold mb-4">
                                        {slide.title}
                                    </h3>
                                    <p className="max-w-xl text-lg md:text-xl">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Paginación personalizada */}
                <div className="custom-pagination mt-6"></div>
            </div>
        </section>
    );
};

export default AboutSection;
