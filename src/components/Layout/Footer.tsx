import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import logoPng from "/DC.png";

const Footer = () => {
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

    return (
        <footer className="bg-gray-950 text-gray-200 pt-16 pb-8 px-[10%]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">

                {/* Logo & description */}
                <div className="space-y-4">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logoPng} alt="Logo" className="h-16 bg-white" />
                    </Link>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Duchesse d’Afric-Art célèbre la richesse culturelle africaine à travers
                        des expériences uniques : voyages, événements, dégustations et créations digitales.
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
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-white mb-4">Liens rapides</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-accent-yellow">Accueil</Link></li>
                        <li><Link to="/about" className="hover:text-accent-yellow">À propos</Link></li>
                        <li><Link to="/services" className="hover:text-accent-yellow">Nos Services</Link></li>
                        <li><Link to="/entreprises" className="hover:text-accent-yellow">Nos Entreprises</Link></li>
                        <li><Link to="/contact" className="hover:text-accent-yellow">Contact</Link></li>
                    </ul>
                </div>

                {/* Destinations */}
                <div>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-white mb-4">Destinations</h3>
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
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-white mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><strong>Téléphone :</strong> +237 698 03 21 81 / +237 671 28 21 49</li>
                        <li><strong>Email :</strong> contact@duchessedafricart.com</li>
                        <li><strong>Heures :</strong> Lun – Sam : 09h00 – 18h00</li>
                    </ul>
                </div>
            </div>

            {/* Bas du footer */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-8">
                <p>
                    © {new Date().getFullYear()} Duchesse d’Afric-Art. Tous droits réservés.
                </p>
                <p>
                    Design & Développement par{" "}
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
