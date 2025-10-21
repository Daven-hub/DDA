import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logoPng from "/DC.png";

const Footer = () => {
    const { t } = useTranslation();

    const socialLinks = [
        { icon: FaLinkedinIn, href: "https://linkedin.com/company/duchessedafricart", label: "LinkedIn" },
        { icon: FaInstagram, href: "https://instagram.com/duchessedafricart", label: "Instagram" },
        { icon: FaFacebookF, href: "https://facebook.com/duchessedafricart", label: "Facebook" },
        { icon: FaTiktok, href: "https://tiktok.com/@duchessedafricart", label: "TikTok" },
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

    return (
        <footer className="bg-gray-950 text-gray-200 pt-16 pb-8 px-[10%]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
                {/* Logo & description */}
                <div className="space-y-4">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logoPng} alt="Logo" className="h-16 bg-white" />
                    </Link>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        {t("footer.description")}
                    </p>
                    <div className="flex gap-3 mt-4">
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

                {/* Liens rapides */}
                <div>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-white mb-4">
                        {t("footer.quick_links_title")}
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-accent-yellow">{t("footer.quick_links.home")}</Link></li>
                        <li><Link to="/about" className="hover:text-accent-yellow">{t("footer.quick_links.about")}</Link></li>
                        <li><Link to="/services" className="hover:text-accent-yellow">{t("footer.quick_links.services")}</Link></li>
                        <li><Link to="/entreprises" className="hover:text-accent-yellow">{t("footer.quick_links.businesses")}</Link></li>
                        <li><Link to="/contact" className="hover:text-accent-yellow">{t("footer.quick_links.contact")}</Link></li>
                    </ul>

                </div>

                {/* Destinations */}
                <div>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-white mb-4">
                        {t("footer.destinations_title")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {destinations.map((d) => (
                            <span
                                key={d}
                                className="text-sm bg-white/10 px-3 py-1 rounded-full hover:bg-accent-green hover:text-white cursor-default transition"
                            >
                                {d}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-white mb-4">
                        {t("footer.contact_title")}
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <strong>{t("footer.contact.phone_label")} :</strong> {t("footer.contact.phone")}
                        </li>
                        <li>
                            <strong>{t("footer.contact.email_label")} :</strong> {t("footer.contact.email")}
                        </li>
                        <li>
                            <strong>{t("footer.contact.hours_label")} :</strong> {t("footer.contact.hours")}
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bas du footer */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-8">
                <p>
                    © {new Date().getFullYear()} Duchesse d’Afric-Art. {t("footer.rights_reserved")}
                </p>
                <p>
                    {t("footer.design_by")}{" "}
                    <a
                        href="https://franchise-it-tech.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-yellow hover:underline"
                    >
                        Franchise-it
                    </a>
                </p>
                
            </div>
        </footer>
    );
};

export default Footer;
