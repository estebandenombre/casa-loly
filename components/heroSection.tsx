import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <section className="relative w-full h-screen flex flex-col" id="home">
            <header
                className={`fixed top-0 left-0 right-0 flex h-20 w-full items-center justify-between px-4 md:px-6 mx-auto z-20 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
                    }`}
            >
                {/* Menú móvil */}
                <Button
                    variant="ghost"
                    size="icon"
                    className={`lg:hidden ${isScrolled ? 'text-black hover:text-yellow-500' : 'text-white hover:text-yellow-300'} transition-colors duration-300`}
                    aria-label="Toggle navigation menu"
                    onClick={toggleMobileMenu}
                >
                    <Menu className="h-6 w-6" />
                </Button>

                {/* Logo - Centrado en móvil */}
                <Link
                    className={`absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-0 lg:transform-none text-2xl font-serif font-bold transition-colors duration-300 ${isScrolled ? 'text-black hover:text-yellow-500' : 'text-white hover:text-yellow-300'}`}
                    href="#home"
                >
                    CASA LOLY
                </Link>

                {/* Menú para pantallas grandes */}
                <nav className="hidden lg:flex gap-6">
                    <Link
                        className={`text-lg font-medium transition-colors duration-300 ${isScrolled ? 'text-black hover:text-yellow-500' : 'text-white hover:text-yellow-300'}`}
                        href="#about"
                    >
                        Sobre Nosotros
                    </Link>
                    <Link
                        className={`text-lg font-medium transition-colors duration-300 ${isScrolled ? 'text-black hover:text-yellow-500' : 'text-white hover:text-yellow-300'}`}
                        href="#services"
                    >
                        Servicios
                    </Link>
                    <Link
                        className={`text-lg font-medium transition-colors duration-300 ${isScrolled ? 'text-black hover:text-yellow-500' : 'text-white hover:text-yellow-300'}`}
                        href="#menu"
                    >
                        Menú
                    </Link>
                    <Link
                        className={`text-lg font-medium transition-colors duration-300 ${isScrolled ? 'text-black hover:text-yellow-500' : 'text-white hover:text-yellow-300'}`}
                        href="#contact"
                    >
                        Contacto
                    </Link>
                </nav>
            </header>

            {/* Menú desplegable para móviles */}
            {isMobileMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-30 flex flex-col items-center justify-center transition-all duration-500">
                    <button
                        className="absolute top-4 right-4 text-white hover:text-yellow-300 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <X className="h-10 w-10" />
                    </button>
                    <nav className="flex flex-col gap-8 text-center">
                        <Link
                            href="#about"
                            className="text-2xl font-bold text-white transition-colors duration-300 hover:text-yellow-300"
                            onClick={toggleMobileMenu}
                        >
                            Sobre Nosotros
                        </Link>
                        <Link
                            href="#services"
                            className="text-2xl font-bold text-white transition-colors duration-300 hover:text-yellow-300"
                            onClick={toggleMobileMenu}
                        >
                            Servicios
                        </Link>
                        <Link
                            href="#menu"
                            className="text-2xl font-bold text-white transition-colors duration-300 hover:text-yellow-300"
                            onClick={toggleMobileMenu}
                        >
                            Menú
                        </Link>
                        <Link
                            href="#contact"
                            className="text-2xl font-bold text-white transition-colors duration-300 hover:text-yellow-300"
                            onClick={toggleMobileMenu}
                        >
                            Contacto
                        </Link>
                    </nav>
                </div>
            )}

            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/header-placeholder.jpg"
            >
                <source src="/header.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex-grow flex items-center justify-center pt-20">
                <div className="text-center text-white px-4">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        ¡En tu mesa, lo mejor!
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-6">
                        Platos preparados con pasión y los mejores ingredientes.
                    </p>
                    <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-4xl mx-auto gap-6 lg:gap-0 space-y-8 lg:space-y-0">
                        {/* Botón "Ver Menú" (Paella) */}
                        <div className="relative flex items-center justify-center group">
                            <Link
                                href="#menu"
                                className="bg-white text-black rounded-full shadow-lg flex items-center justify-center text-lg font-bold transition-colors duration-300 hover:bg-black hover:text-white"
                                style={{
                                    borderRadius: "50%",
                                    width: "120px",
                                    height: "120px",
                                    position: "relative",
                                }}
                            >
                                Ver Menú
                            </Link>

                            {/* Asas laterales */}
                            <div
                                className="absolute top-1/2 -translate-y-1/2 left-[-15px] bg-white w-5 h-3 rounded-full shadow-md pointer-events-none group-hover:-translate-x-2 transition-transform duration-300"
                            ></div>
                            <div
                                className="absolute top-1/2 -translate-y-1/2 right-[-15px] bg-white w-5 h-3 rounded-full shadow-md pointer-events-none group-hover:translate-x-2 transition-transform duration-300"
                            ></div>
                        </div>

                        {/* Botón "Hacer Pedido" (Fuente de horno) */}
                        <div className="relative flex items-center justify-center group">
                            <Link
                                href="https://casadecomidas.vercel.app/"
                                className="bg-yellow-500 text-white rounded-lg shadow-lg flex items-center justify-center text-lg font-bold transition-colors duration-300 hover:bg-white hover:text-yellow-500"
                                style={{
                                    width: "160px",
                                    height: "80px",
                                    borderRadius: "12px",
                                    position: "relative",
                                }}
                            >
                                Hacer Pedido
                            </Link>

                            {/* Asa superior */}
                            <div
                                className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 w-8 h-3 rounded-full shadow-md pointer-events-none group-hover:-translate-y-1 transition-transform duration-300"
                            ></div>
                            {/* Asa inferior */}
                            <div
                                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 w-8 h-3 rounded-full shadow-md pointer-events-none group-hover:translate-y-1 transition-transform duration-300"
                            ></div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Scroll indicator */}
            <div
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <ChevronDown className="text-white w-8 h-8 animate-bounce" />
            </div>
        </section>
    );
}
