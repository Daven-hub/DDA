"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const partnersData = [
    {
        key: "franchiseIT",
        logo: "/images/franchise_it.png",
    },
    {
        key: "boj",
        logo: "/images/boj.png",
    },
    {
        key: "pari",
        logo: "/images/paris.png",
    }

];

export default function PartnersSection() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full py-12 px-[10%] bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight"
                >
                    {t("partners.title")}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-black/90 mt-3 leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto"
                >
                    {t("partners.description")}
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
            >
                {partnersData.map((partner, index) => (
                    <motion.div
                        key={partner.key}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
                        }}
                        className="relative bg-white shadow-[0_6px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_45px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out border border-gray-100 p-8 flex flex-col items-center text-center"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-transparent to-green-200/30"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <motion.img
                            src={partner.logo}
                            alt={t(`partners.items.${partner.key}.name`)}
                            className="relative z-10 w-36 h-36 object-contain mb-5"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        />

                        <div className="relative z-10">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                                {t(`partners.items.${partner.key}.name`)}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                {t(`partners.items.${partner.key}.description`)}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
