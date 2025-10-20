export type ServiceItem = {
    id: number | string;
    image: string;
    title: string;
    subtitle?: string;
    description?: string;
    longDescription?: string;
    highlights?: string[];
    gallery?: string[];
    quote?: string;
    stats?: { number: string; label: string }[];
    video?: string;
    cta?: string;
};

export const serviceData: ServiceItem[] = [
    {
        id: 1,
        image: "/images/voyage.png",
        title: "Duchesse d’Afric-Art",
        subtitle: "Voyages culturels & responsables",
        description:
            "Des itinéraires sur-mesure pour vivre l’Afrique dans son authenticité. Circuits thématiques axés sur l’artisanat, le patrimoine, la gastronomie et la musique.",
        longDescription:
            "Chaque voyage est pensé comme une immersion. Nous travaillons avec des guides locaux, artisans et chefs pour vous offrir une expérience humaine, éthique et durable. Que vous soyez passionné d’art, de culture ou de gastronomie, nos circuits vous feront découvrir l’Afrique comme jamais auparavant.",
        highlights: [
            "Voyages éthiques et durables",
            "Rencontres humaines et authentiques",
            "Itinéraires personnalisés",
            "Encadrement professionnel local",
        ],
        gallery: [
            "/images/culte.png",
            "/images/mont.png",
            "/images/ZANZIBAR.png",
        ],
        stats: [
            { number: "120+", label: "Voyages organisés" },
            { number: "30+", label: "Partenaires locaux" },
            { number: "10", label: "Années d’expérience" },
            { number: "98%", label: "Clients satisfaits" },
        ],
        quote:
            "« Voyager, c’est aller à la rencontre de soi-même à travers les autres. » – Duchesse d’Afric-Art",
        video: "/videos/voyageExperience.mp4",
        cta: "Réservez votre aventure",
    },
    {
        id: 2,
        image: "/images/caraf.jpg",
        title: "Domaines Vinsmoselle | Poll – Fabaire Cameroun",
        subtitle: "Représentation & événements vins",
        description:
            "Dégustations, branding et événements autour de vins et crémants de qualité. Importation, masterclasses et conseils en image vinicole.",
        longDescription:
            "Notre mission est de faire découvrir le savoir-faire luxembourgeois et européen à travers des dégustations exclusives et des expériences sensorielles uniques. Nous accompagnons entreprises, restaurants et particuliers dans l’organisation d’événements élégants et mémorables.",
        highlights: [
            "Représentation officielle de Poll-Fabaire",
            "Dégustations et formations œnologiques",
            "Organisation d’événements prestige",
        ],
        gallery: ["/images/vins1.png", "/images/vins2.png", "/images/vin.png"],
        stats: [
            { number: "50+", label: "Événements organisés" },
            { number: "15", label: "Partenaires internationaux" },
            { number: "5", label: "Années de collaboration" },
            { number: "100%", label: "Satisfaction clients" },
        ],
        quote: "« Le vin est la poésie en bouteille. » – Robert Louis Stevenson",
        video: "/videos/vinsmoselle.mp4",
        cta: "Organiser un événement",
    },
    {
        id: 3,
        image: "/images/voyageCulture.png",
        title: "The Akiba Brunch",
        subtitle: "Brunch culturel & artistique",
        description:
            "Un rendez-vous convivial qui valorise la scène créative camerounaise. Entre cuisine, musique et marché d’artisans.",
        longDescription:
            "Le Akiba Brunch, c’est plus qu’un repas : c’est une expérience sensorielle et artistique. Nous mettons en avant des artistes, des artisans et des chefs locaux pour offrir un moment unique de partage et de découverte.",
        highlights: [
            "Scène artistique et musicale locale",
            "Cuisine fusion africaine",
            "Marché d’artisans créatifs",
        ],
        gallery: ["/images/couture.png",
            "/images/atb.png",
            "/images/atr.png",],
        stats: [
            { number: "20+", label: "Éditions réussies" },
            { number: "100+", label: "Artistes invités" },
            { number: "5000+", label: "Participants" },
            { number: "8+", label: "Villes couvertes" },
        ],
        quote:
            "« Là où l’art rencontre la convivialité, l’âme du Cameroun s’exprime. »",
        video: "/videos/akibaBrunch.mp4",
        cta: "Découvrir le prochain brunch",
    },
    {
        id: 4,
        image: "/images/digital.png",
        title: "Mindz Studio",
        subtitle: "Agence digitale & stratégie commerciale",
        description:
            "Création de contenu, branding et community management. Des identités digitales fortes et cohérentes.",
        longDescription:
            "Nous combinons créativité, stratégie et technologie pour propulser votre marque. De la conception graphique à la gestion des réseaux sociaux, nous offrons un accompagnement complet pour maximiser votre visibilité et vos ventes.",
        highlights: [
            "Branding & identité visuelle",
            "Community management créatif",
            "Stratégie marketing sur mesure",
        ],
        gallery: ["/images/informatique.jpg", "/images/marketing.png", "/images/digital.png"],
        stats: [
            { number: "80+", label: "Marques accompagnées" },
            { number: "10M+", label: "Vues cumulées" },
            { number: "7", label: "Experts créatifs" },
            { number: "12+", label: "Campagnes réussies" },
        ],
        quote:
            "« Une marque forte ne se raconte pas, elle se vit. » – Mindz Studio",
        video: "/videos/mindzStudio.mp4",
        cta: "Discuter de votre projet",
    },
];
