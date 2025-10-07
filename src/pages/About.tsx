import { motion } from "framer-motion";
import Banner from "../components/Ux/Banner";
import MissionsSection from "../components/Section/MissionsSection";
import CtaSection from "../components/Section/CtaSection";
import StatisticsSection from "../components/Section/StatisticsSection";
import EvenementSection from "../components/Section/EvenementSection";

const About = () => {
    return (
        <div className="w-full overflow-x-hidden">

            <Banner
                imageSrc="/images/g.png"
                imageAlt="Vue futuriste de Duchesse d’Afric’Art"
                title="L’Âme de l’Art Africain Contemporain"
                description="Duchesse d’Afric’Art, fondée par Melissa MBEUSSEUNE, est un hommage vibrant à la créativité africaine. Nous faisons rayonner les artistes et les savoir-faire du continent à travers des expériences culturelles, immersives et durables."
                height="large"
                overlayIntensity="medium"
            />

            <section className="px-[10%] py-16 flex flex-col md:flex-row items-center gap-12">
                <motion.img
                    src="/images/aboutS.png"
                    alt="Notre histoire"
                    className="w-full md:w-1/2 shadow-card object-cover "
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
                        Qui sommes-nous ?
                    </span>
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight mb-4">
                        L’art comme passerelle entre l’Afrique et le monde
                    </h2>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mb-4 text-black/90">
                        Duchesse d’Afric’Art est une maison culturelle et artistique fondée par
                        <strong> Melissa MBEUSSEUNE</strong>, entrepreneure et stratège de marque passionnée
                        par la valorisation du patrimoine africain. Notre mission est de faire dialoguer
                        les cultures à travers des expositions, des voyages culturels et des expériences
                        sensorielles uniques.
                    </p>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/90">
                        Chaque projet que nous portons est une invitation à explorer autrement
                        l’Afrique — à découvrir ses artistes, ses artisans, ses créateurs et les
                        émotions profondes qui émanent de leurs œuvres. Notre approche repose
                        sur l’authenticité, la durabilité et le respect des racines culturelles.
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
                        src="/images/m.png"
                        alt="Fondatrice Melissa MBEUSSEUNE"
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
                        Melissa MBEUSSEUNE
                    </h2>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/90">
                        <strong>Consultante, CEO et Brand Strategist</strong> basée à Douala, Melissa
                        MBEUSSEUNE est une figure inspirante de la nouvelle génération d’entrepreneures
                        africaines. Elle évolue à l’intersection de la culture, du commerce et de
                        la stratégie de marque.
                    </p>

                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                        <li>Fondatrice & Gérante — <strong>Duchesse d’Afric’Art</strong></li>
                        <li>Représentante Cameroun — <strong>Domaines Vinsmoselle</strong> | <strong>Poll – Fabair Cameroun</strong></li>
                        <li>Promotrice — <strong>The Akiba Brunch</strong>, un brunch culturel et artistique</li>
                        <li>Directrice — <strong>Mindz Studio</strong>, agence digitale & stratégie commerciale</li>
                    </ul>

                    <p className="text-gray-600">
                        À travers ses projets, Melissa œuvre pour une Afrique moderne, confiante et
                        rayonnante. Elle croit au pouvoir du storytelling, du branding et de la
                        collaboration créative pour transformer la perception du continent.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="px-6 py-3 bg-accent-yellow text-accent-blue font-semibold flex items-center gap-2"
                        >
                            Explorer ses Projets
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            className="px-6 py-3 border-2 border-accent-yellow text-primary font-semibold flex items-center gap-2"
                        >
                            Découvrir son Univers
                        </motion.button>
                    </div>
                </motion.div>
            </section>
            <MissionsSection />

            <CtaSection />
            <EvenementSection />
        </div>
    );
};

export default About;
