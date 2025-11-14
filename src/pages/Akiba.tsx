import { ArrowRight, X } from "lucide-react";
import Banner from "../components/Ux/Banner"
import CtaSection from "../components/Section/CtaSection";
import PartnersSection from "../components/Section/PartnersSection";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Akiba = () => {
    return (
        <>
            <div className="relative w-full min-h-screen scroll-mt-32 overflow-hidden mt-[120px]">
                <Banner imageSrc={"/images/brunch.jpg"} imageAlt={""} title={"The Akiba Brunch"} />
                <AkibaWelcomeSection />
                <AkibaBrunchSection />
                <Objectif />
                <CtaSection />
                <SponsorSection />
                <PerspectivesAvenir />
                <AkibaSection />
                <AkibaGallery/>
                <PartnersSection />
            </div>



        </>
    )
}



"use client";
const AkibaWelcomeSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section
            className="relative w-full min-h-[70vh] flex flex-col items-center justify-center px-[10%] overflow-hidden"
        >
            {/* Image de fond subtile */}
            <div
                className="absolute inset-0 bg-[url('/images/culture.png')] bg-cover bg-center opacity-15"
                style={{ mixBlendMode: "soft-light" }}
            ></div>

            {/* Dégradé coloré par-dessus */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-green-200 to-white opacity-90"></div> */}

            {/* Formes floues décoratives */}
            <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-green-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>

            {/* Contenu principal */}
            <motion.div
                className="relative z-10 text-center space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {t("akibaWelcome.title")}
                </h1>

                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    {t("akibaWelcome.subtitle")}
                </p>

                <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                    {t("akibaWelcome.description")}
                </p>

                <motion.a
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-accent-green text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-green-700 transition-transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {t("akibaWelcome.ctaButton")}
                </motion.a>
            </motion.div>
        </section>
    );
};

export default AkibaWelcomeSection;


