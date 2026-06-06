import React from "react";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Featured from "../components/Featured";
import ContactSection from "../components/Contact";
import useFadeIn from "../hooks/useFadeIn";

const aboutParagraphs = [
  {
    text: "I'm Mohammed Shakeel, an aspiring Android developer and software engineer with a keen interest in web development. I am passionate about creating innovative mobile applications and web solutions that are both functional and aesthetically pleasing. I specialize in transforming complex requirements into sleek, user-friendly applications that provide an exceptional user experience.",
    delay: "200ms",
  },
  {
    text: "In my role as a developer, I focus on building Android applications that are not only efficient but also engaging and visually appealing. Additionally, I have experience in web development, where I create websites that are both attractive and easy to navigate. I bring a personal touch to each project, ensuring that it captures the user's attention and delivers a seamless experience.",
    delay: "400ms",
  },
  {
    text: "I aim to convey your vision and identity in the most effective and creative way possible. Throughout my journey, I have developed various Android apps, websites, write blogs, and won hackathons. Furthermore, I have developed apps and websites that leverage cloud services from AWS, showcasing my expertise in both application and cloud technologies.",
    delay: "600ms",
  },
];

const backgroundItems = [
  {
    title: "I used to be a freelancer.",
    description:
      "After college, I engaged in freelance projects, collaborating with fellow students and external clients, which significantly contributed to the enhancement of my skills and expertise.",
    delay: "200ms",
  },
  {
    title: "I maintain a blog.",
    description:
      "In my free time, I dedicate my time to crafting insightful blogs on the latest programming trends and emerging technologies, which I publish on Hashnode.",
    link: {
      url: "https://hashnode.com/@ms007",
      text: "Hashnode",
      className: "underline hover:text-[var(--amber-100)] transition-colors",
    },
    delay: "400ms",
  },
  {
    title: "I love watching movies.",
    description:
      "I love watching movies and web series, particularly drawn to the genres of horror, adventure, romance, and science fiction.",
    delay: "600ms",
  },
];

