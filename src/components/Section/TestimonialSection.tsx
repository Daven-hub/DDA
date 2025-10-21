"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "swiper/swiper-bundle.css";

export default function TestimonialSection() {
    const { t } = useTranslation();

    const testimonials = [
        {
            id: 1,
            name: "Claire T.",
            role: t("testimonials.traveler"),
            service: "Duchesse d’Afric-Art",
            text: t("testimonials.text1"),
        },
        {
            id: 2,
            name: "Romain B.",
            role: t("testimonials.sommelier"),
            service: "Domaines Vinsmoselle",
            text: t("testimonials.text2"),
        },
        {
            id: 3,
            name: "Nathalie E.",
            role: t("testimonials.artist"),
            service: "The Akiba Brunch",
            text: t("testimonials.text3"),
        },
        {
            id: 4,
            name: "Kevin L.",
            role: t("testimonials.digitalEntrepreneur"),
            service: "Mindz Studio",
            text: t("testimonials.text4"),
        },
        {
            id: 5,
            name: "Aline M.",
            role: t("testimonials.marketingDirector"),
            service: "Mindz Studio",
            text: t("testimonials.text5"),
        },
    ];

    return (
        <section className="w-full py-12 px-[10%] bg-gradient-to-br from-green-50 via-white to-green-100">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight mb-10"
            >
                {t("testimonials.title")}
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
