import React from "react";
import { skills } from "../../Constants";
import { motion } from "motion/react";

function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      id="skills"
      className="min-h-[100%] md:h-[100%]  flex items-center justify-center relative"
    >
      <div className="w-[90%] md:w-[80%] p-6 md:p-10 md:h-[90%] border border-gray-700 rounded-4xl dark:bg-[linear-gradient(120deg,#8080801e,transparent,#8080801e)] bg-[linear-gradient(120deg,#ffffff1c,transparent,#ffffff1c)] flex flex-col items-center justify-center overflow-hidden relative">
        <div className="h-full w-full animate-background">
          <div className="circle1 bg-[#ffffff40] dark:bg-[#0000ff3f]"></div>
          <div className="circle2 bg-[#ffffff40] dark:bg-[#0000ff3f]"></div>
        </div>
        <div className="h-full w-[80vw] flex  flex-col items-center justify-center gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-full flex items-center justify-center relative"
          >
            <h1 className="skill text-6xl lg:text-8xl font-black z-10">
              Skills
            </h1>
          </motion.div>

          <motion.div className="flex flex-col gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-3"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="text-lg font-black"
                >
                  {category}:
                </motion.span>
                <span className="flex flex-wrap justify-center md:justify-start gap-3">
                  {skillList.map((skill, idx) => (
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                      key={idx}
                      className="text-white bg-purple-600 p-2 px-4 dark:bg-[rgb(85,75,205)] rounded-4xl cursor-pointer hover:bg-purple-800 hover:dark:bg-blue-800 transition-colors ease-in-out duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>

 
  );
}

export default Skills;
