"use client"

import { useState } from "react"


const Skills: React.FC = () => {

    const [showFilter, setShowFilter] = useState<boolean>(true)
    return (
        <section>
            <h1>Skills.</h1>
            <div className="flex gap-5">
                <span className="bg-white text-black text-[10px] px-4 py-2 rounded-md" onClick={() => setShowFilter( prev => !prev)}>What i do</span>
                <span className="bg-white text-black text-[10px] px-4 py-2 rounded-md">Expertise</span>
            </div>
            {
                showFilter ? (
                    <div className="flex flex-wrap gap-2 pt-6">
                        {
                            skillset.map((skill, index) => (
                                <p key={index} className="flex-1 min-w-max px-4 py-2 select-none text-sm shadow-md border border-gray-200 rounded-md hover:text-black hover:bg-white transition-colors duration-500 ">{skill}</p>
                            ))
                        }
                    </div>
                ) : (

                        <div className="flex flex-wrap gap-2 pt-6">
                            {
                                serviceset.map((service, index) => (
                                    <p key={index} className="flex-1 min-w-max px-4 py-2 select-none text-sm shadow-md border border-gray-200 rounded-md hover:text-black hover:bg-white transition-colors duration-500 ">{service}</p>
                                ))
                            }
                        </div>
                )
            }
            
        </section>
    )
}

export default Skills

export const skillset = [
    "HTML", "CSS", "javaScript", "TypeScript", "React.js", "Next.js", "Node", "Express.js", "Tailwind.css", "Vercel", "Git", "GitHub"
] 

export const serviceset = [
    "Web Development", "Responsive Designs", "Search Engine Optimisatiion", "Pixel-perfect Designs"
] 