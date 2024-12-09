import React from "react";


function Footer({ setActiveSection }) {
  return (
    <footer className="bottom-0 bg-new-bg-second backdrop-blur-lg text-white py-4 text-center">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <div className="text-sm text-center sm:text-left">
          Copyright © 2024{" "} ColdByDefault. All rights reserved.
          <p>
            <span className="text-orange-500">Another</span>Project&trade;
          </p>
        </div>
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