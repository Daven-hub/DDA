import { motion } from "framer-motion";

export default function VinsmoselleSection() {
    return (
        <section className="relative w-full px-[10%] py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Images à gauche */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4"
                >
                    <div className="col-span-2 h-64 overflow-hidden shadow-xl">
                        <img
                            src="/images/vins1.png"
                            alt="Événement vins"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} className="h-40 overflow-hidden shadow-lg">
                        <img
                            src="/images/vins2.png"
                            alt="Dégustation"
                            className="object-cover w-full h-full"
                        />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} className="h-40 overflow-hidden shadow-lg">
                        <img
                            src="/images/caraf.jpg"
                            alt="Bouteilles de vin"
                            className="object-cover w-full h-full"
                        />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} className="col-span-2 h-52 overflow-hidden shadow-lg">
                        <img
                            src="/images/present.jpg"
                            alt="Masterclass vinicole"
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </motion.div>

                {/* Texte à droite */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-6 relative z-20"
                >
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight">
                        Domaines Vinsmoselle | Poll – Fabaire Cameroun
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-pink-600 to-orange-500">
                            Représentation & événements vins
                        </span>
                    </h2>

                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl">
                        Dégustations, branding et événements autour de vins et crémants de
                        qualité. Nous accompagnons entreprises, particuliers et institutions
                        avec importation, masterclasses et conseils en image vinicole.
                    </p>

                    <div className="flex gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/services"
                            className="px-6 py-3 bg-gradient-to-r from-red-700 to-pink-600 text-white font-semibold shadow-lg"
                        >
                            Explorer nos événements
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/contact"
                            className="px-6 py-3 border-2 border-red-700 text-gray-800 font-semibold hover:bg-gray-100 transition"
                        >
                            Contactez-nous
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Image de fond subtile côté droit */}
            <div className="absolute inset-y-0 right-0 w-1/2 opacity-10 mix-blend-multiply">
                <img
                    src="/images/vin.png"
                    alt="Fond vin"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Background décoratif (bulles floues) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-32 left-20 w-72 h-72 bg-red-400 mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute bottom-32 right-20 w-64 h-64 bg-orange-400 mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
            </motion.div>
        </section>
    );
}
