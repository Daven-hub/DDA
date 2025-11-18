import { useTranslation } from "react-i18next";
import Banner from "../components/Ux/Banner"
import { AnimatePresence, motion } from "framer-motion";
import VinsmoselleSection from "../components/Section/VinsmoselleSection";
import { ArrowRight, X } from "lucide-react";
import PartnersSection from "../components/Section/PartnersSection";
import { useState } from "react";

export const Sparkling = () => {
    return (
        <>
            <head>
                <title>DDA Sparkling – Import-Export & Représentation Poll-Fabaire</title>
                <meta
                    name="description"
                    content="DDA Sparkling, représentant officiel Cameroun de Domaines Vinsmoselle – Poll-Fabaire. Import-export, distribution de crémants premium, dégustations, activations événementielles et partenariats gastronomiques avec restaurants, lounges, hôtels et événements d’exception."
                />
                <meta
                    name="keywords"
                    content="DDA Sparkling, Poll-Fabaire, Domaines Vinsmoselle, crémants premium, import-export Cameroun, dégustations, activations événementielles, partenariats gastronomiques, distribution boissons haut de gamme"
                />
                <meta property="og:title" content="DDA Sparkling – Import-Export & Représentation Poll-Fabaire" />
                <meta
                    property="og:description"
                    content="Distribution de crémants premium et organisation d’expériences gastronomiques au Cameroun. Partenaire officiel de Domaines Vinsmoselle – Poll-Fabaire."
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/sparking.png" />
            </head>

            <div className="relative w-full min-h-screen scroll-mt-32 overflow-hidden mt-[120px]">
                <Banner imageSrc={"/images/sparking.png"} imageAlt={"Bannière DDA Sparkling"} title={"DDA Sparkling"} />
                <DDASparklingSection />
                <VinsmoselleSection />
                <SparklingExperience />
                <SparklingObjectif />
                <SparklingPerspectives />
                <SparklingGallery />
                <PartnersSection />
            </div>
        </>
    );
};



export const SparklingHero: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section
            className="relative h-[100vh] flex items-center justify-center text-white overflow-hidden"
            style={{ backgroundImage: "url('/images/sparking.png')" }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <motion.div
                className="relative z-10 text-center px-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                    {t("sparklingHero.title")}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-white/90">
                    {t("sparklingHero.subtitle")}
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-[#a6825b] px-6 py-3 rounded-full text-white font-semibold hover:bg-[#8f704b] transition-all"
                >
                    {t("sparklingHero.cta")}
                </a>
            </motion.div>
        </section>
    );
};



export const SparklingExperience: React.FC = () => {
    const { t } = useTranslation();
    const highlights: string[] = t("sparklingExperience.highlights", { returnObjects: true }) as string[];

    return (
        <section className="bg-white px-[10%] py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/images/dda/s22.png"
                        alt="Expérience sensorielle"
                        className="rounded-2xl shadow-lg object-cover w-full h-[450px]"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight mb-4">
                        {t("sparklingExperience.title")}
                    </h2>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mb-6">
                        {t("sparklingExperience.description")}
                    </p>
                    <ul className="list-disc ml-6 space-y-2 text-[#4a403d] mb-6">
                        {highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                        ))}
                    </ul>
                    <a
                        href="/galerie"
                        className="inline-block bg-accent-green text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#8f704b] transition-all"
                    >
                        {t("sparklingExperience.cta")}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};



