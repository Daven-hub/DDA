import { useTranslation } from "react-i18next"
import EvenementSection from "../components/Section/EvenementSection"
import VisaSection from "../components/Section/VisaSection"
import Banner from "../components/Ux/Banner"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"


export const Voyages = () => {
    return (
        <>
            <div className="relative w-full min-h-screen scroll-mt-32 overflow-hidden mt-[120px]">
                <Banner imageSrc={"/images/ddaFond.png"} imageAlt={""} title={"DDA Voyages"} />
                <VoyageIntro />
                <EvenementSection />
                <VoyageObjectif />
                <VoyagePourquoi />
                <VisaSection />
                <VoyageImmersion />
                <VoyagePerspectives />
                <EvenementSection />
            </div>
        </>
    )
}





export const VoyageObjectif: React.FC = () => {
    const { t } = useTranslation();
    const immersionPoints: string[] = t("voyageObjectif.immersionPoints", { returnObjects: true }) as string[];
    const rencontrePoints: string[] = t("voyageObjectif.rencontrePoints", { returnObjects: true }) as string[];

    return (
        <section className="bg-gray-50 px-6 md:px-[10%] py-20 relative overflow-hidden">
            {/* décor doux */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />

            <div className="mx-auto grid md:grid-cols-3 gap-12 items-start relative z-10">
                {/* Colonne 1 – Titre / intro */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-between space-y-6"
                >
                    <h1 className="text-[1.8rem] md:text-[3rem] font-heading font-bold text-gray-900 leading-tight">
                        {t("voyageObjectif.title")}
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-accent-green mb-2">
                        {t("voyageObjectif.subtitle")}
                    </h2>

                    <div className="w-40 h-28 bg-orange-300 rounded-xl shadow-inner" />

                    <img
                        src="/images/voyage/ga14.png"
                        alt="Voyage Logo"
                        className="hidden md:block w-full rounded-2xl object-cover h-[220px] mt-6 shadow-md"
                    />
                </motion.div>

                {/* Colonne 2 – Immersion */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center md:items-start text-center md:text-left"
                >
                    <img
                        src="/images/voyage/g6.png"
                        alt={t("voyageObjectif.immersionTitle")}
                        className="w-full rounded-2xl object-cover h-[380px] mb-6 shadow-lg"
                    />

                    <h3 className="text-[1.4rem] font-heading font-bold text-accent-green mb-3">
                        {t("voyageObjectif.immersionTitle")}
                    </h3>
                    <p className="text-black/70 leading-relaxed mb-4 text-sm md:text-base">
                        {t("voyageObjectif.immersionDescription")}
                    </p>

                    <ul className="space-y-2 text-sm md:text-base">
                        {immersionPoints.map((point, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start gap-2"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span className="w-2.5 h-2.5 bg-accent-green rounded-full mt-2"></span>
                                <span>{point}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Colonne 3 – Rencontres + Expérience */}
                <div className="flex flex-col gap-10">
                    {/* Bloc Rencontres */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/images/voyage/g8.png"
                            alt={t("voyageObjectif.rencontreTitle")}
                            className="w-full rounded-2xl object-cover h-[200px] mb-4 shadow-lg"
                        />
                        <h3 className="text-[1.4rem] font-heading font-bold text-accent-green mb-3">
                            {t("voyageObjectif.rencontreTitle")}
                        </h3>
                        <p className="text-black/70 leading-relaxed mb-5 text-sm md:text-base">
                            {t("voyageObjectif.rencontreDescription")}
                        </p>

                        <ul className="space-y-2 text-sm md:text-base">
                            {rencontrePoints.map((point, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start gap-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="w-2.5 h-2.5 bg-accent-green rounded-full mt-2"></span>
                                    <span>{point}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Bloc Expérience */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/images/voyage/g7.png"
                            alt={t("voyageObjectif.experienceTitle")}
                            className="w-full rounded-2xl object-cover h-[200px] mb-4 shadow-lg"
                        />
                        <h3 className="text-[1.4rem] font-heading font-bold text-accent-green mb-3">
                            {t("voyageObjectif.experienceTitle")}
                        </h3>
                        <p className="text-black/70 leading-relaxed text-sm md:text-base">
                            {t("voyageObjectif.experienceDescription")}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};





export const VoyagePourquoi: React.FC = () => {
    const { t } = useTranslation();
    const advantages: string[] = t("voyagePourquoi.advantages", { returnObjects: true }) as string[];

    return (
        <section className="bg-white px-6 md:px-[10%] py-20 relative overflow-hidden">
            {/* Décor de fond subtil */}
            <img
                src="/images/voyage/ga1.png"
                alt="Décoration"
                className="hidden md:block absolute bottom-0 right-0 opacity-20 -rotate-6 pointer-events-none"
            />

            <div className="mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                {/* Texte principal */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                        {t("voyagePourquoi.title")}
                    </h2>

                    <h3 className="text-xl md:text-2xl font-heading font-bold text-accent-green mb-6">
                        {t("voyagePourquoi.subtitle")}
                    </h3>

                    <p className="text-black/70 leading-relaxed mb-6 text-sm md:text-base">
                        {t("voyagePourquoi.description")}
                    </p>

                    <ul className="list-none space-y-3 mb-8 text-sm md:text-base">
                        {advantages.map((item, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start gap-2"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span className="w-2.5 h-2.5 bg-accent-green rounded-full mt-2"></span>
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <motion.a
                        href="/contact"
                        className="group inline-flex items-center gap-2 bg-accent-green text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:bg-green-700 transition-all"
                        whileHover={{ scale: 1.03 }}
                    >
                        {t("voyagePourquoi.ctaButton")}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                </motion.div>

                {/* Image avec effet */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center items-center"
                >
                    <div className="absolute -z-10 w-60 h-60 bg-accent-green/10 rounded-full blur-3xl"></div>
                    <img
                        src="/images/voyage/g9.png"
                        alt={t("voyagePourquoi.imageAlt")}
                        className="w-full md:w-[360px] rounded-2xl shadow-xl object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
};





export const VoyagePerspectives: React.FC = () => {
    const { t } = useTranslation();
    const points: string[] = t("voyagePerspectives.points", { returnObjects: true }) as string[];

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat text-white h-[100vh] flex items-center px-6 md:px-[10%]"
            style={{ backgroundImage: "url('/images/voyage/ga18.png')" }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 ">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{t("voyagePerspectives.title")}</h2>
                <h3 className="text-xl md:text-3xl font-semibold text-yellow-400 mb-6">{t("voyagePerspectives.subtitle")}</h3>
                <p className="leading-relaxed mb-6 text-sm md:text-base">{t("voyagePerspectives.description")}</p>

                <ul className="list-disc ml-0 md:ml-6 space-y-2 mb-6 text-left">
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>

                <a
                    href="/galerie"
                    className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition-all"
                >
                    {t("voyagePerspectives.galleryButton")}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </section>
    );
};



export const VoyageImmersion: React.FC = () => {
    const { t } = useTranslation();
    const highlights: string[] = t("voyageImmersion.highlights", { returnObjects: true }) as string[];

    return (
        <section className="bg-gray-50 px-[10%] py-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-gray-900 mb-3">
                        {t("voyageImmersion.title")}
                    </h2>

                    <p className="text-black/70 leading-relaxed mb-4">{t("voyageImmersion.subtitle")}</p>
                    <p className="text-black/70 leading-relaxed mb-6">{t("voyageImmersion.description")}</p>

                    <ul className="list-disc ml-6 space-y-2 mb-8">
                        {highlights.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-2 bg-accent-green text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all"
                    >
                        {t("voyageImmersion.ctaButton")}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                <div className="relative">
                    <img
                        src="/images/voyage/g1.png"
                        alt={t("voyageImmersion.imageAlt")}
                        className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};





export const VoyageIntro: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative h-screen flex items-center px-[10%] overflow-hidden">
            {/* Fond avec overlay */}
            <div className="absolute inset-0">
                <img
                    src="/images/destination.png"
                    alt="Voyages Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Contenu */}
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Texte */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[2.8rem] md:text-[4rem] font-extrabold text-white leading-tight"
                    >
                        {t("ddaVoyagesIntro.title")}
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl font-semibold text-yellow-400"
                    >
                        {t("ddaVoyagesIntro.subtitle")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-white/90 max-w-xl text-[1rem] md:text-[1.15rem] leading-relaxed"
                    >
                        {t("ddaVoyagesIntro.description")}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <a
                            href="/contact"
                            className="inline-block mt-4 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition-all"
                        >
                            {t("ddaVoyagesIntro.cta")}
                        </a>
                    </motion.div>
                </motion.div>

                {/* Image décorative */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="hidden md:block"
                >
                    <img
                        src="/images/voyage/ga5.png"
                        alt="Voyages Illustration"
                        className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                    />
                </motion.div>
            </div>
        </section>
    );
};