import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Slide = {
    id: number;
    image: string;
    titleKey: string;
    subtitleKey: string;
    descriptionKey: string;
    buttonTextKey: string;
};

const slides: Slide[] = [
    {
        id: 1,
        image: "/images/culture.png",
        titleKey: "hero.slide1.title",
        subtitleKey: "hero.slide1.subtitle",
        descriptionKey: "hero.slide1.description",
        buttonTextKey: "hero.slide1.button",
    },
    {
        id: 2,
        image: "/images/ar.png",
        titleKey: "hero.slide2.title",
        subtitleKey: "hero.slide2.subtitle",
        descriptionKey: "hero.slide2.description",
        buttonTextKey: "hero.slide2.button",
    },
    {
        id: 3,
        image: "/images/present.jpg",
        titleKey: "hero.slide3.title",
        subtitleKey: "hero.slide3.subtitle",
        descriptionKey: "hero.slide3.description",
        buttonTextKey: "hero.slide3.button",
    },
    {
        id: 4,
        image: "/images/digital.png",
        titleKey: "hero.slide4.title",
        subtitleKey: "hero.slide4.subtitle",
        descriptionKey: "hero.slide4.description",
        buttonTextKey: "hero.slide4.button",
    },
];

const Hero: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const heroRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    const getHeroHeight = () => {
        if (typeof window === "undefined") return "100vh";
        const headerHeight = 120;
        return `calc(100vh - ${headerHeight}px)`;
    };

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
            {/* Background images */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <motion.img
                        key={slide.id}
                        src={slide.image}
                        alt={t(slide.titleKey)}
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

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-[10%] py-20 space-y-6 z-20">
                <motion.p
                    className="text-sm md:text-base font-light tracking-[0.3em] uppercase mb-2"
                    key={slides[current].subtitleKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {t(slides[current].subtitleKey)}
                </motion.p>

                <motion.h1
                    className="relative text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-heading font-bold leading-tight md:leading-[1.2] max-w-4xl"
                    key={slides[current].titleKey}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {t(slides[current].titleKey)}
                    <span className="absolute -bottom-3 left-0 w-16 h-1 bg-accent-yellow animate-scaleIn rounded-full" />
                </motion.h1>

                <motion.p
                    className="leading-relaxed text-sm sm:text-base md:text-[1.05rem] text-gray-200 max-w-3xl mx-auto md:mx-0"
                    key={slides[current].descriptionKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    {t(slides[current].descriptionKey)}
                </motion.p>

                <motion.button
                    className="px-6 py-3 bg-accent-yellow text-accent-blue font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-glow mt-4"
                    key={slides[current].buttonTextKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {t(slides[current].buttonTextKey)}
                </motion.button>
            </div>

            {/* Dots navigation */}
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