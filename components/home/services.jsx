"use client";
import React from "react";
import { services } from "@/components/data";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
    return (
        <>
            <div className="h-max pt-20">
                <div className="pt-7.5 max-w-350 mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 font-mono">
                        Services
                    </h2>
                </div>
                <div className="mt-12 w-full flex flex-col border-t border-zinc-900">
                    {services.map((service, index) => (
                        <motion.a
                            href={service.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={service.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="group relative border-b border-zinc-900 py-10 md:py-16 px-6 overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-zinc-900/50 transition-colors duration-500"
                        >
                            <div className="relative z-10 flex flex-col md:flex-row md:items-baseline gap-6 w-full">
                                <span className="text-zinc-600 font-mono text-lg md:text-2xl w-12">
                                    {(index + 1).toString().padStart(2, "0")}
                                </span>
                                <h3 className="text-5xl md:text-[7vw] font-bold font-mono tracking-normal uppercase text-stroke group-hover:text-stroke-hover transition-all duration-500">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="relative z-10 flex items-center gap-6 self-start md:self-center shrink-0">
                                <p className="hidden md:block max-w-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500 text-sm md:text-base text-right">
                                    {service.description}
                                </p>
                                <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-100 group-hover:text-zinc-950 group-hover:border-zinc-100 group-hover:scale-110 transition-all duration-500">
                                    <ArrowUpRight size={28} />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
