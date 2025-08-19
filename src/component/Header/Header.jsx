import React, { useEffect } from "react";
import { words } from "../../Constants";
import { ArrowDown, DownloadIcon, ExternalLinkIcon } from "lucide-react";
import { motion } from "motion/react";

function Header() {
  const viewProject = () => {
    const projectSection = document.querySelector("#projects");
    console.log(projectSection);
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.section
      id="header"
      className="min-h-[100%] w-full flex items-center justify-center relative"
    >
      <button
        aria-label="Down Arrrow"
        className="absolute p-2 bottom-3 cursor-pointer arrow rounded-full outline outline-purple-600 dark:outline-[#554bcd]"
        onClick={() =>
          document
            .querySelector("#about")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <ArrowDown size={50} />
      </button>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-full w-full flex flex-col lg:flex-row-reverse items-center md:justify-center pb-10"
      >
        {/* HEADER IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 200 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-full flex items-center justify-center lg:w-1/2"
        >
          <img
            src="./Version control-pana.png"
            alt="an image showing girl sitting on floor working on a laptop peacefully"
            loading="lazy"
            className="w-[300px] md:w-[400px] lg:w-[700px]"
          />
        </motion.div>

        {/* HEADER CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 200 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-[90vw] mx-auto flex items-center justify-center lg:w-1/2"
        >
          <div className="w-[min(90%,600px)] mx-auto md:tracking-wide text-3xl md:text-5xl lg:text-6xl font-black flex flex-col gap-4">
            <div className="flex flex-col">
              <h1 className="flex flex-col md:flex-row gap-3">
                From{" "}
                <span className="h-[40px] md:h-[58px] lg:h-[70px] overflow-hidden">
                  <span className="w-full flex flex-col animate-scroller">
                    {words.map((Word, index) => (
                      <span
                        className="h-[40px] md:h-[58px] lg:h-[70px] w-full flex items-center"
                        key={index}
                      >
                        <span>
                          <Word.image
                            size={40}
                            className="animate-pulse duration-200"
                          />
                        </span>
                        <span key={index}>{Word.name}</span>
                        {" ,"}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="w-full">
                To delivering impactful, real-world solutions.
              </h1>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="w-full flex flex-col tracking-normal"
            >
              <p className="font-black text-gray-900/90 dark:text-white/75 italic text-xl">
                Hi there! I'm Kashish Gupta
              </p>
              <p className="text-gray-800 dark:text-gray-500 text-sm italic font-semibold">
                A MERN Stack Developer with a passion for creating innovative
                things that work and wow.
              </p>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="w-full tracking-normal mx-auto mt-5 flex flex-col md:flex-row items-center gap-8"
            >
              <button
                aria-label="download-resume"
                className="flex w-full md:w-1/2 gap-2 items-center justify-center font-bold cursor-pointer text-base bg-purple-600 py-3 px-5 rounded-xl text-white dark:bg-[rgb(85,75,205)] border-2 border-transparent transition-colors duration-300 hover:bg-transparent hover:text-purple-600 dark:hover:text-[rgb(85,75,205)] hover:border-purple-600 dark:hover:border-[rgb(85,75,205)] "
              >
                Download Resume <DownloadIcon size={20} />
              </button>

              <button
                aria-label="projects"
                className="flex w-full md:w-1/2 gap-2 text-base items-center justify-center font-semibold cursor-pointer bg-purple-600 py-3 dark:bg-[rgb(85,75,205)] text-white transition-colors border-2 border-transparent duration-300 px-5 rounded-xl hover:bg-transparent hover:text-purple-600 dark:hover:text-[rgb(85,75,205)] hover:border-purple-600 dark:hover:border-[rgb(85,75,205)]"
                onClick={viewProject}
              >
                View My Projects
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Header;
