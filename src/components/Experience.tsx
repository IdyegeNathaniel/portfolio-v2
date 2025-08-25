"use client";

import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section>
      <h1>Experience.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-neutral-300 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}
        >
          March - June 2025
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}
        className="flex flex-col gap-6">
          <p className="text-white">
            Mlooop -{" "}
            <span className="text-[12px] text-gray-400">
              {" "}
              Frontend Developer (Contract)
            </span>
          </p>
          <p className="">
            Developed and optimized components for a production-scale
            application, achieving a 30% reduction in load times. Implemented
            pixel-perfect, responsive UIs from Figma designs. Collaborated with cross-functional teams via Git
            and agile tools to consistently deliver features ahead of sprint
            deadlines.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
