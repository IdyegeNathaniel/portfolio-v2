"use client";

import { experiences } from "@/assets/assets";
import { motion } from "framer-motion";
import { BiBriefcase } from "react-icons/bi";

const Experience = () => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-10">Experience.</h2>

      <div className="relative border-l border-gray-700 ml-3 flex flex-col gap-10">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative pl-5 md:pl-8">
            <BiBriefcase className="absolute -left-[9px] top-2 w-4 h-4" />

            {/* Date */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-sm text-gray-400 mb-3"
            >
              {index === 0 ? (
                <span className="text-green-400">Current</span>
              ) : (
                experience.date
              )}
            </motion.p>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-900 p-3 md:p-5 rounded-xl shadow-md group"
            >
              <p className="text-white font-medium group-hover:font-700">
                {experience.company}{" "}
                <span className="text-xs text-gray-400 ml-1">
                  • {experience.role}({experience.type})
                </span>
              </p>

              <p className="text-gray-300 mt-2 text-sm leading-relaxed group-hover:text-blue-200 transition-colors duration-300 text-">
                {experience.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
