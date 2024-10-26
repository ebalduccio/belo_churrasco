'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronDown, Flame, ArrowRight } from 'lucide-react';

interface FloatingElement {
    id: number;
    delay: number;
    duration: number;
    position: {
        left: string;
        top: string;
    };
}

export const HeroSection: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 250]);

    const y1: MotionValue<number> = useTransform(scrollY, [0, 1000], [0, 300]);
    const y2: MotionValue<number> = useTransform(scrollY, [0, 1000], [0, 200]);
    const logoScale: MotionValue<number> = useTransform(scrollY, [0, 300], [1, 0.8]);
    const titleOpacity: MotionValue<number> = useTransform(scrollY, [0, 300], [1, 0.3]);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        hero.style.backgroundImage = `
            linear-gradient(
                45deg,
                rgba(0, 0, 0, 0.85),
                rgba(139, 69, 19, 0.85)
            ),
            url('/placeholder.svg?height=1080&width=1920')
        `;
    }, []);

    const floatingElements: FloatingElement[] = [
        {
            id: 1,
            delay: 0,
            duration: 3,
            position: { left: '15%', top: '20%' }
        },
        {
            id: 2,
            delay: 1.5,
            duration: 4,
            position: { left: '85%', top: '25%' }
        },
        {
            id: 3,
            delay: 0.8,
            duration: 3.5,
            position: { left: '75%', top: '65%' }
        },
        {
            id: 4,
            delay: 2,
            duration: 3.8,
            position: { left: '25%', top: '70%' }
        },
    ];

    return (
        <section
            ref={heroRef}
            className="relative min-h-[100svh] bg-cover bg-center flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/placeholder.svg?height=1080&width=1920"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={100}
                />
            </div>

            {/* Animated particles - Hidden on mobile */}
            <div className="hidden md:block">
                {floatingElements.map((element) => (
                    <motion.div
                        key={element.id}
                        className="absolute"
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: element.duration,
                            repeat: Infinity,
                            delay: element.delay,
                        }}
                        style={{
                            left: element.position.left,
                            top: element.position.top,
                        }}
                    >
                        <Flame
                            size={32}
                            className="text-orange-500 opacity-50"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Overlay com gradiente */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"
                style={{ opacity: titleOpacity }}
            />

            {/* Logo e Conteúdo principal */}
            <motion.div
                className="relative z-10 text-center text-white px-4 w-full max-w-7xl mx-auto"
                style={{ scale: logoScale }}
            >
                <motion.div
                    className="mb-6 md:mb-8"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto">
                        <Image
                            src="/images/belogo.png"
                            alt="Bello's Churrasco"
                            fill
                            priority
                            className="object-contain"
                            sizes="(max-width: 768px) 128px, 192px"
                            quality={100}
                        />
                    </div>
                </motion.div>

                <div className="space-y-4 md:space-y-6">
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600 font-serif leading-tight"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Bello's Churrasco
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl font-light text-orange-100 max-w-2xl mx-auto"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Maestria em Carnes Nobres
                    </motion.p>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="pt-4 md:pt-6"
                    >
                        <motion.div
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Button
                                size="lg"
                                className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-base md:text-xl px-6 md:px-10 py-6 md:py-8 rounded-full shadow-xl transition-all duration-300"
                            >
                                <motion.span
                                    className="relative z-10 flex items-center gap-2"
                                    animate={{ x: isHovered ? 10 : 0 }}
                                >
                                    Faça sua Reserva
                                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                                </motion.span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-700"
                                    initial={{ x: "100%" }}
                                    animate={{ x: isHovered ? "0%" : "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
            >
                <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-white opacity-80" />
            </motion.div>

            {/* Wave decorativa */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 z-0"
                style={{ y }}
            >
                <svg
                    viewBox="0 0 1440 320"
                    className="w-full"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="rgba(255, 237, 213, 0.1)"
                        d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </motion.div>
        </section>
    );
};

export default HeroSection;