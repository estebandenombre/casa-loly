'use client'
import { useState, useEffect } from "react";
import { ArrowUp } from 'lucide-react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"


import InstagramFeed from "@/components/instagram-feed";

import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/testimonios";

import CarruselMinimalista from "@/components/carrusel-minimalista"

import LoadingAnimation from "@/components/loader";

import HeroSection from "@/components/heroSection";

import AboutSection from "@/components/AboutSection";

//import DestacadosSection from "@/components/Destacados";
export default function Component() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Simula el tiempo necesario para cargar imágenes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Cambia el tiempo según tus necesidades

    return () => clearTimeout(timer);
  }, []);

  // Detectar scroll para mostrar el botón
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300); // Mostrar botón después de 300px de scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white">
      <main className="flex-1 w-full">
        <HeroSection />

        <MenuSection />

        <section className="w-full py-16 md:py-24 bg-gray-50" id="services">
          <div className="container mx-auto px-4 md:px-6">
            {/* Encabezado */}
            <div className="text-center mb-20">
              <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-gray-800 mt-12">
                Nuestros Servicios
              </h2>
              <p className="max-w-3xl mx-auto text-gray-600 md:text-lg mt-8">
                En Casa Loly ofrecemos platos caseros preparados con ingredientes frescos y un servicio de catering diseñado para que tus eventos sean inolvidables.
              </p>
            </div>

            {/* Servicios */}
            <div className="grid gap-12 md:gap-16 lg:grid-cols-2">
              {/* Servicio 1: Comidas Preparadas */}
              <div className="group relative overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="relative h-64 sm:h-72 md:h-80">
                  <Image
                    src="/comidas-preparadas.webp"
                    alt="Comidas preparadas"
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">
                    Comidas Preparadas
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Disfruta de nuestra variedad de platos caseros, elaborados con ingredientes frescos y de alta calidad, listos para llevar.
                  </p>
                  <Button
                    className="bg-black text-white px-6 py-2"
                    onClick={() => {
                      const menuSection = document.getElementById("menu"); // Busca el elemento con id="menu"
                      if (menuSection) {
                        menuSection.scrollIntoView({ behavior: "smooth" }); // Realiza un desplazamiento suave
                      }
                    }}
                  >
                    Ver Menú
                  </Button>

                </div>
              </div>

              {/* Servicio 2: Catering */}
              <div className="group relative overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="relative h-64 sm:h-72 md:h-80">
                  <Image
                    src="/catering.jpg"
                    alt="Servicio de Catering"
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">
                    Servicio de Catering
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Personalizamos menús para eventos, garantizando una experiencia única y adaptada a tus necesidades.
                  </p>
                  <Link href="#contact">
                    <Button className="bg-yellow-500 text-white px-6 py-2 hover:bg-yellow-600">
                      Solicitar Catering
                    </Button>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutSection />

        <section className="w-full mx-auto py-12 md:py-24 lg:py-32" id="menu">
          <TestimonialsSection />
        </section>

        <section className="w-full py-16 md:py-24" id="contact">
          <div className="container mx-auto px-4 md:px-6">
            {/* Encabezado */}
            <div className="text-center mb-32"> {/* Aumentado a mb-32 */}
              <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                Contáctanos
              </h2>
              <p className="max-w-xl mx-auto text-gray-600 md:text-lg">
                ¿Tienes preguntas o deseas más información? Escríbenos y nos pondremos en contacto contigo lo antes posible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Información de contacto */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Dirección</h3>
                    <p className="text-gray-600">Carrer de Pere de València, 46022 València, España</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Teléfono</h3>
                    <p className="text-gray-600">
                      <a href="tel:+34962023339" className="hover:text-yellow-500">
                        962 023 339
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:yostrada@gmail.com" className="hover:text-yellow-500">
                        yostrada@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-white p-3 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Horario</h3>
                    <p className="text-gray-600">Martes a Domingo: 11:00 a.m. - 4:00 p.m.</p>
                  </div>
                </div>
              </div>

              {/* Formulario de contacto */}
              <div>
                <form className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white font-bold rounded-md shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <InstagramFeed />



        <div className="container mx-auto py-10">
          <CarruselMinimalista />
        </div>
      </main>
      {/* Botón de scroll hacia arriba */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
      <footer className="bg-gray-900 text-white py-12 w-full" id='contact'>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo e Introducción */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-yellow-400">Casa Loly</h2>
              <p className="text-gray-400">
                Disfruta de comida casera hecha con ingredientes frescos y saludables. Nuestra misión es llevar sabor y calidad a tu mesa.
              </p>
            </div>

            {/* Información de Contacto con Íconos de lucide-react */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-yellow-400">Contacto</h3>
              {/* Dirección */}
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-yellow-400" />
                <p className="text-gray-400">Carrer de Pere de València, 46022 València, España</p>
              </div>
              {/* Teléfono */}
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-yellow-400" />
                <a href="tel:+34962023339" className="text-gray-400 hover:text-white">
                  962 023 339
                </a>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-yellow-400" />
                <a href="mailto:yostrada@gmail.com" className="text-gray-400 hover:text-white">
                  yostrada@gmail.com
                </a>
              </div>
              {/* Horario */}
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-yellow-400" />
                <p className="text-gray-400">Martes a Domingo, 11:00 a.m. - 4:00 p.m.</p>
              </div>
            </div>

            {/* Botón de Hacer Pedido */}
            <div className="space-y-6 text-center md:text-left">
              <h3 className="font-serif text-xl font-bold text-yellow-400">¿Listo para ordenar?</h3>
              <p className="text-gray-400">
                Haz tu pedido ahora y disfruta de nuestros platos caseros en la comodidad de tu hogar.
              </p>
              <a
                href="https://casadecomidas.vercel.app"
                className="inline-block bg-yellow-500 text-white font-medium py-3 px-6 rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              >
                Hacer Pedido
              </a>
            </div>
          </div>

          {/* Mapa de Ubicación */}
          <div className="mt-12">
            <h3 className="font-serif text-xl font-bold text-yellow-400 text-center mb-4">Nuestra Ubicación</h3>
            <div className="rounded-md overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.6498443257177!2d-0.35580248467611764!3d39.47411477948668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4fdff1e1fd%3A0x8282e2b4afc95b7!2sCarrer%20de%20Pere%20de%20Val%C3%A8ncia%2C%2046022%20Val%C3%A8ncia%2C%20Espa%C3%B1a!5e0!3m2!1sen!2sus!4v1692903826541!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-md"
              ></iframe>
            </div>
          </div>

          {/* Barra Inferior */}
          <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
            © 2024 Casa Loly. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>

  )
}
