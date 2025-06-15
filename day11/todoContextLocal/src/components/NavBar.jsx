import { useState } from "react";
import me from "../assets/me4.jpg";
import logo from "../assets/logo.png";

export default function NavBar() {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = ["Home", "Challenges", "Projects", "GitHub"];

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center space-x-3">
            <img src={logo} className="h-14 w-30 mr-3" alt="Logo" />
          </a>

          <div className="flex items-center gap-4 lg:order-2">
            <button className="text-slate-500 hover:text-blue-500 transition-colors duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>
            <img
              src={me}
              alt="Profile"
              className="w-9 h-9 rounded-full border border-slate-700"
            />
          </div>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {tabs.map((tab) => (
                <li key={tab}>
                  <a
                    href="#"
                    onClick={() => setActiveTab(tab)}
                    className={`block py-2 pr-4 pl-3 transition-all duration-200 border-b lg:border-0 ${
                      activeTab === tab
                        ? "text-blue-600 font-semibold border-blue-600"
                        : "text-gray-600 hover:text-blue-500 hover:border-blue-300"
                    }`}
                  >
                    {tab}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
