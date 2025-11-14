"use client";
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

    // --- Sous-catégories Ghana et Guinée ---
    const ghana: GalleryItem[] = [
        { id: 1, src: "/images/voyage/ga1.png", alt: "Ghana" },
        { id: 2, src: "/images/voyage/ga2.png", alt: "Ghana" },
        { id: 3, src: "/images/voyage/ga3.png", alt: "Ghana" },
        { id: 4, src: "/images/voyage/ga4.png", alt: "Ghana" },
        { id: 5, src: "/images/voyage/ga5.png", alt: "Ghana" },
        { id: 6, src: "/images/voyage/ga6.png", alt: "Ghana" },
        { id: 7, src: "/images/voyage/ga7.png", alt: "Ghana" },
        { id: 8, src: "/images/voyage/ga8.png", alt: "Ghana" },
        { id: 9, src: "/images/voyage/ga9.png", alt: "Ghana" },
        { id: 10, src: "/images/voyage/ga10.png", alt: "Ghana" },
        { id: 11, src: "/images/voyage/ga11.png", alt: "Ghana" },
        { id: 12, src: "/images/voyage/ga12.png", alt: "Ghana" },
        { id: 13, src: "/images/voyage/ga13.png", alt: "Ghana" },
        { id: 14, src: "/images/voyage/ga14.png", alt: "Ghana" },
        { id: 15, src: "/images/voyage/ga15.png", alt: "Ghana" },
        { id: 16, src: "/images/voyage/ga16.png", alt: "Ghana" },
        { id: 17, src: "/images/voyage/ga17.png", alt: "Ghana" },
        { id: 18, src: "/images/voyage/ga18.png", alt: "Ghana" },
    ];

    // --- Guinée ---
    const guinee: GalleryItem[] = [
        { id: 19, src: "/images/voyage/g1.png", alt: "Guinée" },
        { id: 20, src: "/images/voyage/g2.png", alt: "Guinée" },
        { id: 21, src: "/images/voyage/g3.png", alt: "Guinée" },
        { id: 22, src: "/images/voyage/g4.png", alt: "Guinée" },
        { id: 23, src: "/images/voyage/g5.png", alt: "Guinée" },
        { id: 24, src: "/images/voyage/g6.png", alt: "Guinée" },
        { id: 25, src: "/images/voyage/g7.png", alt: "Guinée" },
        { id: 26, src: "/images/voyage/g8.png", alt: "Guinée" },
        { id: 27, src: "/images/voyage/g9.png", alt: "Guinée" },
        { id: 28, src: "/images/voyage/g10.png", alt: "Guinée" },
        { id: 29, src: "/images/voyage/g11.png", alt: "Guinée" },
        { id: 30, src: "/images/voyage/g12.png", alt: "Guinée" },
        { id: 31, src: "/images/voyage/g13.png", alt: "Guinée" },
        { id: 32, src: "/images/voyage/g14.png", alt: "Guinée" },
        { id: 33, src: "/images/voyage/g15.png", alt: "Guinée" },
        { id: 34, src: "/images/voyage/g16.png", alt: "Guinée" },
        { id: 35, src: "/images/voyage/g17.png", alt: "Guinée" },
    ];

    // --- Akiba ---
    const akiba: GalleryItem[] = [
        { id: 36, src: "/images/galerie/v26.png", alt: "" },
        { id: 37, src: "/images/galerie/v27.png", alt: "" },
        { id: 38, src: "/images/galerie/v28.png", alt: "" },
        { id: 39, src: "/images/galerie/v29.png", alt: "" },
        { id: 40, src: "/images/galerie/v30.png", alt: "" },
        { id: 41, src: "/images/akiba/a1.png", alt: "" },
        { id: 42, src: "/images/akiba/a2.png", alt: "" },
        { id: 43, src: "/images/akiba/a3.png", alt: "" },
        { id: 44, src: "/images/akiba/a4.png", alt: "" },
        { id: 45, src: "/images/akiba/a5.png", alt: "" },
        { id: 46, src: "/images/akiba/a6.png", alt: "" },
        { id: 47, src: "/images/akiba/a7.png", alt: "" },
        { id: 48, src: "/images/akiba/a8.png", alt: "" },
        { id: 49, src: "/images/akiba/a9.png", alt: "" },
        { id: 50, src: "/images/akiba/a10.png", alt: "" },
        { id: 51, src: "/images/akiba/a11.png", alt: "" },
        { id: 52, src: "/images/akiba/a12.png", alt: "" },
        { id: 53, src: "/images/akiba/a13.png", alt: "" },
        { id: 54, src: "/images/akiba/a14.png", alt: "" },
        { id: 55, src: "/images/akiba/a16.png", alt: "" },
        { id: 56, src: "/images/akiba/a17.png", alt: "" },
        { id: 57, src: "/images/akiba/a18.png", alt: "" },
        { id: 58, src: "/images/akiba/a19.png", alt: "" },
        { id: 59, src: "/images/akiba/a20.png", alt: "" },
        { id: 60, src: "/images/akiba/a21.png", alt: "" },
        { id: 61, src: "/images/akiba/a22.png", alt: "" },
        { id: 62, src: "/images/akiba/a23.png", alt: "" },
        { id: 63, src: "/images/akiba/a24.png", alt: "" },
        { id: 64, src: "/images/dda/d1.png", alt: "" },
        { id: 65, src: "/images/dda/d2.png", alt: "" },
        { id: 66, src: "/images/dda/d3.png", alt: "" },
    ];

    // --- Sparkling ---
    const sparkling: GalleryItem[] = [
  { id: 67, src: "/images/galerie/un.jpg", alt: "" },
  { id: 68, src: "/images/galerie/deux.jpg", alt: "" },
  { id: 69, src: "/images/galerie/trois.jpg", alt: "" },
  { id: 70, src: "/images/galerie/quatre.jpg", alt: "" },
  { id: 71, src: "/images/galerie/cinq.jpg", alt: "" },
  { id: 72, src: "/images/galerie/six.jpg", alt: "" },
  { id: 73, src: "/images/galerie/sept.jpg", alt: "" },
  { id: 74, src: "/images/galerie/huite.jpg", alt: "" },
  { id: 75, src: "/images/galerie/neuf.jpg", alt: "" },
  { id: 76, src: "/images/present.jpg", alt: "" },
  { id: 77, src: "/images/dda/s1.png", alt: "" },
  { id: 78, src: "/images/dda/s2.png", alt: "" },
  { id: 79, src: "/images/dda/s3.png", alt: "" },
  { id: 80, src: "/images/dda/s4.png", alt: "" },
  { id: 81, src: "/images/dda/s5.png", alt: "" },
  { id: 82, src: "/images/dda/s6.png", alt: "" },
  { id: 83, src: "/images/dda/s7.png", alt: "" },
  { id: 84, src: "/images/dda/s8.png", alt: "" },
  { id: 85, src: "/images/dda/s9.png", alt: "" },
  { id: 86, src: "/images/dda/s10.png", alt: "" },
  { id: 87, src: "/images/dda/s11.png", alt: "" },
  { id: 88, src: "/images/dda/s12.png", alt: "" },
  { id: 89, src: "/images/dda/s13.png", alt: "" },
  { id: 90, src: "/images/dda/s14.png", alt: "" },
  { id: 91, src: "/images/dda/s15.png", alt: "" },
  { id: 92, src: "/images/dda/s16.png", alt: "" },
  { id: 93, src: "/images/dda/s17.png", alt: "" },
  { id: 94, src: "/images/dda/s18.png", alt: "" },
  { id: 95, src: "/images/dda/s19.png", alt: "" },
  { id: 96, src: "/images/dda/s20.png", alt: "" },
  { id: 97, src: "/images/dda/s21.png", alt: "" },
  { id: 98, src: "/images/dda/s22.png", alt: "" },
  { id: 99, src: "/images/dda/s23.png", alt: "" },
  { id: 100, src: "/images/dda/s24.png", alt: "" },
  { id: 101, src: "/images/dda/s25.png", alt: "" },
  { id: 102, src: "/images/dda/s26.png", alt: "" },
  { id: 103, src: "/images/dda/s27.png", alt: "" },
  { id: 104, src: "/images/dda/s28.png", alt: "" },
  { id: 105, src: "/images/dda/s29.png", alt: "" },
//   { id: 106, src: "/images/dda/s30.png", alt: "" },
//   { id: 107, src: "/images/dda/s31.png", alt: "" },
//   { id: 108, src: "/images/dda/s32.png", alt: "" },
//   { id: 109, src: "/images/dda/s33.png", alt: "" },
//   { id: 110, src: "/images/dda/s34.png", alt: "" },
//   { id: 111, src: "/images/dda/s35.png", alt: "" },
//   { id: 112, src: "/images/dda/s36.png", alt: "" },
//   { id: 113, src: "/images/dda/s37.png", alt: "" },
//   { id: 114, src: "/images/dda/s38.png", alt: "" },
//   { id: 115, src: "/images/dda/s39.png", alt: "" },
//   { id: 116, src: "/images/dda/s40.png", alt: "" },
//   { id: 117, src: "/images/dda/s41.png", alt: "" },
//   { id: 118, src: "/images/dda/s42.png", alt: "" },
//   { id: 119, src: "/images/dda/s43.png", alt: "" },
//   { id: 120, src: "/images/dda/s44.png", alt: "" },
//   { id: 121, src: "/images/dda/s45.png", alt: "" },
//   { id: 122, src: "/images/dda/s46.png", alt: "" },
//   { id: 123, src: "/images/dda/s47.png", alt: "" },
//   { id: 124, src: "/images/dda/s48.png", alt: "" },
//   { id: 125, src: "/images/dda/s49.png", alt: "" },
//   { id: 126, src: "/images/dda/s50.png", alt: "" },
//   { id: 127, src: "/images/dda/s51.png", alt: "" },
//   { id: 128, src: "/images/dda/s52.png", alt: "" },
//   { id: 129, src: "/images/dda/s53.png", alt: "" },
];

    // Combine pour navigation
    const allImages = [...ghana, ...guinee, ...sparkling, ...akiba];
    const selectedItem = selected !== null ? allImages.find(i => i.id === selected) : null;
    const currentIndex = selected !== null ? allImages.findIndex(i => i.id === selected) : -1;

    const navigate = (dir: "next" | "prev") => {
        if (selected === null) return;
        const newIndex =
            dir === "next"
                ? (currentIndex + 1) % allImages.length
                : (currentIndex - 1 + allImages.length) % allImages.length;
        setSelected(allImages[newIndex].id);
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

    // --- Composant de section ---
    const GallerySection = ({
        title,
        items,
    }: {
        title: string;
        items: GalleryItem[];
    }) => (
        <section className="mb-20">
            <motion.h3
                className="text-2xl md:text-4xl font-semibold text-center mb-10 text-neutral-800"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {title}
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((img, i) => (
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
        </section>
    );

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

                {/* --- Catégorie principale Voyage divisée en deux sous-sections --- */}
                <GallerySection title="DDA Voyages – Ghana" items={ghana} />
                <GallerySection title="DDA Voyages – Guinée" items={guinee} />

                {/* --- Autres sections --- */}
                <GallerySection title="DDA Sparkling" items={sparkling} />
                <GallerySection title="The Akiba Brunch" items={akiba} />

                {/* --- Overlay de visualisation --- */}
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
