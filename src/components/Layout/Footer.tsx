import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import logoPng from "/images/ddaFond.png";

const Footer = () => {
    const { t } = useTranslation();

    const socialLinks = [
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/duchesse-d-afric-art/", label: "LinkedIn" },
        { icon: FaInstagram, href: "https://www.instagram.com/duchessedafricart?igsh=MTJra2lucnhkZ2J0cA%3D%3D&utm_source=qr", label: "Instagram" },
        { icon: FaFacebookF, href: "https://www.facebook.com/duchessedafricart", label: "Facebook" },
        { icon: FaTiktok, href: "https://www.tiktok.com/@duchessedafricart?_t=8ooPX80PdEf&_r=1", label: "TikTok" },
    ];

    const quickLinks = [
        { href: "/", label: t("footer.quick_links.home") },
        { href: "/about", label: t("footer.quick_links.about") },
        // { href: "/services", label: t("footer.quick_links.services") },
        { href: "/galerie", label: "galerie" },
        { href: "/contact", label: t("footer.quick_links.contact") },
    ];

    return (
        <footer className="relative overflow-hidden bg-black text-gray-200 px-[10%] pt-20 pb-10">

            {/* Effet d’ambiance en fond */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/10 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,128,0.05),transparent_70%)] pointer-events-none animate-pulse-slow"></div>

            {/* Grille principale */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">

                {/* Logo & Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <a href="/" className="flex items-center gap-2 group">
                        <img
                            src={logoPng}
                            alt="Logo"
                            className="h-16 w-auto  transition-transform group-hover:scale-105"
                        />
                    </a>
                    <div className="flex gap-4 mt-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-accent-green to-accent-yellow text-white shadow-md transition-all hover:shadow-lg"
                            >
                                <social.icon className="text-lg" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Liens rapides */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-lg font-heading font-bold text-white mb-4 relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-8 after:h-[2px] after:bg-accent-yellow after:rounded-full">
                        {t("footer.quick_links_title")}
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="relative group hover:text-accent-yellow transition"
                                >
                                    <span className="group-hover:translate-x-1 inline-block transition-transform">
                                        {link.label}
                                    </span>
                                    <span className="absolute -left-3 opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all duration-300 text-accent-yellow">
                                        →
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-lg font-heading font-bold text-white mb-4 relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-8 after:h-[2px] after:bg-accent-green after:rounded-full">
                        {t("footer.contact_title")}
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <strong>{t("footer.contact.phone_label")} :</strong>{" "}
                            {t("footer.contact.phone")}
                        </li>
                        <li>
                            <strong>{t("footer.contact.email_label")} :</strong>{" "}
                            {t("footer.contact.email")}
                        </li>
                        <li>
                            <strong>{t("footer.contact.hours_label")} :</strong>{" "}
                            {t("footer.contact.hours")}
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* Newsletter */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6"
            >
                <p className="text-gray-400 text-sm sm:text-base max-w-md text-center sm:text-left">
                    {t("footer.newsletter_text")}
                </p>
                <form className="flex w-full sm:w-auto justify-center sm:justify-start">
                    <input
                        type="email"
                        placeholder={t("footer.newsletter_placeholder")}
                        className="w-2/3 sm:w-auto px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-accent-green placeholder-gray-500 text-sm"
                    />
                    <button
                        type="submit"
                        className="px-5 py-2 bg-accent-green text-white font-semibold rounded-r-md hover:bg-accent-yellow transition-all"
                    >
                        {t("footer.newsletter_button")}
                    </button>
                </form>
            </motion.div>

            {/* Bas du footer */}
            <div className="relative mt-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-2">
                <p>
                    © {new Date().getFullYear()} Duchesse d’Afric-Art.{" "}
                    {t("footer.rights_reserved")}
                </p>
                <p className=" transition">
                    Design by <a target="_blank" rel="noopener noreferrer" href="https://franchise-it-tech.com/" className="font-semibold text-accent-yellow">Franchise-IT</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
