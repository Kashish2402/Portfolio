import React from "react";
import { motion } from "motion/react";

function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.9 }}
      id="work"
      className="min-h-[100%] h-[100%] w-full z-10"
    >
      <div className="h-full w-[90vw] mx-auto lg:w-full flex flex-col md:flex-row justify-center gap-6 md:gap-0 items-center">
        {/* TITLE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full lg:w-[1/2] lg:h-full  flex items-center justify-center relative "
        >
          <h1 className="text-5xl lg:text-8xl font-black z-100 work">
            Experience
          </h1>
        </motion.div>

        {/* DETAILED EXPERIENCE SECTION */}
        <div className="w-full lg:w-[1/2] lg:h-full  flex items-center justify-center relative ">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col md:gap-1"
          >
            <h1 className="md:text-xl font-black">Wipro | Gurugram, Haryana</h1>
            {/* DESCRIPTION */}
            <div className="md:ml-4 flex flex-col gap-5 lg:w-[90%]">
              {/* DESCRIPTION 1*/}
              <div>
                <h2 className="text-shadow-md font-bold md:gap-1 text-[12px] md:text-md flex flex-col md:flex-row md:items-center lg:text-lg">
                  <span> Scholar Trainee</span>
                  <span className="text-2xl hidden md:flex">|</span>
                  <span className="font-semibold text-gray-600 ">
                    November 2023 – September 2024{" "}
                  </span>
                </h2>
                <div>
                  <ul className="list-disc text-black/80 font-medium dark:text-white/40 lg:text-lg text-[12px] md:text-md ml-4">
                    <li>
                      Developed responsive, cross-browser web applications using
                      HTML, CSS, JavaScript, React, and Bootstrap, improving
                      page load time by ~25%.
                    </li>
                    <li>
                      Integrated REST APIs with front-end components, enabling
                      dynamic data rendering and improving UI responsiveness.
                    </li>
                    <li>
                      Collaborated with UI/UX designers to translate wireframes
                      into functional, pixel-perfect web pages.
                    </li>
                    <li>
                      Conducted usability testing, collected user feedback, and
                      implemented improvements that increased user engagement.
                    </li>
                    <li>
                      Ensured seamless collaboration with backend developers for
                      efficient data flow and optimized API calls.
                    </li>
                  </ul>
                </div>
              </div>
              {/* DESCRIPTION 2*/}
              <div>
                <h2 className="text-shadow-md font-bold flex md:gap-1 text-[12px] md:text-md lg:text-lg flex-col md:flex-row md:items-center">
                  <span>Scholar Trainee</span>
                  <span className="text-2xl hidden md:flex">|</span>
                  <span className="font-semibold text-gray-600">
                    July 2021 – October 2023{" "}
                  </span>
                </h2>
                <div>
                  <ul className="list-disc text-black/80 font-medium dark:text-white/40 lg:text-lg text-md ml-4 text-[12px] md:text-md">
                    <li>
                      Monitored and optimized network performance, reducing
                      downtime incidents by 15%.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to troubleshoot
                      and resolve complex network issues.
                    </li>
                    <li>
                      Maintained and updated network documentation, ensuring
                      compliance with audit requirements.
                    </li>
                    <li>
                      Analyzed network optimization solutions to improve
                      operational efficiency.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
