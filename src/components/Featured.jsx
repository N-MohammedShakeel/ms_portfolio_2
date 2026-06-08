import React, { useState } from "react";

const featuredItems = [
  {
    title: "Java Bootcamp",
    topics: [
      "Java Basics",
      "Advanced Java",
      "OOP",
      "Collections",
      "Exception Handling",
      "JDBC",
      "Multithreading",
      "SOLID Principles",
      "Design Principles",
      "DSA",
      "Patterns",
      "LeetCode",
    ],
    link: "https://github.com/N-MohammedShakeel/Java_Bootcamp",
  },

  {
    title: "React Bootcamp",
    topics: [
      "React Fundamentals",
      "JS for React",
      "Hooks",
      "State Management",
      "Context API",
      "useReducer",
      "Routing",
      "HTTP Requests",
      "Custom Hooks",
      "Forms",
      "Redux",
      "Refs & Portals",
    ],
    link: "https://github.com/N-MohammedShakeel/React_Bootcamp",
  },

  {
    title: "Python Bootcamp",
    topics: [
      "Python Basics",
      "Control Flow",
      "Data Structures",
      "Functions",
      "OOP",
      "Modules & Packages",
      "File Handling",
      "Exception Handling",
      "Advanced Python",
      "Databases",
      "Concurrency",
      "Data Analysis",
      "Web & APIs",
      "Logging",
    ],
    link: "https://github.com/N-MohammedShakeel/Python_Bootcamp",
  },

  {
    title: "Android Development",
    topics: [
      "Activities",
      "Activity Lifecycle",
      "Intents",
      "Services",
      "Broadcast Receivers",
      "Content Providers",
      "XML Layouts",
      "Data Binding",
      "Firebase",
      "Room Database",
      "Retrofit",
      "Coroutines",
      "MVVM",
      "Clean Architecture",
      "Hilt",
      "WorkManager",
      "Jetpack Compose",
    ],
    link: "https://github.com/N-MohammedShakeel/Android_Development_Bootcamp",
  },

  {
    title: "Agentic AI",
    topics: [
      "Pydantic",
      "LLMs",
      "OpenAI",
      "Ollama",
      "LCEL",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Agent Memory",
      "Agentic AI",
      "MCP",
      "Tool Calling",
    ],
    link: "https://github.com/N-MohammedShakeel/Agentic_AI_Bootcamp",
  },

  {
    title: "NLP & Machine Learning",
    topics: [
      "NLP",
      "EDA",
      "Feature Engineering",
      "Data Preprocessing",
      "Model Evaluation",
      "Machine Learning",
    ],
    link: "https://github.com/N-MohammedShakeel/NLP_ML_Bootcamp",
  },

  {
    title: "Mathematics for AI",
    topics: [
      "Algebra",
      "Linear Algebra",
      "Probability",
      "Statistics",
      "Calculus",
      "AI Applications",
    ],
    link: "https://github.com/N-MohammedShakeel/Mathematics_For_AI_Bootcamp",
  },
];
const FeaturedCard = ({ item, index, expanded, setExpanded }) => {
  const isExpanded = expanded === index;

  return (
    <div
      onClick={() => setExpanded(isExpanded ? null : index)}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        cursor-pointer
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-white/30
        hover:bg-white/[0.05]
      "
    >
      <div className="flex items-center gap-2 mb-5">
        <div className="w-3 h-3 rounded-full bg-red-400/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
        <div className="w-3 h-3 rounded-full bg-green-400/50" />

        <span className="ml-3 text-xs text-gray-500 font-mono truncate">
          ~/bootcamps/{item.title.toLowerCase().replace(/\s+/g, "-")}
        </span>
      </div>

      <h3 className="text-3xl lg:text-4xl font-bebas uppercase tracking-wide text-white mb-6">
        {item.title}
      </h3>

      <div
        className="
          overflow-hidden
          transition-all
          duration-500
          max-h-[120px]
          md:group-hover:max-h-[500px]
        "
        style={{
          maxHeight:
            isExpanded || window.innerWidth >= 768 ? undefined : "120px",
        }}
      >
        <div className="space-y-2 font-mono text-sm text-gray-300">
          {(isExpanded ? item.topics : item.topics.slice(0, 3)).map((topic) => (
            <div
              key={topic}
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              {">"} {topic}
            </div>
          ))}
        </div>
      </div>

      {item.topics.length > 4 && (
        <div className="mt-4 text-xs font-mono text-gray-500">
          {isExpanded
            ? "Show Less ▲"
            : `+${item.topics.length - 3} More Modules ▼`}
        </div>
      )}

      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="
          inline-flex
          items-center
          mt-6
          text-sm
          font-mono
          text-white/80
          hover:text-white
          transition-colors
        "
      >
        Open Repository →
      </a>

      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          pointer-events-none
          bg-gradient-to-br
          from-white/[0.04]
          to-transparent
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-white
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </div>
  );
};

const Featured = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--tbba-dark)] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-bebas text-[5rem] sm:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-extrabold uppercase text-[var(--tbba-light)] leading-none tracking-wide">
            Coursework
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mt-4">
            A collection of repositories documenting my continuous learning
            journey across Java Full Stack Development, Artificial Intelligence,
            Machine Learning, Mobile Development, and modern software
            engineering practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <FeaturedCard
              key={item.title}
              item={item}
              index={index}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
