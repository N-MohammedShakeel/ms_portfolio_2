import React from "react";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Featured from "../components/Featured";
import ContactSection from "../components/Contact";
import useFadeIn from "../hooks/useFadeIn";

const aboutParagraphs = [
  {
    text: "I'm Mohammed Shakeel, a Computer Science and Business Systems graduate with a strong focus on Java Full Stack Development and AI Engineering. I enjoy building scalable backend systems, modern web applications, and intelligent solutions that solve real-world problems.",
    delay: "200ms",
  },
  {
    text: "My technical expertise spans Java, Spring Boot, React, MySQL, Python, and cloud technologies. Over the years, I have developed full-stack applications, Android solutions, AI-powered systems, and automation tools while continuously strengthening my software engineering fundamentals.",
    delay: "400ms",
  },
  {
    text: "I am particularly interested in AI Agents, RAG systems, multi-agent architectures, backend engineering, and modern application development. Through projects, hackathons, blogging, and continuous learning, I strive to bridge traditional software engineering with emerging AI technologies.",
    delay: "600ms",
  },
];

const backgroundItems = [
  {
    title: "Patent Applicant",
    description:
      "Filed a patent application for FarmHelper, an Android platform designed to connect farmers directly with consumers and reduce intermediary costs.",
    delay: "200ms",
  },

  {
    title: "Technical Blogger",
    description:
      "I maintain multiple technical blogs where I document my learning journey across Java, React, Android Development, Python, AI, and software engineering concepts.",
    link: {
      url: "https://hashnode.com/@ms007",
      text: "Hashnode",
      className: "underline hover:text-[var(--amber-100)] transition-colors",
    },
    delay: "400ms",
  },

  {
    title: "Continuous Learner",
    description:
      "I actively invest time in mastering Java Full Stack Development, System Design, AI Engineering, Agentic AI, cloud technologies, and problem-solving through hands-on projects and structured learning.",
    delay: "600ms",
  },
];

