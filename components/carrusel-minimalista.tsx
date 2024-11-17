"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image"; // Importa el componente Image correctamente desde Next.js.
import type { EmblaCarouselType } from "embla-carousel"; // Importa el tipo correcto.

export default function CarruselMinimalista() {
    const [api, setApi] = React.useState<EmblaCarouselType | null>(null); // Usa el tipo correcto.

    const images = [
        "/image1.jpg", // Ruta de la primera imagen
        "/image2.jpg", // Ruta de la segunda imagen
        "/image3.jpg", // Ruta de la tercera imagen
        "/image4.jpg", // Ruta de la cuarta imagen
        "/image5.jpg", // Ruta de la quinta imagen
    ];

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            if (api) {
                const currentIndex = api.selectedScrollSnap();
                if (currentIndex === images.length - 1) {
                    api.scrollTo(0); // Vuelve al inicio si está en el último elemento.
                } else {
                    api.scrollNext();
                }
            }
        }, 3000); // Cambia de slide cada 3 segundos.

        return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta.
    }, [api, images.length]);

    return (
        <Carousel setApi={(api) => setApi(api || null)} className="w-full mx-auto">
            <CarouselContent>
                {images.map((src, index) => (
                    <CarouselItem key={index} className="w-full">
                        <Card className="border-none shadow-none">
                            <CardContent className="p-0">
                                {/* Usamos el componente Image para optimización */}
                                <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh]">
                                    <Image
                                        src={src}
                                        alt={`Imagen ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={index === 0} // Optimiza la primera imagen para mejorar el rendimiento
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* Opcional: Botones de navegación manual */}
        </Carousel>
    );
}
