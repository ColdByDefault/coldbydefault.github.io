import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faEnvelope, faHouse, faPenFancy } from "@fortawesome/free-solid-svg-icons";

function Navbar({ setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false); 
  };

  return (
    <>
      <header className="relative flex flex-wrap 
        sm:justify-center sm:flex-nowrap 
        w-full text-sm py-3 font-inter z-50">
        <nav className="w-full sm:max-w-[85%] px-4 sm:flex 
        sm:items-center sm:justify-evenly 
        bg-dark-blue rounded-lg p-2 mx-auto relative">
          <div className="flex items-center justify-between">
            <div className="flex-none text-xl font-semibold focus:outline-none cursor-default
            text-white ">
              Cold<span className="text-main-Cyne">By</span>Default
            </div>
            <div className="sm:hidden">
              <button
                type="button"
                onClick={handleMenuToggle}
                className="relative size-7 flex justify-center items-center 
                gap-x-2 rounded-lg text-light-Cyne focus:outline-none 
                disabled:opacity-50 disabled:pointer-events-none"
                aria-expanded={isMenuOpen}
                aria-controls="navbar-menu"
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                )}
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div id="navbar-menu"
          className={`${
              isMenuOpen ? 'absolute top-full left-0 w-full bg-dark-blue/60 backdrop-blur-lg p-5 rounded-b-lg' : 'hidden'
            } sm:block transition-all duration-300 z-40`}>
            <div className="flex flex-col items-center justify-center gap-8 
            sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <button className="font-medium text-main-Cyne 
              focus:outline-none flex items-center gap-2"
              onClick={() => handleNavigation('Home')}>
                <FontAwesomeIcon icon={faHouse} />
                <span className="sm:hidden">Home</span>
              </button>
              <button className="font-medium text-gray-300 hover:text-gray-400 focus:outline-none 
              focus:text-main-Cyne flex items-center gap-2"
                onClick={() => handleNavigation('Projects')}>
                <FontAwesomeIcon icon={faFlask} />
                <span>Lab</span>
              </button>
              <button className="font-medium text-gray-300 hover:text-gray-400 focus:outline-none 
              focus:text-main-Cyne flex items-center gap-2"
              onClick={() => handleNavigation('Blog')}>
                <FontAwesomeIcon icon={faPenFancy} />
                <span>Blog</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
