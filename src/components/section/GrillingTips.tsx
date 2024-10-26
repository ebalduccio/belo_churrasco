'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Utensils, Clock, ThermometerSun, Beef, Users, Trophy, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';

interface GrillingTip {
    icon: React.ReactNode;
    title: string;
    tip: string;
    details: string[];
    category: string;
}

const grillingTips: GrillingTip[] = [
    {
        icon: <Flame className="h-12 w-12 text-orange-500" />,
        title: 'Pré-aqueça a churrasqueira',
        tip: 'Temperature ideal antes de começar',
        details: [
            'Aguarde 30 minutos após acender',
            'Brasa deve estar acinzentada',
            'Temperatura entre 200-250°C',
            'Distribua o carvão uniformemente'
        ],
        category: 'Preparação'
    },
    {
        icon: <Utensils className="h-12 w-12 text-orange-500" />,
        title: 'Use utensílios adequados',
        tip: 'Equipamentos essenciais',
        details: [
            'Pegadores de aço inox',
            'Faca bem afiada',
            'Grelha limpa e resistente',
            'Termômetro de carne'
        ],
        category: 'Equipamentos'
    },
    {
        icon: <Clock className="h-12 w-12 text-orange-500" />,
        title: 'Respeite o tempo de cada carne',
        tip: 'Timing perfeito para cada corte',
        details: [
            'Picanha: 15-20 min por lado',
            'Costela: 6-8 horas em fogo baixo',
            'Fraldinha: 30-40 min total',
            'Deixe a carne descansar após assar'
        ],
        category: 'Tempo'
    },
    {
        icon: <ThermometerSun className="h-12 w-12 text-orange-500" />,
        title: 'Controle a temperatura',
        tip: 'Monitore o calor constantemente',
        details: [
            'Mal passada: 48-54°C',
            'Ao ponto: 55-60°C',
            'Bem passada: acima de 65°C',
            'Use termômetro para precisão'
        ],
        category: 'Temperatura'
    },
    {
        icon: <Beef className="h-12 w-12 text-orange-500" />,
        title: 'Escolha da Carne',
        tip: 'Seleção dos melhores cortes',
        details: [
            'Verifique a cor e textura',
            'Prefira carnes marmorizadas',
            'Observe a data de validade',
            'Compre de fornecedores confiáveis'
        ],
        category: 'Seleção'
    },
    {
        icon: <Users className="h-12 w-12 text-orange-500" />,
        title: 'Porções Corretas',
        tip: 'Quantidade ideal por pessoa',
        details: [
            '400g de carne por adulto',
            'Varie os tipos de carne',
            'Considere acompanhamentos',
            'Prepare 10% extra'
        ],
        category: 'Planejamento'
    },
    {
        icon: <Trophy className="h-12 w-12 text-orange-500" />,
        title: 'Técnicas Avançadas',
        tip: 'Segredos dos mestres',
        details: [
            'Selagem inicial em fogo alto',
            'Descanso pós-preparo',
            'Corte contra as fibras',
            'Marinadas especiais'
        ],
        category: 'Técnicas'
    },
    {
        icon: <Sparkles className="h-12 w-12 text-orange-500" />,
        title: 'Finalização',
        tip: 'Toques finais perfeitos',
        details: [
            'Sal grosso na medida certa',
            'Deixe descansar coberto',
            'Fatie no momento de servir',
            'Harmonize com acompanhamentos'
        ],
        category: 'Finalização'
    }
];

interface GrillingTipCardProps extends GrillingTip {
    index: number;
}

const GrillingTipCard = ({ icon, title, tip, details, category, index }: GrillingTipCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Card className="relative bg-white/90 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <CardHeader className="pb-4">
                    <motion.div
                        className="flex justify-center mb-4 bg-orange-100 rounded-full w-20 h-20 mx-auto items-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {icon}
                    </motion.div>
                    <CardTitle className="text-center text-2xl text-orange-700 mb-2">{title}</CardTitle>
                    <span className="text-center block text-orange-600">{tip}</span>
                </CardHeader>
                <CardContent>
                    <div className="text-center mb-4">
                        <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                            {category}
                        </span>
                    </div>
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4"
                            >
                                <ul className="space-y-2 text-orange-700">
                                    {details.map((detail, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                                            {detail}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <Button
                        variant="ghost"
                        className="w-full mt-4 text-orange-600 hover:text-orange-700 hover:bg-orange-100"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Ver menos' : 'Ver mais'}
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export const GrillingTipsSection: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-100 via-orange-200 to-orange-300 opacity-50" />
            <div className="absolute inset-0" style={{
                backgroundImage: `
                    radial-gradient(circle at 1px 1px, rgba(234, 88, 12, 0.1) 1px, transparent 0)
                `,
                backgroundSize: '40px 40px'
            }} />

            <div className="relative">
                <motion.div
                    className="text-center mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-5xl font-bold text-orange-800 mb-6"
                        whileInView={{ scale: [0.9, 1] }}
                        transition={{ duration: 0.5 }}
                    >
                        Dicas para um Churrasco Perfeito
                    </motion.h2>
                    <p className="text-xl text-orange-600">
                        Aprenda com nossos especialistas os segredos para preparar
                        um churrasco excepcional que vai impressionar seus convidados
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {grillingTips.map((tip, index) => (
                        <GrillingTipCard key={index} {...tip} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GrillingTipsSection;