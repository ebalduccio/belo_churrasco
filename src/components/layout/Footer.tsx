'use client'

import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const footerLinks = {
    menu: [
        { label: 'Carnes Nobres', href: '#' },
        { label: 'Acompanhamentos', href: '#' },
        { label: 'Bebidas', href: '#' },
        { label: 'Sobremesas', href: '#' },
    ],
    serviços: [
        { label: 'Eventos Corporativos', href: '#' },
        { label: 'Festas Privadas', href: '#' },
        { label: 'Workshop de Churrasco', href: '#' },
        { label: 'Delivery', href: '#' },
    ],
    horarios: [
        { dia: 'Segunda', horario: 'Fechado' },
        { dia: 'Terça a Quinta', horario: '11h às 23h' },
        { dia: 'Sexta e Sábado', horario: '11h às 00h' },
        { dia: 'Domingo', horario: '11h às 22h' },
    ]
};

export const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <footer className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white">
            {/* Padrão decorativo superior */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

            <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
                {/* Seção Principal */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
                >
                    {/* Logo e Informações */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <div className="relative h-16 w-40 mb-4">
                            <Image
                                src="/images/belogo.png"
                                alt="Bello's Churrasco"
                                fill
                                className="object-contain"
                                sizes="160px"
                            />
                        </div>
                        <p className="text-orange-200">
                            Experiência única em churrasco, tradição e qualidade há mais de 15 anos.
                        </p>
                        <div className="flex space-x-4">
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="bg-orange-700 p-2 rounded-full hover:bg-orange-600 transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="bg-orange-700 p-2 rounded-full hover:bg-orange-600 transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="bg-orange-700 p-2 rounded-full hover:bg-orange-600 transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Menu */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-xl font-semibold text-orange-200">Menu</h3>
                        <ul className="space-y-2">
                            {footerLinks.menu.map((link) => (
                                <motion.li
                                    key={link.label}
                                    whileHover={{ x: 5 }}
                                    className="hover:text-orange-300 transition-colors"
                                >
                                    <a href={link.href} className="flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4" />
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Serviços */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-xl font-semibold text-orange-200">Serviços</h3>
                        <ul className="space-y-2">
                            {footerLinks.serviços.map((link) => (
                                <motion.li
                                    key={link.label}
                                    whileHover={{ x: 5 }}
                                    className="hover:text-orange-300 transition-colors"
                                >
                                    <a href={link.href} className="flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4" />
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contato e Horários */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-xl font-semibold text-orange-200">Contato</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-orange-300 mt-1 flex-shrink-0" />
                                <span>Rua de Abrantes - Salvador, BA</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-orange-300 flex-shrink-0" />
                                <span>(71) 9 9157-8227</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-orange-300 flex-shrink-0" />
                                <span>contato@bellochurrasco.com</span>
                            </li>
                            <li className="pt-4">
                                <p className="text-orange-200 font-semibold mb-2">Horário de Funcionamento:</p>
                                {footerLinks.horarios.map((horario) => (
                                    <div key={horario.dia} className="flex justify-between text-sm">
                                        <span>{horario.dia}</span>
                                        <span className="text-orange-300">{horario.horario}</span>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Copyright */}
                <div className="text-center text-orange-400 text-sm mt-12 pt-8 border-t border-orange-800">
                    <p>© 2024 Bello's Churrasco. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;