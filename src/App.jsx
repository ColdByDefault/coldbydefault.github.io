// Copyright © 2024 ColdByDefault. All rights reserved.
// Unauthorized copying or use is prohibited.


// Everything you know; is a lie.

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Lab from "./components/Lab";
/* import GradientBackground from "./components/GradientBackground"; */
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Blogs from "./components/Blogs";
import BlogPost from "./components/BlogPost";

// Import i18n
import "./i18n";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      {!showContent && <LoadingScreen onComplete={handleLoadingComplete} />}
      {showContent && (
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="relative z-10">
            <Navbar setActiveSection={setActiveSection} />
            {activeSection === "Home" && <Intro />}
            {activeSection === "Projects" && <Lab />}
            {activeSection === "Blog" && (
              <Blogs
                setActiveSection={setActiveSection}
                setSelectedBlog={setSelectedBlog}
              />
            )}
            {activeSection === "BlogPost" && (
              <BlogPost
                selectedBlog={selectedBlog}
                setActiveSection={setActiveSection}
              />
            )}
            <Footer setActiveSection={setActiveSection} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;



