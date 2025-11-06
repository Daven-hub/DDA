"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEye, FaHeart, FaStar, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { IoDiamondOutline, IoLeafOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function VisionValeurs() {
    const { t } = useTranslation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, duration: 0.8 } },
    };
    const itemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } } };
    const imageVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } } };

    const valeurs = [
        { name: t("visionValeurs.valeurs.0"), icon: FaShieldAlt, color: "text-green-400", bgColor: "bg-green-400/20" },
        { name: t("visionValeurs.valeurs.1"), icon: IoLeafOutline, color: "text-emerald-400", bgColor: "bg-emerald-400/20" },
        { name: t("visionValeurs.valeurs.2"), icon: FaStar, color: "text-yellow-400", bgColor: "bg-yellow-400/20" },
        { name: t("visionValeurs.valeurs.3"), icon: FaHandshake, color: "text-blue-400", bgColor: "bg-blue-400/20" },
        { name: t("visionValeurs.valeurs.4"), icon: IoDiamondOutline, color: "text-purple-400", bgColor: "bg-purple-400/20" },
    ];

    const galleryImages = [
        { src: "/images/lampe.png", alt: "Voyage culturel en Afrique centrale", description: t("visionValeurs.gallery.0.description") },
        { src: "/images/ziba.png", alt: "Collaboration avec les communautés locales", description: t("visionValeurs.gallery.1.description") },
        { src: "/images/danse.png", alt: "Service client d'excellence", description: t("visionValeurs.gallery.2.description") },
    ];

    return (
        <section className="relative w-full px-[10%] py-12 bg-gray-900 text-white overflow-hidden">
            {/* Arrière-plan animé */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="w-full h-full -scale-x-100"
                    style={{ backgroundImage: "url('/images/voyageCulture.png')", backgroundSize: "cover", backgroundPosition: "center" }}
                    animate={{ rotate: [0, 2, 0, -2, 0], scale: [1, 1.02, 1, 1.02, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/10 blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/10 blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/5 blur-lg"></div>

            {/* Contenu principal */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
                {/* Texte et valeurs */}
                <motion.div variants={itemVariants} className="space-y-8">
                    <motion.h2
                        variants={itemVariants}
                        className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-white leading-tight"
                    >
                        {t("visionValeurs.title")}
                    </motion.h2>

                    {/* Vision */}
                    <motion.div
                        variants={itemVariants}
                        className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:-translate-y-2"
                    >
                        <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-accent-green mb-4 flex items-center">
                            <FaEye className="w-5 h-5 mr-3 animate-pulse" />
                            {t("visionValeurs.vision.title")}
                        </h3>
                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-white">
                            {t("visionValeurs.vision.description")}
                        </p>
                    </motion.div>

                    {/* Valeurs */}
                    <motion.div
                        variants={itemVariants}
                        className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:-translate-y-2"
                    >
                        <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-accent-green mb-4 flex items-center">
                            <FaHeart className="w-5 h-5 mr-3 animate-pulse" />
                            {t("visionValeurs.title")}
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {valeurs.map((valeur) => (
                                <motion.li
                                    key={valeur.name}
                                    variants={itemVariants}
                                    className="flex items-center space-x-3 p-3 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="text-[.9rem] md:text-[1.4rem] font-heading font-bold">
                                        {valeur.name}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Galerie d'images */}
                <motion.div variants={itemVariants} className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        {galleryImages.map((img, idx) => (
                            <motion.div
                                key={idx}
                                variants={imageVariants}
                                className={`relative group ${idx === 0 ? "col-span-2" : ""}`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className={`relative ${idx === 0 ? "h-full" : "h-full"} overflow-hidden border border-accent-green flex items-center justify-center bg-white/10`}
                                    animate={{
                                        rotate: [0, idx % 2 === 0 ? -0.5 : 0.5, 0, idx % 2 === 0 ? 0.5 : -0.5, 0],
                                    }}
                                    transition={{
                                        duration: idx === 0 ? 2 : idx === 1 ? 8 : 10,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: idx,
                                    }}
                                    whileHover={{ rotate: [0, idx % 2 === 0 ? -1 : 1, 0], transition: { duration: 1 } }}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-contain "
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <span className="text-white text-sm p-2 bg-black/60 w-full text-center">
                                            {img.description}
                                        </span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
