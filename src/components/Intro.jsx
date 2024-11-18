import React from "react";



function Intro(){
    return (
    <>
        <div className="flex items-center justify-center
        flex-col text-center pt-20 pb-6"> 
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3
            font-bold">Yazan Abo-Ayash</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">Hi,  
            I am a software developer currently studying Python and Machine Learning, 
            with a passion for building and learning. This website is my first <span className="text-cyan-600">React</span> project, 
            showcasing my journey into frontend development. <br />Check out my other projects and the source 
            code for this website on my {' '}
            <a href="https://github.com/ColdByDefault" target="_blank"
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
            rel="noreferrer noopener">GitHub
            </a>.
            </p>
        </div>
    </>
    )
}

export default Intro;