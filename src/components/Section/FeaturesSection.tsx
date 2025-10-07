import React from "react";
import { Globe2, HeartHandshake, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const newProjects = [
    {
        id: 3,
        image: "/images/voyageCulture.png",
        title: "The Akiba Brunch",
        subtitle: "Brunch culturel & artistique",
        description:
            "Un rendez-vous convivial qui valorise la scène créative camerounaise. Entre cuisine, musique, arts visuels et marché d’artisans, chaque édition rapproche artistes, marques et public dans une ambiance chaleureuse.",
        cta: "En savoir plus",
    },
    {
        id: 4,
        image: "/images/digital.png",
        title: "Mindz Studio",
        subtitle: "Agence digitale & stratégie commerciale",
        description:
            "Création de contenu, branding et community management qui convertissent. Mindz Studio développe des identités digitales percutantes et des campagnes marketing efficaces adaptées à vos ambitions.",
        cta: "En savoir plus",
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="w-full py-12">
            <div className="px-[10%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Images principales */}
                <div className="grid grid-cols-2 gap-4">
                    <motion.img
                        src="/images/atr.png"
                        alt="Artisanat africain"
                        className="object-cover w-full h-64 lg:h-80"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.img
                        src="/images/atb.png"
                        alt="Exposition d’art africain"
                        className="object-cover w-full h-64 lg:h-80"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    />
                    <motion.img
                        src="/images/couture.png"
                        alt="Créateurs africains"
                        className="object-cover w-full h-64 lg:h-80 col-span-2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>

                {/* Texte et valeurs */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-accent-yellow font-semibold uppercase tracking-wider mb-2">
                            Notre Essence
                        </h4>
                        <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-tight text-black/90">
                            L’Afrique créative, authentique et durable
                        </h2>
                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mt-4 text-black/90">
                            Duchesse d’Afric’Art célèbre la richesse artistique du continent
                            à travers des projets uniques mêlant art, design, culture et
                            innovation. Chaque initiative soutient les talents africains et
                            valorise le savoir-faire local dans une approche responsable et
                            inclusive.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-accent-yellow mb-4">
                            Nos valeurs
                        </h3>

                        <ul className="space-y-3 leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/90">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="text-accent-yellow w-5 h-5" />
                                Excellence & authenticité culturelle
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="text-accent-yellow w-5 h-5" />
                                Collaboration avec les communautés locales
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="text-accent-yellow w-5 h-5" />
                                Développement durable & innovation sociale
                            </li>
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-10 mt-10">
                            <div>
                                <div className="flex items-center gap-2">
                                    <HeartHandshake className="text-[#C69446] w-6 h-6" />
                                    <span className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/90">50+</span>
                                </div>
                                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mt-1 text-black/90">
                                    Partenaires & artistes accompagnés
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2">
                                    <Globe2 className="text-[#C69446] w-6 h-6" />
                                    <span className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/90">10</span>
                                </div>
                                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mt-1 text-black/90">
                                    Pays d’Afrique représentés
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
                        className="bg-white  shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 + project.id * 0.2 }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/90 mb-2">
                                {project.title}
                            </h3>
                            <h4 className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mb-2 text-accent-red">
                                {project.subtitle}
                            </h4>
                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mb-4 text-black/90">{project.description}</p>
                            <Link to={`/services/${project.id}`}>
                                <button className="text-accent-blue bg-accent-yellow px-6 py-2   transition-colors">
                                    {project.cta}
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
