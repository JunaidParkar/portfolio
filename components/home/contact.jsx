import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='h-max pt-20 max-w-350 mx-auto px-6'>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 font-mono">
                    Contact
                </h2>

                <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-[3rem] p-8 md:p-20 overflow-hidden relative mt-12 w-full">
                    <div className="absolute top-0 right-0 w-150 h-150 bg-emerald-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-10 justify-between items-start md:items-end">
                        <div className="w-max">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-950/50 border border-zinc-800 mb-8">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Currently taking new clients</span>
                            </div>

                            <h2 className="text-5xl md:text-[6vw] leading-[0.9] font-bold tracking-tighter text-zinc-100 mb-6">
                                Let's build <br />
                                <span className="text-stroke">the future.</span>
                            </h2>
                        </div>

                        <a
                            href="mailto:hello@example.com"
                            className="group flex items-center justify-center w-27 h-27 md:w-35 md:h-35 rounded-full bg-zinc-100 text-zinc-950 hover:bg-emerald-400 hover:scale-105 transition-all duration-500 shrink-0"
                        >
                            <div className="flex flex-col items-center">
                                <ArrowUpRight size={27} className="group-hover:rotate-45 transition-transform duration-500 mb-1" />
                                <span className="text-sm font-bold uppercase tracking-widest">Email</span>
                            </div>
                        </a>
                    </div>

                    <div className="mt-20 pt-10 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between gap-8 text-zinc-400">
                        <div>
                            <p className="text-sm font-mono uppercase tracking-widest mb-2 text-zinc-600">Location</p>
                            <p className="text-lg">San Francisco, CA<br />Remote Worldwide</p>
                        </div>
                        <div>
                            <p className="text-sm font-mono uppercase tracking-widest mb-2 text-zinc-600">Socials</p>
                            <div className="flex gap-6 text-lg">
                                <a href="#" className="hover:text-zinc-100 transition-colors">Instagram</a>
                                <a href="#" className="hover:text-zinc-100 transition-colors">Dribbble</a>
                                <a href="#" className="hover:text-zinc-100 transition-colors">Behance</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
