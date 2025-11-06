import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logoPng from "/DC.png";

const Footer = () => {
    const { t } = useTranslation();

    const socialLinks = [
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/duchesse-d-afric-art/", label: "LinkedIn" },
        { icon: FaInstagram, href: "https://www.instagram.com/duchessedafricart?igsh=MTJra2lucnhkZ2J0cA%3D%3D&utm_source=qr", label: "Instagram" },
        { icon: FaFacebookF, href: "https://www.facebook.com/duchessedafricart", label: "Facebook" },
        { icon: FaTiktok, href: "https://www.tiktok.com/@duchessedafricart?_t=8ooPX80PdEf&_r=1", label: "TikTok" },
    ];



    return (
        <footer className="bg-gray-950 text-gray-200 pt-16 pb-8 px-[10%]">

            {/* Grid principal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 border-b border-gray-800 pb-10">

                {/* Logo & description */}
                <div className="space-y-4">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logoPng} alt="Logo" className="h-16 bg-white" />
                    </Link>
                    <p className="text-sm sm:text-sm md:text-base text-gray-400 leading-relaxed">
                        {t("footer.description")}
                    </p>
                    <div className="flex gap-3 mt-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-accent-green to-accent-yellow text-white shadow-md hover:scale-110 transition-transform"
                            >
                                <social.icon className="text-sm sm:text-base" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Liens rapides */}
                <div>
                    <h3 className="text-[.8rem] sm:text-[1rem] md:text-[1.4rem] font-heading font-bold text-white mb-4">
                        {t("footer.quick_links_title")}
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-sm md:text-base">
                        <li><a href="/" className="hover:text-accent-yellow">{t("footer.quick_links.home")}</a></li>
                        <li><a href="/about" className="hover:text-accent-yellow">{t("footer.quick_links.about")}</a></li>
                        <li><a href="/services" className="hover:text-accent-yellow">{t("footer.quick_links.services")}</a></li>
                        <li><a href="/galerie" className="hover:text-accent-yellow">{t("footer.quick_links.businesses")}</a></li>
                        <li><a href="/contact" className="hover:text-accent-yellow">{t("footer.quick_links.contact")}</a></li>
                    </ul>
                </div>



                {/* Contact */}
                <div>
                    <h3 className="text-[.8rem] sm:text-[1rem] md:text-[1.4rem] font-heading font-bold text-white mb-4">
                        {t("footer.contact_title")}
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm md:text-sm text-gray-400">
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

            {/* Newsletter */}
            <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-8 gap-4">
                <p className="text-gray-400 text-sm sm:text-base md:flex-1">{t("footer.newsletter_text")}</p>
                <form className="flex w-full sm:w-auto justify-center sm:justify-start">
                    <input
                        type="email"
                        placeholder={t("footer.newsletter_placeholder")}
                        className="w-2/3 sm:w-auto px-3 py-1.5 sm:px-4 sm:py-2 rounded-l-md bg-gray-800 text-white focus:outline-none placeholder-gray-400 text-xs sm:text-sm"
                    />
                    <button
                        type="submit"
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-green text-white font-semibold rounded-r-md hover:bg-accent-yellow transition text-xs sm:text-sm"
                    >
                        {t("footer.newsletter_button")}
                    </button>
                </form>
            </div>

            {/* Bas du footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 mt-8 gap-2">
                <p>© {new Date().getFullYear()} Duchesse d’Afric-Art. {t("footer.rights_reserved")}</p>
                {/* <p>
                    {t("footer.design_by")}{" "}
                    <a
                        href="https://franchise-it-tech.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-yellow hover:underline"
                    >
                        Franchise-it
                    </a>
                </p> */}
            </div>
        </footer>
    );
};

export default Footer;
