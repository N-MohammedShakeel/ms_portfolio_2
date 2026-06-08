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
        <div className="relative w-full text-center px-4">
          <div className="fade-in mb-4" style={{ transitionDelay: "200ms" }}>
            <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-gray-400 font-semibold">
              Portfolio Showcase
            </p>
          </div>

          <div className="fade-in" style={{ transitionDelay: "400ms" }}>
            <h1 className="text-[20vw] sm:text-[18vw] lg:text-[16vw] font-bebas font-extrabold uppercase text-[var(--tbba-light)] opacity-25 mix-blend-screen transform scale-y-150 leading-none whitespace-nowrap w-full">
              Projects
            </h1>
          </div>

          <div className="fade-in mt-4" style={{ transitionDelay: "600ms" }}>
            <p className="max-w-5xl mx-auto px-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bebas font-black tracking-wide transform scale-y-125 text-[var(--tbba-light)]">
              From Android applications to AI-powered solutions and full-stack
              systems, explore projects built to solve real-world challenges
              through innovation and technology.
            </p>
          </div>

          <div className="fade-in mt-12" style={{ transitionDelay: "800ms" }}>
            <div className="animate-bounce text-3xl text-gray-400">↓</div>
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
