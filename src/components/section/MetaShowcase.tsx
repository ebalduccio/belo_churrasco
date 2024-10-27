'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Star, Clock, Info } from 'lucide-react';
import Image from 'next/image';

// Dados expandidos das carnes
const meats = [
    {
        id: 'picanha',
        name: 'Picanha',
        description: 'Corte nobre e suculento',
        image: '/images/picanha.png',
        prepTime: '40-50 min',
        rating: 4.9,
        details: {
            weight: '800g - 1.2kg',
            temperature: 'Ao ponto',
            tips: 'Deixe descansar por 5-10 minutos após o preparo'
        }
    },
    {
        id: 'costela',
        name: 'Costela',
        description: 'Macia e saborosa',
        image: '/images/costela.png',
        prepTime: '6-8 horas',
        rating: 4.8,
        details: {
            weight: '2.5kg - 3kg',
            temperature: 'Bem passada',
            tips: 'Cozinhar em fogo baixo para máxima suculência'
        }
    },
    {
        id: 'linguica',
        name: 'Linguiça',
        description: 'Temperada e defumada',
        image: '/images/linguica.png',
        prepTime: '20-25 min',
        rating: 4.7,
        details: {
            weight: '400g - 500g',
            temperature: 'Bem passada',
            tips: 'Fure levemente antes de assar'
        }
    },
    {
        id: 'fraldinha',
        name: 'Fraldinha',
        description: 'Textura macia e sabor intenso',
        image: '/images/fraldinha.png',
        prepTime: '35-45 min',
        rating: 4.6,
        details: {
            weight: '700g - 900g',
            temperature: 'Ao ponto',
            tips: 'Cortar contra as fibras da carne'
        }
    },
];

// Componente do cartão de carne melhorado
interface MeatCardProps {
    name: string;
    description: string;
    image: string;
    prepTime: string;
    rating: number;
    details: {
        weight: string;
        temperature: string;
        tips: string;
    };
}

const MeatCard: React.FC<MeatCardProps> = ({
    name,
    description,
    image,
    prepTime,
    rating,
    details
}) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <Card className="relative bg-white/90 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-3xl font-bold text-orange-700 mb-2">{name}</CardTitle>
                        <CardDescription className="text-lg text-orange-600">{description}</CardDescription>
                    </div>
                    <motion.div
                        className="flex items-center gap-1 bg-orange-100 px-3 py-1 rounded-full"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                        <span className="text-orange-700 font-semibold">{rating}</span>
                    </motion.div>
                </div>
            </CardHeader>

            <CardContent className="relative">
                <motion.div
                    className="relative rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative w-full h-64">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover rounded-lg shadow-md"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={false}
                            quality={85}
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <div className="flex items-center gap-4 text-white">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>{prepTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Flame className="w-5 h-5" />
                                <span>{details.temperature}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <AnimatePresence>
                    {showDetails && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 bg-orange-50 rounded-lg p-4"
                        >
                            <h4 className="font-semibold text-orange-800 mb-2">Detalhes do Preparo</h4>
                            <ul className="space-y-2 text-orange-700">
                                <li className="flex items-center gap-2">
                                    <span className="font-medium">Peso ideal:</span> {details.weight}
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="font-medium">Dica do chef:</span> {details.tips}
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>

            <CardFooter className="pt-4">
                <Button
                    variant="outline"
                    className="w-full bg-orange-50 hover:bg-orange-100 border-orange-200 text-orange-700"
                    onClick={() => setShowDetails(!showDetails)}
                >
                    <Info className="w-4 h-4 mr-2" />
                    {showDetails ? 'Ocultar Detalhes' : 'Ver Detalhes'}
                </Button>
            </CardFooter>
        </Card>
    );
};

// Componente principal do showcase
export const MeatShowcase: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background com gradiente e padrão */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 opacity-50" />
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(234, 88, 12, 0.1) 1px, transparent 0)',
                backgroundSize: '40px 40px'
            }} />

            <div className="relative">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold text-orange-800 mb-4">
                        Nossas Carnes Suculentas
                    </h2>
                    <p className="text-xl text-orange-600 max-w-2xl mx-auto">
                        Selecionamos os melhores cortes para sua experiência gastronômica
                    </p>
                </motion.div>

                <Carousel
                    className="w-full max-w-5xl mx-auto"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {meats.map((meat, index) => (
                            <CarouselItem key={meat.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <MeatCard {...meat} />
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12 bg-orange-100 hover:bg-orange-200 text-orange-700" />
                    <CarouselNext className="hidden md:flex -right-12 bg-orange-100 hover:bg-orange-200 text-orange-700" />
                </Carousel>
            </div>
        </section>
    );
};

export default MeatShowcase;