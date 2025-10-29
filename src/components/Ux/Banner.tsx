import { motion, type Variants, type Transition } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface BannerProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description?: string;
    children?: ReactNode;
    height?: "small" | "medium" | "large" | "full";
    overlayIntensity?: "light" | "medium" | "dark";
}

const Banner = ({
    imageSrc,
    imageAlt,
    title,
    description,
    children,
    height = "medium",
    overlayIntensity = "medium",
}: BannerProps) => {
    const heightClasses = {
        small: "h-[55vh]",
        medium: "h-[70vh]",
        large: "h-[85vh]",
        full: "min-h-screen",
    };

    const overlayClasses = {
        light: "bg-black/20",
        medium: "bg-black/40",
        dark: "bg-black/60",
    };

    const ease: Transition["ease"] = [0.25, 0.46, 0.45, 0.94];

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.8 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
    };

    const imageVariants: Variants = {
        hidden: { scale: 1.05 },
        visible: { scale: 1, transition: { duration: 1.5, ease } },
    };

    const handleScrollToServices = () => {
        const section = document.getElementById("services");
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            className={`relative w-full ${heightClasses[height]} flex items-end justify-start overflow-hidden`}
        >
            <motion.div
                className="absolute inset-0 w-full h-full"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
            >
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <div
                className={`absolute inset-0 ${overlayClasses[overlayIntensity]} 
                bg-gradient-to-b from-black/40 via-black/50 to-black/70`}
            />

            <motion.div
                className="relative z-10 flex flex-col items-start justify-end text-left px-[10%] pb-[10%]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-heading font-bold leading-tight md:leading-[1.2] max-w-4xl text-white mb-3 drop-shadow-lg"
                    variants={itemVariants}
                >
                    {title}
                </motion.h1>

                {description && (
                    <motion.p
                        className="leading-relaxed text-sm sm:text-base md:text-[1.05rem] text-gray-200 max-w-3xl mb-6 opacity-90 drop-shadow-md"
                        variants={itemVariants}
                    >
                        {description}
                    </motion.p>
                )}

                <Link to={'/services'}>
                    <motion.button
                        onClick={handleScrollToServices}
                        className="px-7 py-3 bg-accent-yellow text-accent-blue font-semibold text-base sm:text-lg shadow-md hover:bg-yellow-400 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Nos services
                    </motion.button>
                </Link>

                {children && (
                    <motion.div className="mt-6" variants={itemVariants}>
                        {children}
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default Banner;