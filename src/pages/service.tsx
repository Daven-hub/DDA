import FeaturesSection from "../components/Section/FeaturesSection"
import ServiceCards from "../components/Section/ServiceCards"
import Banner from "../components/Ux/Banner"
import TestimonialSection from "../components/Section/TestimonialSection"
import PartnersSection from "../components/Section/PartnersSection"
import EvenementSection from "../components/Section/EvenementSection"


export const Service = () => {
    return (
        <>
            <Banner
                imageSrc="/images/service.png"
                imageAlt="Services de Duchesse d’Afric’Art"
                title="Des expériences qui subliment l’art et la culture africaine"
                description="Duchesse d’Afric’Art accompagne artistes, marques et institutions dans la valorisation du patrimoine africain à travers des voyages culturels, des événements, des représentations de marques et des stratégies digitales sur mesure."
                height="large"
                overlayIntensity="medium"
            />
            <FeaturesSection />
            <TestimonialSection />
            <ServiceCards />
            <PartnersSection/>
            <EvenementSection/>
        </>
    )
}