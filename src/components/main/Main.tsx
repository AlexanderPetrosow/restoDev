import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "./Main.module.css"

const Main: React.FC = () => {
  return (
    <div className={`${styles.main} container`}>
      <Tabs>
        <Tab
          title={
            <>
              <div className="d-flex">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_6_1810"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="17"
                    height="16"
                  >
                    <path d="M16.29 0H0.290039V16H16.29V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_6_1810)">
                    <path
                      d="M9.79004 5C10.6184 5 11.29 4.32843 11.29 3.5C11.29 2.67157 10.6184 2 9.79004 2C8.96161 2 8.29004 2.67157 8.29004 3.5C8.29004 4.32843 8.96161 5 9.79004 5Z"
                      stroke="#FF511B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.79004 6.59918C3.79004 6.59918 5.79004 4.9948 8.79004 7.03668C11.9444 9.18043 13.79 8.3398 13.79 8.3398"
                      stroke="#FF511B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.2041 10.0742C8.31848 10.3142 11.2891 11.2517 11.2891 14.5017"
                      stroke="#FF511B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.69254 6.96875C8.31317 8.45187 6.46566 12.9169 2.29004 12.4994"
                      stroke="#FF511B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <p>С собой</p>
              </div>
            </>
          }
        ></Tab>
        <Tab
          title={
            <>
              <div className="d-flex">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_10615_11556)">
                    <path
                      d="M12.5 10.0352C11.3953 10.0352 10.5 9.13982 10.5 8.03516V4.03516C10.5 2.93049 11.3953 2.03516 12.5 2.03516"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12.5 2.03516H13.1667C13.5347 2.03516 13.8333 2.33382 13.8333 2.70182V14.0352"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12.5 10.0352H13.8333"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M4.83479 7.69922L4.82812 13.9992"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M4.83594 5.7V2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M2.5 2.05469V5.08935V5.02935C2.5 6.50202 3.54467 7.69602 4.83333 7.69602C6.122 7.69602 7.16667 6.50202 7.16667 5.02935V5.08935V2.05469"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_10615_11556">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p>В ресторане</p>
              </div>
            </>
          }
        ></Tab>
        <Tab
          title={
            <>
              <div className="d-flex">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3584 6L13.6118 6.66667"
                    stroke="#FF511B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.77921 6.66667L2.02588 6"
                    stroke="#FF511B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.8566 9.33722H11.1899"
                    stroke="#FF511B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.19254 9.33722H4.52588"
                    stroke="#FF511B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.6105 6.66797L13.0512 3.9933C12.8892 3.2213 12.2085 2.66797 11.4192 2.66797H6.03254C5.25854 2.66797 4.58588 3.2013 4.40988 3.9553L3.77588 6.66797"
                    stroke="#FF511B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.85921 13.3346H4.35921C4.91121 13.3346 5.35921 12.8866 5.35921 12.3346V11.668H12.0258V12.3346C12.0258 12.8866 12.4738 13.3346 13.0258 13.3346H14.5258C14.9858 13.3346 15.3592 12.9613 15.3592 12.5013V8.66797C15.3592 7.5633 14.4638 6.66797 13.3592 6.66797H4.02588C2.92121 6.66797 2.02588 7.5633 2.02588 8.66797V12.5013C2.02588 12.9613 2.39921 13.3346 2.85921 13.3346Z"
                    stroke="#FF511B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p>Доставка</p>
              </div>
            </>
          }
        ></Tab>
      </Tabs>
    </div>
  );
};

export default Main;
