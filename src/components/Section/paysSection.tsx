import type { FC } from "react";

interface CartePaysProps {
    titre: string;
    description: string;
    image: string;
    drapeau: string;
    isActive?: boolean;
}

const CartePays: FC<CartePaysProps> = ({ titre, description, image, drapeau, isActive }) => {
    return (
        <div
            className={`relative flex flex-col items-start bg-gray-50 shadow-sm rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${isActive ? "border-b-4 border-accent-green" : "border-b-4 border-transparent"}`}
        >
            <img src={image} alt={titre} className="w-full h-52 object-cover" />

            <div className="p-6 relative w-full">
                <img
                    src={drapeau}
                    alt={`Drapeau ${titre}`}
                    className="absolute -top-6 right-4 w-10 h-10 rounded-full border-2 border-white shadow-md"
                />

                <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-fcc-red mb-2">{titre}</h3>
                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/70 max-w-3xl mb-4">{description}</p>
            </div>
        </div>
    );
};

export default CartePays;
