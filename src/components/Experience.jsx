import React, { useEffect } from "react";

const Experience = () => {
  const values = [
    {
      number: "2025 — PRESENT",
      title: "Java Full Stack Development & AI Systems",
      description:
        "Specializing in Java Full Stack Development while building projects across diverse technology stacks. Developed scalable applications using Java, Spring Boot, React, REST APIs, JWT Authentication, SQL and NoSQL databases, while also exploring AI Agents, RAG systems, and modern cloud technologies to solve real-world problems.",
    },
  ];
  useEffect(() => {
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
    <section className="py-16 sm:py-20 lg:py-32 bg-[var(--tbba-dark)] text-[var(--tbba-light)] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-0.5/2 lg:sticky lg:top-16 lg:self-start mb-8 lg:mb-0">
            <h2 className="font-bebas text-[5rem] sm:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-extrabold uppercase text-[var(--tbba-light)] leading-none tracking-wide">
              Experience
            </h2>
          </div>

          <div className="lg:w-1.5/2">
            {values.map((value, index) => (
              <div
                key={index}
                className="fade-in flex flex-col lg:flex-row mb-12 sm:mb-16 lg:mb-20 last:mb-0"
              >
                <div className="lg:w-1/4 mb-4 lg:mb-0 text-xl sm:text-2xl lg:text-xl 2xl:text-2xl font-light text-[var(--tbba-light)] lg:text-right pr-6">
                  {value.number}
                </div>

                <div className="lg:w-3/4">
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                    {value.title}
                  </h3>

                  <p className="text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
