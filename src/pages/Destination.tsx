import SectionPays from "../components/Section/PaySection"
import VinsmoselleSection from "../components/Section/VinsmoselleSection"
import Banner from "../components/Ux/Banner"

export const Destination = () => {
    return (
        <>
          <Banner imageSrc="/images/destination.png" description={"Voyages culturels & responsables — Explorez l’Afrique autrement"} title={"Duchesse d’Afric-Art"} imageAlt={""} />
          <VinsmoselleSection/>
          <SectionPays/>
        </>
    )
}