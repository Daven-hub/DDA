import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AkibaBrunchSection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full px-[10%] py-16 bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 relative z-20"
        >
          <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-gray-900 leading-tight">
            {t("akiba.title")}
            <span className="block text-transparent bg-clip-text bg-accent-green">
              {t("akiba.subtitle")}
            </span>
          </h2>

          <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-gray-700">
            {t("akiba.description")}
          </p>

          <div className="bg-white/60 backdrop-blur-md p-4 rounded-xl border-l-4 border-accent-yellow shadow-sm">
            <h3 className="text-lg font-semibold text-accent-green mb-2">
              {t("akiba.detailsTitle")}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-[.93rem] text-gray-700">
              <li>{t("akiba.detail1")}</li>
              <li>{t("akiba.detail2")}</li>
              {/* <li>{t("akiba.detail3")}</li>
              <li>{t("akiba.detail4")}</li> */}
            </ul>
          </div>

          <div className="flex gap-4">
            <motion.a
              href="https://wa.me/237698032181"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-accent-green text-white font-semibold shadow-lg rounded-lg"
            >
              {t("akiba.reserveButton")}
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-6 py-3 border-2 border-accent-green text-gray-800 font-semibold hover:bg-amber-50 transition rounded-lg"
            >
              {t("akiba.partnerButton")}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="col-span-2 h-64 overflow-hidden  shadow-xl">
            <img
              src="/images/gastro.png"
              alt={t("akiba.alt1")}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="h-44 overflow-hidden rounded-xl shadow-md">
            <img
              src="/images/artiste.png"
              alt={t("akiba.alt2")}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="h-44 overflow-hidden rounded-xl shadow-md">
            <img
              src="/images/deco.png"
              alt={t("akiba.alt3")}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="col-span-2 h-52 overflow-hidden  shadow-lg">
            <img
              src="/images/public.png"
              alt={t("akiba.alt4")}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-32 w-72 h-72 bg-amber-300 mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-24 right-20 w-64 h-64 bg-orange-300 mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      </motion.div>
    </section>
  );
}
