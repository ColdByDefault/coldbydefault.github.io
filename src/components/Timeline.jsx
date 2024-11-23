import React, { useEffect } from "react";
import "../styles/TimelineStyles.css";

function Timeline() {
  const events = [
    {
      date: "2020",
      title: "Explored Web Development",
      description: "Started building projects with HTML, CSS.",
      cardDescription: "HTML, CSS.",
      cardTitle: "card Title",
    },
    {
      date: "2021",
      title: "Started Learning Front-End Programming",
      description: "Deployed my first Website ever.",
      cardDescription: "HTML, CSS.",
      cardTitle: "card Title",
    },
    {
      date: "2022",
      title: "Started Learning Programming",
      description: "Dived into Python and built my first simple applications.",
      cardDescription: "HTML, CSS.",
      cardTitle: "card Title",
    },
    {
      date: "2023",
      title: "Started Academic Journey as a Software Developer",
      description:
        "Enrolled in a formal academic program to study software development.",
      description2: "Focusing on foundational programming and practical skills.",
      cardDescription: "HTML, CSS.",
      cardTitle: "card Title",
    },
    {
      date: "2024",
      title: "Learning Machine Learning",
      description: "Diving into deep learning and neural networks.",
      cardDescription: "HTML, CSS.",
      cardTitle: "card Title",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".timeline-event");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="timeline" className="relative flex flex-col items-center justify-center mt-24">
      <h2 className="text-3xl font-bold mb-6 text-gray-400 sm:pl-16">
        My Journey
      </h2>
      <div className="border-r-2 border-gray-200 dark:border-gray-700 relative">
        {events.map((event, index) => (
          <div
            key={index}
            className="timeline-event mb-10 mr-12 opacity-0 
            transform translate-x-20 transition-all duration-700 ease-out group relative">
            <div
              className="absolute w-3 h-3 bg-main-Cyne rounded-full 
              -right-[14.5px] border border-gray-200 dark:border-gray-700 
              scale-75 transition-transform duration-500"></div>

            {/* Event details */}
            <div className="flex flex-col gap-2 text-right">
              <time className="text-light-Cyne dark:text-stone-100 text-sm">
                {event.date}
              </time>
              <h3 className="text-lg font-semibold text-stone-50 dark:text-white">
                {event.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {event.description} <br />
                {event.description2}
              </p>
            </div>
            <div
              className="hidden lg:group-hover:flex absolute -right-[200px] 
              top-0 w-[150px] p-4 bg-gray-800 
              text-white rounded-lg shadow-lg transition-all duration-500 
              ease-in-out z-10 opacity-0 
              group-hover:opacity-100 group-hover:translate-x-4">
              <div>
                <h4 className="text-md font-semibold">{event.cardTitle}</h4>
                <p className="text-sm">{event.cardDescription}</p>
                {event.description2 && <p className="text-sm">{event.description2}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
