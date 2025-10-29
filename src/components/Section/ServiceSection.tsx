import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { ServiceItem } from "../../data/Service";

type Props = {
    items: ServiceItem[];
    autoplay?: boolean;
    autoplayDelay?: number;
};

export default function ServiceSectionCarousel({
    items,
    autoplay = true,
    autoplayDelay = 3500,
}: Props) {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const autoplayRef = useRef<number | null>(null);
    const hoveringRef = useRef(false);
    const startX = useRef<number | null>(null);
    const deltaX = useRef<number>(0);

    useEffect(() => {
        function calc() {
            const w = window.innerWidth;
            setIsMobile(w < 768);
            if (w >= 1536) setSlidesToShow(4);
            else if (w >= 1280) setSlidesToShow(3);
            else if (w >= 768) setSlidesToShow(2);
            else setSlidesToShow(1);
        }
        calc();
        window.addEventListener("resize", calc);
        return () => window.removeEventListener("resize", calc);
    }, []);

    const totalSlides = items.length;

    useEffect(() => {
        if (!autoplay || isMobile) return;
        function start() {
            stop();
            autoplayRef.current = window.setInterval(() => {
                if (hoveringRef.current) return;
                setCurrent((c) => (c + 1) % totalSlides);
            }, autoplayDelay);
        }
        function stop() {
            if (autoplayRef.current) {
                window.clearInterval(autoplayRef.current);
                autoplayRef.current = null;
            }
        }
        start();
        return () => stop();
    }, [autoplay, autoplayDelay, totalSlides, isMobile]);

    const prev = () => setCurrent((c) => (c - 1 + totalSlides) % totalSlides);
    const next = () => setCurrent((c) => (c + 1) % totalSlides);

    const extendedItems = [...items, ...items.slice(0, slidesToShow)];
    const translatePercent = (current * 100) / slidesToShow;

    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        if (startX.current !== null) {
            deltaX.current = e.touches[0].clientX - startX.current;
        }
    };
    const handleTouchEnd = () => {
        if (deltaX.current > 50) prev();
        else if (deltaX.current < -50) next();
        startX.current = null;
        deltaX.current = 0;
    };

    const getTranslatedItem = (item: ServiceItem) => ({
        id: item.id,
        image: item.image,
        title: t(item.titleKey),
        subtitle: item.subtitleKey ? t(item.subtitleKey) : undefined,
        description: item.descriptionKey ? t(item.descriptionKey) : undefined,
        cta: item.ctaKey ? t(item.ctaKey) : undefined,
    });

    return (
        <section className="relative w-full py-12 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none">
                <img
                    src="/images/cult.png"
                    alt=""
                    className="w-full h-full object-cover opacity-10 mix-blend-multiply"
                />
            </div>

            <div className="relative mx-auto px-[10%]">
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                    <div>
                        <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight">
                            {t("servicesSection.title")}
                        </h2>
                        <p className="mt-2 leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/90">
                            {t("servicesSection.subtitle")}
                        </p>
                    </div>
                    {!isMobile && (
                        <div className="flex gap-3">
                            <button
                                onClick={prev}
                                aria-label={t("Précédent")}
                                className="px-4 py-2 border border-gray-300 bg-gradient-to-r from-accent-green to-accent-yellow text-white rounded-none text-lg"
                            >
                                ‹
                            </button>
                            <button
                                onClick={next}
                                aria-label={t("Suivant")}
                                className="px-4 py-2 border border-gray-300 bg-gradient-to-r from-accent-green to-accent-yellow text-white rounded-none text-lg"
                            >
                                ›
                            </button>
                        </div>
                    )}
                </div>

                {isMobile ? (
                    <div className="grid grid-cols-1 gap-6 relative z-10">
                        {items.map((it) => {
                            const translatedItem = getTranslatedItem(it);
                            return (
                                <article
                                    key={it.id}
                                    className="bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden"
                                >
                                    <img
                                        src={translatedItem.image}
                                        alt={translatedItem.title}
                                        className="object-cover w-full h-48 sm:h-60"
                                    />
                                    <div className="p-4 flex flex-col flex-grow">
                                        <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold">
                                            {translatedItem.title}
                                        </h3>
                                        {translatedItem.subtitle && (
                                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/90 mt-1">
                                                {translatedItem.subtitle}
                                            </p>
                                        )}
                                        {translatedItem.description && (
                                            <p className="mt-2 text-[.9rem] text-black/90">
                                                {translatedItem.description}
                                            </p>
                                        )}
                                        {translatedItem.cta && (
                                            <Link
                                                to={`/services/${translatedItem.title}`}
                                                className="mt-3 px-4 py-2 border border-accent-yellow text-accent-blue font-medium hover:bg-accent-yellow hover:text-accent-blue text-center transition-colors text-sm"
                                            >
                                                {translatedItem.cta}
                                            </Link>
                                        )}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <div
                        className="relative overflow-hidden rounded-none"
                        onMouseEnter={() => (hoveringRef.current = true)}
                        onMouseLeave={() => (hoveringRef.current = false)}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                width: `${(extendedItems.length * 100) / slidesToShow}%`,
                                transform: `translateX(-${translatePercent}%)`,
                            }}
                        >
                            {extendedItems.map((it, index) => {
                                const translatedItem = getTranslatedItem(it);
                                return (
                                    <article
                                        key={`${it.id}-${index}`}
                                        className="flex-shrink-0"
                                        style={{ width: `${100 / slidesToShow}%` }}
                                    >
                                        <div className="bg-white border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden rounded-none">
                                            <img
                                                src={translatedItem.image}
                                                alt={translatedItem.title}
                                                className="object-cover w-full h-48 sm:h-60 md:h-72 lg:h-80"
                                            />
                                            <div className="p-4 sm:p-6 flex flex-col flex-grow">
                                                <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold">
                                                    {translatedItem.title}
                                                </h3>
                                                {translatedItem.subtitle && (
                                                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/90 mt-1">
                                                        {translatedItem.subtitle}
                                                    </p>
                                                )}
                                                {translatedItem.description && (
                                                    <p className="mt-3 leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/90">
                                                        {translatedItem.description}
                                                    </p>
                                                )}
                                                {translatedItem.cta && (
                                                    <Link
                                                        to={`/services/${translatedItem.title}`}
                                                        className="mt-3 px-4 py-2 border border-accent-yellow text-accent-blue font-medium hover:bg-accent-yellow hover:text-accent-blue text-center transition-colors text-sm"
                                                    >
                                                        {translatedItem.cta}
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                )}

                <div className="mt-10 flex justify-center relative z-10">
                    <Link
                        to="/services"
                        className="px-6 py-3 border border-accent-yellow font-medium rounded-none bg-accent-yellow text-accent-blue transition-colors text-base"
                    >
                        {t("servicesSection.ctaGlobal")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
