"use client";

import { Palette, Users, Cpu, Briefcase, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function StatisticsSection() {
    const { t } = useTranslation();

    const stats = [
        { id: 1, icon: <Users className="w-8 h-8 text-green-600" />, value: "40+", label: t("stats.travelers") },
        { id: 2, icon: <Palette className="w-8 h-8 text-green-600" />, value: "75+", label: t("stats.artisans") },
        { id: 3, icon: <Cpu className="w-8 h-8 text-green-600" />, value: "27+", label: t("stats.digital") },
        { id: 4, icon: <Briefcase className="w-8 h-8 text-green-600" />, value: "150+", label: t("stats.events") },
        { id: 5, icon: <Globe className="w-8 h-8 text-green-600" />, value: "8", label: t("stats.countries") },
    ];

    return (
        <section className="w-full py-12 px-[10%]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className="flex flex-col items-center bg-gray-200 p-6 shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out"
                    >
                        <div className="p-5 bg-accent-green/10 rounded-full flex items-center justify-center transition-colors duration-300 mb-3">
                            {stat.icon}
                        </div>
                        <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/90">{stat.value}</h3>
                        <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
