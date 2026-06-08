import React from "react";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/Contact";
import DocumentationSection from "../components/Documentation";
import Navbar from "../components/Navbar";

const Documentation = () => {
  return (
    <div>
      <Navbar />
      <DocumentationSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Documentation;
