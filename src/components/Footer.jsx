import React from "react";

function Footer({ setActiveSection }) {
  return (
    <footer className="bg-dark-blue text-white py-2 text-center">
      <div className="container mx-auto flex items-center justify-around">
        <p className="text-sm mb-2">
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