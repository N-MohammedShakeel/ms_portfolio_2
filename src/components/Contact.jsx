import React, { useEffect } from "react";

const ContactSection = () => {
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
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="w-full bg-[var(--tbba-dark)] text-[var(--tbba-light)]">
      <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="fade-in">
          <div className="mb-8">
            <div className="eyebrow uppercase text-xl font-bold text-[var(--tbba-light)] mb-2">
              For all enquiries
            </div>
            <div className="font-bebas text-6xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-[200px] font-black font-stretch-20% font-extrabold uppercase text-[var(--tbba-light)]">
              get in touch
            </div>
          </div>
          <div className="mb-8 mx-auto max-w-2xl">
            <p className="text-[var(--tbba-light)] mb-5 font-medium text-xl">
              Whether you have a question, an idea, or just want to explore what
              we can do for you, we’re excited to connect and bring your vision
              to life. Reach out to us today to find out more, and we’ll be in
              touch as soon as possible.
            </p>
          </div>
          <div className="mb-15 text-center flex flex-col gap-1.5 font-bold">
            <a
              href="mailto:nmohammedshakeel22@gmail.com"
              className="text-xl text-[var(--tbba-light)] hover:text-[var(--gray-300)]"
            >
              nmohammedshakeel22@gmail.com
            </a>
            <a
              href="tel:+919840987714"
              className="text-xl text-[var(--tbba-light)] hover:text-[var(--gray-300)]"
            >
              +919840987714
            </a>
          </div>

          <div className="w-full mx-auto max-w-2xl mb-8">
            <form
              action="https://formsubmit.co/nmohammedshakeel22@gmail.com"
              method="POST"
              className="form space-y-4"
              data-form=""
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 border border-[var(--tbba-light)] bg-[var(--tbba-dark)] text-[var(--tbba-light)] placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--tbba-light)]"
                  id="s-name"
                  placeholder="Full name"
                  required
                  data-form-input=""
                />
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border border-[var(--tbba-light)] bg-[var(--tbba-dark)] text-[var(--tbba-light)] placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--tbba-light)]"
                  id="s-mail"
                  placeholder="Email address"
                  required
                  data-form-input=""
                />
              </div>
              <textarea
                name="msg"
                className="w-full h-32 p-3 border border-[var(--tbba-light)] bg-[var(--tbba-dark)] text-[var(--tbba-light)] placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--tbba-light)]"
                id="s-msg"
                placeholder="Your Message"
                required
                data-form-input=""
              ></textarea>
              <button
                className="w-full sm:w-auto bg-[var(--tbba-light)] text-[var(--tbba-dark)] font-semibold py-2 px-6 rounded-lg hover:bg-[var(--gray-200)] transition-colors duration-200 items-end"
                type="submit"
                disabled=""
                data-form-btn=""
              >
                <ion-icon
                  name="paper-plane"
                  role="img"
                  className="md hydrated mr-2"
                ></ion-icon>
                <span>Send Message</span>
              </button>
            </form>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile" // Replace with actual LinkedIn URL
              target="_blank"
              className="social-link w-inline-block"
            >
              <ion-icon
                name="logo-linkedin"
                className="social-icon text-[var(--tbba-light)] hover:text-[var(--gray-300)] w-6 h-6"
              ></ion-icon>
            </a>
            <a
              href="https://github.com/your-github-profile" // Replace with actual GitHub URL
              target="_blank"
              className="social-link w-inline-block"
            >
              <ion-icon
                name="logo-github"
                className="social-icon text-[var(--tbba-light)] hover:text-[var(--gray-300)] w-6 h-6"
              ></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
