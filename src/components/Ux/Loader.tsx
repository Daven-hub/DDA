import { motion } from "framer-motion";

const colors = [
    "#FFD300",
    "#00843D",
    "#0066B3",
    "#BA0000",
];

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-black text-neutral-white">
            {/* Cercle principal avec rotation multicolore */}
            <div className="relative w-28 h-28 mb-8">
                {colors.map((color, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border-4"
                        style={{
                            borderColor: color,
                            borderTopColor: "transparent",
                            opacity: 0.8 - i * 0.15,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5 + i * 0.5,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Effet de pulsation du texte */}
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.98, 1.05, 0.98],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-3xl font-heading tracking-wide text-accent-yellow"
            >
                Duchesse d’Afric-Art
            </motion.h1>

            <motion.div
                className="mt-6 h-1 w-40 rounded-full bg-gradient-to-r from-accent-yellow via-accent-green to-accent-blue"
                initial={{ width: 0 }}
                animate={{ width: "10rem" }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.8 }}
            />
        </div>
    );
};

export default Loader;
