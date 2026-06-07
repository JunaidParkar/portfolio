import { div } from 'motion/react-client';
import React from 'react'
import {projects} from '@/components/data'

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
                            <div key={index} className={`${getBentoClass(index)} relative rounded-[2rem] overflow-hidden bg-zinc-900 border border-zinc-800/50`}>
                                <img src={project.imageUrl} alt="" className='w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Projects
