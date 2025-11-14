import { useTranslation } from "react-i18next";
import ContactSection from "../components/Section/ContactSection";
import Banner from "../components/Ux/Banner";
import FreightOptions from "../components/Section/AbstractService";
import EvenementSection from "../components/Section/EvenementSection";

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <>
            <Banner
                imageSrc="/images/teamsPlus.png"
                imageAlt="Contact — Duchesse d’Afric’Art"
                title={t("contacts.banner.title")}
                description={t("contacts.banner.description")}
            />

            <FreightOptions />
            <ContactSection />
            <EvenementSection />
        </>
    );
};

export default Contact;
