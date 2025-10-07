"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css";


const testimonials = [
    {
        id: 1,
        name: "Claire T.",
        role: "Voyageuse solidaire",
        service: "Duchesse d’Afric-Art",
        text: "Un voyage culturel inoubliable ! L’équipe de Duchesse d’Afric-Art a su mêler authenticité, rencontres humaines et professionnalisme. Une expérience profondément enrichissante.",
    },
    {
        id: 2,
        name: "Romain B.",
        role: "Sommelier & partenaire",
        service: "Domaines Vinsmoselle",
        text: "La collaboration avec l’équipe au Cameroun a été d’une qualité rare. Les dégustations étaient impeccablement organisées et la mise en valeur des vins, tout simplement remarquable.",
    },
    {
        id: 3,
        name: "Nathalie E.",
        role: "Créatrice artisanale",
        service: "The Akiba Brunch",
        text: "Participer au Akiba Brunch a été une belle opportunité pour exposer mon art et échanger avec un public curieux et bienveillant. Une vraie vitrine pour les talents camerounais.",
    },
    {
        id: 4,
        name: "Kevin L.",
        role: "Entrepreneur digital",
        service: "Mindz Studio",
        text: "Mindz Studio m’a accompagné dans la refonte de mon identité de marque. Stratégie, design, communication : tout a été mené avec une précision et une créativité exemplaires.",
    },
    {
        id: 5,
        name: "Aline M.",
        role: "Directrice marketing",
        service: "Mindz Studio",
        text: "Une équipe passionnée, à l’écoute, et toujours force de proposition. Mindz Studio est un véritable partenaire de croissance pour notre présence en ligne.",
    },
];


export default function TestimonialSection() {
    return (
        <section className="w-full py-12 px-[10%] bg-gradient-to-br from-green-50 via-white to-green-100">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight  mb-10"
            >
                Ce que disent nos clients
            </motion.h2>

            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                pagination={{ clickable: true }}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                loop={true}
                grabCursor={true}
                className="pb-10"
            >
                {testimonials.map((t) => (
                    <SwiperSlide key={t.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative bg-white/70 backdrop-blur-md border border-green-100 shadow-md hover:shadow-xl transition-all duration-500 p-8 flex flex-col justify-between h-full"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>

                            <p className="text-gray-700 italic leading-relaxed mb-6">
                                “{t.text}”
                            </p>

                            <div className="flex flex-col">
                                <span className="font-semibold text-green-700">{t.name}</span>
                                <span className="text-sm text-gray-500">{t.role}</span>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
