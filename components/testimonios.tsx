import { Star } from 'lucide-react'

const testimonials = [
    {
        name: "Laura Martínez",
        role: "Cliente habitual",
        text: "¡Me encanta Casa Loly! La comida siempre es deliciosa y fresca. Recomiendo las albóndigas a la jardinera, son mi plato favorito.",
        rating: 5,
    },
    {
        name: "Carlos López",
        role: "Organizador de eventos",
        text: "Contraté el catering de Casa Loly para una reunión familiar y fue espectacular. Todo el mundo quedó encantado con la calidad de los platos.",
        rating: 5,
    },
    {
        name: "María González",
        role: "Vecina del barrio",
        text: "Desde que descubrí Casa Loly, ya no cocino los fines de semana. Sus arroces son increíbles y siempre tienen un trato excelente.",
        rating: 5,
    },
]

export default function TestimonialsSection() {
    return (
        <section className="w-full py-16 bg-gradient-to-br from-yellow-50 to-orange-100" id="testimonios">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-5xl text-gray-800 text-center mb-12">
                    Lo que dicen nuestros clientes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-gray-800">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                    <div className="flex">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 italic mb-4">&quot;{testimonial.text}&quot;</p>
                            </div>
                            <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mt-4" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}