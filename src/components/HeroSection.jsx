import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fadeup-enter-done");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-25 bg-[var(--tbba-dark)] text-[var(--tbba-light)] w-full pl-10 ms-0 ps-2">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-left text-left w-full lg:w-1/2 lg:mr-15">
          <div
            className="fadeup-enter-done"
            style={{ transitionDelay: "100ms" }}
          >
            <h1 className="text-xl sm:text-xl lg:text-2xl font-medium">
              Hi, my name is
            </h1>
          </div>

          <div
            className="fadeup-enter-done"
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="big-heading text-4xl sm:text-5xl lg:text-[90px] font-extrabold uppercase mb-2">
              Mohammed Shakeel N
            </h2>
          </div>

          <div
            className="fadeup-enter-done"
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="big-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Building Scalable Applications with Java, Spring Boot & AI
            </h3>
          </div>

          <div
            className="fadeup-enter-done"
            style={{ transitionDelay: "400ms" }}
          >
            <p className="text-base sm:text-lg lg:text-xl max-w-prose mb-6">
              B.Tech graduate in Computer Science and Business Systems with a
              strong foundation in Java Full Stack Development. I specialize in
              building scalable backend systems with Spring Boot, modern web
              applications with React, and intelligent solutions using AI
              Agents, RAG systems, and cloud technologies.
            </p>
          </div>

          <div
            className="fadeup-enter-done flex gap-4 flex-wrap"
            style={{ transitionDelay: "500ms" }}
          >
            <a
              href="#projects"
              className="px-6 py-3 border border-[var(--tbba-light)] rounded-md hover:bg-[var(--tbba-light)] hover:text-[var(--tbba-dark)] transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-[var(--tbba-light)] rounded-md hover:bg-[var(--tbba-light)] hover:text-[var(--tbba-dark)] transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div
            className="fadeup-enter-done"
            style={{ transitionDelay: "600ms" }}
          >
            <img
              src="/wmremove-transformed.png"
              alt="Mohammed Shakeel N"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto h-auto object-cover shadow-lg rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
