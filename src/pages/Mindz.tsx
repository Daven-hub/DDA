"use client";

import { motion } from "framer-motion";
import Banner from "../components/Ux/Banner";
import { FaUsers, FaChartLine, FaLightbulb, FaCogs, FaLaptopCode, FaBullhorn, FaSearch, FaRobot, FaStar, FaHandshake } from "react-icons/fa";
import PartnersSection from "../components/Section/PartnersSection";
import MindzStudioSection from "../components/Section/MindzStudioSection";
import { useTranslation } from "react-i18next";

export const Mindz = () => {
  return (
    <div className="relative w-full min-h-screen mt-[120px] overflow-hidden">
      <Banner imageSrc={"/images/mindz.png"} imageAlt={""} title={"Mindz Studio"} />
      <MindzStudioImportance />
      <MindzStudioPourquoi />
      <MindzStudioSection />
      <MindzStudioObjectif />
      <MindzStudioProcess />
      {/* <MindzStudioRealisations />
      <MindzStudioEquipe /> */}
      <MindzStudioValeurs />
      <PartnersSection />
      <MindzStudioCTA />
    </div>
  );
};



interface Avantage {
  title: string;
  text: string;
}

export const MindzStudioPourquoi = () => {
  const { t } = useTranslation();

  const icons = [
    <FaUsers className="text-accent-green w-12 h-12 mx-auto mb-4" />,
    <FaChartLine className="text-accent-green w-12 h-12 mx-auto mb-4" />,
    <FaLightbulb className="text-accent-green w-12 h-12 mx-auto mb-4" />,
  ];

  const avantages = t("mindzPourquoi.avantages", { returnObjects: true }) as Avantage[];

  return (
    <section className="relative px-[10%] py-20 bg-gray-900 text-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-[1.8rem] md:text-[3rem] font-heading font-bold mb-6">
          {t("mindzPourquoi.title")}
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 text-[1rem] mb-12">
          {t("mindzPourquoi.description")}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {avantages.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
            >
              {icons[index]}
              <h3 className="text-accent-green text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-[0.95rem]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};



interface ObjectifList {
  text: string;
}

export const MindzStudioObjectif = () => {
  const { t } = useTranslation();

  const objectifs = t("mindzObjectif.list", { returnObjects: true }) as ObjectifList[];

  return (
    <section className="px-[10%] py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/images/client.png"
          alt={t("mindzObjectif.alt")}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl shadow-xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[1.8rem] md:text-[3rem] font-heading font-bold text-black/90 mb-4">
            {t("mindzObjectif.title")}
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            {t("mindzObjectif.description")}
          </p>

          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            {objectifs.map((item, idx) => (
              <li key={idx}>{item.text}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};



interface Step {
  title: string;
  text: string;
}

export const MindzStudioProcess = () => {
  const { t } = useTranslation();
  const steps = t("mindzProcess.steps", { returnObjects: true }) as Step[];

  return (
    <section className="relative py-16 sm:py-24 px-6 sm:px-[10%] bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-2xl sm:text-[3rem] font-heading font-bold text-black mb-12 sm:mb-20"
      >
        {t("mindzProcess.title")}
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Ligne verticale (visible uniquement sur desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-accent-green/40 transform -translate-x-1/2"></div>

        <div className="space-y-12 sm:space-y-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
            >
              {/* Point timeline (visible sur desktop) */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent-green rounded-full shadow-lg border-4 border-white"></div>

              {/* Bloc de texte */}
              <div
                className={`w-full md:w-[45%] ${i % 2 === 0
                  ? "md:text-right md:pr-12"
                  : "md:text-left md:pl-12"
                  }`}
              >
                <h3 className="text-accent-green font-bold text-lg sm:text-xl mb-2 text-center md:text-left">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-[0.95rem] leading-relaxed text-center md:text-left">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};





interface Service {
  title: string;
  description: string;
  advantages: string[];
}

export const MindzStudioImportance = () => {
  const { t } = useTranslation();

  const icons = [<FaBullhorn />, <FaLaptopCode />, <FaCogs />, <FaSearch />];
  const images = [
    "/images/marketing.jpg",
    "/images/dev.png",
    "/images/marketing.png",
    "/images/informatique.jpg",
  ];

  const services = t("mindz.services", { returnObjects: true }) as Service[];

  return (
    <section className="relative px-6 sm:px-[10%] py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-[3.1rem] font-heading font-bold text-black/90 leading-tight">
          {t("mindz.sectionTitle")}
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-[0.95rem] sm:text-[1.1rem] mt-4">
          {t("mindz.sectionDesc")}
        </p>
      </motion.div>

      <div className="space-y-16 sm:space-y-24">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 sm:gap-10`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-56 sm:h-72 rounded-xl overflow-hidden shadow-md">
              <motion.img
                src={images[index]}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Texte */}
            <div className="px-4 sm:px-8 py-6 md:py-10 md:w-1/2">
              <div className="flex items-center mb-4 text-accent-green">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 text-2xl sm:text-3xl">
                  {icons[index]}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-700 mb-5 text-sm sm:text-base whitespace-pre-line">
                {service.description}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm sm:text-base">
                {service.advantages.map((adv, idx) => (
                  <li key={idx}>{adv}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16 sm:mt-20">
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-accent-green text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300 text-sm sm:text-base"
        >
          {t("mindz.button")}
        </motion.a>
      </div>
    </section>
  );
};




// =============================
// SECTION 5 : RÉALISATIONS
// =============================
export const MindzStudioRealisations = () => {
  const projets = [
    {
      img: "/images/project1.jpg",
      title: "Refonte digitale – Akiba Brunch",
      text: "Stratégie complète, identité visuelle et développement web d’un concept culturel unique.",
    },
    {
      img: "/images/project2.jpg",
      title: "Plateforme éducative en ligne",
      text: "Conception d’une solution e-learning fluide et interactive, optimisée pour le mobile.",
    },
    {
      img: "/images/project3.jpg",
      title: "Campagne digitale pour une marque locale",
      text: "Augmentation de 180 % de l’engagement sur les réseaux en 3 mois.",
    },
  ];

  return (
    <section className="py-20 px-[10%] bg-gray-50">
      <h2 className="text-center text-[1.8rem] md:text-[3rem] font-heading font-bold mb-12 text-black/90">
        Nos Réalisations
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projets.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-white"
          >
            <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-accent-green mb-2">{p.title}</h3>
              <p className="text-gray-700 text-sm">{p.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};



// =============================
// SECTION 6 : ÉQUIPE
// =============================
export const MindzStudioEquipe = () => (
  <section className="py-20 px-[10%] bg-gradient-to-r from-green-50 to-white">
    <h2 className="text-center text-[1.8rem] md:text-[3rem] font-heading font-bold mb-10">
      Une Équipe Passionnée & Créative
    </h2>
    <p className="max-w-3xl mx-auto text-center text-gray-700 mb-10">
      Mindz Studio, c’est une famille de créatifs, de développeurs, de stratèges et de rêveurs unis par une même ambition : créer du sens à travers le digital.
    </p>
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((n) => (
        <motion.div
          key={n}
          whileHover={{ y: -10 }}
          className="bg-white rounded-2xl shadow p-6 text-center"
        >
          <img
            src={`/images/team${n}.jpg`}
            alt="Team member"
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="font-bold text-accent-green">Nom Membre</h3>
          <p className="text-gray-600 text-sm">Rôle / Spécialité</p>
        </motion.div>
      ))}
    </div>
  </section>
);



interface Valeur {
  title: string;
  text: string;
}

export const MindzStudioValeurs = () => {
  const { t } = useTranslation();

  const valeurs = t("mindzValeurs.items", { returnObjects: true }) as Valeur[];

  const icons = [<FaLightbulb />, <FaRobot />, <FaStar />, <FaHandshake />];

  return (
    <section className="relative py-12 px-[10%] bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-accent-green/30 rounded-full blur-[120px] top-20 left-10 animate-pulse" />
        <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-[150px] bottom-10 right-10 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative text-center mb-16"
      >
        <h2 className="text-[2rem] sm:text-[3rem] font-heading font-bold bg-gradient-to-r from-accent-green via-blue-400 to-accent-green bg-clip-text text-transparent">
          {t("mindzValeurs.title")}
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          {t("mindzValeurs.subtitle")}
        </p>
      </motion.div>

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
        {valeurs.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 text-center backdrop-blur-xl border border-white/10 shadow-lg hover:border-accent-green/40 transition-all duration-500"
          >
            <div className="flex justify-center items-center w-14 h-14 mx-auto mb-6 text-accent-green text-3xl group-hover:scale-110 transition-transform duration-300">
              {icons[i]}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
              {v.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{v.text}</p>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-accent-green/10 to-blue-400/10 blur-2xl transition-opacity duration-500 rounded-2xl"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};



// =============================
// SECTION 8 : PARTENAIRES
// =============================
export const MindzStudioPartenaires = () => (
  <section className="py-20 px-[10%] bg-gray-50 text-center">
    <h2 className="text-[1.8rem] md:text-[3rem] font-heading font-bold mb-10 text-black/90">
      Ils nous font confiance
    </h2>
    <div className="grid md:grid-cols-4 gap-8 items-center justify-center">
      {["p1.png", "p2.png", "p3.png", "p4.png"].map((logo, i) => (
        <motion.img
          key={i}
          src={`/images/${logo}`}
          alt="Partenaire"
          className="mx-auto w-40 grayscale hover:grayscale-0 transition-all duration-500"
        />
      ))}
    </div>
  </section>
);



export const MindzStudioCTA = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-full py-24 sm:py-32 px-6 sm:px-[10%] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: 'url("/images/digital.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Voile sombre et effet lumineux */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent-green/30 rounded-full blur-[120px] opacity-60 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/25 rounded-full blur-[160px] opacity-50 animate-pulse" />

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 max-w-3xl text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[1.9rem] sm:text-[3rem] font-heading font-bold mb-6 leading-tight bg-gradient-to-r from-accent-green via-white to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
          {t("mindzCTA.title")}
        </h2>

        <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {t("mindzCTA.subtitle")}
        </p>

        <motion.a
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="inline-block bg-accent-green text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 text-sm sm:text-base"
        >
          {t("mindzCTA.button")}
        </motion.a>
      </motion.div>
    </section>
  );
};