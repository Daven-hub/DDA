"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FaEye,
    FaHeart,
    FaStar,
    FaShieldAlt,
    FaHandshake
} from "react-icons/fa";
import {
    IoDiamondOutline,
    IoLeafOutline
} from "react-icons/io5";

export default function VisionValeurs() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 0.8,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    };

    const valeurs = [
        {
            name: "Authenticité",
            icon: FaShieldAlt,
            color: "text-green-400",
            bgColor: "bg-green-400/20"
        },
        {
            name: "Responsabilité",
            icon: IoLeafOutline,
            color: "text-emerald-400",
            bgColor: "bg-emerald-400/20"
        },
        {
            name: "Qualité",
            icon: FaStar,
            color: "text-yellow-400",
            bgColor: "bg-yellow-400/20"
        },
        {
            name: "Collaboration locale",
            icon: FaHandshake,
            color: "text-blue-400",
            bgColor: "bg-blue-400/20"
        },
        {
            name: "Excellence du service",
            icon: IoDiamondOutline,
            color: "text-purple-400",
            bgColor: "bg-purple-400/20"
        },
    ];

    // Images pour la galerie
    const galleryImages = [
        {
            src: "/images/vc.png",
            alt: "Voyage culturel en Afrique centrale",
            description: "Expériences culturelles authentiques"
        },
        {
            src: "/images/caraf.jpg",
            alt: "Collaboration avec les communautés locales",
            description: "Partenariats durables"
        },
        {
            src: "/images/client.png",
            alt: "Service client d'excellence",
            description: "Qualité premium"
        }
    ];

    return (
        <section className="relative w-full px-[10%] py-12 bg-gray-900 text-white overflow-hidden">
            {/* Container pour l'image de fond avec rotation */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="w-full h-full -scale-x-100"
                    style={{
                        backgroundImage: "url('/images/voyageCulture.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    animate={{
                        rotate: [0, 2, 0, -2, 0],
                        scale: [1, 1.02, 1, 1.02, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>


            {/* Overlay noir pour meilleure lisibilité */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Éléments décoratifs */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/10 blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/10 blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/5 blur-lg"></div>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
                {/* Texte à gauche */}
                <motion.div variants={itemVariants} className="space-y-8">
                    <motion.h2
                        variants={itemVariants}
                        className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-white leading-tight"
                    >
                        Notre <span className="">Vision</span> &
                        Nos <span className="">Valeurs</span>
                    </motion.h2>

                    <motion.div variants={itemVariants} className="space-y-8">
                        {/* Vision */}
                        <motion.div
                            variants={itemVariants}
                            className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:transform hover:-translate-y-2"
                        >
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-accent-green mb-4 flex items-center">
                                <FaEye className="w-5 h-5 mr-3 animate-pulse" />
                                Vision
                            </h3>
                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-white">
                                Devenir une référence en Afrique centrale pour les voyages culturels responsables,
                                l'organisation d'événements haut de gamme et la stratégie de marque authentique.
                            </p>
                        </motion.div>

                        {/* Valeurs */}
                        <motion.div
                            variants={itemVariants}
                            className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:transform hover:-translate-y-2"
                        >
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-accent-green mb-4 flex items-center">
                                <FaHeart className="w-5 h-5 mr-3 animate-pulse" />
                                Valeurs
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {valeurs.map((valeur) => {
                                    return (
                                        <motion.li
                                            key={valeur.name}
                                            variants={itemVariants}
                                            className="flex items-center space-x-3 p-3 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="text-[.9rem] md:text-[1.4rem] font-heading font-bold">{valeur.name}</span>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Galerie d'images à droite avec de vraies images */}
                <motion.div variants={itemVariants} className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        {/* Grande image principale */}
                        <motion.div
                            variants={imageVariants}
                            className="relative group col-span-2"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="relative h-56 overflow-hidden border border-white/10"
                                whileHover={{
                                    rotate: [0, -1, 1, -1, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                <img
                                    src={galleryImages[0].src}
                                    alt={galleryImages[0].alt}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-lg font-semibold text-center px-4">
                                        {galleryImages[0].description}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Deuxième image */}
                        <motion.div
                            variants={imageVariants}
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="relative h-40 overflow-hidden border border-white/10"
                                animate={{
                                    rotate: [0, 0.5, 0, -0.5, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                whileHover={{
                                    rotate: [0, 1, -1, 0],
                                    transition: { duration: 1 }
                                }}
                            >
                                <img
                                    src={galleryImages[1].src}
                                    alt={galleryImages[1].alt}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <span className="text-white text-sm p-2 bg-black/60 w-full">
                                        {galleryImages[1].description}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Troisième image */}
                        <motion.div
                            variants={imageVariants}
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="relative h-40 overflow-hidden border border-white/10"
                                animate={{
                                    rotate: [0, -0.5, 0, 0.5, 0],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                                whileHover={{
                                    rotate: [0, -1, 1, 0],
                                    transition: { duration: 1 }
                                }}
                            >
                                <img
                                    src={galleryImages[2].src}
                                    alt={galleryImages[2].alt}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <span className="text-white text-sm p-2 bg-black/60 w-full">
                                        {galleryImages[2].description}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}