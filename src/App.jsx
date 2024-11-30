// Copyright © 2024 ColdByDefault. All rights reserved.
// Unauthorized copying or use is prohibited.


// Everything you know; is a lie.


import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Lab from "./components/Lab";
/* import GradientBackground from "./components/GradientBackground"; */
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";
import Blogs from "./components/Blogs";
import LoadingScreen from "./components/LoadingScreen";

// Import i18n
import "./i18n";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      {!showContent && <LoadingScreen onComplete={handleLoadingComplete} />}
      {showContent && (
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Gradient Background */}
          {/* <GradientBackground /> */}
          {/* Dynamic Content */}
          <div className="relative z-10">
            {/* Navbar */}
            <Navbar setActiveSection={setActiveSection} />
            {/* Render Content Dynamically Based on Active Section */}
            {activeSection === "Home" && <Intro />}
            {activeSection === "Projects" && <Lab />}
            {activeSection === "Blog" && <div><Blogs /></div>}
            {activeSection === "Impressum" && <Impressum />}
            {/* Footer */}
            <Footer setActiveSection={setActiveSection} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;



