import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { useState, useEffect } from "react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const images = ["/images/a.png", "/images/vins2.png", "/images/culte.png"]; // ajoute tes propres images ici
    const [currentImage, setCurrentImage] = useState(0);

    // changement automatique d’image toutes les 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className="relative overflow-hidden py-12 text-white bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
                backgroundImage: `url(${images[currentImage]})`,
            }}
        >
            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 px-[10%] mx-auto">
                {/* Titre */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-tight bg-gradient-to-r from-accent-yellow via-accent-green to-white bg-clip-text text-transparent">
                        Contactez-nous
                    </h2>
                    <p className="text-gray-300 mt-4 leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl mx-auto">
                        Une question, une collaboration ou une idée à partager ?
                        Nous serions ravis de vous lire.
                    </p>
                </motion.div>

                {/* Contenu principal */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Infos de contact */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-white/10 border border-white/20 backdrop-blur-sm">
                                <FiMail className="text-2xl text-accent-yellow" />
                            </div>
                            <div>
                                <h4 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold">Email</h4>
                                <p className="text-gray-300">contact@duchessedafricart.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-white/10 border border-white/20 backdrop-blur-sm">
                                <FiPhone className="text-2xl text-accent-yellow" />
                            </div>
                            <div>
                                <h4 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold">Téléphone</h4>
                                <p className="text-gray-300">+237 698 03 21 81 / +237 671 28 21 49</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-white/10 border border-white/20 backdrop-blur-sm">
                                <FiMapPin className="text-2xl text-accent-yellow" />
                            </div>
                            <div>
                                <h4 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold">Adresse</h4>
                                <p className="text-gray-300">Douala, Cameroun</p>
                            </div>
                        </div>

                        {/* Carte intégrée */}
                        <div className="h-64 w-full border border-white/20 shadow-lg overflow-hidden">
                            <iframe
                                title="map-douala"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63567.89643458944!2d9.668246637355016!3d4.050397525202643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d1627d6e947%3A0x4b8b7d8d61e0e35d!2sDouala!5e0!3m2!1sfr!2scm!4v1695900000000!5m2!1sfr!2scm"
                                width="100%"
                                height="100%"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Formulaire */}
                    <motion.form
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        onSubmit={handleSubmit}
                        className="bg-black/50 border border-white/20 p-8 backdrop-blur-md shadow-2xl space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Nom complet
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-yellow transition"
                                placeholder="Votre nom"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Adresse email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-yellow transition"
                                placeholder="votre@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-green transition"
                                placeholder="Votre message..."
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full py-3 flex items-center justify-center gap-2 bg-gradient-to-r from-accent-yellow to-accent-green text-white font-semibold shadow-lg hover:shadow-accent-green/30 transition-all"
                        >
                            <FiSend />
                            Envoyer le message
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
