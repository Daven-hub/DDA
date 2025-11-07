import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Banner from "../components/Ux/Banner";
import { useTranslation } from "react-i18next";

interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    description?: string;
}

const Galerie: React.FC = () => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState<number | null>(null);
    const [, setLoaded] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);

    const images: GalleryItem[] = [
        { id: 1, src: "/images/galerie/v1.png", alt: "" },
        { id: 2, src: "/images/galerie/v2.png", alt: "" },
        { id: 3, src: "/images/galerie/v3.png", alt: "" },
        { id: 4, src: "/images/galerie/v4.png", alt: "" },
        { id: 5, src: "/images/galerie/v5.png", alt: "" },
        { id: 6, src: "/images/galerie/v6.png", alt: "" },
        { id: 7, src: "/images/galerie/v7.png", alt: "" },
        { id: 8, src: "/images/galerie/v8.png", alt: "" },
        { id: 9, src: "/images/galerie/v9.png", alt: "" },
        { id: 10, src: "/images/galerie/v10.png", alt: "" },
        { id: 11, src: "/images/galerie/v11.png", alt: "" },
        { id: 12, src: "/images/galerie/v12.png", alt: "" },
        { id: 13, src: "/images/galerie/v13.png", alt: "" },
        { id: 14, src: "/images/galerie/v14.png", alt: "" },
        { id: 15, src: "/images/galerie/v15.png", alt: "" },
        { id: 16, src: "/images/galerie/v16.png", alt: "" },
        { id: 17, src: "/images/galerie/v17.png", alt: "" },
        { id: 18, src: "/images/galerie/v18.png", alt: "" },
        { id: 19, src: "/images/galerie/v19.png", alt: "" },
        { id: 20, src: "/images/galerie/un.jpg", alt: "" },
        { id: 21, src: "/images/galerie/deux.jpg", alt: "" },
        { id: 22, src: "/images/galerie/trois.jpg", alt: "" },
        { id: 23, src: "/images/galerie/quatre.jpg", alt: "" },
        { id: 24, src: "/images/galerie/cinq.jpg", alt: "" },
        { id: 25, src: "/images/galerie/six.jpg", alt: "" },
        { id: 26, src: "/images/galerie/sept.jpg", alt: "" },
        { id: 27, src: "/images/galerie/huite.jpg", alt: "" },
        { id: 28, src: "/images/galerie/neuf.jpg", alt: "" },
        { id: 29, src: "/images/present.jpg", alt: "" },
        { id: 30, src: "/images/galerie/v20.png", alt: "" },
        { id: 31, src: "/images/galerie/v21.png", alt: "" },
        { id: 32, src: "/images/galerie/v22.png", alt: "" },
        { id: 33, src: "/images/galerie/v23.png", alt: "" },
        { id: 34, src: "/images/galerie/v24.png", alt: "" },
        { id: 35, src: "/images/galerie/v25.png", alt: "" },
        { id: 36, src: "/images/galerie/v26.png", alt: "" },
        { id: 37, src: "/images/galerie/v27.png", alt: "" },
        { id: 38, src: "/images/galerie/v28.png", alt: "" },
        { id: 39, src: "/images/galerie/v29.png", alt: "" },
        { id: 40, src: "/images/galerie/v30.png", alt: "" },
        { id: 41, src: "/images/dda/d2.png", alt: "" },
        { id: 42, src: "/images/dda/d3.png", alt: "" },
        { id: 43, src: "/images/dda/d1.png", alt: "" },
        { id: 44, src: "/images/dda/fa.jpeg", alt: "" },

    ];


    const selectedItem = selected !== null ? images.find(i => i.id === selected) : null;
    const currentIndex = selected !== null ? images.findIndex(i => i.id === selected) : -1;

    const navigate = (dir: "next" | "prev") => {
        if (selected === null) return;
        const newIndex =
            dir === "next"
                ? (currentIndex + 1) % images.length
                : (currentIndex - 1 + images.length) % images.length;
        setSelected(images[newIndex].id);
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelected(null);
            if (e.key === "ArrowRight") navigate("next");
            if (e.key === "ArrowLeft") navigate("prev");
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selected, currentIndex]);

    return (
        <>
            <Banner
                imageSrc="/images/ar.png"
                imageAlt="Galerie – Duchesse d’Afric’Art"
                title={t("gallery.bannerTitle")}
                description={t("gallery.bannerDescription")}
            />

            <main className="bg-white px-[10%] py-16 text-neutral-800">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-3">
                        {t("gallery.title")}
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        {t("gallery.subtitle")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <motion.div
                            key={img.id}
                            className="relative overflow-hidden rounded-2xl cursor-pointer group bg-gray-100"
                            onClick={() => setSelected(img.id)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.02 }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                                onLoad={() => setLoaded(true)}
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selected && selectedItem && (
                        <motion.div
                            ref={overlayRef}
                            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div
                                className="absolute inset-0 cursor-pointer"
                                onClick={() => setSelected(null)}
                            ></div>

                            <motion.img
                                key={selectedItem.id}
                                src={selectedItem.src}
                                alt={selectedItem.alt}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                                className="relative z-10 max-h-[80vh] w-auto rounded-2xl shadow-2xl object-contain"
                            />

                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-6 right-6 bg-black/60 p-3 rounded-full text-white hover:bg-black/80 transition"
                            >
                                <FiX size={22} />
                            </button>

                            <button
                                onClick={() => navigate("prev")}
                                className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full text-white hover:bg-black/80 transition"
                            >
                                <FiChevronLeft size={24} />
                            </button>

                            <button
                                onClick={() => navigate("next")}
                                className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full text-white hover:bg-black/80 transition"
                            >
                                <FiChevronRight size={24} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </>
    );
};

export default Galerie;
