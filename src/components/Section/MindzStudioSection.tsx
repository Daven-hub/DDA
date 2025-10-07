import { motion } from "framer-motion";

export default function MindzStudioSection() {
    return (
        <section className="relative  px-[10%] py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Texte */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight">
                        Mindz Studio
                        <span >
                            Agence digitale & stratégie commerciale
                        </span>
                    </h2>

                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl">
                        Création de contenu, branding et community management qui
                        convertissent. Mindz Studio développe des identités digitales
                        percutantes et des campagnes marketing efficaces adaptées à vos
                        ambitions.
                    </p>

                    <div className="flex gap-4">
                        <motion.a 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/services"
                            className="px-6 py-3 bg-accent-yellow text-accent-blue font-semibold shadow-lg"
                        >
                            Découvrir nos services
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/contact"
                            className="px-6 py-3 border-2 border-accent-yellow text-accent-blue font-semibold hover:bg-gray-100 transition"
                        >
                            Contactez-nous
                        </motion.a>
                    </div>
                </motion.div>

                {/* Images */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative flex justify-center items-center"
                >
                    {/* Image principale */}
                    <div className="relative w-full h-96 overflow-hidden shadow-2xl">
                        <img
                            src="/images/dev.png"
                            alt="Création digitale"
                            className="object-cover w-full h-full"
                        />
                    </div>
                     {/* <div className="relative w-72 h-96 overflow-hidden shadow-2xl">
                        <img
                            src="/images/informatique.jpg"
                            alt="Création digitale"
                            className="object-cover w-full h-full"
                        />
                    </div> */}

                    {/* Image flottante */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="absolute -bottom-10 -left-10 w-48 h-64 overflow-hidden shadow-xl border-4 border-white"
                    >
                        <img
                            src="/images/marketing.png"
                            alt="Stratégie marketing"
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Background déco */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-20 right-40 w-64 h-64 bg-purple-400 mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-400 mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            </motion.div>
        </section>
    );
}
