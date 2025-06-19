
const Skills: React.FC = () => {
    return (
        <section className="max-w-2xl mx-auto border-b py-12">
            <h1 className="text-xl font-bold mb-4">Skills.</h1>
            <div className="flex flex-wrap gap-2 pt-6">
                {
                    skillset.map((skill, index) => (
                        <p key={index} className="flex-1 min-w-max px-4 py-2 select-none text-sm shadow-md border border-gray-200 rounded-md hover:text-black hover:bg-white transition-colors duration-500 ">{skill}</p>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills

export const skillset = [
    "HTML", "CSS", "javaScript", "TypeScript", "React.js", "Next.js", "Node", "Express.js", "Tailwind.css", "Vercel", "Git", "GitHub"
] 