'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock, ChevronDown, Instagram, Facebook } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
    label: string;
    href: string;
    section?: string;
    submenu?: NavItem[];
}

interface NavbarProps {
    transparent?: boolean;
    onNavClick: (ref: React.RefObject<HTMLDivElement>) => void;
    navRefs: {
        [key: string]: React.RefObject<HTMLDivElement>;
    };
}

const navItems: NavItem[] = [
    {
        label: 'Home',
        href: '/',
        section: 'home'
    },
    {
        label: 'Cardápio',
        href: '/cardapio',
        section: 'cardapio',
        submenu: [
            { label: 'Carnes Nobres', href: '/carnes-nobres' },
            { label: 'Acompanhamentos', href: '/acompanhamentos' },
            { label: 'Bebidas', href: '/bebidas' },
        ]
    },
    {
        label: 'Dicas',
        href: '/dicas',
        section: 'dicas'
    },
    {
        label: 'Experiência',
        href: '/experiencia',
        section: 'experiencia'
    }
];

export const Navbar: React.FC<NavbarProps> = ({ transparent = false, onNavClick, navRefs }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Determinar qual seção está visível
            const sections = Object.keys(navRefs);
            for (const section of sections) {
                const element = navRefs[section].current;
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navRefs]);

    const handleNavClick = (e: React.MouseEvent, section?: string) => {
        e.preventDefault();
        if (section && navRefs[section]) {
            onNavClick(navRefs[section]);
            setIsMobileMenuOpen(false);
        }
    };

    const navbarBackground = transparent
        ? isScrolled
            ? 'bg-white/90 backdrop-blur-md'
            : 'bg-transparent'
        : 'bg-white';

    return (
        <>
            {/* Top Info Bar */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="hidden lg:block bg-orange-900 text-orange-50 py-2"
            >
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>(71) 9 9157-8227</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>Rua de Abrantes - Salvador, BA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>Ter-Dom: 11h às 23h</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-orange-200 transition-colors">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:text-orange-200 transition-colors">
                            <Facebook className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Main Navbar */}
            <motion.nav
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className={`sticky top-0 z-50 ${navbarBackground} shadow-md transition-all duration-300`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="cursor-pointer relative h-12 w-32"
                            onClick={(e) => handleNavClick(e, 'home')}
                        >
                            <Image
                                src="/images/belogo.png"
                                alt="Bello's Churrasco Logo"
                                fill
                                sizes="(max-width: 768px) 100vw, 128px"
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => setHoveredItem(item.label)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {item.submenu ? (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    className={`flex items-center gap-1 hover:text-orange-600 ${activeSection === item.section
                                                            ? 'text-orange-600 font-semibold'
                                                            : 'text-orange-800'
                                                        }`}
                                                    onClick={(e) => handleNavClick(e, item.section)}
                                                >
                                                    {item.label}
                                                    <ChevronDown className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="bg-white rounded-lg shadow-lg p-2 min-w-[200px]">
                                                {item.submenu.map((subItem) => (
                                                    <DropdownMenuItem
                                                        key={subItem.label}
                                                        className="hover:bg-orange-50 rounded cursor-pointer p-2 text-orange-700"
                                                    >
                                                        {subItem.label}
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : (
                                        <motion.a
                                            href={item.href}
                                            className={`px-4 py-2 rounded-full transition-colors relative ${activeSection === item.section
                                                    ? 'text-orange-600 font-semibold'
                                                    : 'text-orange-800 hover:text-orange-600'
                                                }`}
                                            onClick={(e) => handleNavClick(e, item.section)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {item.label}
                                            {hoveredItem === item.label && (
                                                <motion.div
                                                    layoutId="navbar-hover"
                                                    className="absolute inset-0 bg-orange-100 rounded-full -z-10"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                />
                                            )}
                                        </motion.a>
                                    )}
                                </div>
                            ))}
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                                Reservar
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="lg:hidden text-orange-800"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t"
                        >
                            <div className="container mx-auto px-4 py-4">
                                {navItems.map((item) => (
                                    <div key={item.label} className="py-2">
                                        {item.submenu ? (
                                            <div className="space-y-2">
                                                <div
                                                    className={`font-medium mb-2 cursor-pointer ${activeSection === item.section
                                                            ? 'text-orange-600'
                                                            : 'text-orange-800'
                                                        }`}
                                                    onClick={(e) => handleNavClick(e, item.section)}
                                                >
                                                    {item.label}
                                                </div>
                                                {item.submenu.map((subItem) => (
                                                    <a
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        className="block pl-4 py-2 text-orange-600 hover:text-orange-800 hover:bg-orange-50 rounded"
                                                    >
                                                        {subItem.label}
                                                    </a>
                                                ))}
                                            </div>
                                        ) : (
                                            <a
                                                href={item.href}
                                                className={`block py-2 ${activeSection === item.section
                                                        ? 'text-orange-600 font-semibold'
                                                        : 'text-orange-800 hover:text-orange-600'
                                                    }`}
                                                onClick={(e) => handleNavClick(e, item.section)}
                                            >
                                                {item.label}
                                            </a>
                                        )}
                                    </div>
                                ))}
                                <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                                    Reservar
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navbar;