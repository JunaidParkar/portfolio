"use client";
import React from "react";
import { services } from "@/components/data";
import { motion } from "motion/react";

const Services = () => {
    return (
        <div className="h-max pt-20">
            <div className="pt-7.5 max-w-350 mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 font-mono">
                    Services
                </h2>
            </div>
            
            <div className="mt-12 w-full flex flex-col border-t border-zinc-900">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="group relative border-b border-zinc-900 py-8 sm:py-10 md:py-16 px-4 sm:px-6 overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-12 hover:bg-zinc-900/50 transition-colors duration-500"
                    >
                        {/* Title and Index Section */}
                        {/* Notice flex-1 and min-w-0: This stops the flex container from blowing out past the screen */}
                        <div className="relative z-10 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 flex-1 min-w-0">
                            <span className="text-zinc-600 font-mono text-lg md:text-2xl w-12 shrink-0">
                                {(index + 1).toString().padStart(2, "0")}
                            </span>
                            
                            {/* Notice break-words and w-full: Forces giant unbroken words to wrap to the next line */}
                            <h3 className="text-[clamp(2rem,8vw,6rem)] leading-none font-bold font-mono tracking-normal uppercase text-stroke group-hover:text-stroke-hover transition-all duration-500 wrap-break-words w-full">
                                {service.title}
                            </h3>
                        </div>

                        {/* Description Section */}
                        {/* Notice lg:w-1/3: Gives the description a dedicated chunk of the screen on desktop */}
                        <div className="relative z-10 flex items-start lg:items-center self-start lg:self-center shrink-0 w-full lg:w-1/3 mt-2 lg:mt-0 sm:pl-16 lg:pl-0">
                            <p className="w-full text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500 text-sm md:text-base text-left lg:text-right">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;