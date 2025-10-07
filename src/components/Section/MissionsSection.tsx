import { motion } from "framer-motion";
import { FaGlobeAfrica, FaMagic, FaHandsHelping } from "react-icons/fa";

export default function MissionsSection() {
    const missions = [
        {
            id: 1,
            title: "Valoriser la culture africaine",
            description:
                "Nous célébrons la richesse du patrimoine africain à travers les arts, la musique, la mode et la gastronomie, pour inspirer et connecter les communautés.",
            icon: <FaGlobeAfrica className="text-accent-green w-12 h-12" />,
        },
        {
            id: 2,
            title: "Créer des expériences uniques",
            description:
                "Chaque événement et projet est conçu pour émerveiller et immerger nos participants dans des expériences mémorables et interactives.",
            icon: <FaMagic className="text-accent-green w-12 h-12" />,
        },
        {
            id: 3,
            title: "Soutenir les communautés locales",
            description:
                "Nous collaborons avec les artisans et acteurs locaux pour générer un impact positif et durable, en valorisant les talents locaux.",
            icon: <FaHandsHelping className="text-accent-green w-12 h-12" />,
        },
    ];

    return (
        <section className="relative w-full py-12 overflow-hidden">
            {/* Image de fond animée en bas à gauche */}
           
            <div className="px-[10%] mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight"
                    >
                        Nos Missions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-4 leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/90 max-w-2xl mx-auto"
                    >
                        Nous croyons en un développement culturel, social et économique inclusif, en créant des synergies entre traditions et modernité.
                    </motion.p>
                </div>

                {/* Missions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {missions.map((mission, index) => (
                        <motion.div
                            key={mission.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white shadow-md border border-gray-200 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Icon */}
                            <div className="mb-4">{mission.icon}</div>

                            {/* Title */}
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold mb-3">
                                {mission.title}
                            </h3>

                            {/* Description */}
                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/90">
                                {mission.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
