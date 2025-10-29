"use client";

import { Palette, Plane, Wine, Monitor } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

import 'swiper/swiper-bundle.css';

export default function SlideShow() {
    const { t } = useTranslation();

    const slides = [
        {
            id: 1,
            icon: <Palette className="w-10 h-10 text-accent-green" />,
            title: t("slideshow.slide1.title"),
            subtitle: t("slideshow.slide1.subtitle"),
        },
        {
            id: 2,
            icon: <Plane className="w-10 h-10 text-accent-green" />,
            title: t("slideshow.slide2.title"),
            subtitle: t("slideshow.slide2.subtitle"),
        },
        {
            id: 3,
            icon: <Wine className="w-10 h-10 text-accent-green" />,
            title: t("slideshow.slide3.title"),
            subtitle: t("slideshow.slide3.subtitle"),
        },
        {
            id: 4,
            icon: <Monitor className="w-10 h-10 text-accent-green" />,
            title: t("slideshow.slide4.title"),
            subtitle: t("slideshow.slide4.subtitle"),
        },
    ];

    return (
        <div className="w-full py-12 px-[10%]">
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
                            <div className="flex flex-col items-center text-center p-6 shadow-sm bg-gray-200 border border-gray-100 hover:shadow-xl transition-all duration-300 ease-out">
                                <div className="p-5 bg-accent-green/10 rounded-full flex items-center justify-center mb-4">
                                    {slide.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{slide.title}</h3>
                                <p className="text-sm text-gray-500 mt-2">{slide.subtitle}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10">
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="group flex flex-col items-center text-center p-6 shadow-sm bg-gray-200 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out"
                    >
                        <div className="p-5 bg-accent-green/10 rounded-full flex items-center justify-center group-hover:bg-accent-green/20 transition-colors duration-300">
                            {slide.icon}
                        </div>
                        <h3 className="mt-5 text-lg md:text-xl font-semibold text-gray-800 group-hover:text-accent-green transition-colors">
                            {slide.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">{slide.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
