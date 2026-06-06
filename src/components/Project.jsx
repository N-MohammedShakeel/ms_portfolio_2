import React from "react";

const projects = [
  {
    title: "CogniGen",
    description:
      "AI-powered personalized learning platform that generates adaptive learning paths, educational content, and quizzes based on learner goals and experience. Built using React, Node.js, Python, MongoDB, JWT Authentication, and AI-powered content generation.",
    link: "https://github.com/N-MohammedShakeel/cognigen-frontend",
    number: "01",
    image: "/cognigen.png",
  },

  {
    title: "FastX",
    description:
      "Full-stack bus ticket booking platform built with Spring Boot and React. Features JWT authentication, role-based access control, secure REST APIs, booking management, payment-ready architecture, and scalable backend design.",
    link: "https://github.com/N-MohammedShakeel/FastX-Frontend",
    number: "02",
    image: "/fastX.png",
  },

  {
    title: "FarmHelper",
    description:
      "Patent-filed Android application that enables farmers to sell products directly to consumers without intermediaries. Designed to improve farmer profits while providing customers with better pricing and transparency.",
    link: "#",
    number: "03",
    image: "/farmhelper.png",
  },

  {
    title: "FreelancerHub",
    description:
      "Decentralized freelancing platform built using Blockchain technology, Smart Contracts, Solidity, and Web3 concepts. Designed to provide transparent payments, trustless transactions, and secure collaboration between freelancers and clients.",
    link: "#",
    number: "04",
    image: "/freelancerhub.png",
  },

  {
    title: "News Aggregator",
    description:
      "Automated news aggregation platform that collects, processes, and presents news from multiple sources through a responsive interface. Integrated APIs and automation workflows for real-time updates and content delivery.",
    link: "https://github.com/N-MohammedShakeel/News-fetching",
    number: "05",
    image: "/news.png",
  },
];

const ProjectItem = ({ project, index }) => {
  React.useEffect(() => {
    const element = document.querySelector(`#project-${index}`);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [index]);

  // Alternate layout for desktop (lg and above)
  const isEven = index % 2 === 0;
  const flexOrder = isEven ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <div
      id={`project-${index}`}
      className={`flex flex-col ${flexOrder} mb-8 sm:mb-10 md:mb-12 fade-in container mx-auto px-1 sm:px-2 lg:px-4 w-full max-w-10xl gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8`}
    >
      {/* Image and Number Container */}
      <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex-shrink-0 min-h-0">
        <a href={project.link} className="block">
          <img
            src={project.image}
            srcSet={project.imageSrcset}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, (max-width: 1279px) 50vw, 40vw"
            alt={`Example of ${project.title} by The Blackboard Artist`}
            className="w-full max-w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg service-img"
            loading="lazy"
          />
        </a>
      </div>
      {/* Text Content Container */}
      <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center min-h-0">
        <span className="text-2xl lg:text-3xl mb-3 sm:mb-4 font-montserrat font-light text-[var(--tbba-light)] text-left hidden md:block">
          {project.number}
        </span>
        <h3 className="text-5xl sm:text-7xl md:text-7xl lg:text-7xl font-bold font-bebas uppercase tracking-tight text-[var(--tbba-light)] text-left mb-3 sm:mb-4 ps-0">
          {project.title}
        </h3>
        <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 font-montserrat leading-relaxed text-[var(--tbba-light)] text-left">
          {project.description}
        </p>
        <a
          href={project.link}
          className="btn inline-flex items-center px-4 py-2 bg-transparent border border-[var(--tbba-light)] text-[var(--tbba-light)] font-montserrat font-medium uppercase tracking-wide rounded-btn hover:border-[var(--e0ded8)] hover:text-[var(--e0ded8)] transition-colors duration-300 w-fit text-sm sm:text-base lg:text-lg"
        >
          <span className="btn-text transition-transform duration-300">
            View Project
          </span>
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-[var(--tbba-dark)] w-full">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <h2 className="font-bebas text-[5rem] sm:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl sm:ps-10 font-extrabold uppercase text-[var(--tbba-light)] mb-6 leading-none tracking-wide">
        Featured Projects
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 mb-10 sm:ps-10 max-w-3xl">
        A collection of AI-powered, full-stack, and enterprise-grade
        applications built using Java, Spring Boot, React, Python, and modern
        cloud technologies.
      </p>
      <div>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
