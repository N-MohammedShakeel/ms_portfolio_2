import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import Blogs from "./pages/Blogs";
import Documentation from "./pages/Documentation";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/projects" element={<Project />} exact />
          <Route path="/blogs" element={<Blogs />} exact />
          <Route path="/documentation" element={<Documentation />} exact />
          <Route path="/contact" element={<Contact />} exact />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
