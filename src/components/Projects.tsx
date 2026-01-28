"use client";

import Image from "next/image";
import { FolderIcon } from "./svgs";
import { projects } from "@/assets/assets";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 className="text-xl font-bold mb-5">Projects.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-neutral-300">
        {projects.map((project) => (
          <motion.article
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{once: true, amount: 0.3}}
            transition={{ duration: 0.8}}
            className="bg-neutral-800 flex flex-col gap-y-2 rounded-md shadow-md z-0"
            key={project.title}
          >
            <Image
              src={project?.image}
              className="w-full h-50 cursor-pointer hover:scale-105 duration-300"
              width={300}
              height={500}
              alt={`${project.title}-frontend project`}
              loading="lazy"
            />
            <div className="p-2">
              <h2 className="flex items-center gap-2 text-base md:text-[18px] text-white mb-2">
                <FolderIcon className="w-[15px] h-[15px]" fill="white" />
                {project.title}
              </h2>
              <p className="text-sm md:text-[14px] text-gray-500">
                {project.text}
              </p>
              <span className="flex flex-wrap gap-2 pt-2 my-3">
                {project.stack.map((item, index) => (
                  <p
                    key={index}
                    className="flex-1 min-w-max text-sm p-2 border border-gray-400 rounded-md"
                  >
                    {item}
                  </p>
                ))}
              </span>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-200 text-black px-3 py-2 mb-2 rounded-md hover:bg-gray-300"
              >
                Preview
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
