"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const events = [
    { id: 1, image: "/images/voyage/2.png" },
    { id: 2, image: "/images/voyage/3.png" },
    { id: 3, image: "/images/voyage/4.png" },
    { id: 4, image: "/images/voyage/5.png" },
    { id: 5, image: "/images/voyage/6.png" },
    { id: 6, image: "/images/voyage/7.png" },
    { id: 7, image: "/images/voyage/8.png" },
    { id: 8, image: "/images/voyage/9.png" },

];

export default function EvenementSection() {
    return (
        <section className="w-full py-12 px-[10%]">

            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={20}
                slidesPerView={1.2}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 },
                }}
                loop={true}
                grabCursor={true}
                className="pb-10"
            >
                {events.map((event) => (
                    <SwiperSlide key={event.id}>
                        <div className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-1">
                            <img
                                src={event.image}
                                alt={`Événement ${event.id}`}
                                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
