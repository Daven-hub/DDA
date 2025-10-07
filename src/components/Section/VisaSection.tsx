import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

type Country = {
    name: string;
    flag: string;
    visas: string[];
};

const countries: Country[] = [
    { name: "BÉNIN", flag: "https://flagcdn.com/w320/bj.png", visas: ["Tourist Visa"] },
    { name: "CÔTE D’IVOIRE", flag: "https://flagcdn.com/w320/ci.png", visas: ["Tourist Visa"] },
    { name: "CAMEROUN", flag: "https://flagcdn.com/w320/cm.png", visas: ["Tourist Visa"] },
    { name: "TANZANIE", flag: "https://flagcdn.com/w320/tz.png", visas: ["Tourist Visa"] },
    { name: "ZANZIBAR", flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Zanzibar.svg", visas: ["Tourist Visa"] },
    { name: "GHANA", flag: "https://flagcdn.com/w320/gh.png", visas: ["Tourist Visa"] },
    { name: "RWANDA", flag: "https://flagcdn.com/w320/rw.png", visas: ["Tourist Visa"] },
    { name: "TOGO", flag: "https://flagcdn.com/w320/tg.png", visas: ["Tourist Visa"] },
];

export default function VisaSection() {
    const [activeCountry, setActiveCountry] = useState<Country>(countries[0]);

    return (
        <div
            className="flex flex-col md:flex-row bg-cover bg-center min-h-[70vh]"
            style={{ backgroundImage: "url('/images/avion.png')" }}
        >
            {/* Bloc gauche */}
            <div className="flex-1 bg-accent-green/70 text-white px-[10%] py-12 flex flex-col justify-center">
                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-tight mb-4">
                    Nos Destinations
                </h2>
                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] mb-6 max-w-lg">
                    Explorez l'Afrique autrement avec nos voyages culturels et responsables
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {activeCountry.visas.map((visa, i) => (
                        <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="text-gray-300 w-5 h-5" />
                            <span>{visa}</span>
                        </div>
                    ))}
                </div>

                <Link to={'/contact'}>
                    <button className="bg-accent-yellow text-accent-blue font-semibold px-6 py-3 w-fit">
                        CONTACT US
                    </button>
                </Link>
            </div>

            {/* Bloc pays */}
            <div className="flex overflow-x-auto md:overflow-visible no-scrollbar scroll-smooth">
                {countries.map((country) => (
                    <div
                        key={country.name}
                        className={`flex flex-col items-center justify-between py-6 px-4 cursor-pointer transition-all min-w-[80px] md:min-w-0
                        ${activeCountry.name === country.name
                                ? "bg-[#0a2b5c] text-white"
                                : "bg-[#082246]/80 text-gray-300 hover:bg-[#0a2b5c]"
                            }`}
                        onClick={() => setActiveCountry(country)}
                    >
                        <span
                            className="text-xs md:text-sm font-semibold mb-4 md:mb-6 rotate-0 md:rotate-180 md:writing-vertical"
                            style={{ writingMode: "vertical-rl" }}
                        >
                            {country.name}
                        </span>
                        <img
                            src={country.flag}
                            alt={country.name}
                            className="w-8 h-8 rounded-full border border-white"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
