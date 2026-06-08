import React from "react";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/Contact";
import Navbar from "../components/Navbar";
import BlogsSection from "../components/Blogs";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <BlogsSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Blogs;