export const SparklingPrestige: React.FC = () => {
    const { t } = useTranslation();
    const stats: string[] = t("sparklingPrestige.stats", { returnObjects: true }) as string[];

    return (
        <section className="bg-[#3b2e2a] text-white px-[10%] py-20 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-10">{t("sparklingPrestige.title")}</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {stats.map((s, i) => (
                        <div key={i}>
                            {/* <p className="text-4xl font-bold text-[#a6825b] mb-2">
                <CountUp end={Math.floor(Math.random() * 200) + 10} duration={2} />
              </p> */}
                            <p className="text-white/80">{s}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};




export const SparklingObjectif: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative bg-gradient-to-br from-[#fffdf8] to-[#f8f3e9] text-[#2c2c2c] overflow-hidden">
            {/* Fond décoratif */}
            <div className="absolute inset-0 opacity-20">
                <img
                    src="/images/senso.png"
                    alt={t("sparkling.altFond")}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 px-[10%] py-20">
                {/* En-tête */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight mb-4"
                    >
                        {t("sparkling.titre")}
                    </motion.h2>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] ">
                        {t("sparkling.description")}
                    </p>
                </div>

                {/* Grille des objectifs */}
                <div className="grid md:grid-cols-3 gap-10 items-stretch max-w-7xl mx-auto">
                    {/* Objectif 1 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col"
                    >
                        <img
                            src="/images/galerie/sept.jpg"
                            alt={t("sparkling.obj1.alt")}
                            className="h-56 w-full object-cover"
                        />
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <h3 className="text-[1.3rem] font-heading font-bold text-accent-green mb-3">
                                {t("sparkling.obj1.titre")}
                            </h3>
                            <p className="text-black/70 leading-relaxed mb-4">
                                {t("sparkling.obj1.texte")}
                            </p>
                            <p className="italic text-accent-green">{t("sparkling.obj1.citation")}</p>
                        </div>
                    </motion.div>

                    {/* Objectif 2 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col"
                    >
                        <img
                            src="/images/galerie/quatre.jpg"
                            alt={t("sparkling.obj2.alt")}
                            className="h-56 w-full object-cover"
                        />
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <h3 className="text-[1.3rem] font-heading font-bold text-accent-green mb-3">
                                {t("sparkling.obj2.titre")}
                            </h3>
                            <p className="text-black/70 leading-relaxed mb-4">
                                {t("sparkling.obj2.texte")}
                            </p>
                            <p className="italic text-accent-green">{t("sparkling.obj2.citation")}</p>
                        </div>
                    </motion.div>

                    {/* Objectif 3 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col"
                    >
                        <img
                            src="/images/galerie/cinq.jpg"
                            alt={t("sparkling.obj3.alt")}
                            className="h-56 w-full object-cover"
                        />
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <h3 className="text-[1.3rem] font-heading font-bold text-accent-green mb-3">
                                {t("sparkling.obj3.titre")}
                            </h3>
                            <p className="text-black/70 leading-relaxed mb-4">
                                {t("sparkling.obj3.texte")}
                            </p>
                            <p className="italic text-accent-green">{t("sparkling.obj3.citation")}</p>
                        </div>
                    </motion.div>
                </div>

                {/* Deuxième ligne d’images immersives */}
                <div className="mt-20 grid md:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative rounded-2xl overflow-hidden shadow-lg"
                    >
                        <img
                            src="/images/galerie/six.jpg"
                            alt={t("sparkling.altEvenement")}
                            className="w-full h-[420px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-6">
                            <p className="text-white text-lg font-semibold">
                                {t("sparkling.imageTexte")}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-5"
                    >
                        <h3 className="text-[1.3rem] font-heading font-bold text-accent-green">
                            {t("sparkling.visionTitre")}
                        </h3>
                        <p className="text-black/70 leading-relaxed">
                            {t("sparkling.visionTexte1")}
                        </p>
                        <p className="text-black/70 leading-relaxed">
                            {t("sparkling.visionTexte2")}
                        </p>
                        <a
                            href="/contact"
                            className="group inline-flex items-center gap-2 bg-accent-green text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all mt-4"
                        >
                            {t("sparkling.cta")}
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export const SparklingPerspectives: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-gradient-to-br from-white to-[#faf6f1] py-12 px-[10%]">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight"
                >
                    {t("perspectives.titre")}
                </motion.h2>
                <p className="text-gray-600 max-w-3xl mx-auto mt-3 leading-relaxed text-[.95rem] md:text-[1.07rem]">
                    {t("perspectives.description")}
                </p>
            </div>

            {/* Bloc 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <motion.img
                    src="/images/galerie/deux.jpg"
                    alt={t("perspectives.altImage")}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full rounded-2xl shadow-xl object-cover"
                />
                <div>
                    <h3 className="text-[1.3rem] font-heading font-bold text-accent-green mb-4">
                        {t("perspectives.visionTitre")}
                    </h3>
                    <p className="text-gray-600 max-w-3xl mx-auto mt-3 leading-relaxed text-[.95rem] md:text-[1.07rem] mb-5">
                        {t("perspectives.visionTexte")}
                    </p>
                    <ul className="space-y-2 text-gray-700 list-disc ml-6">
                        <li>{t("perspectives.point1")}</li>
                        <li>{t("perspectives.point2")}</li>
                        <li>{t("perspectives.point3")}</li>
                    </ul>
                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-2 mt-8 bg-accent-green text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md"
                    >
                        {t("perspectives.cta")}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>

            {/* Citation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                className="mt-20 text-center text-white py-12 px-6 rounded-2xl shadow-lg"
            >
                <p className="text-xl italic max-w-2xl mx-auto text-black/70">
                    {t("perspectives.citation")}
                </p>
                <p className="mt-4 font-semibold text-accent-yellow">
                    {t("perspectives.signature")}
                </p>
            </motion.div>
        </section>
    );
};




"use client";
export const SparklingGallery: React.FC = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        "/images/dda/s1.png",
        "/images/dda/s2.png",
        "/images/dda/s3.png",
        "/images/dda/s4.png",
        "/images/dda/s5.png",
        "/images/dda/s6.png"
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
                    {t("sparklingGallery.title")}
                </motion.h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-[.95rem] md:text-[1.07rem] leading-relaxed">
                    {t("sparklingGallery.subtitle")}
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
                            alt={`Sélection Sparkling ${i + 1}`}
                            className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                            <p className="text-white text-sm md:text-base font-medium tracking-wide">
                                {t("sparklingGallery.viewText")}
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
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-5xl w-full"
                        >
                            <img
                                src={selectedImage}
                                alt="Aperçu Sparkling"
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




"use client";
export default function DDASparklingSection() {
    const { t } = useTranslation();

    return (
        <section className="relative bg-white text-gray-800 py-20 overflow-hidden">
            {/* Bloc 1 */}
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start px-[10%] gap-12">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2"
                >
                    <img
                        src="/images/dda/s28.png"
                        alt="DDA Sparkling"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </motion.div>

                {/* Texte */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 space-y-6"
                >
                    <h2 className="text-3xl font-light italic text-gray-700">
                        {t("ddaSparkling.title")}{" "}
                        <span className="font-semibold text-gray-900">DDA Sparkling</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {t("ddaSparkling.intro")}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        {t("ddaSparkling.collection")}
                    </p>
                </motion.div>
            </div>

            {/* Séparateur */}
            <div className="my-20 flex justify-center">
                <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>

            {/* Bloc 2 */}
            <div className="relative flex flex-col lg:flex-row-reverse items-center lg:items-start px-[10%] gap-12">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2"
                >
                    <img
                        src="/images/dda/s16.png"
                        alt="Poll-Fabaire"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </motion.div>

                {/* Texte */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 space-y-6"
                >
                    <h3 className="text-2xl font-semibold italic text-gray-800">
                        {t("ddaSparkling.aboutTitle")}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        {t("ddaSparkling.aboutText1")}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        {t("ddaSparkling.aboutText2")}
                    </p>
                </motion.div>
            </div>

            {/* Logo bas */}
            <div className="mt-20 flex justify-center opacity-60">
                <img
                    src="/images/sparking.png"
                    alt="DDA Logo"
                    className="h-12 w-auto"
                />
            </div>
        </section>
    );
}












