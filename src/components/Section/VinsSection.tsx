import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AboutSectionExperimenter: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-gradient-to-b from-white to-gray-50 py-12 px-[10%] overflow-hidden"
        >
            {/* Background Shapes */}
            <motion.div
                animate={{ rotate: 360, x: [0, 50, 0], y: [0, -50, 0] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-accent-blue/20 to-primary/10 rounded-full -translate-x-1/2 -translate-y-1/3 opacity-60"
            ></motion.div>
            <motion.div
                animate={{ rotate: -360, x: [0, -30, 0], y: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-red/10 rounded-full translate-x-1/3 translate-y-1/4 opacity-50"
            ></motion.div>

            <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Left: Images */}
                <div className="flex-1 flex flex-col gap-6 w-full">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        className="w-full h-80 lg:h-[500px]  overflow-hidden shadow-xl cursor-pointer"
                    >
                        <img
                            src="/images/aboutS.png"
                            alt="Voyages culturels et responsables"
                            className="w-full h-full object-cover object-top transition-transform duration-500"
                        />
                    </motion.div>


                </div>

                {/* Right: Text */}
                <motion.div
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className="flex-1 flex flex-col gap-6"
                >
                    <span className="text-sm font-semibold text-accent-yellow uppercase tracking-wider">
                        Leadership & Innovation
                    </span>

                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight text-black/90">
                        Une Vision <span className="">Culturelle</span> &{" "}
                        <span className="">Entrepreneuriale</span>
                    </h2>

                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-gray-600">
                        Duchesse d’Afric-Art est un collectif d’entrepreneurs culturels et d’experts du branding basé au Cameroun. Nous créons des expériences qui font rayonner l’identité africaine : voyages responsables, événements œnologiques, rendez-vous culturels et prestations digitales.
                    </p>




                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 mt-6">
                        <motion.a
                            href="/services"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="px-6 py-3 bg-accent-yellow text-accent-blue  font-semibold flex items-center gap-2"
                        >
                            Explorer ses Projets
                        </motion.a>
                        <motion.a
                            href="/about"
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            className="px-6 py-3 border-2 border-accent-yellow text-primary  font-semibold flex items-center gap-2"
                        >
                            Découvrir son Univers
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSectionExperimenter;