const About = () => {
  useFadeIn(0.1);

  return (
    <div>
      <Navbar />
      <div className="bg-[var(--tbba-dark)] text-[var(--tbba-light)] w-full overflow-x-hidden">
        <section className="pt-16 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-36 2xl:mt-40 sm:pt-20 lg:pt-24 xl:pt-28 py-16 sm:py-20 lg:py-28 bg-[var(--tbba-dark)] w-full flex items-center justify-center">
          <div className="relative w-full text-center">
            <div className="fade-in" style={{ transitionDelay: "400ms" }}>
              <h1 className="text-[20vw] sm:text-[18vw] lg:text-[16vw] font-bebas font-black uppercase text-[var(--tbba-light)] opacity-40 mix-blend-screen transform scale-y-150 leading-none whitespace-nowrap w-full -translate-x-[25%]">
                Mohammed Shakeel
              </h1>
            </div>
            <div
              className="fade-in absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ transitionDelay: "200ms" }}
            >
              <h2 className="sm:-m-28 md:-m-36 lg:-m-40 xl:-m-56 2xl:-m-60 text-7xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-[200px] 2xl:text-[250px] font-bebas font-black transform scale-y-110 text-[var(--tbba-light)] z-10">
                About me
              </h2>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-20 lg:py-28 w-full flex flex-col md:flex-row relative z-10">
          <div className="w-full md:w-1/2 p-2 md:p-6 lg:p-8 order-1 md:order-1 flex items-end">
            <div className="fade-in" style={{ transitionDelay: "200ms" }}>
              <blockquote className="text-left text-2xl md:text-4xl lg:text-5xl font-bebas font-extrabold text-[var(--tbba-light)] mx-2 px-4 md:px-6 md:mx-5">
                ""Build with purpose, learn continuously, and create technology
                that solves real-world problems.""
              </blockquote>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2 md:p-6 lg:p-8 order-0 md:order-1">
            <div className="fade-in" style={{ transitionDelay: "400ms" }}>
              <img
                src="/IMG_20220420_112615-Picsart-AiImageEnhancer-Picsart-AiImageEnhancer.jpg"
                alt="About Mohammed Shakeel"
                className="w-full h-auto md:w-full aspect-square md:aspect-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="py-16 sm:py-20 lg:py-32 bg-[var(--tbba-dark)] w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row lg:flex-row gap-6">
            {aboutParagraphs.map((paragraph, index) => (
              <div
                key={index}
                className="fade-in flex-1"
                style={{ transitionDelay: paragraph.delay }}
              >
                <p className="text-base sm:text-lg lg:text-xl font-montserrat leading-relaxed text-[var(--tbba-light)]">
                  {paragraph.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="MyBackground"
        className="py-16 sm:py-20 lg:py-32 bg-[var(--tbba-dark)] w-full"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="fade-in text-3xl sm:text-4xl lg:text-5xl font-bebas font-extrabold uppercase text-[var(--tbba-light)] mb-8 lg:mb-12">
            A Quick Background
          </h2>
          <div className="flex flex-col sm:flex-row lg:flex-row gap-6">
            {backgroundItems.map((item, index) => (
              <div
                key={index}
                className="fade-in flex-1"
                style={{ transitionDelay: item.delay }}
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-semibold text-[var(--tbba-light)] mb-2">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg lg:text-xl font-montserrat leading-relaxed text-[var(--tbba-light)]">
                  {item.description}{" "}
                  {item.link && (
                    <a href={item.link.url} className={item.link.className}>
                      {item.link.text}
                    </a>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-32 bg-[var(--tbba-dark)] w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="hidden lg:block lg:flex-1"></div>
            <div className="flex-1 sm:flex-1 lg:flex-1">
              <div
                className="fade-in flex items-center sm:min-h-[120px] lg:min-h-[160px]"
                style={{ transitionDelay: "200ms" }}
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bebas font-extrabold uppercase text-[var(--tbba-light)] scale-y-125 mb-4 sm:mb-0 ">
                    15+ Projects
                  </h3>
                  <p className="text-base sm:hidden font-montserrat leading-relaxed text-[var(--tbba-light)] mb-6">
                    Designed and developed projects across Java Full Stack
                    Development, AI Engineering, Android Development,
                    Blockchain, and Cloud technologies. These projects
                    demonstrate practical problem-solving skills and end-to-end
                    application development.
                  </p>
                </div>
              </div>
              <div
                className="fade-in flex items-center sm:min-h-[120px] lg:min-h-[160px]"
                style={{ transitionDelay: "400ms" }}
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bebas font-extrabold uppercase text-[var(--tbba-light)] scale-y-125 mb-4 sm:mb-0 sm:mt-56 md:mt-40 lg:mt-44 xl:mt-32 2xl:mt-24">
                    4+ Years
                  </h3>
                  <p className="text-base sm:hidden font-montserrat leading-relaxed text-[var(--tbba-light)] mb-6">
                    Over four years of continuous learning and hands-on
                    development experience covering Java, Spring Boot, React,
                    Python, Android, Databases, AI, and modern software
                    engineering practices.
                  </p>
                </div>
              </div>
              <div
                className="fade-in flex items-center sm:min-h-[120px] lg:min-h-[160px]"
                style={{ transitionDelay: "600ms" }}
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bebas font-extrabold uppercase text-[var(--tbba-light)] scale-y-125 mb-4 sm:mb-0 sm:mt-56 md:mt-42 lg:mt-60 xl:mt-48 2xl:mt-40 ">
                    Achievements
                  </h3>
                  <p className="text-base sm:hidden font-montserrat leading-relaxed text-[var(--tbba-light)] mb-6">
                    Recognized through national-level hackathons and innovation
                    competitions. Filed a patent application for FarmHelper and
                    actively contribute technical content through blogs and
                    open-source repositories.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 sm:flex-1 lg:flex-1 hidden sm:block">
              <div
                className="fade-in flex items-center sm:min-h-[120px] lg:min-h-[160px] my-10"
                style={{ transitionDelay: "200ms" }}
              >
                <p className="text-base sm:text-lg lg:text-xl font-montserrat leading-relaxed text-[var(--tbba-light)]">
                  Designed and developed projects across Java Full Stack
                  Development, AI Engineering, Android Development, Blockchain,
                  and Cloud technologies. These projects demonstrate practical
                  problem-solving skills and end-to-end application development.
                </p>
              </div>
              <div
                className="fade-in flex items-center sm:min-h-[120px] lg:min-h-[160px] my-10"
                style={{ transitionDelay: "400ms" }}
              >
                <p className="text-base sm:text-lg lg:text-xl font-montserrat leading-relaxed text-[var(--tbba-light)]">
                  Over four years of continuous learning and hands-on
                  development experience covering Java, Spring Boot, React,
                  Python, Android, Databases, AI, and modern software
                  engineering practices.
                </p>
              </div>
              <div
                className="fade-in flex items-center sm:min-h-[120px] lg:min-h-[160px] my-10"
                style={{ transitionDelay: "600ms" }}
              >
                <p className="text-base sm:text-lg lg:text-xl font-montserrat leading-relaxed text-[var(--tbba-light)]">
                  Recognized through national-level hackathons and innovation
                  competitions. Filed a patent application for FarmHelper and
                  actively contribute technical content through blogs and
                  open-source repositories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <Education />
      <Featured />
      <ContactSection />
    </div>
  );
};

export default About;
