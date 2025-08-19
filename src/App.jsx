import { useState } from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header/Header";
import { useTheme } from "./component/Context/ThemeContext";
import { Github, Linkedin, Moon, Phone, Sun } from "lucide-react";
import About from "./component/About/About";
import Work from "./component/Work/Work";
import Projects from "./component/Projects/Projects";
import Skills from "./component/Skills/Skills";
import Footer from "./component/Footer/Footer";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="max-w-screen max-h-screen flex flex-col-reverse lg:flex-row relative bg-[rgba(85,75,205,0.65)] dark:bg-[rgba(85,75,205,0.2)] scroll-smooth">
      <div className="absolute opacity-20 right-0 bottom-26 lg:bottom-0 flex flex-col items-center justify-center gap-5 bg-[rgba(85,75,205,0.35)] dark:bg-[rgba(85,75,205,0.5)] py-5 rounded-l-2xl px-2 z-100">
        <a
          className="cursor-pointer hover:text-purple-600 dark:hover:text-blue-400"
          href="https://www.linkedin.com/in/kashish-gupta-32a0431b0"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin size={18} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://github.com/Kashish2402/"
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer hover:text-purple-600 dark:hover:text-blue-400"
        >
          <Github size={18} />
          <span className="sr-only">Github</span>
        </a>
        <button
          aria-label="Phone"
          className="cursor-pointer hover:text-purple-600 dark:hover:text-blue-400"
          onClick={() =>
            document
              .querySelector("#contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <Phone size={18} />
          <span className="sr-only">Contact</span>
        </button>
      </div>

      <button
        className="absolute lg:hidden text-white right-5 top-5 md:right-10 md:top-10 bg-gray-600 p-2 md:p-4 rounded-full cursor-pointer z-100"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "dark" : "light"}
        title={theme === "dark" ? "Dark Mode" : "Light Mode"}
      >
        {theme === "light" ? (
          <Moon className="size-[30px] md:size-[40px]" />
        ) : (
          <Sun className="size-[30px] md:size-[40px]" />
        )}
      </button>
      <Navbar />

      {}

      <main
        role="main"
        className="min-h-[100%] h-screen w-full overflow-y-auto lg:max-h-screen"
      >
        <Header />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Footer />
      </main>
    </div>
  );
}

export default App;
