
export default function CtaSection() {
    return (
        <section className="relative w-full bg-black text-white overflow-hidden ">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/images/culte.png"
                    alt="CTA Background"
                    className="w-full h-full object-cover opacity-70"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 flex flex-col items-center text-center">
                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold  leading-tight mb-6">
                    Prêt à vivre l’expérience ?
                </h2>
                <p className="max-w-2xl leading-relaxed text-[.95rem] md:text-[1.07rem]  text-gray-200 mb-8">
                    Rejoignez nos événements, découvrez nos voyages et développez votre marque grâce à nos services.
                    Une aventure unique vous attend.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-3 bg-white text-black font-semibold text-base md:text-lg hover:bg-gray-200 transition-colors rounded-none">
                        Découvrir nos services
                    </button>
                    <button className="px-6 py-3 border border-white text-white font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-colors rounded-none">
                        Nous contacter
                    </button>
                </div>
            </div>
        </section>
    );
}
