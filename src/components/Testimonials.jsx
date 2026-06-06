import React from "react";

const testimonials = [
  {
    quote:
      "Michael and his team always provide a 10/10 service and the quality of work is always spot on!",
    author: "Nick Campbell",
    title: "CEO / Simmons",
  },
  {
    quote:
      "My beautiful signage has uplifted my whole open studio experience and I have many more customers.",
    author: "Saz Chamberlain",
    title: "Open Art studio based in Norfolk",
  },
  {
    quote:
      "Since Michael supplied us with the POS table top boards for our sausage rolls, they’ve been flying!",
    author: "Lee Pierce",
    title: "Colicci",
  },
  {
    quote:
      "His ability to see the world through my eyes is what sets him apart and gives me the confidence to work with him.",
    author: "Daniel O’Grady",
    title: "Dantez Lemonade (Somerset)",
  },
  {
    quote:
      "The Blackboard Artist is our go to person for any work large or small!",
    author: "AJ Khan",
    title: "Operations Manager / Soho house",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

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
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Calculate max slide index
  const maxSlide = testimonials.length - 1;

  // Handle navigation
  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
  };

  // Auto-height: Get height of active slide
  const [carouselHeight, setCarouselHeight] = React.useState("auto");
  React.useEffect(() => {
    const activeSlide = document.querySelector(
      `.testimonial-slide[data-index="${currentSlide}"]`
    );
    if (activeSlide) {
      setCarouselHeight(`${activeSlide.offsetHeight}px`);
    }
  }, [currentSlide]);

  return (
    <section id="testimonials" className="py-16 bg-[var(--tbba-dark)] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="carousel fade-in w-full overflow-hidden"
          style={{ height: carouselHeight }}
        >
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-slide absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full pointer-events-none"
                }`}
                data-index={index}
                role="group"
                aria-label={`${index + 1} / ${testimonials.length}`}
              >
                <div className="lg:w-8/12 md:w-full sm:w-full">
                  <div className="quote-icon w-16 h-16 text-[var(--tbba-light)] mb-4">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 107 95"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M67.5243 0H97.1311C91.2443 15.9199 88.301 28.725 88.301 38.4153H107V95H56.0971V50.8743C56.0971 32.878 59.9062 15.9199 67.5243 0ZM10.9078 0H41.034C35.1473 15.9199 32.0307 28.725 31.6845 38.4153H50.9029V95H0V50.8743C0 34.2623 3.63592 17.3042 10.9078 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-3xl md:text-6xl font-bebas font-semibold uppercase tracking-tight text-[var(--tbba-light)] mb-6">
                    {testimonial.quote}
                  </div>
                  <div className="quote-details">
                    <p className="text-lg font-montserrat uppercase font-black text-[var(--tbba-light)] mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-base font-montserrat text-[var(--tbba-light)] mb-0">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            id="testimonial-prev"
            className="p-2 border border-[var(--tbba-light)] text-[var(--tbba-light)] hover:text-[var(--e0ded8)] hover:border-[var(--e0ded8)] disabled:opacity-50 rounded-btn"
            aria-label="Previous slide"
            aria-controls="testimonial-carousel"
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
            id="testimonial-next"
            className="p-2 border border-[var(--tbba-light)] text-[var(--tbba-light)] hover:text-[var(--e0ded8)] hover:border-[var(--e0ded8)] disabled:opacity-50 rounded-btn"
            aria-label="Next slide"
            aria-controls="testimonial-carousel"
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
        <span
          className="swiper-notification sr-only"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
    </section>
  );
};

export default Testimonials;
