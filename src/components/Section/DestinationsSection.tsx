import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Destination {
    id: number;
    country: string;
    info: string;
    image: string;
}

const destinations: Destination[] = [
    {
        id: 1,
        country: "Bénin",
        info: "Culture vivante, marchés locaux, traditions culinaires authentiques",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        country: "Côte d'Ivoire",
        info: "Musique vibrante, plages de sable fin et diversité culturelle riche",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        country: "Cameroun",
        info: "Patrimoine historique, nature luxuriante et gastronomie savoureuse",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        country: "Tanzanie",
        info: "Safaris inoubliables, Kilimandjaro et plages paradisiaques de Zanzibar",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        country: "Ghana",
        info: "Histoire captivante, musique entraînante et artisanat traditionnel",
        image: "https://images.unsplash.com/photo-1523806973436-8d3fab7e7ab9?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        country: "Rwanda",
        info: "Nature préservée, gorilles de montagne et paysages volcaniques",
        image: "https://images.unsplash.com/photo-1562569633-622763f4e4d6?w=400&h=300&fit=crop"
    }
];

export default function DestinationsSection() {
    return (
        <section className="relative w-full min-h-screen py-24 md:py-32 bg-gray-50 overflow-hidden flex flex-col justify-center">
            {/* Image de fond animée */}
            <motion.div
                initial={{ opacity: 0, x: -50, y: 50 }}
                animate={{ opacity: 0.1, x: 0, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-96 md:w-[500px] pointer-events-none select-none"
            >
                <FaMapMarkerAlt className="w-full h-full text-green-500" />
            </motion.div>

            <div className="px-6 md:px-[10%] mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-[2.2rem] md:text-[3.5rem] font-heading font-bold leading-tight"
                    >
                        Nos Destinations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Explorez l'Afrique autrement avec nos voyages culturels et responsables
                    </motion.p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={destination.image}
                                    alt={destination.country}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaMapMarkerAlt className="text-green-500 w-6 h-6" />
                                    <h3 className="text-2xl font-bold text-gray-800">
                                        {destination.country}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6 text-[1.05rem]">
                                    {destination.info}
                                </p>
                                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl transition-colors duration-300">
                                    Découvrir
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
}