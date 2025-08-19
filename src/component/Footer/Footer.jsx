import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "motion/react";

function Footer() {
  return (
    <section
      className="flex items-center justify-center border-t border-gray-800/80"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 400 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-[90%] md:w-[80%] p-6 md:p-10 h-[40%]  flex flex-col items-center justify-center"
      >
        <div className="flex flex-col gap-6 justify-between">
          <div className="flex flex-col items-center gap-8">
            <h1 className=" text-4xl font-black"> Get in touch!</h1>
            <p className="italic text-gray-800 dark:text-gray-500 font-bold">
              “Let’s Create Something That Turns Heads — Your Idea, My Code.”
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-wrap md:flex-row gap-4 justify-between">
            <a
              href="mailto:kashishgupta2402@gmail.com"
              className="text-gray-800 dark:text-gray-500 font-bold hover:text-purple-600 transition-colors flex gap-3 items-center"
            >
              <div className="rounded-full p-3 text-white font-bold bg-purple-600">
                <Mail size={25} />
              </div>
              kashishgupta2402@gmail.com
            </a>

            <a
              href="tel:+919667402799"
              className="text-gray-800 dark:text-gray-500 font-bold hover:text-purple-600 transition-colors flex gap-3 items-center"
            >
              <div className="rounded-full p-3 text-white font-bold bg-purple-600">
                <Phone size={25} />
              </div>
              +91 96674 02799
            </a>

            <a
              href="https://www.linkedin.com/in/kashish-gupta-32a0431b0"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-800 dark:text-gray-500 font-bold hover:text-purple-600 transition-colors flex items-center gap-3"
            >
              <div className="rounded-full p-3 text-white font-bold bg-purple-600">
                <Linkedin size={25} />
              </div>
              View my Linkedin
            </a>

            <a
              href="https://github.com/Kashish2402/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-800 dark:text-gray-500 font-bold hover:text-purple-600 transition-colors flex items-center gap-3"
            >
              <div className="rounded-full p-3 text-white font-bold bg-purple-600">
                <Github size={25} />
              </div>
              See my Github
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Footer;
