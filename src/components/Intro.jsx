import React from "react";
import Timeline from "./Timeline";

function Intro(){
    const skillsList = [
        "React",
        "JavaScript",
        "Python",
        "Tailwind CSS",
        "Flask",
        "Machine Learning",
        "Deep Learning",
        "Git",
        "HTML",
        "CSS",
        "Vite",
        "Next.js",
      ];
    return (
    <>
        <div className="flex items-center justify-evenly min-h-screen
        flex-col text-center pt-20 pb-6 text-white"> 
            <div className="flex items-center">
                <h1 className="text-2xl md:text-6xl mb-1 md:mb-3
                font-bold pr-12">Yazan<br />Abo-Ayash
                </h1>
                <img src="/assets/me5.jpg" alt="" className="w-[300px] h-[300px] rounded-full object-cover" />
            </div>
            <p className="text-base md:text-xl mb-3 font-medium mt-5">Full-Stack Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold"> 
            Hi, I am currently learning to become a software developer, focusing on Python and Machine Learning, 
            with a passion for building and exploring new technologies. 
            This website is my first<span className="text-cyan-600"> React </span>project, showcasing my journey into frontend development. <br />Check out my other projects and the source 
            code for this website on my {' '}
            <a href="https://github.com/ColdByDefault" target="_blank"
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
            rel="noreferrer noopener">GitHub
            </a>.
            </p>
             {/* Skills Section */}
            <div className="flex items-center gap-28 bg-gray-900 text-white p-6 rounded-lg shadow-lg mt-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-main-Cyne">Skills</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                    {skillsList.map((skill, index) => (
                        <li
                        key={index}
                        className="bg-gray-800 p-3 rounded-md text-center shadow-sm hover:bg-main-Cyne hover:text-black transition duration-300"
                        >
                        {skill}
                        </li>
                    ))}
                    </ul>
                </div>
                <div>
                    {/* Time line */}
                    <Timeline />
                </div>
            </div>
            
        </div>
    </>
    )
}

export default Intro;