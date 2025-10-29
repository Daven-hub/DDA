import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { serviceData } from "../data/Service";
import { ArrowLeft, CheckCircle } from "lucide-react";
import EvenementSection from "../components/Section/EvenementSection";
import { useTranslation } from "react-i18next";

const ServiceDetail: React.FC = () => {
    const { t } = useTranslation();
    const { titleKey } = useParams<{ titleKey: string }>();

    // Décodage de l'URL et recherche du service
    const decodedTitle = decodeURIComponent(titleKey || "");
    const service = serviceData.find((s) => t(s.titleKey) === decodedTitle);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                {t("servicess.notFound")}
            </div>
        );
    }

    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden"
            >
                {/* Hero Banner */}
                <div
                    className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                    <motion.div
                        className="relative z-10 text-center text-white px-6 md:px-12"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                        <h1 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-tight mb-3 drop-shadow-lg">
                            {t(service.titleKey)}
                        </h1>
                        {service.subtitleKey && (
                            <p className="text-lg md:text-xl text-accent-yellow font-medium">
                                {t(service.subtitleKey)}
                            </p>
                        )}
                    </motion.div>
                </div>

                {/* Main Content */}
                <div className="px-[10%] py-16 grid grid-cols-1 lg:grid-cols-3 gap-14">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-14">
                        {/* About */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/80 backdrop-blur-sm shadow-md p-8 border border-gray-100"
                        >
                            <h2 className="text-3xl font-heading font-bold text-black/90 mb-5">
                                {t("servicess.aboutTitle")}
                            </h2>
                            <p className="leading-relaxed text-gray-800 mb-5">
                                {service.descriptionKey && t(service.descriptionKey)}
                            </p>
                            {service.longDescriptionKey && (
                                <p className="leading-relaxed text-gray-700">
                                    {t(service.longDescriptionKey)}
                                </p>
                            )}
                        </motion.div>

                        {/* Highlights */}
                        {service.highlightsKey && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="bg-white/80 backdrop-blur-sm shadow-md p-8 border border-gray-100"
                            >
                                <h3 className="text-2xl font-heading font-bold mb-6">
                                    {t("servicess.highlightsTitle")}
                                </h3>
                                <ul className="space-y-4 text-gray-700">
                                    {service.highlightsKey.map((key, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <CheckCircle className="text-accent-yellow w-6 h-6" />
                                            {t(key)}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* Gallery */}
                        {service.gallery && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="bg-white/80 backdrop-blur-sm shadow-md p-8 border border-gray-100"
                            >
                                <h3 className="text-2xl font-heading font-bold mb-6">
                                    {t("servicess.galleryTitle")}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {service.gallery.map((img, i) => (
                                        <motion.img
                                            key={i}
                                            src={img}
                                            alt={`${t(service.titleKey)}-${i}`}
                                            className="shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                                            whileHover={{ scale: 1.05 }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Quote */}
                        {service.quoteKey && (
                            <motion.blockquote
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="bg-accent-blue/5 border-l-4 border-accent-yellow p-6 italic text-gray-700 shadow-sm"
                            >
                                {t(service.quoteKey)}
                            </motion.blockquote>
                        )}

                        {/* Video */}
                        {service.video && (
                            <motion.div
                                className="mt-12 overflow-hidden shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <video
                                    className="w-full h-[400px] object-cover"
                                    controls
                                    poster={service.gallery?.[0]}
                                >
                                    <source src={service.video} type="video/mp4" />
                                    {t("servicess.videoNotSupported")}
                                </video>
                            </motion.div>
                        )}

                        {/* Contact CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-center lg:text-left"
                        >
                            <h3 className="text-2xl font-heading font-bold mb-4">
                                {t("servicess.contactTitle")}
                            </h3>
                            <p className="text-gray-700 mb-6">
                                {t("servicess.contactDescription")}
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block px-8 py-3 bg-accent-yellow text-accent-blue font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform"
                            >
                                {service.ctaKey ? t(service.ctaKey) : t("service.contactCTA")}
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <motion.aside
                        className="bg-white/90 backdrop-blur-sm shadow-lg p-8 border-t-4 border-accent-yellow sticky top-24 self-start"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-xl font-bold mb-5 text-accent-blue">
                            {t("servicess.otherServices")}
                        </h4>
                        <ul className="space-y-4 mb-8">
                            {serviceData
                                .filter((s) => s.titleKey !== service.titleKey)
                                .map((s) => (
                                    <li key={s.titleKey}>
                                        <Link
                                            to={`/services/${encodeURIComponent(t(s.titleKey))}`}
                                            className="block text-gray-700 hover:text-accent-yellow font-medium transition"
                                        >
                                            {t(s.titleKey)}
                                        </Link>
                                    </li>
                                ))}
                        </ul>

                        <div className="space-y-6">
                            <motion.img
                                src="/images/present.jpg"
                                alt="Publicité 1"
                                className="shadow-md hover:scale-[1.02] transition-transform duration-300"
                            />
                            <motion.img
                                src="/images/duchesse.png"
                                alt="Publicité 2"
                                className="shadow-md hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    </motion.aside>
                </div>

                {/* Back Button */}
                <div className="px-[10%] pb-20 flex justify-center md:justify-start">
                    <motion.div whileHover={{ x: -5 }}>
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-yellow font-semibold transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            {t("servicess.backToServices")}
                        </Link>
                    </motion.div>
                </div>
            </motion.section>

            <EvenementSection />
        </>
    );
};

export default ServiceDetail;
