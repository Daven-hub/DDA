import { useTranslation } from "react-i18next";
import SectionPays from "../components/Section/PaySection";
import Banner from "../components/Ux/Banner";
import CtaSection from "../components/Section/CtaSection";
import VisaSection from "../components/Section/VisaSection";

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
      <VisaSection />
      <SectionPays />
      <CtaSection/>
    </>
  );
};
