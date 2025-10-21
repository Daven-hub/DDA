import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { FaChevronUp } from "react-icons/fa";

const SlimLanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.language);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: "fr", label: "Français", flag: "🇫🇷" },
        { code: "en", label: "English", flag: "🇬🇧" },
    ];

    useEffect(() => {
        setCurrentLang(i18n.language);
    }, [i18n.language]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
        setOpen(false);
    };

    const activeLang = languages.find((l) => l.code === currentLang) || languages[0];

    return (
        <div
            ref={dropdownRef}
            className="fixed top-1/3 left-0 z-[1000] flex flex-col items-start"
        >
            {/* Dropdown */}
            {open && (
                <div className="mb-1 w-32 bg-white/95 backdrop-blur-md border border-gray-200 shadow-card rounded-r-xl overflow-hidden animate-slideDown">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`flex items-center gap-2 w-full px-3 py-1.5 text-left transition-all duration-300 ${lang.code === currentLang
                                    ? "bg-accent-blue/20 text-accent-blue font-heading"
                                    : "text-neutral.gray hover:bg-neutral.gray/10"
                                }`}
                        >
                            <span className="text-base">{lang.flag}</span>
                            <span className="text-xs font-sans">{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}

            {/* Slim Button */}
            <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 flex items-center justify-center bg-accent-blue shadow-soft hover:shadow-bold text-white font-bold rounded-r-lg transition-all duration-300 hover:bg-accent-blue/90 hover:scale-105"
            >
                {open ? <FaChevronUp className="text-white text-xs" /> : <span className="text-base">{activeLang.flag}</span>}
            </button>
        </div>
    );
};

export default SlimLanguageSwitcher;
