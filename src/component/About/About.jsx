import React from "react";
import { motion } from "motion/react";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.9 }}
      id="about"
      className="min-h-[100%] h-[100%] w-full flex lg:flex-row flex-col items-center lg:justify-around justify-center gap-4 md:gap-8 lg:gap-0 z-10 relative"
    >
      {/* HEADING DIV */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full lg:w-1/2 lg:h-full flex items-center justify-center relative"
      >
        <h1 className="about text-6xl lg:text-8xl font-black z-10">ABOUT</h1>
      </motion.div>

      {/* CONTENT DIV */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full lg:w-1/2 flex flex-col gap-3 items-center justify-center relative"
      >
        <div className="w-[80%] flex flex-col items-center justify-center gap-4 text-black/80 font-medium dark:text-white/40 md:text-lg">
          <p>
            I’m a{" "}
            <span className="special relative text-black font-bold dark:text-white/70">
              MERN Stack Developer
            </span>{" "}
            with{" "}
            <span className="special relative text-black font-bold dark:text-white/70">
              3+ years of experience
            </span>{" "}
            building scalable, user-centric web applications. Skilled in{" "}
            <span className="special relative text-black font-bold dark:text-white/70">
              React.js
            </span>{" "}
            for modern UIs and{" "}
            <span className="special relative text-black font-bold dark:text-white/70">
              Node.js, Express, MongoDB
            </span>{" "}
            for robust backends, I create clean, maintainable code and seamless
            user experiences.
          </p>

          <p>
            I’ve worked on{" "}
            <span className="special relative text-black font-bold dark:text-white/70">
              AI-powered apps
            </span>
            ,{" "}
            <span className="special relative text-black font-bold dark:text-white/70">
              real-time messaging systems
            </span>
            , and{" "}
            <span className="special relative text-black font-bold dark:text-white/70">
              accessibility automation tools
            </span>
            — demonstrating adaptability and problem-solving across domains.
            Passionate about{" "}
            <span className="special relative text-black font-bold dark:text-white/70">
              performance optimization
            </span>
            ,{" "}
            <span className="special relative text-black font-bold dark:text-white/70">
              accessibility
            </span>
            , and{" "}
            <span className="special relative text-black font-bold dark:text-white/70">
              clean design
            </span>
            , I strive to deliver impactful solutions that balance functionality
            with user experience.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
