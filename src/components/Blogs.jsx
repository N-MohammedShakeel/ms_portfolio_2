import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Master Java",
    description:
      "A comprehensive Java learning series covering Object-Oriented Programming, Collections Framework, Exception Handling, Multithreading, JDBC, and Data Structures with practical examples and interview-focused explanations.",
    link: "https://master-java.hashnode.dev/",
    number: "01",
    image: "/Blog-1.png",
  },
  {
    title: "Master Android",
    description:
      "Android development tutorials covering Activities, Fragments, Intents, Permissions, ViewModels, Firebase integration, and modern Android application architecture.",
    link: "https://master-android.hashnode.dev/",
    number: "02",
    image: "/Blog-2.jpg",
  },
  {
    title: "Master Python",
    description:
      "Python tutorials ranging from fundamentals to advanced concepts including OOP, file handling, automation, data structures, and real-world programming examples.",
    link: "https://master-python.hashnode.dev/",
    number: "03",
    image: "/Blog-3.webp",
  },
  {
    title: "Master Web Development",
    description:
      "Full-stack development articles covering frontend technologies, backend development, REST APIs, authentication, databases, and modern web application architecture.",
    link: "https://master-webdevelopment.hashnode.dev/",
    number: "04",
    image: "/Blog-4.jpg",
  },
];

const BlogCard = ({ blog, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="sticky top-24 mb-20"
      style={{
        zIndex: index + 1,
      }}
    >
      <div className="relative bg-[#111111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
        <span
          className="
            absolute
            top-6
            right-6
            text-[80px]
            md:text-[120px]
            font-black
            opacity-10
            select-none
            pointer-events-none
          "
        >
          {blog.number}
        </span>

        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
          <motion.a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden rounded-2xl"
          >
            <motion.img
              src={blog.image}
              alt={blog.title}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
              className="
                w-full
                h-64
                md:h-[420px]
                object-cover
              "
            />
          </motion.a>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
              Technical Series
            </p>

            <h3
              className="
                text-4xl
                md:text-6xl
                lg:text-7xl
                font-bebas
                font-extrabold
                uppercase
                mb-6
                leading-none
              "
            >
              {blog.title}
            </h3>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
              {blog.description}
            </p>

            <motion.a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                w-fit
                items-center
                px-5
                py-3
                border
                border-white
                rounded-md
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >
              Read on Hashnode →
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BlogsSection = () => {
  return (
    <section className="py-20 bg-[var(--tbba-dark)] text-[var(--tbba-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            font-bebas
            text-6xl
            md:text-8xl
            lg:text-9xl
            font-extrabold
            uppercase
            mb-6
          "
        >
          Blogs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
            text-lg
            md:text-xl
            text-gray-300
            max-w-3xl
            mb-20
          "
        >
          Sharing my learning journey in Java, Android, Python, and Full Stack
          Development through technical articles and practical tutorials.
        </motion.p>

        <div className="relative">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.title} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
