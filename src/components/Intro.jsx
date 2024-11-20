import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";

function Intro() {
  return (
    <>
      <div className="flex items-center justify-evenly min-h-screen
      flex-col text-center pt-20 pb-6 text-white">
            <div>
                <div className="flex items-center">
                    <h1 className="text-2xl md:text-6xl mb-1 md:mb-3
                    font-bold pr-12">Yazan<br />Abo-Ayash
                    </h1>
                    <img src="/assets/me5.jpg" alt=""
                    className="w-[300px] h-[300px] rounded-full object-cover"/>
                </div>
                <p className="text-base md:text-xl mb-3 font-medium mt-5">Full-Stack Developer</p>
                <p className="text-sm max-w-xl mb-6 font-bold">
                    Hi, I am currently learning to become a software developer, focusing
                    on Python and Machine Learning, with a passion for building and
                    exploring new technologies. This website is my first
                    <span className="text-cyan-600"> React </span>
                    project, showcasing my journey into frontend development. <br />
                    Check out my other projects and the source code for this website on my{" "}
                    <a href="https://github.com/ColdByDefault"
                    target="_blank"
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                    rel="noreferrer noopener">GitHub</a>.
                </p> 
            </div>
            <div className="flex w-full justify-evenly flex-col md:flex-row
            mt-32">
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-400">My Journey</h2>
                    <Timeline />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-400">My Skills</h2>
                    <Skills />
                </div>
            </div>
      </div>
    </>
  );
}

export default Intro;