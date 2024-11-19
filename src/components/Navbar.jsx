import React, { useState } from 'react';

function Navbar({ setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="relative flex flex-wrap 
        sm:justify-center sm:flex-nowrap 
        w-full text-sm py-3 font-inter">
        <nav className="
        max-w-[85%] w-full px-4 sm:flex sm:items-center sm:justify-evenly 
        bg-dark-blue rounded-lg p-2">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold focus:outline-none 
            text-white focus:opacity-80" href="#" aria-label="Brand">
              Cold<span className="text-main-Cyne">By</span>Default
            </a>
            <div className="sm:hidden">
                <button
                type="button"
                onClick={handleMenuToggle}
                className="relative size-7 flex justify-center items-center 
                gap-x-2 rounded-lg text-light-Cyne focus:outline-none 
                disabled:opacity-50 disabled:pointer-events-none"
                aria-expanded={isMenuOpen}
                aria-controls="navbar-menu"
                aria-label="Toggle navigation">
                  {isMenuOpen ? (
                    <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
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
                    strokeLinejoin="round">
                      <line x1="3" x2="21" y1="6" y2="6" />
                      <line x1="3" x2="21" y1="12" y2="12" />
                      <line x1="3" x2="21" y1="18" y2="18" />
                    </svg>
                  )}
                    <span className="sr-only">Toggle navigation</span>
                </button>
              </div>
            </div>
            <div
            id="navbar-menu"
            className={`${
            isMenuOpen ? 'block' : 'hidden'
            } sm:block transition-all duration-300`}>
              <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <button
                className="font-medium text-main-Cyne focus:outline-none"
                onClick={() => setActiveSection('Home')}>
                Home
                </button>
                <button
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                onClick={() => setActiveSection('Projects')}>
                Projects
                </button>
                <button
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                onClick={() => setActiveSection('Links')}>
                Links
                </button>
                <button
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                onClick={() => setActiveSection('Contact')}>
                Contact
                </button>
              </div>
            </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
