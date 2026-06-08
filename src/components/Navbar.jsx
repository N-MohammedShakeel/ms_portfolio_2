import React, { useState } from "react";
import useFadeIn from "../hooks/useFadeIn";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useFadeIn(0.5);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/documentation", label: "Documentation" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className=" header bg-[var(--tbba-dark)]  text-[var(--tbba-light)] w-full sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="hidden lg:grid grid-cols-3 items-center py-4">
          <div className="flex space-x-6 justify-start">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link fade-in text-lg font-bold uppercase hover:text-[var(--amber-100)] transition-colors ${
                  link.current
                    ? "text-[var(--gray-500)]"
                    : "text-[var(--tbba-light)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex justify-center">
            <span className="fade-in text-2xl sm:text-4xl font-extrabold uppercase">
              MS
            </span>
          </div>
          <div className="flex space-x-6 justify-end">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link fade-in text-lg font-bold uppercase hover:text-[var(--amber-100)] transition-colors ${
                  link.current
                    ? "text-[var(--gray-500)]"
                    : "text-[var(--tbba-light)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <nav className="flex items-center justify-between lg:hidden py-4 p-5">
          <a href="/" className="flex items-center">
            <img
              src="/ms-removebg-preview.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </a>
          <button
            className="flex items-center space-x-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div
                className={`w-6 h-0.5 bg-[var(--tbba-light)] transition-transform duration-300 ${
                  isMenuOpen ? "transform rotate-45 translate-y-1.5" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-[var(--tbba-light)] transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-[var(--tbba-light)] transition-transform duration-300 ${
                  isMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[var(--tbba-dark)] z-50 flex flex-col items-center justify-center transition-opacity duration-300 ${
            isMenuOpen ? "opacity-95 visible" : "opacity-0 invisible"
          }`}
        >
          <button
            className="absolute top-6 right-6 text-lg font-extrabold mt-2 mr-5"
            onClick={() => setIsMenuOpen(false)}
          >
            X
          </button>
          <div className="text-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block text-4xl sm:text-5xl font-extrabold uppercase ${
                  link.current
                    ? "text-[var(--white)]"
                    : "text-[var(--tbba-light)]"
                } hover:text-[var(--white)] transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-8">
              <span className="text-2xl sm:text-3xl font-extrabold uppercase">
                ——— MS ———
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
