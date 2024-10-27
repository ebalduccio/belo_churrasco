'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Camera, MapPin, Calendar, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

// Interfaces
interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    comment: string;
    rating: number;
    location: string;
    date: string;
}

interface GalleryImage {
    id: number;
    url: string;
    title: string;
}

interface Stat {
    icon: React.ReactNode;
    value: string;
    label: string;
}

interface TestimonialCardProps extends Testimonial { }

interface GalleryImageProps {
    url: string;
    title: string;
}

// Dados
const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Roberto Silva',
        role: 'Churrasqueiro Profissional',
        image: '/placeholder.svg?height=100&width=100',
        comment: 'Incrível a qualidade das carnes e o atendimento. Superou todas as expectativas!',
        rating: 5,
        location: 'São Paulo, SP',
        date: '15/10/2024'
    },
    {
        id: 2,
        name: 'Ana Paula Santos',
        role: 'Chef de Cozinha',
        image: '/placeholder.svg?height=100&width=100',
        comment: 'Os cortes são excepcionais e o preparo é impecável. Recomendo fortemente!',
        rating: 5,
        location: 'Rio de Janeiro, RJ',
        date: '22/09/2024'
    },
    {
        id: 3,
        name: 'Carlos Mendes',
        role: 'Entusiasta de Churrasco',
        image: '/placeholder.svg?height=100&width=100',
        comment: 'Melhor churrasco que já experimentei. O sabor é único e o ambiente é acolhedor.',
        rating: 5,
        location: 'Belo Horizonte, MG',
        date: '05/10/2024'
    }
];

const galleryImages: GalleryImage[] = [
    { id: 1, url: '/images/picanhabrasa.png', title: 'Picanha na Brasa' },
    { id: 2, url: '/images/costelanobafo.png', title: 'Costela no Bafo' },
    { id: 3, url: '/images/ambiente.png', title: 'Ambiente Acolhedor' },
    { id: 4, url: '/images/preparo.png', title: 'Preparo Especial' },
    { id: 5, url: '/images/carnepremium.png', title: 'Carnes Premium' },
    { id: 6, url: '/images/moments.png', title: 'Momentos Especiais' },
];

const stats: Stat[] = [
    { icon: <Users className="w-6 h-6" />, value: '10k+', label: 'Clientes Satisfeitos' },
    { icon: <Heart className="w-6 h-6" />, value: '98%', label: 'Taxa de Satisfação' },
    { icon: <MapPin className="w-6 h-6" />, value: '3', label: 'Unidades' },
    { icon: <Calendar className="w-6 h-6" />, value: '15+', label: 'Anos de Experiência' },
];

const TestimonialCard: React.FC<Testimonial> = ({
    name,
    role,
    image,
    comment,
    rating,
    location,
    date
}) => (
    <Card className="bg-white/90 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={image}
                    alt={name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                />
                <div>
                    <h4 className="font-semibold text-lg text-orange-800">{name}</h4>
                    <p className="text-orange-600">{role}</p>
                </div>
            </div>
            <div className="mb-4">
                <Quote className="w-8 h-8 text-orange-400 mb-2" />
                <p className="text-orange-700">{comment}</p>
            </div>
            <div className="flex items-center justify-between text-sm text-orange-600">
                <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {location}
                </div>
                <div>{date}</div>
            </div>
            <div className="mt-4 flex gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
            </div>
        </CardContent>
    </Card>
);

const GalleryImage: React.FC<GalleryImageProps> = ({ url, title }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <motion.div
                    className="relative group cursor-pointer overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.02 }}
                >
                    <img
                        src={url}
                        alt={title}
                        className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center">
                            <Camera className="w-8 h-8 mx-auto mb-2" />
                            <p className="text-lg font-medium">{title}</p>
                        </div>
                    </div>
                </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
                <img src={url} alt={title} className="w-full rounded-lg" />
            </DialogContent>
        </Dialog>
    );
};

export const ExperienceSection: React.FC = () => {

    return (
        <section className="py-24 px-4 md:px-8 relative bg-gradient-to-b from-orange-50 to-orange-100">
            {/* Background Pattern */}
            <div className="absolute inset-0" style={{
                backgroundImage: `
                    radial-gradient(circle at 1px 1px, rgba(234, 88, 12, 0.1) 1px, transparent 0)
                `,
                backgroundSize: '40px 40px'
            }} />

            <div className="relative max-w-7xl mx-auto">
                {/* Estatísticas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg"
                        >
                            <div className="flex justify-center mb-2 text-orange-500">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-orange-700 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-orange-600">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Depoimentos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-orange-800 mb-4">
                            O Que Dizem Nossos Clientes
                        </h2>
                        <p className="text-xl text-orange-600">
                            Experiências autênticas compartilhadas por quem já viveu momentos especiais conosco
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} {...testimonial} />
                        ))}
                    </div>
                </motion.div>

                {/* Galeria */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-orange-800 mb-4">
                            Nossa Galeria
                        </h2>
                        <p className="text-xl text-orange-600 mb-8">
                            Momentos especiais e pratos incríveis capturados em imagens
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image) => (
                            <GalleryImage key={image.id} {...image} />
                        ))}
                    </div>
                </motion.div>

                {/* CTA Final */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <Button
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        Reserve Sua Experiência
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;