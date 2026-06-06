import React from "react";

const featuredItems = [
  {
    title: "Java Bootcamp",
    description:
      "Core Java, OOP, Collections Framework, Exception Handling, JDBC, Multithreading, DSA, and interview-focused problem solving.",
    link: "https://github.com/N-MohammedShakeel/Java_Bootcamp",
  },
  {
    title: "React Bootcamp",
    description:
      "React fundamentals, hooks, state management, routing, API integration, reusable components, and modern frontend development.",
    link: "https://github.com/N-MohammedShakeel/React_Bootcamp",
  },
  {
    title: "Python Bootcamp",
    description:
      "Python fundamentals, OOP, file handling, data structures, automation, and practical programming concepts.",
    link: "https://github.com/N-MohammedShakeel/Python_Bootcamp",
  },
  {
    title: "Android Development",
    description:
      "Android app development using Kotlin, Activities, Fragments, Firebase, Room Database, and modern Android architecture.",
    link: "https://github.com/N-MohammedShakeel/Android_Development_Bootcamp",
  },
  {
    title: "Agentic AI",
    description:
      "AI Agents, tool calling, autonomous workflows, planning systems, multi-agent architectures, and modern AI engineering concepts.",
    link: "https://github.com/N-MohammedShakeel/Agentic_AI_Bootcamp",
  },
  {
    title: "NLP & Machine Learning",
    description:
      "Natural Language Processing, machine learning fundamentals, model evaluation, feature engineering, and practical ML workflows.",
    link: "https://github.com/N-MohammedShakeel/NLP_ML_Bootcamp",
  },
  {
    title: "Mathematics for AI",
    description:
      "Linear Algebra, Probability, Statistics, Calculus, Optimization, and mathematical foundations for machine learning.",
    link: "https://github.com/N-MohammedShakeel/Mathematics_For_AI_Bootcamp",
  },
];

const Featured = () => {
  // Fade-in animation
  React.useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
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
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--tbba-dark)] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-bebas text-[5rem] sm:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-extrabold uppercase text-[var(--tbba-light)] leading-none tracking-wide">
            Coursework
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mt-4">
            A collection of repositories documenting my continuous learning
            journey across Java Full Stack Development, Artificial Intelligence,
            Machine Learning, Mobile Development, and modern software
            engineering practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 fade-in">
          {featuredItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="border border-gray-700 rounded-xl p-6 hover:border-white transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-3xl font-bold mb-4 text-[var(--tbba-light)]">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                {item.description}
              </p>

              <span className="text-sm uppercase tracking-widest text-gray-400">
                View Repository →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
