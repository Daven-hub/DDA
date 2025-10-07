export type ServiceItem = {
    id: number | string;
    image: string;
    title: string;
    subtitle?: string;
    description?: string;
    cta?: string;
};

export const serviceData: ServiceItem[] = [
    {
        id: 1,
        image: "/images/voyage.png",
        title: "Duchesse d’Afric-Art",
        subtitle: "Voyages culturels & responsables",
        description:
            "Des itinéraires sur-mesure pour vivre l’Afrique dans son authenticité. Circuits thématiques axés sur l’artisanat, le patrimoine, la gastronomie et la musique, en partenariat avec des acteurs locaux. Engagement durable garanti.",
        cta: "En savoir plus",
    },
    {
        id: 2,
        image: "/images/caraf.jpg",
        title: "Domaines Vinsmoselle | Poll – Fabaire Cameroun",
        subtitle: "Représentation & événements vins",
        description:
            "Dégustations, branding et événements autour de vins et crémants de qualité. Nous accompagnons entreprises, particuliers et institutions avec importation, masterclasses et conseils en image vinicole.",
        cta: "En savoir plus",
    },
    {
        id: 3,
        image: "/images/voyageCulture.png",
        title: "The Akiba Brunch",
        subtitle: "Brunch culturel & artistique",
        description:
            "Un rendez-vous convivial qui valorise la scène créative camerounaise. Entre cuisine, musique, arts visuels et marché d’artisans, chaque édition rapproche artistes, marques et public dans une ambiance chaleureuse.",
        cta: "En savoir plus",
    },
    {
        id: 4,
        image: "/images/digital.png",
        title: "Mindz Studio",
        subtitle: "Agence digitale & stratégie commerciale",
        description:
            "Création de contenu, branding et community management qui convertissent. Mindz Studio développe des identités digitales percutantes et des campagnes marketing efficaces adaptées à vos ambitions.",
        cta: "En savoir plus",
    },
];
