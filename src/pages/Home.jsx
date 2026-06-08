import React from "react";
import Achievements from "../components/Achievements";
import Testimonials from "../components/Testimonials";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import DocumentationSection from "../components/Documentation";
import ContactSection from "../components/Contact";
import Experience from "../components/Experience";
import Education from "../components/Education";
import HeroSection from "../components/HeroSection";
import BlogsSection from "../components/Blogs";
import ProjectsSection from "../components/Project";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <BlogsSection />
      <DocumentationSection />
      <Achievements />
      <Education />
      <Experience />
      <Featured />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Home;
