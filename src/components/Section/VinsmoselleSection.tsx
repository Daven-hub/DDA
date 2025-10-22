import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function VinsmoselleSection() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full px-[10%] py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Images à gauche */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4"
                >
                    <div className="col-span-2 h-64 overflow-hidden shadow-xl">
                        <img
                            src="/images/vins1.png"
                            alt={t("vinsmoselle.alt1")}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} className="h-40 overflow-hidden shadow-lg">
                        <img
                            src="/images/vins2.png"
                            alt={t("vinsmoselle.alt2")}
                            className="object-cover w-full h-full"
                        />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} className="h-40 overflow-hidden shadow-lg">
                        <img
                            src="/images/caraf.jpg"
                            alt={t("vinsmoselle.alt3")}
                            className="object-cover w-full h-full"
                        />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} className="col-span-2 h-52 overflow-hidden shadow-lg">
                        <img
                            src="/images/present.jpg"
                            alt={t("vinsmoselle.alt4")}
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </motion.div>

                {/* Texte à droite */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-6 relative z-20"
                >
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight">
                        {t("vinsmoselle.title")}
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-pink-600 to-orange-500">
                            {t("vinsmoselle.subtitle")}
                        </span>
                    </h2>

                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl">
                        {t("vinsmoselle.description")}
                    </p>

                    <div className="bg-gray-50/50 p-4 rounded-xl border-l-4 border-red-600 shadow-sm">
                        <h3 className="text-lg font-semibold text-red-700 mb-2">
                            {t("vinsmoselle.ddaTitle")}
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-[.93rem] text-gray-700">
                            <li>{t("vinsmoselle.dda1")}</li>
                            <li>{t("vinsmoselle.dda2")}</li>
                            <li>{t("vinsmoselle.dda3")}</li>
                            <li>{t("vinsmoselle.dda4")}</li>
                            {/* <li>{t("vinsmoselle.dda5")}</li> */}
                        </ul>
                    </div>

                    <div className="flex gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/services"
                            className="px-6 py-3 bg-gradient-to-r from-red-700 to-pink-600 text-white font-semibold shadow-lg"
                        >
                            {t("vinsmoselle.servicesButton")}
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/contact"
                            className="px-6 py-3 border-2 border-red-700 text-gray-800 font-semibold hover:bg-gray-100 transition"
                        >
                            {t("vinsmoselle.contactButton")}
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Image de fond subtile côté droit */}
            <div className="absolute inset-y-0 right-0 w-1/2 opacity-10 mix-blend-multiply">
                <img
                    src="/images/vin.png"
                    alt={t("vinsmoselle.backgroundAlt")}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Background décoratif (bulles floues) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-32 left-20 w-72 h-72 bg-red-400 mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute bottom-32 right-20 w-64 h-64 bg-orange-400 mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
            </motion.div>
        </section>
    );
}