export const AkibaBrunchSection: React.FC = () => {
    const { t } = useTranslation();

    const highlights: string[] = t("akibaBrunch.highlights", { returnObjects: true }) as string[];

    return (
        <section className="bg-white px-[10%] py-12">
            <div className="mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* TEXTE */}
                <div>
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-gray-900 leading-tight mb-3">
                        {t("akibaBrunch.subtitle")}
                    </h2>

                    {/* <h3 className="text-[1.3rem] font-heading font-bold text-accent-green mb-6">
                        {t("akibaBrunch.subtitle")}
                    </h3> */}

                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mb-5">
                        {t("akibaBrunch.description")}
                    </p>

                    <h4 className="text-[1.3rem] font-heading font-bold text-accent-green mb-2">
                        {t("akibaBrunch.highlightsTitle")}
                    </h4>
                    <ul className="list-disc ml-6 leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mb-10 space-y-2">
                        {highlights.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>


                </div>

                {/* IMAGE */}
                <div className="relative flex justify-center items-center">
                    <div className="relative">
                        <img
                            src="/images/mo.png"
                            alt={t("akibaBrunch.imageAlt")}
                            className="w-[280px] md:w-[350px] rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};





export const Objectif: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-white px-[10%] py-16">
            <div className="mx-auto grid md:grid-cols-3 gap-10 items-start">
                <div>
                    <div className="relative mb-10">
                        <div className="absolute -top-8 -left-8 w-24 h-24 bg-yellow-400 rounded-md"></div>
                        <h1 className="relative text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-gray-900 leading-tight z-10">
                            {t("objectif.title")}
                        </h1>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-xl font-semibold text-primary mb-4">
                            {t("objectif.objectifs")}
                        </h2>
                        <div className="w-40 h-28 bg-accent-green rounded-md"></div>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center md:text-left">
                    <div className="w-full">
                        <img
                            src="/images/akiba/a1.png"
                            alt={t("objectif.culture.title")}
                            className="w-full rounded-2xl object-cover h-[380px]"
                        />
                    </div>
                    <div className="mt-6">
                        <h3 className="text-[1.3rem] font-heading font-bold text-accent-green mb-3">
                            {t("objectif.culture.title")}
                        </h3>
                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70">
                            {t("objectif.culture.description")}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <div>
                        <h3 className="text-[1.3rem] font-heading font-bold text-accent-green mb-3">
                            {t("objectif.rencontre.title")}
                        </h3>
                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mb-5">
                            {t("objectif.rencontre.description")}
                        </p>
                        <div className="flex gap-4">
                            <img
                                src="/images/akiba/a17.png"
                                alt={t("objectif.rencontre.img1Alt")}
                                className="w-1/2 rounded-2xl object-cover h-[200px]"
                            />
                            <img
                                src="/images/akiba/a12.png"
                                alt={t("objectif.rencontre.img2Alt")}
                                className="w-1/2 rounded-2xl object-cover h-[200px]"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[1.3rem] font-heading font-bold text-accent-green mb-3">
                            {t("objectif.divertissement.title")}
                        </h3>
                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70">
                            {t("objectif.divertissement.description")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};



export const SponsorSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-white px-[10%] py-12">
            <div className="mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-gray-900 leading-tight mb-3">
                        {t("sponsorSection.title")}
                    </h2>

                    <h3 className="text-[1.3rem] font-heading font-bold text-accent-green mb-6">
                        {t("sponsorSection.subtitle")}
                    </h3>

                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mb-5">
                        {t("sponsorSection.description")}
                    </p>

                    <h4 className="text-[1.3rem] font-heading font-bold text-accent-green mb-2">
                        {t("sponsorSection.opportunitiesTitle")}
                    </h4>
                    <ul className="list-disc ml-6 leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mb-10">
                        <li>{t("sponsorSection.opportunities.list1")}</li>
                        <li>{t("sponsorSection.opportunities.list2")}</li>
                        <li>{t("sponsorSection.opportunities.list3")}</li>
                    </ul>

                    <div className="mt-6 space-y-4">
                        <div>
                            <div className="flex justify-between text-sm font-bold mb-1">
                                <span>{t("sponsorSection.stats.networking.label")}</span>
                                <span>{t("sponsorSection.stats.networking.value")}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div className="bg-accent-green h-4 rounded-full w-full"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm font-bold mb-1">
                                <span>{t("sponsorSection.stats.enjoy.label")}</span>
                                <span>{t("sponsorSection.stats.enjoy.value")}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div className="bg-accent-green h-4 rounded-full w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center items-center">
                    <div className="relative">
                        <img
                            src="/images/akiba/a6.png"
                            alt={t("sponsorSection.imageAlt")}
                            className="w-[280px] md:w-[350px] rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};





export const PerspectivesAvenir: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat text-white px-[10%] py-12"
            style={{ backgroundImage: "url('/images/akiba/a5.png')" }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
                    {t("perspectivesAvenir.title")}
                </h2>

                <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
                    {t("perspectivesAvenir.subtitle")}
                </h3>

                <p className="text-gray-100 leading-relaxed mb-6">
                    {t("perspectivesAvenir.description")}
                </p>


                <p className="text-gray-100 leading-relaxed mb-10">
                    {t("perspectivesAvenir.finalText.part1")}
                    <strong>{t("perspectivesAvenir.finalText.highlight")}</strong>
                    {t("perspectivesAvenir.finalText.part2")}
                </p>

                <div>
                    <a
                        href="/galerie"
                        className="group inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition-all"
                    >
                        {t("perspectivesAvenir.galleryButton")}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                <div className="mt-14 flex items-center gap-6">
                    <div className="w-12 h-12 bg-green-700 rounded-md"></div>
                    <div className="w-12 h-12 bg-yellow-400 rounded-md"></div>
                    <div className="w-12 h-12 bg-orange-500 rounded-md"></div>
                </div>
            </div>
        </section>
    );
};






export const AkibaSection: React.FC = () => {
    const { t } = useTranslation();
    const highlights: string[] = t("akibaSection.highlights.points", { returnObjects: true }) as string[];

    return (
        <section className="bg-white px-[10%] py-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-gray-900 leading-tight mb-3">
                        {t("akibaSection.title")}
                    </h2>

                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mb-4">
                        {t("akibaSection.subtitle")}
                    </p>

                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mb-6">
                        {t("akibaSection.description")}
                    </p>

                    <div className="mb-8">
                        <h4 className="text-[1.3rem] font-heading font-bold text-accent-green mb-3">
                            {t("akibaSection.highlights.title")}
                        </h4>
                        <ul className="list-disc ml-6 leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 space-y-2">
                            {highlights.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>

                    <blockquote className="italic text-green-800 border-l-4 border-green-700 pl-4 mb-8">
                        {t("akibaSection.quote")}
                    </blockquote>

                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-2 bg-accent-green text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all"
                    >
                        {t("akibaSection.ctaButton")}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                <div className="relative">
                    <img
                        src="/images/akiba/a2.png"
                        alt={t("akibaSection.imageAlt")}
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};



"use client";
export const AkibaGallery: React.FC = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        "/images/akiba/a1.png",
        "/images/akiba/a2.png",
        "/images/akiba/a3.png",
        "/images/akiba/a4.png",
        "/images/akiba/a5.png",
        "/images/akiba/a6.png",
        "/images/akiba/a7.png",
        "/images/akiba/a8.png",
    ];

    return (
        <section className="relative bg-gradient-to-b from-[#fdfaf6] to-[#fffdf8] px-[10%] py-24 overflow-hidden">
            {/* En-tête */}
            <div className="relative z-10 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[1.8rem] md:text-[3rem] font-heading font-bold text-black/90 leading-tight mb-4"
                >
                    {t("akibaGallery.title")}
                </motion.h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-[.95rem] md:text-[1.07rem] leading-relaxed">
                    {t("akibaGallery.subtitle")}
                </p>
            </div>

            {/* Grille d’images */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10"
            >
                {images.map((src, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.03 }}
                        className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                        onClick={() => setSelectedImage(src)}
                    >
                        <img
                            src={src}
                            alt={`Akiba sélection ${i + 1}`}
                            className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                            <p className="text-white text-sm md:text-base font-medium tracking-wide">
                                {t("akibaGallery.viewText")}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Aperçu Akiba"
                                className="w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};