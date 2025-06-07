import me from "../assets/me2.jpg";
import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Challenges");

  return (
    <nav className="bg-slate-900 shadow-md sticky top-0 z-50">
      {/* ✨ Enhanced background from gray-900 to slate-900 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <span className="text-xl sm:text-2xl font-bold text-purple-300">
              #50DaysOfReact
            </span>

            <div className="hidden sm:flex gap-6 ml-8">
              {["Home", "Challenges", "Projects", "GitHub"].map((tab) => (
                <a
                  key={tab}
                  href="#"
                  onClick={() => setActiveTab(tab)}
                  className={`transition-all duration-200 ${
                    activeTab === tab
                      ? "text-white border-b-2 border-blue-500 pb-1 font-semibold"
                      : "text-slate-400 hover:text-blue-400"
                  }`}
                >
                  {tab}
                </a>
              ))}
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
