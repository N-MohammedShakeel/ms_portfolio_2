import React from "react";
import ProjectsSection from "../components/Project";
import Achievements from "../components/Achievements";
import Navbar from "../components/Navbar";
import ContactSection from "../components/Contact";
import useFadeIn from "../hooks/useFadeIn";

const Project = () => {
  useFadeIn(0.1);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[var(--tbba-dark)] text-[var(--tbba-light)] overflow-x-hidden w-full flex items-center justify-center py-16 sm:py-20 lg:py-28">
        <div className="relative w-full text-center">
          <div className="fade-in" style={{ transitionDelay: "400ms" }}>
            <h1 className="text-[20vw] sm:text-[18vw] lg:text-[16vw] font-bebas font-extrabold uppercase text-[var(--tbba-light)] opacity-40 mix-blend-screen transform scale-y-150 leading-none whitespace-nowrap w-full">
              Projects
            </h1>
          </div>

          <div className="fade-in mt-3 " style={{ transitionDelay: "400ms" }}>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mx-auto p-5 font-bebas font-black transform scale-y-150 text-[var(--tbba-light)] tracking-wider z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              Explore a collection of innovative web, mobile, and AI-driven
              solutions crafted to solve real-world challenges.
            </p>
          </div>
        </div>
      </div>
      <ProjectsSection />
      <Achievements />
      <ContactSection />
    </div>
  );
};

export default Project;
