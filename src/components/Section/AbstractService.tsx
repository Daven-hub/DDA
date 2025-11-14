"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import 'swiper/swiper-bundle.css';

export default function SlideShow() {
    const { t } = useTranslation();

    const slides = [
        {
            id: 1,
            image: "/images/ddaFond.png",
            title: t("slideshow.slide2.title"),
            subtitle: t("slideshow.slide2.subtitle"),
            link: "/secteurs/voyages",
        },
        {
            id: 2,
            image: "/images/brunch.jpg",
            title: t("slideshow.slide1.title"),
            subtitle: t("slideshow.slide1.subtitle"),
            link: "/secteurs/evenements",
        },
        {
            id: 3,
            image: "/images/sparking.png",
            title: t("slideshow.slide3.title"),
            subtitle: t("slideshow.slide3.subtitle"),
            link: "/secteurs/vins",
        },
        {
            id: 4,
            image: "/images/mindz.png",
            title: t("slideshow.slide4.title"),
            subtitle: t("slideshow.slide4.subtitle"),
            link: "/secteurs/digital",
        },
    ];

    return (
        <div className="w-full py-12 px-[10%]">
            {/* --- Version Mobile --- */}
            <div className="md:hidden">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    className="pb-10"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <a
                                href={slide.link}
                                className="block flex flex-col items-center text-center p-6 shadow-sm bg-gray-200 border border-gray-100 hover:shadow-xl transition-all duration-300 ease-out active:scale-95"
                            >
                                <div className="p-5 flex items-center justify-center mb-4">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{slide.title}</h3>
                                <p className="text-sm text-gray-500 mt-2">{slide.subtitle}</p>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* --- Version Desktop --- */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10">
                {slides.map((slide) => (
                    <a
                        key={slide.id}
                        href={slide.link}
                        className="group flex flex-col items-center text-center p-6 shadow-sm bg-gray-200 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out"
                    >
                        <div className="p-5 flex items-center justify-center group-hover:bg-accent-green/20 transition-colors duration-300">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="mt-5 text-lg md:text-xl font-semibold text-gray-800 group-hover:text-accent-green transition-colors">
                            {slide.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">{slide.subtitle}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
