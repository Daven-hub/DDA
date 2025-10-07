import { paysData } from "../../data/pays";
import CartePays from "./paysSection";

const SectionPays = () => {
    return (
        <>
            <div className="relative flex flex-col items-center text-center pt-12">
                <span className="w-12 h-[2px] bg-fcc-blue mt-2 mb-4"></span>
                <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold text-black/75 leading-[1.2]">
                    Choisissez votre pays
                </h2>
            </div>

            <section className="py-12">
                <div className="px-[10%] mx-auto py-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        {paysData.map((pays, index) => (
                            <CartePays
                                key={index}
                                titre={pays.titre}
                                description={pays.description}
                                image={pays.image}
                                drapeau={pays.drapeau}
                                isActive
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SectionPays;
