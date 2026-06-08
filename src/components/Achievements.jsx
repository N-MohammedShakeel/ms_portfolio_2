import React from "react";

const achievements = [
  {
    title: "Patent Filed",
    subtitle: "FarmHelper",
    description:
      "Filed a patent application for FarmHelper, an Android application connecting farmers directly with consumers to eliminate intermediaries and improve profitability.",
    image: "/patent.png",
  },

  {
    title: "National Hackathon Winner",
    subtitle: "Innovation & Problem Solving",
    description:
      "Won national-level hackathons by building impactful software solutions that addressed real-world challenges using modern technologies.",
    image: "/hackathon.jpg",
  },

  {
    title: "Lead Organizer",
    subtitle: "Quiz'n Bug - MADASA'25",
    description:
      "Successfully organized and managed Quiz'n Bug, a flagship technical event conducted as part of the MADASA'25 symposium.",
    image: "/madasa.jpg",
  },
];

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [slidesPerView, setSlidesPerView] = React.useState(1);
  const [spaceBetween, setSpaceBetween] = React.useState(16);

  const updateSlidesPerView = () => {
    if (window.innerWidth >= 1024) {
      setSlidesPerView(3);
      setSpaceBetween(32);
    } else if (window.innerWidth >= 768) {
      setSlidesPerView(2);
      setSpaceBetween(24);
    } else {
      setSlidesPerView(1);
      setSpaceBetween(0);
    }
  };

  React.useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const maxSlide = Math.max(0, achievements.length - slidesPerView);

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
  };

  const translateX =
    slidesPerView === 1
      ? currentSlide * 100
      : currentSlide * (100 / slidesPerView + spaceBetween / slidesPerView);

  return (
    <section className="py-16 md:pb-0 bg-[var(--tbba-dark)] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="font-bebas text-6xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-extrabold uppercase text-[var(--tbba-light)] leading-none tracking-wide">
            Achievements
          </h2>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <button
              id="carousel-prev"
              className="p-2 border border-[var(--tbba-light)] text-[var(--tbba-light)] hover:text-[var(--e0ded8)] hover:border-[var(--e0ded8)] disabled:opacity-50 rounded-btn"
              aria-label="Previous slide"
              tabIndex={0}
              onClick={handlePrev}
              disabled={currentSlide === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 13 21"
                fill="none"
              >
                <path
                  d="M11.5 20L2 10.5L11.5 1"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <button
              id="carousel-next"
              className="p-2 border border-[var(--tbba-light)] text-[var(--tbba-light)] hover:text-[var(--e0ded8)] hover:border-[var(--e0ded8)] disabled:opacity-50 rounded-btn"
              aria-label="Next slide"
              tabIndex={0}
              onClick={handleNext}
              disabled={currentSlide === maxSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 13 21"
                fill="none"
              >
                <path
                  d="M1.5 1L11 10.5L1.5 20"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="carousel w-full overflow-hidden">
          <div
            className="flex flex-row"
            style={{
              transform: `translateX(-${translateX}%)`,
              transition: "transform 0.3s ease",
              gap: slidesPerView === 1 ? "0" : `${spaceBetween}px`,
            }}
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="fade-in flex-shrink-0 group"
                style={{
                  width:
                    slidesPerView === 1 ? "100%" : `${100 / slidesPerView}%`,
                }}
                role="group"
                aria-label={`${index + 1} / ${achievements.length}`}
              >
                <a
                  href={achievement.href}
                  className="block relative rounded-xl overflow-hidden aspect-[3/4]"
                >
                  <img
                    src={achievement.image}
                    srcSet={achievement.srcset}
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33.33vw"
                    alt={`Achievement: ${achievement.title}`}
                    className="w-full h-full object-cover group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="bg-opacity-0"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-[var(--tbba-light)] gap-4 flex justify-center">
                    <h4 className="text-5xl sm:text-5xl md:text-6xl font-extrabold font-bebas uppercase tracking-tight text-center mx-auto">
                      {achievement.title}
                    </h4>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
