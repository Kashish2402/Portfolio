import React, { useState, useEffect } from "react";
import { icons } from "../Constants";
import { useTheme } from "./Context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    icons.forEach((icon) => {
      const section = document.getElementById(icon.target);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="fixed bottom-0 left-0 w-full h-[70px] lg:w-[80px] lg:h-screen lg:py-10 lg:border-r lg:border-gray-500/50 rounded-3xl backdrop-blur-[40px] z-100"
      role="navigation"
    >
      <div className="w-full h-full flex flex-col items-center justify-between">
        {/* Logo */}
        <div
          className="great-vibes hidden lg:flex relative text-3xl lg:mr-5 cursor-pointer"
          title="Kashish Gupta"
          tabIndex={0}
          onClick={() => {
            setActiveSection("header");
            document
              .querySelector("#header")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>K</span>
          <span className="absolute -right-3 top-4">G</span>
        </div>

        {/* Menu */}
        <div className="w-full py-3 border-t rounded-4xl border-t-gray-600 lg:border-none flex lg:flex-col items-center justify-between lg:gap-10">
          {icons.map((Icon, index) => {
            const isActive = activeSection === Icon.target;
            return (
              <button
                key={index}
                onClick={() =>
                  document.getElementById(Icon.target)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                aria-label={Icon.label}
                aria-current={isActive ? Icon.label : undefined}
                className={`h-[70px] w-[70px] flex flex-col gap-2 items-center text-sm font-bold cursor-pointer hover:bg-gray-600/50 lg:bg-transparent hover:rounded-full border-b-2 border-transparent transition-all duration-300 
                  ${
                    isActive
                      ? "text-purple-600 rounded-none border-purple-600 dark:text-[rgba(85,75,205)] dark:border-[rgba(85,75,205)]"
                      : ""
                  }`}
                title={Icon.label}
              >
                <Icon.icon size={30} />
                <span className="text-sm">{Icon.label}</span>
              </button>
            );
          })}
        </div>

        {/* Theme toggle */}
        <div className="hidden lg:flex">
          <button
            aria-label={theme === "dark" ? "dark" : "light"}
            title={theme === "dark" ? "Dark Mode" : "Light Mode"}
            className="cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={40} /> : <Moon size={40} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
