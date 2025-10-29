import React from "react";
import { useTranslation } from "react-i18next";
import { serviceData } from "../../data/Service";
import { Link } from "react-router-dom";
import type { ServiceItem } from "../../data/Service";

interface ServiceCardProps extends Omit<
    ServiceItem,
    "highlightsKey" | "stats" | "gallery" | "longDescriptionKey" | "quoteKey" | "video"
> { }

const ServiceCard: React.FC<ServiceCardProps> = ({
    titleKey,
    subtitleKey,
    descriptionKey,
    image,
    ctaKey,
}) => {
    const { t } = useTranslation();

    // URL encodée pour éviter les espaces et caractères spéciaux
    const serviceUrl = `/services/${encodeURIComponent(t(titleKey))}`;

    return (
        <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img src={image} alt={t(titleKey)} className="w-full h-56 object-cover" />
            <div className="p-6 md:p-8">
                <h3 className="text-[1rem] md:text-[1.4rem] font-heading font-bold text-black/90">
                    {t(titleKey)}
                </h3>

                {subtitleKey && (
                    <p className="mt-1 text-[.95rem] md:text-[1.07rem] text-accent-red">
                        {t(subtitleKey)}
                    </p>
                )}

                {descriptionKey && (
                    <p className="mt-4 text-[.95rem] md:text-[1.07rem] text-black/80">
                        {t(descriptionKey)}
                    </p>
                )}

                <Link to={serviceUrl}>
                    <button className="mt-6 px-6 py-2 border border-accent-yellow text-accent-blue bg-accent-yellow transition hover:scale-105">
                        {ctaKey ? t(ctaKey) : t("service.contactCTA")}
                    </button>
                </Link>
            </div>
        </div>
    );
};

const ServiceCards: React.FC = () => {
    return (
        <section className="w-full py-12">
            <div className="px-[10%] mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {serviceData.map((service) => (
                    <ServiceCard key={service.id} {...service} />
                ))}
            </div>
        </section>
    );
};

export default ServiceCards;
