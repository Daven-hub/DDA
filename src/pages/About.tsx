import { useTranslation } from "react-i18next";
import Banner from "../components/Ux/Banner";
import MissionsSection from "../components/Section/MissionsSection";
import CtaSection from "../components/Section/CtaSection";
import EvenementSection from "../components/Section/EvenementSection";
import VisionValeurs from "../components/Section/VisionValeurs";

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full overflow-x-hidden">
            <Banner
                imageSrc="/images/g.png"
                imageAlt={t("about.bannerAlt")}
                title={t("about.bannerTitle")}
                description={t("about.bannerDescription")}
                height="large"
                overlayIntensity="medium"
            />

            {/* <section className="px-[10%] py-16 flex flex-col md:flex-row items-center gap-12">
                <motion.img
                    src="/images/aboutS.png"
                    alt={t("about.historyAlt")}
                    className="w-full md:w-1/2 shadow-card object-cover"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                />
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-semibold text-accent-yellow uppercase tracking-wider">
                        {t("about.who")}
                    </span>
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight mb-4">
                        {t("about.title")}
                    </h2>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/90 mb-4">
                        {t("about.paragraph1")}
                    </p>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/90">
                        {t("about.paragraph2")}
                    </p>
                </motion.div>
            </section>

            <section className="relative w-full">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/images/vc.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        opacity: 0.1,
                    }}
                ></div>

                <div className="absolute inset-0 bg-black/5"></div>

                <div className="relative z-10 py-12">
                    <StatisticsSection />
                </div>
            </section>

            <section className="px-[10%] py-20 bg-primary/5 flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    className="w-full md:w-1/2 flex-shrink-0"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/images/fonder.png"
                        alt={t("about.founderAlt")}
                        className="shadow-card object-cover w-full h-auto rounded-md"
                    />
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 space-y-5"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight">
                        {t("about.founderName")}
                    </h2>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/90">
                        {t("about.founderIntro")}
                    </p>

                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                        <li>{t("about.roles.0")}</li>
                        <li>{t("about.roles.1")}</li>
                        <li>{t("about.roles.2")}</li>
                        <li>{t("about.roles.3")}</li>
                    </ul>

                    <p className="text-gray-600">{t("about.founderConclusion")}</p>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="px-6 py-3 bg-accent-yellow text-accent-blue font-semibold flex items-center gap-2"
                        >
                            {t("about.exploreProjects")}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            className="px-6 py-3 border-2 border-accent-yellow text-primary font-semibold flex items-center gap-2"
                        >
                            {t("about.discoverUniverse")}
                        </motion.button>
                    </div>
                </motion.div>
            </section> */}
            <VisionValeurs />
            <MissionsSection />
            <CtaSection />
            <EvenementSection />
        </div>
    );
};

export default About;
