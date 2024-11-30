import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faHouse, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function Navbar({ setActiveSection }) {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header
        className="relative flex flex-wrap 
        sm:justify-center sm:flex-nowrap 
        w-full text-sm py-3 font-inter z-50">
        <nav className="w-full sm:max-w-[85%] px-4 sm:flex 
        sm:items-center sm:justify-evenly 
        bg-new-bg-second rounded-lg p-2 mx-auto relative">
          <div className="flex items-center justify-between">
            <div
              className="text-white hover:text-zinc-200 backdrop-blur-lg 
                  bg-new-bg-fourth rounded-md 
                  py-2 px-2 shadow hover:shadow-zinc-400 duration-700">
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
              isMenuOpen
                ? "absolute top-full left-0 w-full bg-new-bg-second/80 backdrop-blur-lg p-5 rounded-b-lg"
                : "hidden"
            } sm:block transition-all duration-300 z-40`}>
            <div className="flex flex-col items-center justify-center gap-8 
            sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <button
                className="text-main-Cyne hover:text-zinc-200 backdrop-blur-lg 
                  bg-new-bg-fourth rounded-md 
                  py-2 px-2 shadow hover:shadow-zinc-400 duration-700"
                onClick={() => handleNavigation("Home")}
              >
                <div className="hidden sm:block">
                  <FontAwesomeIcon icon={faHouse} />
                </div>
                <span className="block sm:hidden">{t("home")}</span>
              </button>
              <button
                className="text-main-Cyne hover:text-zinc-200 backdrop-blur-lg 
                  bg-new-bg-fourth rounded-md 
                  py-2 px-2 shadow hover:shadow-zinc-400 duration-700"
                onClick={() => handleNavigation("Projects")}>
                <span>{t("projects")}</span>
              </button>
              <button
                className="text-main-Cyne hover:text-zinc-200 backdrop-blur-lg 
                  bg-new-bg-fourth rounded-md 
                  py-2 px-2 shadow hover:shadow-zinc-400 duration-700"
                onClick={() => handleNavigation("Blog")}>
                <span>{t("blog")}</span>
              </button>
              {/* Language Switch Buttons */}
              <div className="flex gap-4">
                <button
                    className="text-main-Cyne hover:text-zinc-200 backdrop-blur-lg 
                    bg-new-bg-fourth rounded-md 
                    py-2 px-2 shadow hover:shadow-zinc-400 duration-700"
                    onClick={() => handleLanguageChange("en")}>
                    EN
                  </button>
                  <button
                    className="text-main-Cyne hover:text-zinc-200 backdrop-blur-lg 
                    bg-new-bg-fourth rounded-md 
                    py-2 px-2 shadow hover:shadow-zinc-400 duration-700"
                    onClick={() => handleLanguageChange("de")}>
                    DE
                  </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
