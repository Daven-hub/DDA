import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

type Country = {
    key: string;
    flag: string;
    visas: string[];
};

const countries: Country[] = [
    { key: "cameroon", flag: "https://flagcdn.com/w320/cm.png", visas: ["touristVisa", "culturalTour"] },
    { key: "togo", flag: "https://flagcdn.com/w320/tg.png", visas: ["touristVisa", "adventureTrip"] },
    { key: "benin", flag: "https://flagcdn.com/w320/bj.png", visas: ["touristVisa", "heritageTour"] },
    { key: "ghana", flag: "https://flagcdn.com/w320/gh.png", visas: ["touristVisa", "coastalDiscovery"] },
    { key: "cote_divoire", flag: "https://flagcdn.com/w320/ci.png", visas: ["touristVisa", "culturalImmersion"] },
    { key: "tanzania", flag: "https://flagcdn.com/w320/tz.png", visas: ["touristVisa", "safariExperience"] },
    { key: "zanzibar", flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Zanzibar.svg", visas: ["touristVisa", "islandRetreat"] },
    { key: "rwanda", flag: "https://flagcdn.com/w320/rw.png", visas: ["touristVisa", "ecoTourism"] },
    { key: "south_africa", flag: "https://flagcdn.com/w320/za.png", visas: ["touristVisa", "urbanAdventure"] },
];

export default function VisaSection() {
    const { t } = useTranslation();
    const [activeCountry, setActiveCountry] = useState<Country>(countries[0]);

    return (
        <div
            className="flex flex-col md:flex-row bg-cover bg-center min-h-[70vh]"
            style={{ backgroundImage: "url('/images/avion.png')" }}
        >
            <div className="flex-1 bg-accent-green/70 text-white px-[10%] py-12 flex flex-col justify-center">
                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-tight mb-4">
                    {t("visa.title")}
                </h2>

                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] mb-6 max-w-lg">
                    {t("visa.description")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {activeCountry.visas.map((visaKey, i) => (
                        <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="text-gray-300 w-5 h-5" />
                            <span>{t(`visa.visas.${visaKey}`)}</span>
                        </div>
                    ))}
                </div>

                <a
                    href="https://wa.me/237698032181"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent-yellow text-accent-blue font-semibold px-6 py-3 w-fit hover:scale-105 transition-transform rounded-lg inline-block"
                >
                    {t("visa.contactButton")}
                </a>
            </div>

            <div className="flex overflow-x-auto md:overflow-visible no-scrollbar scroll-smooth">
                {countries.map((country) => (
                    <div
                        key={country.key}
                        className={`flex flex-col items-center justify-between py-6 px-4 cursor-pointer transition-all min-w-[80px] md:min-w-0
              ${activeCountry.key === country.key
                                ? "bg-[#0a2b5c] text-white"
                                : "bg-[#082246]/80 text-gray-300 hover:bg-[#0a2b5c]"
                            }`}
                        onClick={() => setActiveCountry(country)}
                    >
                        <span
                            className="text-xs md:text-sm font-semibold mb-4 md:mb-6 rotate-0 md:rotate-180 md:writing-vertical"
                            style={{ writingMode: "vertical-rl" }}
                        >
                            {t(`visa.countries.${country.key}`)}
                        </span>
                        <img
                            src={country.flag}
                            alt={t(`visa.countries.${country.key}`)}
                            className="w-8 h-8 rounded-full border border-white"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