const About = () => {
  // Apply fade-in effect
  useFadeIn(0.1);

  return (
    <div>
      <Navbar />
      <div className="bg-[var(--tbba-dark)] text-[var(--tbba-light)] w-full overflow-x-hidden">
        {/* First Section: Hero */}
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
              <h2 className="sm:-m-28 md:-m-36 lg:-m-40 xl:-m-56 2xl:-m-60 text-7xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-[200px] 2xl:text-[250px] font-bebas font-black transform scale-y-110 text-[var(--tbba-light)] z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
                About me
              </h2>
            </div>
          </div>
        </section>

        {/* Second Section: Quote and Image */}
        <section className="py-8 md:py-20 lg:py-28 w-full flex flex-col md:flex-row relative z-10">
          <div className="w-full md:w-1/2 p-2 md:p-6 lg:p-8 order-1 md:order-1 flex items-end">
            <div className="fade-in" style={{ transitionDelay: "200ms" }}>
              <blockquote className="text-left text-2xl md:text-4xl lg:text-5xl font-bebas font-extrabold text-[var(--tbba-light)] mx-2 px-4 md:px-6 md:mx-5">
                "Code your life with purpose, debug your challenges with
                persistence, and deploy your dreams with passion."
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

      {/* Third Section: Paragraphs with Responsive Layout */}
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

      {/* Fourth Section: Background Section */}
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

      {/* Fifth Section: Achievements Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-[var(--tbba-dark)] w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* First half empty for lg and above */}
            <div className="hidden lg:block lg:flex-1"></div>
            {/* Second half for h3 (lg and above), First half for h3 (sm to lg), Full width for h3 (mobile) */}
            <div className="flex-1 sm:flex-1 lg:flex-1">
              <div
                className="fade-in flex items-center sm:min-h-[120px] lg:min-h-[160px]"
                style={{ transitionDelay: "200ms" }}
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bebas font-extrabold uppercase text-[var(--tbba-light)] scale-y-125 mb-4 sm:mb-0 ">
                    10+ Projects
                  </h3>
                  {/* Show paragraph below h3 on mobile only */}
                  <p className="text-base sm:hidden font-montserrat leading-relaxed text-[var(--tbba-light)] mb-6">
                    I have worked on over 10 projects across various domains,
                    including mobile apps, web development, and cloud-based
                    solutions. My portfolio includes innovative applications and
                    websites that showcase my ability to deliver high-quality,
                    user-focused solutions.
                  </p>
                </div>
              </div>
              <div
                className="fade-in flex items-center sm:min-h-[120px] lg:min-h-[160px]"
                style={{ transitionDelay: "400ms" }}
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bebas font-extrabold uppercase text-[var(--tbba-light)] scale-y-125 mb-4 sm:mb-0 sm:mt-56 md:mt-40 lg:mt-44 xl:mt-32 2xl:mt-24">
                    3+ Years
                  </h3>
                  <p className="text-base sm:hidden font-montserrat leading-relaxed text-[var(--tbba-light)] mb-6">
                    With over 3 years of experience in software development,
                    I’ve built a reputation for creating efficient and engaging
                    applications. This extensive experience ensures I
                    consistently deliver high-quality results, meeting and
                    exceeding expectations on every project.
                  </p>
                </div>
              </div>
              <div
                className="fade-in flex items-center sm:min-h-[120px] lg:min-h-[160px]"
                style={{ transitionDelay: "600ms" }}
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bebas font-extrabold uppercase text-[var(--tbba-light)] scale-y-125 mb-4 sm:mb-0 sm:mt-56 md:mt-42 lg:mt-60 xl:mt-48 2xl:mt-40 ">
                    5+ Hackathons
                  </h3>
                  <p className="text-base sm:hidden font-montserrat leading-relaxed text-[var(--tbba-light)] mb-6">
                    My work has been recognized through participation and
                    victories in over 5 hackathons. I’ve also contributed to the
                    tech community by writing blogs on Hashnode and developing
                    apps that leverage cloud services from AWS, showcasing my
                    expertise in both application and cloud technologies.
                  </p>
                </div>
              </div>
            </div>
            {/* Third half for p (lg and above), Second half for p (sm to lg), Hidden on mobile */}
            <div className="flex-1 sm:flex-1 lg:flex-1 hidden sm:block">
              <div
                className="fade-in flex items-center sm:min-h-[120px] lg:min-h-[160px] my-10"
                style={{ transitionDelay: "200ms" }}
              >
                <p className="text-base sm:text-lg lg:text-xl font-montserrat leading-relaxed text-[var(--tbba-light)]">
                  I have worked on over 10 projects across various domains,
                  including mobile apps, web development, and cloud-based
                  solutions. My portfolio includes innovative applications and
                  websites that showcase my ability to deliver high-quality,
                  user-focused solutions.
                </p>
              </div>
              <div
                className="fade-in flex items-center sm:min-h-[120px] lg:min-h-[160px] my-10"
                style={{ transitionDelay: "400ms" }}
              >
                <p className="text-base sm:text-lg lg:text-xl font-montserrat leading-relaxed text-[var(--tbba-light)]">
                  With over 3 years of experience in software development, I’ve
                  built a reputation for creating efficient and engaging
                  applications. This extensive experience ensures I consistently
                  deliver high-quality results, meeting and exceeding
                  expectations on every project.
                </p>
              </div>
              <div
                className="fade-in flex items-center sm:min-h-[120px] lg:min-h-[160px] my-10"
                style={{ transitionDelay: "600ms" }}
              >
                <p className="text-base sm:text-lg lg:text-xl font-montserrat leading-relaxed text-[var(--tbba-light)]">
                  My work has been recognized through participation and
                  victories in over 5 hackathons. I’ve also contributed to the
                  tech community by writing blogs on Hashnode and developing
                  apps that leverage cloud services from AWS, showcasing my
                  expertise in both application and cloud technologies.
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
