"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const sectors = [
    {
        key: "voyages",
        titleKey: "sectors.voyages",
        logo: "/DC.png",
    },
    {
        key: "vins",
        titleKey: "sectors.vins",
        logo: "/images/sparking.png",
    },
    {
        key: "digital",
        titleKey: "sectors.digital",
        logo: "/images/mindz.png",
    },
    {
        key: "evenements",
        titleKey: "sectors.evenements",
        logo: "/images/brunch.jpg",
    },
    
];

export default function SecteursActivite() {
    const { t } = useTranslation();

    return (
        <section
            id="secteurs"
            className="relative w-full min-h-screen scroll-mt-32 overflow-hidden mt-[120px]"
        >
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: "url('/images/ar.png')" }}
                />
            </div>

            <div className="relative z-10 py-24 px-[10%]">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                        {t("sectors.title")}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                        {t("sectors.subtitle")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 place-items-center">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={sector.key}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                to={`/secteurs/${sector.key}`}
                                className="group flex flex-col items-center text-center transition-transform duration-500 hover:scale-105"
                            >
                                <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center bg-white/10 rounded-2xl backdrop-blur-md shadow-xl hover:bg-white/20 transition-all">
                                    <img
                                        src={sector.logo}
                                        alt={t(sector.titleKey)}
                                        className="w-32 md:w-48 h-auto object-contain drop-shadow-[0_4px_15px_rgba(255,255,255,0.4)]"
                                    />
                                </div>
                                <h3 className="mt-6 text-lg md:text-xl font-semibold text-white transition-colors">
                                    {t(sector.titleKey)}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}