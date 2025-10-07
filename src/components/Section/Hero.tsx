import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Slide = {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
};

const slides: Slide[] = [
    {
        id: 1,
        image: "/images/culture.png",
        title: "Célébrons l’Art & la Culture Camerounaise",
        subtitle: "The Akiba Brunch",
        description:
            "The Akiba Brunch, c’est bien plus qu’un brunch : une scène où se rencontrent gastronomie locale, art contemporain et musique live. Chaque édition met en lumière le talent camerounais et crée des passerelles entre les cultures, dans une ambiance conviviale et inspirante.",
        buttonText: "Participer à la prochaine édition",
    },
    {
        id: 2,
        image: "/images/ar.png",
        title: "Voyages Culturels & Responsables",
        subtitle: "Duchesse d’Afric-Art",
        description:
            "Avec Duchesse d’Afric-Art, explorez l’Afrique autrement. Nos circuits vous emmènent au cœur des traditions, des savoir-faire et des patrimoines uniques. En valorisant les communautés locales et en respectant l’environnement, nous transformons chaque voyage en une expérience humaine et authentique.",
        buttonText: "Explorer nos circuits",
    },
    {
        id: 3,
        image: "/images/present.jpg",
        title: "Dégustations Raffinées",
        subtitle: "Domaines Vinsmoselle",
        description:
            "Ambassadrice des Domaines Vinsmoselle au Cameroun, nous proposons des dégustations et événements autour de vins et crémants d’exception. Alliant élégance, convivialité et savoir-faire, chaque rencontre est une immersion dans l’art de vivre et le plaisir des sens.",
        buttonText: "Réserver une dégustation",
    },
    {
        id: 4,
        image: "/images/digital.png",
        title: "Identité Digitale & Communication",
        subtitle: "Mindz Studio",
        description:
            "Mindz Studio est votre partenaire en stratégie digitale et branding. Nous créons des univers de marque percutants, développons des contenus engageants et déployons des campagnes adaptées à vos ambitions. Notre mission : transformer vos idées en expériences digitales mémorables.",
        buttonText: "Découvrir nos services",
    },
];



const Hero: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const heroRef = useRef<HTMLDivElement>(null);

    const getHeroHeight = () => {
        if (typeof window === "undefined") return "100vh";
        const headerHeight = 120;
        return `calc(100vh - ${headerHeight}px)`;
    };

    // Auto slide
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    return (
        <div
            ref={heroRef}
            className="relative w-full overflow-hidden md:mt-[120px] lg:mt-[120px]"
            style={{ height: getHeroHeight() }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Images de fond avec effet zoom */}
            <div className="absolute inset-0 ">
                {slides.map((slide, index) => (
                    <motion.img
                        key={slide.id}
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{
                            opacity: index === current ? 1 : 0,
                            scale: index === current ? 1.05 : 1,
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                ))}
            </div>

            {/* Overlay dégradé */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />

            {/* Contenu */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-[10%] py-20 space-y-6 z-20">
                <motion.p
                    className="text-sm md:text-base font-light tracking-[0.3em] uppercase mb-2"
                    key={slides[current].subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {slides[current].subtitle}
                </motion.p>

                <motion.h1
                    className="relative text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-heading font-bold leading-tight md:leading-[1.2] max-w-4xl"
                    key={slides[current].title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {slides[current].title}
                    {/* Soulignement accent */}
                    <span className="absolute -bottom-3 left-0 w-16 h-1 bg-accent-yellow animate-scaleIn rounded-full" />
                </motion.h1>

                <motion.p
                    className="leading-relaxed text-sm sm:text-base md:text-[1.05rem] text-gray-200 max-w-3xl mx-auto md:mx-0"
                    key={slides[current].description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    {slides[current].description}
                </motion.p>

                <motion.button
                    className="  px-6 py-3   bg-accent-yellow text-accent-blue  font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-glow mt-4"
                    key={slides[current].buttonText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {slides[current].buttonText}
                </motion.button>
            </div>

            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${index === current
                            ? "bg-white shadow-glow scale-125"
                            : "bg-white/40 hover:bg-white/70"
                            }`}
                        aria-label={`Aller au slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
