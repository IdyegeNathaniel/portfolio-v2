"use client"


import Image from "next/image"
import { FolderIcon } from "./svgs"
import { projects } from "@/assets/assets"

const Projects: React.FC = () => {
    return (
        <section id="projects">
            <h1>Projects.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-neutral-300">
                {
                    projects.map((project) => (
                        <div className="bg-neutral-800 flex flex-col gap-y-2 rounded-md shadow-md" key={project.title}>
                            <Image src={project?.image} className="w-full h-50" width={300} height={500} alt="Project-image" loading="lazy"/>
                            <div className="p-2">
                                <h2 className="flex items-center gap-2 text-base md:text-[18px] text-white mb-2"><FolderIcon className="w-[15px] h-[15px]" fill="white" />{project.title}</h2>
                                <p className="text-sm md:text-[14px] text-gray-500">{project.text}</p>
                                <span className="flex flex-wrap gap-2 pt-2 my-3">
                                    {
                                        project.stack.map((item, index) => (
                                            <p key={index} className="flex-1 min-w-max text-sm p-2 border border-gray-400 rounded-md">{item}</p>
                                        ))
                                    }
                                </span>
                                <button className="bg-gray-200 text-black px-3 py-2 mb-2 rounded-md cursor-pointer hover:bg-gray-300" onClick={() => window.open(project.link, '_blank')} >Preview</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects