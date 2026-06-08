import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/variants";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[var(--tbba-dark)] text-[var(--tbba-light)]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 text-left"
        >
          <motion.h1
            variants={fadeUp}
            className="text-lg sm:text-xl lg:text-2xl font-medium mb-2"
          >
            Hi, my name is
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-[90px] font-extrabold uppercase mb-4"
          >
            Mohammed Shakeel N
          </motion.h2>

          <motion.h3
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Building Scalable Applications with Java, Spring Boot & AI
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg lg:text-xl max-w-xl mb-8 leading-relaxed"
          >
            B.Tech graduate in Computer Science and Business Systems with a
            strong foundation in Java Full Stack Development. I specialize in
            building scalable backend systems with Spring Boot, modern web
            applications with React, and intelligent solutions using AI Agents,
            RAG systems, and cloud technologies.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 border border-[var(--tbba-light)] rounded-md hover:bg-[var(--tbba-light)] hover:text-[var(--tbba-dark)] transition-all duration-300"
            >
              View Projects
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 border border-[var(--tbba-light)] rounded-md hover:bg-[var(--tbba-light)] hover:text-[var(--tbba-dark)] transition-all duration-300"
            >
              Resume ↗
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="w-full lg:w-1/2 mt-12 lg:mt-0"
        >
          <motion.img
            src="/wmremove-transformed.png"
            alt="Mohammed Shakeel N"
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.3,
            }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto h-auto object-cover rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
