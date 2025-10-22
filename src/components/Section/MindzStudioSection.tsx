import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function MindzStudioSection() {
    const { t } = useTranslation();

    return (
        <section className="relative px-[10%] py-16 overflow-hidden bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Texte */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight">
                        {t("mindzStudio.title")}{" "}
                        <span className="text-accent-green">{t("mindzStudio.subtitle")}</span>
                    </h2>

                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-gray-700">
                        {t("mindzStudio.description")}
                    </p>

                    {/* Liste des services */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[.95rem] text-gray-800">
                        <li className="flex items-center gap-2">
                            <span className="text-accent-yellow">•</span> {t("mindzStudio.services.content")}
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-accent-yellow">•</span> {t("mindzStudio.services.web")}
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-accent-yellow">•</span> {t("mindzStudio.services.strategy")}
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-accent-yellow">•</span> {t("mindzStudio.services.seo")}
                        </li>
                    </ul>

                    {/* CTA */}
                    <div className="flex gap-4 pt-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/realisations"
                            className="px-6 py-3 bg-accent-yellow text-accent-blue font-semibold shadow-lg rounded-lg"
                        >
                            {t("mindzStudio.showcaseButton")}
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/contact"
                            className="px-6 py-3 border-2 border-accent-yellow text-accent-blue font-semibold hover:bg-gray-100 transition rounded-lg"
                        >
                            {t("mindzStudio.quoteButton")}
                        </motion.a>
                    </div>
                </motion.div>

                {/* Images */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative flex justify-center items-center"
                >
                    {/* Image principale */}
                    <div className="relative w-full h-96 overflow-hidden shadow-2xl rounded-2xl">
                        <img
                            src="/images/dev.png"
                            alt={t("mindzStudio.altMainImage")}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Image flottante */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="absolute -bottom-10 -left-10 w-48 h-64 overflow-hidden shadow-xl border-4 border-white rounded-xl"
                    >
                        <img
                            src="/images/marketing.png"
                            alt={t("mindzStudio.altFloatingImage")}
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Arrière-plan décoratif */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-20 right-40 w-64 h-64 bg-purple-400 mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-400 mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            </motion.div>
        </section>
    );
}
