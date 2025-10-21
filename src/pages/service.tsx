import { useTranslation } from "react-i18next";

import FeaturesSection from "../components/Section/FeaturesSection";
import ServiceCards from "../components/Section/ServiceCards";
import Banner from "../components/Ux/Banner";
import TestimonialSection from "../components/Section/TestimonialSection";
import PartnersSection from "../components/Section/PartnersSection";
import EvenementSection from "../components/Section/EvenementSection";

export const Service = () => {
    const { t } = useTranslation();

    return (
        <>
            <Banner
                imageSrc="/images/service.png"
                imageAlt={t("service.bannerAlt")}
                title={t("service.bannerTitle")}
                description={t("service.bannerDescription")}
                height="large"
                overlayIntensity="medium"
            />
            <FeaturesSection />
            <TestimonialSection />
            <ServiceCards />
            <PartnersSection />
            <EvenementSection />
        </>
    );
};
