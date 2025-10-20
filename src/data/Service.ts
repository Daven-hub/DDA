export type ServiceItem = {
    id: number | string;
    image: string;
    titleKey: string;
    subtitleKey?: string;
    descriptionKey?: string;
    longDescriptionKey?: string;
    highlightsKey?: string[];
    gallery?: string[];
    quoteKey?: string;
    stats?: { number: string; labelKey: string }[];
    video?: string;
    ctaKey?: string;
};

export const serviceData: ServiceItem[] = [
    {
        id: 1,
        image: "/images/voyage.png",
        titleKey: "services.duchesse.title",
        subtitleKey: "services.duchesse.subtitle",
        descriptionKey: "services.duchesse.description",
        longDescriptionKey: "services.duchesse.longDescription",
        highlightsKey: [
            "services.duchesse.highlights.0",
            "services.duchesse.highlights.1",
            "services.duchesse.highlights.2",
            "services.duchesse.highlights.3",
        ],
        gallery: ["/images/culte.png", "/images/mont.png", "/images/ZANZIBAR.png"],
        stats: [
            { number: "120+", labelKey: "services.duchesse.stats.0" },
            { number: "30+", labelKey: "services.duchesse.stats.1" },
            { number: "10", labelKey: "services.duchesse.stats.2" },
            { number: "98%", labelKey: "services.duchesse.stats.3" },
        ],
        quoteKey: "services.duchesse.quote",
        video: "/videos/voyageExperience.mp4",
        ctaKey: "services.duchesse.cta",
    },
    {
        id: 2,
        image: "/images/caraf.jpg",
        titleKey: "services.vinsmoselle.title",
        subtitleKey: "services.vinsmoselle.subtitle",
        descriptionKey: "services.vinsmoselle.description",
        longDescriptionKey: "services.vinsmoselle.longDescription",
        highlightsKey: [
            "services.vinsmoselle.highlights.0",
            "services.vinsmoselle.highlights.1",
            "services.vinsmoselle.highlights.2",
        ],
        gallery: ["/images/vins1.png", "/images/vins2.png", "/images/vin.png"],
        stats: [
            { number: "50+", labelKey: "services.vinsmoselle.stats.0" },
            { number: "15", labelKey: "services.vinsmoselle.stats.1" },
            { number: "5", labelKey: "services.vinsmoselle.stats.2" },
            { number: "100%", labelKey: "services.vinsmoselle.stats.3" },
        ],
        quoteKey: "services.vinsmoselle.quote",
        video: "/videos/vinsmoselle.mp4",
        ctaKey: "services.vinsmoselle.cta",
    },
    {
        id: 3,
        image: "/images/voyageCulture.png",
        titleKey: "services.akiba.title",
        subtitleKey: "services.akiba.subtitle",
        descriptionKey: "services.akiba.description",
        longDescriptionKey: "services.akiba.longDescription",
        highlightsKey: [
            "services.akiba.highlights.0",
            "services.akiba.highlights.1",
            "services.akiba.highlights.2",
        ],
        gallery: ["/images/couture.png", "/images/atb.png", "/images/atr.png"],
        stats: [
            { number: "20+", labelKey: "services.akiba.stats.0" },
            { number: "100+", labelKey: "services.akiba.stats.1" },
            { number: "5000+", labelKey: "services.akiba.stats.2" },
            { number: "8+", labelKey: "services.akiba.stats.3" },
        ],
        quoteKey: "services.akiba.quote",
        video: "/videos/akibaBrunch.mp4",
        ctaKey: "services.akiba.cta",
    },
    {
        id: 4,
        image: "/images/digital.png",
        titleKey: "services.mindz.title",
        subtitleKey: "services.mindz.subtitle",
        descriptionKey: "services.mindz.description",
        longDescriptionKey: "services.mindz.longDescription",
        highlightsKey: [
            "services.mindz.highlights.0",
            "services.mindz.highlights.1",
            "services.mindz.highlights.2",
        ],
        gallery: ["/images/informatique.jpg", "/images/marketing.png", "/images/digital.png"],
        stats: [
            { number: "80+", labelKey: "services.mindz.stats.0" },
            { number: "10M+", labelKey: "services.mindz.stats.1" },
            { number: "7", labelKey: "services.mindz.stats.2" },
            { number: "12+", labelKey: "services.mindz.stats.3" },
        ],
        quoteKey: "services.mindz.quote",
        video: "/videos/mindzStudio.mp4",
        ctaKey: "services.mindz.cta",
    },
];
