import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CogniGen",
    description:
      "AI-powered personalized learning platform that generates adaptive learning paths, educational content, and quizzes based on learner goals and experience.",
    link: "https://github.com/N-MohammedShakeel/cognigen-frontend",
    number: "01",
    image: "/cognigen.png",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Python",
      "MongoDB",
      "JWT",
      "LangChain",
      "LangGraph",
      "RAG",
      "Vector DB",
      "LLMs",
      "REST APIs",
    ],
  },
  {
    title: "FastX",
    description:
      "Full-stack bus ticket booking platform built with Spring Boot and React featuring JWT authentication, role-based access control, and secure REST APIs.",
    link: "https://github.com/N-MohammedShakeel/FastX-Frontend",
    number: "02",
    image: "/fastX.png",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "React",
      "MySQL",
      "JWT",
      "OAuth2",
      "Docker",
      "REST APIs",
      "Email Service",
    ],
  },
  {
    title: "FarmHelper",
    description:
      "Patent-filed Android application that enables farmers to sell products directly to consumers without intermediaries.",
    link: "https://github.com/N-MohammedShakeel/Farm-Helper",
    number: "03",
    image: "/farmhelper.png",
    tech: ["Java", "Android", "XML", "Firebase", "Firestore", "Authentication"],
  },
  {
    title: "Freelancer Hub",
    description:
      "Blockchain-powered freelancing platform built using Solidity and Web3 technologies.",
    link: "https://github.com/N-MohammedShakeel/freelancerhub-frontend",
    number: "04",
    image: "/freelancerhub.png",
    tech: [
      "Blockchain",
      "Solidity",
      "Web3.js",
      "Smart Contracts",
      "MetaMask",
      "React",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "News Aggregator",
    description:
      "Automated news aggregation platform integrating APIs and real-time content delivery.",
    link: "https://github.com/N-MohammedShakeel/News-fetching",
    number: "05",
    image: "/news.png",
    tech: [
      "Python",
      "REST APIs",
      "Automation",
      "News API",
      "Data Processing",
      "Scheduling",
    ],
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let activeIndex = activeProject;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeIndex = Number(entry.target.dataset.index);
          }
        });

        if (maxRatio > 0.45) {
          setActiveProject(activeIndex);
        }
      },
      {
        threshold: [0.3, 0.45, 0.6, 0.8],
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, [activeProject]);

  return (
    <section
      id="projects"
      className="bg-[var(--tbba-dark)] text-[var(--tbba-light)]"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="px-6 lg:px-12 pt-20 pb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-6xl md:text-8xl lg:text-9xl font-black uppercase mb-4"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-lg md:text-xl text-gray-300"
          >
            A collection of AI-powered, full-stack, and enterprise-grade
            applications built using Java, Spring Boot, React, Python and modern
            technologies.
          </motion.p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-[32%_68%]">
          <div className="sticky top-0 h-screen flex items-center border-r border-white/10 px-10">
            <div className="w-full space-y-7">
              {projects.map((project, index) => {
                const isActive = activeProject === index;

                return (
                  <motion.div
                    key={project.title}
                    animate={{
                      opacity: isActive ? 1 : 0.22,
                      scale: isActive ? 1 : 0.94,
                      x: isActive ? 0 : -12,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="cursor-default"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`
                          bg-white
                          transition-all
                          duration-500
                          h-[2px]
                          ${isActive ? "w-12 opacity-100" : "w-0 opacity-0"}
                        `}
                      />

                      <span
                        className={`
                          text-xs
                          tracking-[0.25em]
                          font-semibold
                          ${isActive ? "text-white" : "text-gray-500"}
                        `}
                      >
                        {project.number}
                      </span>

                      <h3
                        className={`
                          font-bebas
                          uppercase
                          leading-none
                          transition-all
                          duration-500
                          ${
                            isActive
                              ? "text-5xl xl:text-6xl"
                              : "text-3xl xl:text-4xl"
                          }
                        `}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            {projects.map((project, index) => (
              <section
                key={project.title}
                ref={(el) => (projectRefs.current[index] = el)}
                data-index={index}
                className="
                  min-h-[85vh]
                  flex
                  items-center
                  px-10
                  xl:px-20
                  py-16
                "
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    amount: 0.45,
                    once: false,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                    max-w-4xl
                    mx-auto
                    flex
                    flex-col
                    items-start
                    w-full
                  "
                >
                  <motion.div
                    whileHover={{
                      scale: 1.015,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="w-full mb-10"
                  >
                    <div className="overflow-hidden rounded-3xl border border-white/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                          w-full
                          h-[450px]
                          xl:h-[500px]
                          object-cover
                        "
                      />
                    </div>
                  </motion.div>

                  <span className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-3">
                    Project {project.number}
                  </span>

                  <h3
                    className="
                      font-bebas
                      text-6xl
                      xl:text-8xl
                      uppercase
                      leading-none
                      mb-6
                    "
                  >
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          border
                          border-white/10
                          bg-white/5
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p
                    className="
                      text-lg
                      xl:text-xl
                      leading-relaxed
                      text-gray-300
                      mb-10
                      max-w-3xl
                    "
                  >
                    {project.description}
                  </p>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.04,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      inline-flex
                      items-center
                      px-6
                      py-3
                      border
                      border-white
                      rounded-lg
                      hover:bg-white
                      hover:text-black
                      transition-all
                      duration-300
                    "
                  >
                    View Project →
                  </motion.a>
                </motion.div>
              </section>
            ))}
          </div>
        </div>

        <div className="lg:hidden px-4 sm:px-6 pb-10">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                }}
                className={`
                  flex
                  flex-col
                  ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
                  gap-6
                  mb-20
                  border-b
                  border-white/10
                  pb-12
                `}
              >
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="overflow-hidden rounded-2xl">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        whileHover={{
                          scale: 1.05,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                          w-full
                          h-64
                          md:h-80
                          object-cover
                        "
                      />
                    </div>
                  </a>
                </div>

                <div>
                  <span
                    className="
                      text-2xl
                      font-light
                      opacity-30
                      block
                      mb-3
                    "
                  >
                    {project.number}
                  </span>

                  <h3
                    className="
                      font-bebas
                      text-5xl
                      md:text-6xl
                      uppercase
                      mb-4
                    "
                  >
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          border
                          border-white/10
                          bg-white/5
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p
                    className="
                      text-base
                      md:text-lg
                      text-gray-300
                      leading-relaxed
                      mb-6
                    "
                  >
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      px-5
                      py-3
                      border
                      border-white
                      rounded-lg
                    "
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
