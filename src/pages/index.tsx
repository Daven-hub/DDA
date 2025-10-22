import FreightOptions from "../components/Section/AbstractService"
import AkibaBrunchSection from "../components/Section/AkibaBrunchSection"
import ContactSection from "../components/Section/ContactSection"
import CtaSection from "../components/Section/CtaSection"
import EvenementSection from "../components/Section/EvenementSection"
import Hero from "../components/Section/Hero"
import MindzStudioSection from "../components/Section/MindzStudioSection"
import MissionsSection from "../components/Section/MissionsSection"
import PartnersSection from "../components/Section/PartnersSection"
import ServiceSectionCarousel from "../components/Section/ServiceSection"
import StatisticsSection from "../components/Section/StatisticsSection"
import TestimonialSection from "../components/Section/TestimonialSection"
import VinsmoselleSection from "../components/Section/VinsmoselleSection"
import AboutSectionExperimenter from "../components/Section/VinsSection"
import VisaSection from "../components/Section/VisaSection"
import VisionValeurs from "../components/Section/VisionValeurs"
import { serviceData } from "../data/Service"


export const Home = () => {
    return (
        <>
            <Hero />
            <FreightOptions />
            <AboutSectionExperimenter />
            <EvenementSection/>
            <VisionValeurs />
            <ServiceSectionCarousel items={serviceData} />
            <CtaSection/>
            <MissionsSection/>
            <VisaSection/>
            <MindzStudioSection/>
            <VinsmoselleSection/>
            <AkibaBrunchSection/>
            <PartnersSection/>
            <ContactSection/>
            <StatisticsSection/>
            <TestimonialSection/>
        </>
    )
}