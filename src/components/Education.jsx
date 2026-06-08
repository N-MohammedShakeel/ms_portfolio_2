import React, { useEffect } from "react";

const Education = () => {
  const values = [
    {
      number: "2022 — 2026",
      title: "Panimalar Engineering College",
      subtitle: "B.Tech Computer Science and Business Systems",
      description:
        "Graduated with a CGPA of 8.49. Built full-stack, AI-powered, and mobile applications while actively participating in hackathons, technical events, and software development projects.",
    },
    {
      number: "2021 — 2022",
      title: "St. Mary's Anglo Indian Higher Secondary School",
      subtitle: "Bio-Maths",
      description:
        "Completed Higher Secondary Education with 80.33%, building a strong analytical foundation that later supported my software engineering journey.",
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
              Education
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
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2">
                    {value.title}
                  </h3>
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                    {value.subtitle}
                  </h4>
                  <p className="text-base sm:text-lg lg:text-xl max-w-prose">
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

export default Education;
