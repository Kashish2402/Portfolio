import { ExternalLink } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ rotateY: -1, rotateX: -1, translateZ: 10 }}
      transition={{ type: "tween" }}
      className="cardShadow w-full scale-90 p-4 border-2 rounded-2xl dark:border-gray-800 border-gray-600 transition-all ease-in-out duration-300 overflow-hidden relative z-10 project-card"
    >
      <div className="h-full w-full animate-background">
        <div className="circle1 bg-[#ffffff40] dark:bg-[#0000ff3f]"></div>
        <div className="circle2 bg-[#ffffff40] dark:bg-[#0000ff3f]"></div>
      </div>
      <div className="flex flex-col justify-center gap-5">
        {/* Project Image */}
        <div className="w-full h-auto rounded overflow-hidden aspect-video">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              loading="lazy"
              alt={`Preview of ${project.title}`}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </a>
        </div>

        {/* Project Content */}
        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-2xl lg:text-3xl font-bold">{project.title}</h2>
          <p className="text-sm tracking-wide italic font-light dark:text-gray-400 text-black/70">
            "{project.description}"
          </p>

          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-400 text-[14px] leading-relaxed">
            {project.features &&
              project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
          </ul>

          <h1 className="text-gray-700 dark:text-gray-400 text-[14px] font-black  flex-col gap-1 flex">
            Tech Stack:
            <span className="font-normal flex gap-2 items-center flex-wrap">
              {" "}
              {project.techStack &&
                project.techStack.map((techStack, index) => (
                  <p
                    key={index}
                    className="list-none text-white rounded-2xl bg-gray-800 px-3"
                  >
                    {techStack}
                  </p>
                ))}
            </span>
          </h1>

          {/* Visit Project Button */}
          <div className="w-full flex gap-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="w-1/2 mt-3 bg-purple-600 py-2 rounded-xl font-black text-white cursor-pointer text-center hover:bg-purple-700 transition-colors flex items-center justify-center"
            >
              Live Demo <ExternalLink size={20} />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="w-1/2 mt-3 bg-purple-600 py-2 rounded-xl font-black text-white cursor-pointer text-center hover:bg-purple-700 transition-colors flex items-center justify-center"
            >
              Github <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
