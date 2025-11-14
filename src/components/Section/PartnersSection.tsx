"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const partnersData = [
    { key: "franchiseIT", logo: "/images/franchise_it.png" },
    { key: "boj", logo: "/images/bojs.png" },
    { key: "pari", logo: "/images/paris.png" },
    { key: "bym", logo: "/images/bym.jpg" },
    { key: "cap", logo: "/images/cap.png" },
    { key: "pro", logo: "/images/pro.png" },
    { key: "stone", logo: "/images/stone.png" },
    { key: "kom", logo: "/images/kom.png" },
    { key: "cavi", logo: "/images/cavi.png" },
    { key: "jd", logo: "/images/jd.png" },
    { key: "gvb", logo: "/images/gvb.png" },
    { key: "hz", logo: "/images/hz.png" }

];

export default function PartnersSection() {
    const { t } = useTranslation();

    const duplicatedPartners = [...partnersData, ...partnersData];

    return (
        <section className="relative w-full py-20 bg-gradient-to-br from-white via-gray-50 to-green-50 overflow-hidden">
            {/* Titre */}
            <div className="text-center mb-12 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-[2rem] md:text-[3rem] font-heading font-bold text-gray-900"
                >
                    {t("partners.title")}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mt-3 leading-relaxed text-[1rem] md:text-[1.1rem] max-w-3xl mx-auto"
                >
                    {t("partners.description")}
                </motion.p>
            </div>

            {/* Carrousel défilant */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex items-center gap-10 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedPartners.map((partner, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className=" flex items-center justify-center w-52 h-40 md:w-60 md:h-44 flex-shrink-0"
                        >
                            <img
                                src={partner.logo}
                                alt={t(`partners.items.${partner.key}.name`)}
                                className="w-40 h-40 object-contain p-4"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* léger dégradé sur les bords pour effet immersif */}
            {/* <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent"></div> */}
        </section>
    );
}
