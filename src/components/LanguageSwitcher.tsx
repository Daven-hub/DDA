import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const languages = [
        { code: "fr", label: "Français", flag: "🇫🇷" },
        { code: "en", label: "English", flag: "🇬🇧" },
    ];

    useEffect(() => {
        setCurrentLang(i18n.language);
    }, [i18n.language]);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
        setOpen(false);
    };

    const activeLang = languages.find((l) => l.code === currentLang) || languages[0];

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-accent-yellow to-accent-green text-white font-medium rounded-full shadow-md hover:scale-105 transition-transform"
            >
                <span>{activeLang.flag}</span>
                <span className="hidden md:inline">{activeLang.label}</span>
                <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-fadeIn">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 transition ${lang.code === currentLang ? "bg-gray-50 font-semibold" : ""
                                }`}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
