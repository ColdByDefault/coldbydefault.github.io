import React from "react";

function CallToAction() {
  return (
    <div className="bg-new-bg-second backdrop-blur-lg text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-main-Cyne">Let's Work Together</h2>
      <p className="text-sm text-center mb-4">
        Have a project in mind or want to collaborate? Reach out to me!
      </p>
      <a
        href="mailto:abo.ayash.yazan@gmail.com"
        className="px-6 py-3 bg-main-Cyne text-white rounded-lg shadow-md hover:shadow-lg">
        Contact Me
      </a>
    </div>
  );
}

export default CallToAction;
