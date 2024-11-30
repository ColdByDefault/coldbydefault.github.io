import React from "react";
import { useTranslation } from "react-i18next";

import "../styles/btns.css";


function CallToAction() {
  const { t } = useTranslation();
  return (
    <div className="bg-new-bg-second backdrop-blur-lg text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-main-Cyne">
        {t("work_together_heading")}
      </h2>
      <p className="text-sm text-center mb-4">
        {t("work_together_message")}
      </p>
      <a href="mailto:abo.ayash.yazan@gmail.com"
        className="callToAction-btn">
        <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>{t("work_together_cta")}</span>
      </a>
    </div>
  );
}

export default CallToAction;

/*       <button className="callToAction-btn">
      <div class="svg-wrapper-1">
        <div class="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>
          </svg>
        </div>
      </div>
      <span>Send</span>
    </button> */