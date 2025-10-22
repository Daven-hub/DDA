import { useTranslation } from "react-i18next";
import { paysData } from "../../data/pays";
import CartePays from "./paysSection";

const SectionPays = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative flex flex-col items-center text-center pt-12">
        <span className="w-16 h-[3px] bg-fcc-blue mt-2 mb-6 animate-pulse"></span>
        <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/90 leading-tight">
          {t("sectionPays.title")}
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
          Explorez des destinations uniques, découvrez des cultures fascinantes et créez des souvenirs mémorables.
        </p>
      </div>

      <section className="pt-12">
        <div className="px-[10%] mx-auto py-12">
          <div className="grid md:grid-cols-3 gap-10">
            {paysData.map((pays, index) => (
              <CartePays
                key={index}
                titre={t(pays.titreKey)}
                description={t(pays.descriptionKey)}
                image={pays.image}
                drapeau={pays.drapeau}
                isActive
                // ctaText="Réservez votre voyage"
                // onCtaClick={() => alert(`Réserver pour ${t(pays.titreKey)} !`)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionPays;
