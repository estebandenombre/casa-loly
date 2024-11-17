import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Laura Martínez",
        role: "Cliente habitual",
        text: "¡Me encanta Casa Loly! La comida siempre es deliciosa y fresca. Recomiendo las albóndigas a la jardinera, son mi plato favorito.",
    },
    {
        name: "Carlos López",
        role: "Organizador de eventos",
        text: "Contraté el catering de Casa Loly para una reunión familiar y fue espectacular. Todo el mundo quedó encantado con la calidad de los platos.",
    },
    {
        name: "María González",
        role: "Vecina del barrio",
        text: "Desde que descubrí Casa Loly, ya no cocino los fines de semana. Sus arroces son increíbles y siempre tienen un trato excelente.",
    },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="w-full py-16 bg-gray-50" id="testimonials">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-5xl text-gray-800">
                    Testimonios
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 md:text-lg mt-4 mb-8">
                    Descubre lo que nuestros clientes tienen que decir sobre nosotros.
                </p>

                <div className="flex flex-col items-center space-y-4 p-4 bg-white shadow-md rounded-lg max-w-lg mx-auto">
                    <h3 className="font-serif text-xl font-bold text-gray-800">
                        {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                    <p className="max-w-lg text-gray-600 italic">
                        &quot;{testimonials[currentIndex].text}&quot;
                    </p>
                </div>

                {/* Botones de navegación */}
                <div className="flex justify-center items-center gap-6 mt-6">
                    <button
                        onClick={handlePrev}
                        className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                        aria-label="Siguiente"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>
                </div>

                {/* Indicadores */}
                <div className="mt-4 flex justify-center space-x-2">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentIndex
                                ? "bg-yellow-500"
                                : "bg-yellow-300 hover:bg-yellow-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
