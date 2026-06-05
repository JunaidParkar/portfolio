"use client";
import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const Hero = () => {

    let marqueeText = ["Creative coding", "·", "Electronic builds", "·", "Machine Projects"]

    return (
        <>
            <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="pt-10 px-6 max-w-350 mx-auto w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-4/6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-md mb-8 shadow-2xl">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Available</span>
                        </div>

                        <h1 className="text-[14vw] md:text-[9vw] leading-[0.85] font-bold tracking-tighter text-zinc-100 uppercase overflow-hidden">
                            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>Digital</motion.div>
                            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-zinc-500 italic font-serif lowercase tracking-normal pl-[5vw] md:pl-[10vw]">Architect</motion.div>
                        </h1>
                    </div>

                    <div className="md:w-1/3 flex flex-col items-start md:items-end text-left md:text-right gap-8">
                        <div className="relative w-24 h-24 hidden md:flex items-center justify-center">
                            <Star size={32} className="text-zinc-100 absolute" />
                            <svg className="animate-spin w-full h-full text-zinc-500" viewBox="0 0 100 100">
                                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                                <text className="text-[10px] font-mono uppercase fill-current">
                                    <textPath href="#circlePath" textLength="225" lengthAdjust="spacing">Scroll down • Scroll down •</textPath>
                                </text>
                            </svg>
                        </div>

                        <p className="text-lg md:text-xl text-zinc-400 leading-normal max-w-sm">I blend radical aesthetics with complex engineering to create unforgettable digital experiences.</p>
                    </div>
                </div>
            </motion.section>

            <div className="w-full flex overflow-hidden text-zinc-600 font-mono py-6 whitespace-nowrap border-y border-zinc-900 absolute bottom-20 left-0 text-sm md:text-5xl font-medium uppercase">
                <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8 px-4">
                    {
                        marqueeText.map((text, index) => (
                            <React.Fragment key={index}><span>{text}</span></React.Fragment>
                        ))
                    }
                </div>
                <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8 px-4" aria-hidden="true">
                    {
                        marqueeText.map((text, index) => (
                            <React.Fragment key={index}><span>{text}</span></React.Fragment>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Hero;