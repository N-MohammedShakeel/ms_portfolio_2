import React from "react";

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

const BlogItem = ({ blog, index }) => {
  React.useEffect(() => {
    const element = document.querySelector(`#blog-${index}`);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      id={`blog-${index}`}
      className="fade-in mb-8 sm:mb-10 md:mb-12 container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl"
    >
      {/* Mobile Layout (below md: 768px) */}
      <div className="md:hidden flex flex-col gap-4 sm:gap-6">
        <span className="text-xl sm:text-2xl mb-3 sm:mb-4 font-montserrat font-medium text-[var(--tbba-light)] text-left block">
          {blog.number}
        </span>
        <a href={blog.link} className="block">
          <img
            src={blog.image}
            srcSet={blog.imageSrcset}
            sizes="(max-width: 639px) 100vw, (max-width: 767px) 80vw, 50vw"
            alt={`Example of ${blog.title} by Mohammed Shakeel`}
            className="w-full h-48 sm:h-64 object-cover rounded-lg"
            loading="lazy"
          />
        </a>
        <h3 className="text-5xl sm:text-4xl font-bebas font-bold uppercase tracking-tight text-[var(--tbba-light)] text-left mb-3 sm:mb-4">
          {blog.title}
        </h3>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 font-montserrat leading-relaxed text-[var(--tbba-light)] text-left">
          {blog.description}
        </p>
        <a
          href={blog.link}
          className="btn inline-flex items-center px-4 py-2 bg-transparent border border-tbba-light text-[var(--tbba-light)] font-montserrat font-medium uppercase tracking-wide rounded-btn hover:border-[#e0ded8] hover:text-[#e0ded8] transition-colors duration-300 w-fit text-sm sm:text-base"
        >
          <span className="btn-text transition-transform duration-300">
            Read more
          </span>
        </a>
      </div>
      {/* Desktop Layout (md and above: 768px) */}
      <div className="hidden md:flex flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        <div className="w-1/3 p-4 md:p-6 lg:p-8 flex-shrink-0">
          <a href={blog.link} className="block">
            <img
              src={blog.image}
              srcSet={blog.imageSrcset}
              sizes="(max-width: 1023px) 33vw, (max-width: 1350px) 25vw, 20vw"
              alt={`Example of ${blog.title} by Mohammed Shakeel`}
              className="w-full max-w-[240px] md:max-w-[280px] lg:max-w-[320px] h-48 md:h-56 lg:h-64 object-cover rounded-lg"
              loading="lazy"
            />
          </a>
        </div>
        <div className="w-2/3 p-4 md:p-6 lg:p-8 flex flex-col justify-center">
          <span className="text-3xl md:text-3xl lg:text-4xl mb-4 font-montserrat font-extralight text-[var(--tbba-light)] text-left block">
            {blog.number}
          </span>
          <div className="flex flex-col justify-center p-4 ms-5 md:p-4">
            <h3 className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl font-bebas font-extrabold uppercase tracking-tight text-[var(--tbba-light)] text-left mb-4">
              {blog.title}
            </h3>
            <p className="text-lg lg:text-xl mb-6 font-montserrat leading-relaxed text-[var(--tbba-light)] text-left">
              {blog.description}
            </p>
            <a
              href={blog.link}
              className="btn inline-flex items-center px-4 py-2 bg-transparent border border-tbba-light text-[var(--tbba-light)] font-montserrat font-medium uppercase tracking-wide rounded-btn hover:border-[#e0ded8] hover:text-[#e0ded8] transition-colors duration-300 w-fit text-base lg:text-lg"
            >
              <span className="btn-text transition-transform duration-300">
                Read more
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogsSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-[var(--tbba-dark)] w-full">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <h2 className="font-bebas text-[5rem] md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-black uppercase text-[var(--tbba-light)] leading-none tracking-wide mb-5">
        Blogs
      </h2>
      <div>
        {blogs.map((blog, index) => (
          <BlogItem key={index} blog={blog} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default BlogsSection;
