import { motion } from "framer-motion";

export default function AkibaBrunchSection() {
  return (
    <section className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden flex items-end px-[10%]">
      
      {/* Image de fond avec overlay noir */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/a.png"
          alt="The Akiba Brunch"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenu aligné en bas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10  text-left text-white space-y-3 pb-4"
      >
        <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-tight">
          The Akiba Brunch
          <span className="block text-yellow-400 mt-1 ">
            Brunch culturel & artistique
          </span>
        </h2>

        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl">
          Un rendez-vous convivial qui valorise la scène créative camerounaise.
          Entre cuisine, musique, arts visuels et marché d’artisans, chaque édition
          rapproche artistes, marques et public dans une ambiance chaleureuse.
        </p>

        <div className="flex gap-3 mt-2">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#evenements"
            className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg text-sm"
          >
            Découvrir l'événement
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-4 py-2 border-2 border-white text-white font-semibold hover:bg-white/20 text-sm"
          >
            Contactez-nous
          </motion.a>
        </div>
      </motion.div>

      {/* Décorations floues */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 left-10 w-36 h-36 bg-yellow-400 mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-44 h-44 bg-orange-400 mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      </motion.div>
    </section>
  );
}
