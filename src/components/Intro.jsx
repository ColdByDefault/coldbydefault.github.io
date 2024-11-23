import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";
import Certifications from "./Certifications";
import CallToAction from "./CallToAction";


function Intro() {
  return (
    <>
    <div className="flex items-center justify-evenly min-h-screen cursor-default
    flex-col text-center pt-20 pb-6 text-white">
        <div className=" p-6 flex flex-col rounded-2xl 
        md:backdrop-blur-lg md:p-6 
        md:flex-row items-center md:justify-between"
        style={{
          background: `linear-gradient(180deg, 
            #020915 10%, 
            #031424 40%, 
            #021b27 60%, 
            #022430 80%, 
            #032535 100%)`
         }}>
          <div className="mb-6 md:mb-0">
            <img src="/assets/me5.jpg" alt="ProfilePicture"
            className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full object-cover mx-auto"/>
          </div>
          <div className="md:pl-6 text-center md:text-left flex-1 md:pt-12">
            <h1 className="text-2xl md:text-6xl mb-1 md:mb-3 font-bold">
              Yazan Abo-Ayash
            </h1>
            <div className="px-4 md:px-0">
              <p className="text-sm max-w-xl mb-6 font-bold">
                Hi, I am currently learning to become a software developer, focusing
                on Python and Machine Learning, with a passion for building and
                exploring new technologies. This website is my first
                <span className="text-cyan-600"> React </span>
                project, showcasing my journey into frontend development. <br />
                Check out my other projects and the source code for this website on my{" "}
                <span
                className="text-cyan-600 
                decoration-2 decoration-light-Cyne">GitHub
                </span>.
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full 
        md:w-[65%] mt-16 backdrop-blur-lg rounded-2xl"
        style={{
          background: `linear-gradient(180deg, 
            #020915 40%, 
            #031424 80%, 
            #032535 100%)`
         }}>
          <div>
            <Certifications />
          </div>
          <div>
            <Timeline />
          </div>
        </div>
        <div className="w-full md:w-[65%]">
            <Skills />
        </div>
        <div className="m-12 w-full md:w-[65%]">
          <CallToAction />
        </div>
      </div>
    </>
  );
}

export default Intro;