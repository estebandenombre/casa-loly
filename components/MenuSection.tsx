"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MenuSection() {
    const [showAll, setShowAll] = useState(false);

    const platos = [
        { title: "Paella Valenciana", description: "Un clásico preparado con ingredientes frescos y mucho sabor.", image: "/paella.jpg" },
        { title: "Arroz Negro", description: "Arroz con tinta de calamar, cremoso y delicioso.", image: "/arroz-negro.jpg" },
        { title: "Fideuá", description: "Fideos con mariscos al estilo tradicional.", image: "/fideua.jpg" },
        { title: "Ensalada Fresca", description: "Una opción ligera y saludable, ideal para cualquier comida.", image: "/ensalada.jpg" },
        { title: "Costillas BBQ", description: "Jugosas costillas con salsa barbacoa casera.", image: "/costillas.jpg" },
        { title: "Albóndigas a la Jardinera", description: "Albóndigas caseras con verduras en una deliciosa salsa.", image: "/albondigas.jpg" },
        { title: "Canelones de Espinacas", description: "Canelones rellenos de espinacas y ricotta, cubiertos de bechamel.", image: "/canelones.jpg" },
        { title: "Pollo al Ajillo", description: "Jugosos trozos de pollo en una salsa de ajo y perejil.", image: "/pollo.jpg" },
        { title: "Tortilla de Patatas", description: "Un clásico español hecho al estilo tradicional.", image: "/tortilla.jpg" },
        { title: "Pescado al Horno", description: "Pescado fresco horneado con hierbas y limón.", image: "/pescado.jpg" },
        { title: "Lentejas Estofadas", description: "Un plato reconfortante lleno de sabor y nutrientes.", image: "/lentejas.jpg" },
    ];

    const visiblePlatos = showAll ? platos : platos.slice(0, 6);

    // Variants for staggered animation
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each child animation
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="w-full mx-auto py-12 md:py-24 lg:py-32" id="menu">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20">
                    <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-5xl mt-12">
                        Descubre nuestros platos
                    </h2>
                    <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl mt-8">
                        Explora nuestra variedad de platos caseros, preparados con ingredientes frescos y de la mejor calidad.
                    </p>
                </div>
                {/* Destacado: Promoción del jueves */}



                {/* Grid de platos con animación de fade-in */}
                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {visiblePlatos.map((plato, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center space-y-4"
                            variants={itemVariants}
                        >
                            <div className="relative overflow-hidden rounded-full w-48 h-48 border-4 border-gray-300 shadow-lg hover:scale-105 transition-transform duration-300">
                                <Image
                                    alt={plato.title}
                                    src={plato.image}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-gray-800">{plato.title}</h3>
                            <p className="text-center text-gray-600">{plato.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Botones */}
                <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6">
                    {/* Botón de Hacer Pedido */}
                    {/* Botón de Ver Más o Ver Menos */}
                    {!showAll ? (
                        <Button
                            onClick={() => setShowAll(true)}
                            className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
                        >
                            Ver Menú Completo
                            <ChevronDown className="ml-2 h-5 w-5" />
                        </Button>
                    ) : (
                        <Button
                            onClick={() => setShowAll(false)}
                            className="flex items-center bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300"
                        >
                            Ver Menos
                            <ChevronUp className="ml-2 h-5 w-5" />
                        </Button>
                    )}

                    <Button
                        onClick={() => (window.location.href = "https://casadecomidas.vercel.app/")}
                        className="relative flex items-center justify-start gap-4 px-6 py-6 bg-yellow-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 w-auto"
                    >
                        <div className="flex flex-col items-start">
                            <span className="leading-tight text-base">Haz tu encargo online</span>
                        </div>
                    </Button>

                </div>
            </div>
        </section>

    );
}
