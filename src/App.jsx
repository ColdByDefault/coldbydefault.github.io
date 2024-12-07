import React, { useState } from "react";
import Navbar from "./components/Main/Navbar";
import Intro from "./components/Main/Intro";
import Lab from "./components/Labs/Lab";
import Footer from "./components/Main/Footer";
import LoadingScreen from "./components/Main/LoadingScreen";
import Blogs from "./components/Blogs/Blogs";
import BlogPost from "./components/Blogs/BlogPost";
import Impressum from  "./components/Main/Impressum";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  const handleSectionChange = (section) => {
    if (activeSection !== section) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveSection(section);
        setIsAnimating(false);
      }, 500); // Match animation duration
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Home":
        return <Intro />;
      case "Projects":
        return <Lab />;
      case "Blog":
        return (
          <Blogs
            setActiveSection={handleSectionChange}
            setSelectedBlog={setSelectedBlog}
          />
        );
      case "BlogPost":
        return (
          <BlogPost
            selectedBlog={selectedBlog}
            setActiveSection={handleSectionChange}
          />
        );
      case "Impressum": // Add this case
        return <Impressum />;
      default:
        return <Intro />;
    }
  };

  return (
    <>
      {!showContent && <LoadingScreen onComplete={handleLoadingComplete} />}
      {showContent && (
        <div className="flex flex-col min-h-screen">
          <Navbar setActiveSection={handleSectionChange} />
          <div className="flex-grow relative z-10">
            <div
              className={`transform transition-all duration-500 ease-in-out ${
                isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            >
              {renderSection()}
            </div>
          </div>
          <Footer setActiveSection={handleSectionChange} />
        </div>
      )}
    </>
  );
}

export default App;
