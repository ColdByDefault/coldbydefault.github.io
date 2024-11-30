import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";
import Certifications from "./Certifications";
import CallToAction from "./CallToAction";
import WebsitesAndAcademies from "./WebsitesAndAcademies";
import HeroSection from "./HeroSection";

function Intro() {
  return (
    <div className="min-h-screen flex flex-col items-center text-white px-4 mt-20">
      {/* Profile Section */}
      <HeroSection  />
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
