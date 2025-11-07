"use client";

import { useState, useEffect, type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FiClock, FiPhone, FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import logoPng from "/DC.png";
import LanguageSwitcher from "../LanguageSwitcher";
import { MapPin } from "lucide-react";

const Header: FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navigationItems = [
    { path: "/", label: t("header.nav.home") },
    {
      path: "#",
      label: t("header.nav.services"),
      dropdown: [
        { path: "/secteurs/voyages", label: t("header.sub_services.voyages") },
        { path: "/secteurs/vins", label: t("header.sub_services.vins") },
        { path: "/secteurs/digital", label: t("header.sub_services.digital") },
        { path: "/secteurs/evenements", label: t("header.sub_services.evenements") },
      ],
    },
    { path: "/about", label: t("header.nav.about") },
    { path: "/galerie", label: t("header.nav.galerie") },
    { path: "/contact", label: t("header.nav.contact") },
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/duchesse-d-afric-art/", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/duchessedafricart?igsh=MTJra2lucnhkZ2J0cA%3D%3D&utm_source=qr", label: "Instagram" },
    { icon: FaFacebookF, href: "https://www.facebook.com/duchessedafricart", label: "Facebook" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@duchessedafricart?_t=8ooPX80PdEf&_r=1", label: "TikTok" },
  ];


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Topbar */}
      <div className="hidden md:flex justify-between items-center px-[10%] py-2 bg-gray-50/90 backdrop-blur-sm border-b border-gray-200 text-sm text-gray-600">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FiClock className="text-accent-green" />
            <span className="font-bold">{t("header.schedule")}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="text-accent-green" />
            <a href={`tel:${t("header.call1")}`} className="hover:text-primary font-bold">{t("header.call1")}</a>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="text-accent-green" />
            <a href={`tel:${t("header.call2")}`} className="hover:text-primary font-bold">{t("header.call2")}</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-accent-green" />
            <p className="hover:text-primary font-bold">{t("header.ad")}</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-accent-green to-accent-yellow text-white shadow-md hover:scale-110 transition-transform">
              <social.icon />
            </a>
          ))}
        </div>
      </div>

      {/* Navbar principale */}
      <nav className={`transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-white py-4"}`}>
        <div className="flex items-center justify-between px-[10%]">
          {/* Menu gauche */}
          <ul className="hidden lg:flex gap-6 font-medium text-gray-700">
            {navigationItems.slice(0, 3).map((item) => (
              <li key={item.path} className="relative group"
                onMouseEnter={() => !isMobile && setActiveDropdown(item.path)}
                onMouseLeave={() => !isMobile && setActiveDropdown(null)}>
                <div className="flex items-center gap-1 cursor-pointer"
                  onClick={() => item.dropdown ? setActiveDropdown(activeDropdown === item.path ? null : item.path) : setActiveDropdown(null)}>
                  <Link to={item.path} className={`hover:text-accent-yellow ${location.pathname === item.path ? "text-accent-yellow" : ""}`}>
                    {item.label}
                  </Link>
                  {/* Flèche dropdown */}
                  {item.dropdown && (
                    <FiChevronDown className={`transition-transform duration-300 ${activeDropdown === item.path ? "rotate-180" : "rotate-0"}`} />
                  )}
                </div>

                {/* Soulignement animé */}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-accent-yellow transition-all duration-300 ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}`} />

                {/* Dropdown services */}
                {item.dropdown && (
                  <ul className={`absolute left-0 mt-3 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${activeDropdown === item.path ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.path}>
                        <Link to={subItem.path} className="block px-5 py-2 hover:bg-accent-yellow/10 hover:text-accent-yellow transition-colors whitespace-nowrap">
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Logo centré */}
          <Link to="/" className="flex items-center justify-center">
            <img src={logoPng} alt="Logo" className={`transition-all ${isScrolled || isMobile ? "h-14" : "h-20"}`} />
          </Link>

          {/* Menu droit */}
          <ul className="hidden lg:flex gap-6 font-medium text-gray-700">
            {navigationItems.slice(3, 6).map((item) => (
              <li key={item.path} className="relative group">
                <Link to={item.path} className={`hover:text-accent-yellow ${location.pathname === item.path ? "text-accent-yellow" : ""}`}>
                  {item.label}
                </Link>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-accent-yellow transition-all duration-300 ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}`} />
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://wa.me/237698032181" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-accent-yellow to-accent-green text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform">
              {t("header.request_quote")}
            </a>
          </div>

          {/* Bouton menu mobile */}
          <button className="lg:hidden text-3xl text-gray-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu mobile">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-xl text-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform ${isMobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-10 invisible"}`}>
        <button className="absolute top-6 right-6 text-3xl hover:text-accent-yellow transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
          <FaTimes />
        </button>

        <div className="space-y-6 text-lg text-center mt-10">
          {navigationItems.map((item) => (
            <div key={item.path}>
              <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => item.dropdown ? setActiveDropdown(activeDropdown === item.path ? null : item.path) : setIsMobileMenuOpen(false)}>
                <Link to={item.path} className={`block hover:text-accent-yellow transition ${location.pathname === item.path ? "text-accent-yellow" : ""}`}>
                  {item.label}
                </Link>
                {item.dropdown && <FiChevronDown className={`transition-transform duration-300 ${activeDropdown === item.path ? "rotate-180" : "rotate-0"}`} />}
              </div>

              {item.dropdown && activeDropdown === item.path && (
                <div className="mt-2 space-y-2">
                  {item.dropdown.map((subItem) => (
                    <Link key={subItem.path} to={subItem.path} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-300 hover:text-accent-yellow">
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* <div className="mt-8 text-center">
          <h4 className="text-lg font-semibold mb-3">{t("header.destinations_title")}</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {destinations.map((destination) => (
              <span key={destination} className="text-sm bg-white/20 px-3 py-1 rounded-full">{destination}</span>
            ))}
          </div>
        </div> */}

        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-accent-green to-accent-yellow text-white hover:scale-110 transition-transform">
                <social.icon />
              </a>
            ))}
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
