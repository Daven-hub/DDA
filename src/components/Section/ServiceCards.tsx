import React from "react";
import { serviceData } from "../../data/Service";
import { Link } from "react-router-dom";

interface ServiceCardProps {
    id:  number | string;
    title: string;
    subtitle?: string;
    description?: string;
    image: string;
    cta?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    id,
    title,
    subtitle,
    description,
    image,
    cta,
}) => {
    return (
        <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img src={image} alt={title} className="w-full h-56 object-cover" />
            <div className="p-8">
                <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/90">{title}</h3>
                {subtitle && (
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mt-1 text-accent-red">{subtitle}</p>
                )}
                {description && (
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mt-4 text-black/90">
                        {description}
                    </p>
                )}
                {cta && (
                    <Link to={`/services/${id}`}>
                    <button className="mt-6 px-6 py-2 border border-accent-yellow  text-accent-blue  bg-accent-yellow transition">
                        {cta}
                    </button>
                    </Link>
                )}
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
