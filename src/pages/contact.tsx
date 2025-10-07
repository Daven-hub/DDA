import ContactSection from "../components/Section/ContactSection"
import Banner from "../components/Ux/Banner"
import FreightOptions from "../components/Section/AbstractService"
import EvenementSection from "../components/Section/EvenementSection"


export const Contact = () => {
    return (
        <>
            <Banner imageSrc={"/images/client.png"} description={"Entrons en relation — vos projets, nos talents"} title={"Contactez-nous"} imageAlt={""} />
            <FreightOptions />
            <ContactSection />
            <EvenementSection />
        </>
    )
}