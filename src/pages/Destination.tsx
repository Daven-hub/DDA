import { useTranslation } from "react-i18next";
import SectionPays from "../components/Section/PaySection";
import VinsmoselleSection from "../components/Section/VinsmoselleSection";
import Banner from "../components/Ux/Banner";

export const Destination = () => {
  const { t } = useTranslation();

  return (
    <>
      <Banner
        imageSrc="/images/destination.png"
        imageAlt="Destination"
        title={t("destination.banner.title")}
        description={t("destination.banner.description")}
      />
      <VinsmoselleSection />
      <SectionPays />
    </>
  );
};
