import React from "react";
import Timeline from "../Landing/Timeline";
import Skills from "../Landing/Skills";
import Certifications from "../Landing/Certifications";
import CallToAction from "../Cards/CallToAction";
import WebsitesAndAcademies from "../Landing/WebsitesAndAcademies";
import HeroSection from "../Landing/HeroSection";

function Intro() {
  return (
    <div className="min-h-screen flex flex-col items-center text-white px-4 overflow-x-hidden">
      {/* Profile Section */}
      <HeroSection />
      {/* Certifications and Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mt-20">
        {/* Left Column */}
        <div className="col-span-1">
          <Certifications />
          <WebsitesAndAcademies />
        </div>
        {/* Right Column */}
        <div className="col-span-1">
          <Timeline />
        </div>
      </div>
      {/* Skills */}
      <div className="w-full max-w-6xl mt-20">
        <Skills />
      </div>
      {/* Call to Action */}
      <div className="w-full max-w-6xl my-16">
        <CallToAction />
      </div>
    </div>
  );
}

export default Intro;
