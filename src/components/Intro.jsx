import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";
import Certifications from "./Certifications";
import CallToAction from "./CallToAction";
import WebsitesAndAcademies from "./WebsitesAndAcademies";
import HeroSection from "./HeroSection";


function Intro() {
  return (
    <>
      <div className="flex items-center justify-evenly min-h-screen cursor-default
      flex-col text-center p-10 text-white overflow-x-hidden">
        {/* Profile Section */}
        <HeroSection />
        {/* Certifications and Timeline */}
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full bg-comp-black 
        lg:w-[65%] mt-24 backdrop-blur-lg rounded-2xl">
          {/* Left Column */}
          <div>
            <Certifications />
            <WebsitesAndAcademies />
          </div>
          {/* Middle Column (Empty for spacing) */}
          {/* Right Column */}
          <div className="lg:col-span-1">
            <Timeline />
          </div>
        </div>

        {/* Skills */}
        <div className="w-full md:w-[65%] mt-16">
          <Skills />
        </div>
        {/* Call to Action */}
        <div className="m-12 w-full md:w-[65%]">
          <CallToAction />
        </div>
      </div>
    </>
  );
}


export default Intro;