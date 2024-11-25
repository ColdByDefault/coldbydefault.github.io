import React from "react";

function Footer({ setActiveSection }) {
  return (
    <footer className="bg-dark-blue/60 backdrop-blur-lg text-white py-4 text-center">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <p className="text-sm text-center sm:text-left">
          Copyright © 2024{" "}
          <span className="font-bold text-main-Cyne">ColdByDefault</span>. All rights reserved.
        </p>
        <button
          className="font-medium cursor-pointer text-gray-600 hover:text-gray-400 
          focus:outline-none focus:text-gray-400"
          onClick={() => setActiveSection("Impressum")}>
          Impressum
        </button>
      </div>
    </footer>
  );
}

export default Footer;
