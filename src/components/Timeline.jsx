import React from "react";

function Timeline() {
  const events = [
    {
      date: "2020",
      title: "Explored Web Development",
      description: "Started building projects with HTML, CSS",
    },
    {
      date: "2021",
      title: "Started Learning Front-End Programming",
      description: "Deploying my first Website ever.",
    },
    {
      date: "2022",
      title: "Started Learning Programming",
      description: "Dived into Python and built my first simple applications.",
    },
    {
      date: "2023",
      title: "Started Academic Journey as a Software Developer",
      description: "Enrolled in a formal academic program to study software development,", 
      description2: "focusing on foundational programming and practical skills.",
    }, 
    {
      date: "2024",
      title: "Learning Machine Learning",
      description: "Diving into deep learning and neural networks.",
    },
  ];

  return (
    <div id="timeline" className="relative flex flex-col items-center justify-center">
      <div className="border-r-2 border-gray-200 dark:border-gray-700 relative"> 
        {events.map((event, index) => (
          <div key={index} className="mb-10 mr-12">
            <div className="absolute w-3 h-3 bg-main-Cyne rounded-full 
            -right-1.5 border border-gray-200 dark:border-gray-700"></div> 
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
