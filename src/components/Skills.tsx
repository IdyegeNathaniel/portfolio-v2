"use client"

import { useState } from "react";


const Skills: React.FC = () => {

    const [showFilter, setShowFilter] = useState<string>("skills");

    return (
        <section>
            <h2 className="text-xl font-bold mb-5">Skills & Expertise.</h2>
            <div>
                <div className="flex gap-5">
                    <button className={`text-neutral-500 text-[12px] cursor-pointer pt-2 pb-1 transition-all duration-300 ${showFilter === "skills" ? "border-b border-gray-200 text-white" : "border-none"}`} onClick={() => setShowFilter("skills")}>Technical Skill</button>
                    <button className={`text-neutral-500 text-[12px] cursor-pointer pt-2 pb-1 transition-all duration-300 ${showFilter === "services" ? "border-b border-gray-200 text-white" : "border-none"}`} onClick={() => setShowFilter("services")}>Services</button>
                </div>
                {
                    showFilter === "skills" ? (
                        <div className="flex flex-wrap gap-2 pt-6">
                            {
                                skillset.map((skill, index) => (
                                    <p key={index} className="flex-1 min-w-max px-4 py-2 select-none text-sm shadow-md border border-gray-200 rounded-md hover:bg-white hover:text-black hover:transwhite-colors duration-500 ">{skill}</p>
                                ))
                            }
                        </div>
                    ) : (

                        <div className="flex flex-wrap gap-2 pt-6">
                            {
                                serviceset.map((service, index) => (
                                    <div key={index} className="flex-1 min-w-max px-4 py-2 select-none text-sm shadow-md border border-gray-200 rounded-md hover:bg-white hover:text-black hover:transwhite-colors duration-500 ">
                                        <p>{service.name}</p>
                                        <p className="text-[12px] text-gray-500">{service.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }

            </div>
            
        </section>
    )
}

export default Skills

export const skillset = [
    "HTML", "CSS", "javaScript", "TypeScript", "React.js", "Next.js", "Node", "Express.js", "Tailwind.css", "Vercel", "Git", "GitHub"
] 

export const serviceset = [
    { name: "Web Development", description: "Full-stack web applications" },
        { name: "Responsive Design", description: "Mobile-first, cross-device compatibility" },
        { name: "Search Engine Optimization", description: "Technical SEO and performance optimization" },
        { name: "Pixel-perfect Designs", description: "Precise implementation of design mockups" },
        { name: "API Development", description: "RESTful and GraphQL APIs" },
        { name: "Database Design", description: "Efficient data modeling and optimization" },
        { name: "Performance Optimization", description: "Code splitting, lazy loading, caching" },
        { name: "UI/UX Implementation", description: "User-centered interface development" }
] 