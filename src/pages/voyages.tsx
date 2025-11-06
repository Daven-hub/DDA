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
                <Banner imageSrc={"/DC.png"} imageAlt={""} title={"Duchesse d’Afric-Art Voyages"} />
                <VoyageIntro/>
                <VisaSection />
                <EvenementSection />
                <VoyageObjectif />
                <VoyagePourquoi />
                <VoyagePerspectives />
                <VoyageImmersion />
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
        <section className="bg-gray-50 px-6 md:px-[10%] py-16">
            <div className="mx-auto grid md:grid-cols-3 gap-10 items-start">
                <div className="flex flex-col justify-between">
                    <h1 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-gray-900 leading-tight mb-6">
                        {t("voyageObjectif.title")}
                    </h1>
                    <h2 className="text-xl font-semibold text-primary mb-4">{t("voyageObjectif.subtitle")}</h2>
                    <div className="w-40 h-28 bg-orange-300 rounded-md mb-6"></div>
                    <img
                        src="/images/destination.png"
                        alt="Voyage Logo"
                        className="hidden md:block w-full rounded-2xl object-cover h-[200px]"
                    />
                </div>

                <div className="flex flex-col items-center text-center md:text-left">
                    <img
                        src="/images/immersif.png"
                        alt={t("voyageObjectif.immersionTitle")}
                        className="w-full rounded-2xl object-cover h-[380px] mb-6"
                    />
                    <h3 className="text-[1.3rem] font-heading font-bold text-accent-green mb-3">
                        {t("voyageObjectif.immersionTitle")}
                    </h3>
                    <p className="text-black/70 leading-relaxed max-w-3xl mb-2">{t("voyageObjectif.immersionDescription")}</p>
                    <ul className="list-disc ml-6 space-y-1">
                        {immersionPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-10">
                    <div>
                        <img
                            src="/images/rencontre.png"
                            alt={t("voyageObjectif.rencontreTitle")}
                            className="w-full rounded-2xl object-cover h-[200px] mb-4"
                        />
                        <h3 className="text-[1.3rem] font-heading font-bold text-accent-green mb-3">
                            {t("voyageObjectif.rencontreTitle")}
                        </h3>
                        <p className="text-black/70 leading-relaxed max-w-3xl mb-5">
                            {t("voyageObjectif.rencontreDescription")}
                        </p>
                        <ul className="list-disc ml-6 space-y-1">
                            {rencontrePoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <img
                            src="/images/culte.png"
                            alt={t("voyageObjectif.experienceTitle")}
                            className="w-full rounded-2xl object-cover h-[200px] mb-4"
                        />
                        <h3 className="text-[1.3rem] font-heading font-bold text-accent-green mb-3">
                            {t("voyageObjectif.experienceTitle")}
                        </h3>
                        <p className="text-black/70 leading-relaxed max-w-3xl">
                            {t("voyageObjectif.experienceDescription")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};




export const VoyagePourquoi: React.FC = () => {
    const { t } = useTranslation();
    const advantages: string[] = t("voyagePourquoi.advantages", { returnObjects: true }) as string[];

    return (
        <section className="bg-white px-6 md:px-[10%] py-16 relative overflow-hidden">

            <img
                src="/images/decor.png"
                alt="Décoration"
                className="hidden md:block absolute bottom-0 right-0  opacity-25 -rotate-6"
            />

            <div className="mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                        {t("voyagePourquoi.title")}
                    </h2>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-accent-green mb-6">
                        {t("voyagePourquoi.subtitle")}
                    </h3>
                    <p className="text-black/70 leading-relaxed mb-6 text-sm md:text-base">
                        {t("voyagePourquoi.description")}
                    </p>

                    <ul className="list-disc ml-0 md:ml-6 space-y-2 mb-8 text-sm md:text-base">
                        {advantages.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-2 bg-accent-green text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition-all"
                    >
                        {t("voyagePourquoi.ctaButton")}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                <div className="relative flex justify-center items-center">
                    <img
                        src="/images/femme.png"
                        alt={t("voyagePourquoi.imageAlt")}
                        className="w-full md:w-[350px] rounded-xl shadow-lg mb-6 md:mb-0"
                    />
                </div>
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
            style={{ backgroundImage: "url('/images/avenir.png')" }}
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
                        src="/images/lache.png"
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
                        src="/images/touriste.png"
                        alt="Voyages Illustration"
                        className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                    />
                </motion.div>
            </div>
        </section>
    );
};