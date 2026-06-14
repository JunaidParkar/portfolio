import { div } from 'motion/react-client';
import React from 'react'
import { projects } from '@/components/data'
import { ArrowRight } from 'lucide-react';

const Projects = () => {

    const getBentoClass = (i) => {
        const pattern = [
            'md:col-span-2 md:row-span-2', // 0: Large square
            'md:col-span-2 md:row-span-1', // 1: Wide
            'md:col-span-1 md:row-span-1', // 2: Small square
            'md:col-span-1 md:row-span-1', // 3: Small square
            'md:col-span-2 md:row-span-1', // 4: Wide
            'md:col-span-1 md:row-span-1', // 5: Small square
            'md:col-span-1 md:row-span-1', // 6: Small square
        ];
        return pattern[i % pattern.length];
    };
    return (
        <>
            <div className='h-max pt-20 max-w-350 mx-auto px-6'>
                <div className="pt-7.5">
                    <h2 className='text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 font-mono' >Projects</h2>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]'>
                    {
                        projects.map((project, index) => (
                            <div key={index} className={`${getBentoClass(index)} relative rounded-[2rem] overflow-hidden bg-zinc-900 border border-zinc-800/50 group`}>
                                <img src={project.imageUrl} alt="" className='w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1' />
                                <div className='absolute w-full h-full top-0 left-0'>
                                    <div className='w-full mt-[5%] flex justify-between px-4'>
                                        <div className="bg-zinc-100/10 backdrop-blur-md border border-zinc-100/20 px-4 py-2 rounded-full w-max max-w-[45%]">
                                            <p className="text-xs font-mono tracking-widest text-zinc-100 uppercase w-full overflow-hidden text-ellipsis whitespace-nowrap">{project.category}</p>
                                        </div>
                                        <div className="bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 w-max max-w-[45%]">
                                            <p className="text-xs font-mono tracking-widest text-zinc-100 uppercase w-full overflow-hidden text-ellipsis whitespace-nowrap">{project.category}</p>
                                        </div>
                                    </div>
                                    <div className='absolute bottom-0 left-0 w-full flex justify-between px-4 pb-[5%] group-hover:pb-[10%] bg-linear-to-t from-zinc-950/80 to-transparent transition-transform duration-500'>
                                        <h3 className='text-3xl md:text-5xl font-bold tracking-tighter text-white mb-2 leading-tight font-mono line-clamp-1'>{project.title}</h3>
                                        <div className="w-14 h-14 shrink-0 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-950 transform -rotate-45 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
                                            <ArrowRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='border-zinc-800 bg-zinc-100/1 border rounded-full px-4 py-2 font-mono text-center mt-4 md:mt-6 uppercase leading-relaxed tracking-wide cursor-pointer'>
                    <p>View All</p>
                </div>
            </div>
        </>
    )
}

export default Projects
