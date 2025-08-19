import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../Constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    if (currentSlide === 0) return setCurrentSlide(projects.length - 1);
    return setCurrentSlide((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (currentSlide === projects.length - 1) return setCurrentSlide(0);
    return setCurrentSlide((prev) => prev + 1);
  };

  return (
    <div
      id="projects"
      className="min-h-[100%] md:h-[100%] w-full flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full h-full flex flex-col items-center justify-center gap-10 relative"
      >
        <h1 className="text-5xl lg:text-8xl font-black z-10 project">
          Featured Projects
        </h1>

        <div className="w-[min(90vw,500px)] flex items-center justify-center relative">
          <div className="w-full h-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {projects &&
                projects.map((project, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-full px-4 transition-all duration-700 ease-in-out perspective-near ${
                      index === currentSlide ? " opacity-100 " : " opacity-50 "
                    }`}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="absolute top-1/2 -left-5 md:-left-20 transform -translate-y-1/2">
            <button
              className="border-2 border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="previous button"
            >
              <ArrowLeft size={30} onClick={prevSlide} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-5 md:-right-20 transform -translate-y-1/2">
            <button
              className="border-2 border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="next button"
            >
              <ArrowRight size={30} onClick={nextSlide} />
            </button>
          </div>
        </div>
        <div className="absolute w-full hidden bottom-0 md:flex gap-3 justify-center">
          {projects &&
            projects.map((_, index) => (
              <button
                key={index}
                aria-labelledby="slide-button"
                className={`w-8 border-2  rounded-2xl ${
                  currentSlide === index
                    ? "border-purple-600 dark:border-[rgb(85,75,205)]"
                    : "border-gray-600"
                } cursor-pointer`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
