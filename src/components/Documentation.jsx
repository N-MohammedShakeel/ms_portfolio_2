import React, { useEffect, useRef } from "react";

const workshops = [
  {
    eyebrow: "Technical Documentation",
    title: "TMDB Client App",
    description:
      "Comprehensive project documentation covering architecture, API integration, local storage, setup instructions, and implementation details for a movie discovery application built using Android development best practices.",
    href: "https://ms-tmdb.hashnode.space/tmdbclientapp-guide/project-introduction",
    image: "/tmdb-docs.png",
    alt: "TMDB Client Documentation",
  },
];

const DocumentationSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const carouselRef = useRef(null);

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

  const handleScroll = () => {
    if (carouselRef.current) {
      const slideWidth =
        carouselRef.current.querySelector(".carousel-slide")?.offsetWidth || 0;
      const scrollLeft = carouselRef.current.scrollLeft;
      const newSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  const maxSlide = workshops.length - 1;

  const handlePrev = () => {
    if (carouselRef.current) {
      const slideWidth =
        carouselRef.current.querySelector(".carousel-slide")?.offsetWidth || 0;
      const newScrollLeft = Math.max(
        0,
        carouselRef.current.scrollLeft - slideWidth,
      );
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
      const newSlide = Math.round(newScrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const slideWidth =
        carouselRef.current.querySelector(".carousel-slide")?.offsetWidth || 0;
      const totalWidth = maxSlide * slideWidth;
      const newScrollLeft = Math.min(
        carouselRef.current.scrollLeft + slideWidth,
        totalWidth,
      );
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
      const newSlide = Math.round(newScrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  return (
    <section className="py-8 bg-[var(--tbba-dark)] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-6xl sm:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl mt-10 mb-20 font-bebas uppercase text-left text-[var(--tbba-light)]">
            Documentation
          </h2>
        </div>

        <div
          ref={carouselRef}
          className="carousel fade-in w-full overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
          onScroll={handleScroll}
        >
          <div className="flex space-x-4 pb-4">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="carousel-slide snap-center flex-shrink-0 min-w-full md:min-w-1/2"
                role="group"
                aria-label={`${index + 1} / ${workshops.length}`}
              >
                <div className="flex flex-col sm:flex-col md:flex-row h-full">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <div className="card-custom">
                      <h3 className="text-xl font-montserrat uppercase font-black text-[var(--tbba-light)] mb-3">
                        {workshop.eyebrow}
                      </h3>
                      <h2 className="text-6xl md:text-8xl font-bebas uppercase tracking-tight text-[var(--tbba-light)] mb-4">
                        {workshop.title}
                      </h2>
                      <p className="text-lg font-montserrat text-[var(--tbba-light)] mb-6 pr-4">
                        {workshop.description}
                      </p>
                      <div className="button-wrapper-flex mt-6">
                        <a
                          href={workshop.href}
                          className="btn inline-flex items-center px-6 py-3 bg-transparent border border-[var(--tbba-light)] text-[var(--tbba-light)] font-montserrat font-medium uppercase tracking-wide rounded-btn hover:border-[var(--e0ded8)] hover:text-[var(--e0ded8)] transition-colors duration-300 w-fit"
                        >
                          <span className="btn-text">Find out more</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 min-h-0">
                    <img
                      src={workshop.image}
                      srcSet={workshop.srcset}
                      sizes="100vw"
                      alt={workshop.alt}
                      className="w-full h-full object-cover rounded-xl aspect-[3/2]"
                      loading="lazy"
                      onError={() =>
                        console.log(`Image failed to load: ${workshop.image}`)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            id="carousel-prev"
            className="p-2 border border-[var(--tbba-light)] text-[var(--tbba-light)] hover:text-[var(--e0ded8)] hover:border-[var(--e0ded8)] disabled:opacity-50 rounded-btn"
            aria-label="Previous slide"
            aria-controls="workshop-carousel"
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
            aria-controls="workshop-carousel"
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

        <span
          className="sr-only"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
    </section>
  );
};

export default DocumentationSection;
