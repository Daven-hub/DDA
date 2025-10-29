import React from "react";
import { Globe2, HeartHandshake, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const newProjects = [
    {
        id: 3,
        image: "/images/voyageCulture.png",
        titleKey: "features.projects.akiba.title",
        subtitleKey: "features.projects.akiba.subtitle",
        descriptionKey: "features.projects.akiba.description",
        ctaKey: "features.projects.akiba.cta",
    },
    {
        id: 4,
        image: "/images/digital.png",
        titleKey: "features.projects.mindz.title",
        subtitleKey: "features.projects.mindz.subtitle",
        descriptionKey: "features.projects.mindz.description",
        ctaKey: "features.projects.mindz.cta",
    },
];

const FeaturesSection: React.FC = () => {
    const { t } = useTranslation();

    const valuesItems = t("features.values.items", { returnObjects: true }) as string[];

    return (
        <section className="w-full py-12">
            <div className="px-[10%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-2 gap-4">
                    <motion.img
                        src="/images/atr.png"
                        alt={t("features.images.atr")}
                        className="object-cover w-full h-64 lg:h-80"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/images/atb.png"
                        alt={t("features.images.atb")}
                        className="object-cover w-full h-64 lg:h-80"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    />
                    <motion.img
                        src="/images/couture.png"
                        alt={t("features.images.couture")}
                        className="object-cover w-full h-64 lg:h-80 col-span-2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>

                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-accent-yellow font-semibold uppercase tracking-wider mb-2">
                            {t("features.essence.title")}
                        </h4>
                        <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-tight text-black/90">
                            {t("features.essence.subtitle")}
                        </h2>
                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mt-4 text-black/90">
                            {t("features.essence.description")}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-accent-yellow mb-4">
                            {t("features.values.title")}
                        </h3>

                        <ul className="space-y-3 leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/90">
                            {valuesItems.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <CheckCircle className="text-accent-yellow w-5 h-5" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-10 mt-10">
                            <div>
                                <div className="flex items-center gap-2">
                                    <HeartHandshake className="text-[#C69446] w-6 h-6" />
                                    <span className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/90">
                                        {t("features.stats.partners")}
                                    </span>
                                </div>
                                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mt-1 text-black/90">
                                    {t("features.stats.partnersLabel")}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2">
                                    <Globe2 className="text-[#C69446] w-6 h-6" />
                                    <span className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/90">
                                        {t("features.stats.countries")}
                                    </span>
                                </div>
                                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mt-1 text-black/90">
                                    {t("features.stats.countriesLabel")}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="mt-12 px-[10%] grid grid-cols-1 md:grid-cols-2 gap-8">
                {newProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 + project.id * 0.2 }}
                    >
                        <img
                            src={project.image}
                            alt={t(project.titleKey)}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/90 mb-2">
                                {t(project.titleKey)}
                            </h3>
                            <h4 className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mb-2 text-accent-red">
                                {t(project.subtitleKey)}
                            </h4>
                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mb-4 text-black/90">
                                {t(project.descriptionKey)}
                            </p>
                            <Link to={`/services/${t(project.titleKey)}`}>
                                <button className="text-accent-blue bg-accent-yellow px-6 py-2 transition-colors">
                                    {t(project.ctaKey)}
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;