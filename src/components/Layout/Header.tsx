import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FiClock, FiPhone } from "react-icons/fi";
import logoPng from "/DC.png";
import type { FC } from "react";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navigationItems = [
    { path: "/", label: "Accueil" },
    {
      path: "/services",
      label: "Nos Services",
      dropdown: [
        {
          path: "/services/voyages-culturels",
          label: "Voyages Culturels & Responsables",
        },
        {
          path: "/services/degustations-vins",
          label: "Dégustations & Événements Vins",
        },
        {
          path: "/services/digital-studio",
          label: "Agence Digitale & Stratégie Commerciale",
        },
        {
          path: "/services/evenements-culturels",
          label: "Événements Culturels & Artistiques",
        },
      ],
    },
    { path: "/destinations", label: "Destinations" },
    { path: "/about", label: "À propos" },

    { path: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/company/duchessedafricart",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/duchessedafricart",
      label: "Instagram",
    },
    {
      icon: FaFacebookF,
      href: "https://facebook.com/duchessedafricart",
      label: "Facebook",
    },
    {
      icon: FaTiktok,
      href: "https://tiktok.com/@duchessedafricart",
      label: "TikTok",
    },
  ];

  const destinations = [
    "Bénin",
    "Côte d'Ivoire",
    "Cameroun",
    "Tanzanie",
    "Zanzibar",
    "Ghana",
    "Rwanda",
    "Togo",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
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
            <FiClock className="text-accent-green leading-relaxed text-[.95rem] md:text-[1.07rem] font-bold max-w-3xl" />
            <span className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl font-bold">09h00 – 18h00</span>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="text-accent-green leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl font-bold" />
            <a href="tel:+237698032181" className="hover:text-primary leading-relaxed text-[.95rem] md:text-[1.07rem] font-bold max-w-3xl">
              +237 698 03 21 81
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="text-accent-green leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl font-bold" />
            <a href="tel:+237671282149" className="hover:text-primary leading-relaxed text-[.95rem] md:text-[1.07rem] font-bold max-w-3xl">
              +237 671 28 21 49
            </a>
          </div>
        </div>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-accent-green to-accent-yellow text-white shadow-md hover:scale-110 transition-transform"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>

      {/* Navbar principale */}
      <nav
        className={`transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-2"
            : "bg-white py-4"
        }`}
      >
        <div className="flex items-center justify-between px-[10%]">
          {/* Menu gauche */}
          <ul className="hidden lg:flex gap-6 font-medium text-gray-700">
            {navigationItems.slice(0, 3).map((item) => (
              <li key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`hover:text-accent-yellow ${
                    location.pathname === item.path ? "text-accent-yellow" : ""
                  }`}
                >
                  {item.label}
                </Link>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-accent-yellow transition-all duration-300 ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Logo centré */}
          <Link to="/" className="flex items-center justify-center">
            <img
              src={logoPng}
              alt="Logo"
              className={`transition-all ${
                isScrolled || isMobile ? "h-14" : "h-20"
              }`}
            />
          </Link>

          {/* Menu droit */}
          <ul className="hidden lg:flex gap-6 font-medium text-gray-700 leading-relaxed text-[.95rem] md:text-[1.07rem]">
            {navigationItems.slice(3, 6).map((item) => (
              <li key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`hover:text-accent-yellow ${
                    location.pathname === item.path ? "text-accent-yellow" : ""
                  }`}
                >
                  {item.label}
                </Link>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-accent-yellow transition-all duration-300 ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-6 py-3  bg-gradient-to-r from-accent-yellow to-accent-green text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              Demander un devis
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Menu mobile overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center text-white space-y-6 text-xl animate-fadeIn">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-accent-yellow"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Destinations */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Destinations</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {destinations.map((destination) => (
                <span
                  key={destination}
                  className="text-sm bg-white/20 px-3 py-1 rounded-full"
                >
                  {destination}
                </span>
              ))}
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex gap-4 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-accent-green to-accent-yellow text-white hover:scale-110 transition-transform"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
