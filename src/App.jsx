// Created At: 2024-11-18 00:04:00
// ColdByDefault {AnotherProject} => www.coldbydefault.com
// COPYRIGHT 2024 - ALL RIGHTS RESERVED 
// All content included on this site, such as text, graphics, logos, icons, images, information, audio clips, digital downloads, 
// data compilations, and software, is the property of ColdByDefault or its content suppliers and is protected by international copyright laws.
// NoT allowed to copy any content from this site without proper authentication.
// Code to render the main app component
// This component is the root component of the app and contains the logic to render different sections of the app based on the active section
import React, { useState } from "react";
import Navbar from "./components/Main/Navbar";
import Intro from "./components/Main/Intro";
import Lab from "./components/Labs/Lab";
import Footer from "./components/Main/Footer";
import LoadingScreen from "./components/Main/LoadingScreen";
import Blogs from "./components/Blogs/Blogs";
import BlogPost from "./components/Blogs/BlogPost";
import Impressum from "./components/Main/Impressum";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCookiesBanner, setShowCookiesBanner] = useState(true);

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
      case "Impressum":
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
          {showCookiesBanner && (
            <div className="bg-yellow-500 text-black p-3 text-center">
              <span>
              Unlike most websites out there, we're not obsessed with 
              tracking your every move. No cookies here—promise!
              </span>
              <button
                onClick={() => setShowCookiesBanner(false)}
                className="ml-3 bg-black text-white px-3 py-1 rounded"
              >
                Dismiss
              </button>
            </div>
          )}
          <Navbar setActiveSection={handleSectionChange} />
          <div className="flex-grow relative z-10">
            <div className={`transform transition-all duration-500 ease-in-out ${
                isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}>
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
