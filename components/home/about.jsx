"use client";

import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <>
      <div className="h-max pt-20 max-w-350 mx-auto px-6">
        <div className="pt-7.5 max-w-350 mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 font-mono">
            About
          </h2>
        </div>
        <div className="mt-12 flex mb-20 px-6 max-w-350 mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="relative aspect-3/4 w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-zinc-900 rounded-[2rem] transform -rotate-3 border border-zinc-800/50" />
            <motion.div 
              initial={{ opacity: 0, rotate: 5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-2xl"
            >
              <img 
                src="/self.png" 
                alt="Alex Carter Portrait" 
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2">Est. 2020</p>
                <p className="text-2xl font-serif italic text-zinc-300">Independent</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100 mb-8"
            >
              The mind behind <br/>
              <span className="text-zinc-500 italic font-serif font-normal">the pixels.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg md:text-xl text-zinc-400 leading-relaxed"
            >
              <p>
                I am a multidisciplinary digital architect operating at the bleeding edge of design and web development. My work strips away the superfluous, leaving only high-impact, performant experiences.
              </p>
              <p>
                Whether it's complex backend or immersive 3D web environments, I believe that form and function are indistinguishable. If it looks incredible but runs poorly, it's broken.
              </p>
              <div className="pt-8 flex gap-12 border-t border-zinc-900 mt-8">
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2">05+</p>
                  <p className="text-sm font-mono uppercase tracking-widest text-zinc-600">Years Exp</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2">1+</p>
                  <p className="text-sm font-mono uppercase tracking-widest text-zinc-600">Projects</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2">3</p>
                  <p className="text-sm font-mono uppercase tracking-widest text-zinc-600">Languages used</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
