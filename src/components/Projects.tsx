import Image from "next/image"
import ProImage from "@/assets/Images/BARBER.png"
import { FolderIcon } from "./svgs"

const Projects: React.FC = () => {
    return (
        <section>
            <h1>Projects.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-neutral-300">
                <div className="bg-black/50 flex flex-col gap-y-2">
                    <Image src={ProImage} className="w-full h-50" alt="Project-image" />
                    <div className="p-2">
                        <h2 className="flex items-center gap-2 text-base md:text-[12px] text-white"><FolderIcon className="w-[15px] h-[15px] mb-2" fill="white" /> The BarberPlace. </h2>
                        <p className="text-sm md:text-[10px]">A pixel perfect barber saloon website.</p>
                        <span className="flex flex-wrap gap-2 pt-2 my-3">
                            {
                                ["React.JS", "TypeScript", "Tailwind.CSS"].map((item, index) => (
                                    <p key={index} className="flex-1 min-w-max text-sm p-2 border border-gray-400 rounded-md">{item}</p>
                                ))
                            }
                        </span>
                        <button className="bg-zinc-800 px-3 py-2 mb-2 rounded-md">Preview</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects