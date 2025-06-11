import React from "react";
import counterVideo from "../../assets/videos/prevCounter.mov";
import bgChangerVideo from "../../assets/videos/bgChanger.mov";
import passwordVideo from "../../assets/videos/passwordGenerator.mov";
import currencyVideo from "../../assets/videos/currencyConverter.mov";

const projects = [
  {
    id: 1,
    title: "Counter App",
    description:
      "A simple React counter app using useState to increment and decrement values.",
    github: "https://github.com/Ad-Manisha/learn-react/tree/main/day3/counter",
    video: counterVideo,
  },
  {
    id: 2,
    title: "BgChanger",
    description:
      "A fun app that changes background color on button click or interval.",
    github: "https://github.com/Ad-Manisha/learn-react/tree/main/day5",
    video: bgChangerVideo,
  },
  {
    id: 3,
    title: "Password Generator",
    description:
      "Generates strong random passwords with options for length and character types.",
    github: "https://github.com/Ad-Manisha/learn-react/tree/main/day6",
    video: passwordVideo,
  },
  {
    id: 4,
    title: "Currency Converter",
    description:
      "Converts currencies using real-time exchange rates with a user-friendly UI.",
    github: "https://github.com/Ad-Manisha/learn-react/tree/main/day7",
    video: currencyVideo,
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 to-rose-100 min-h-screen px-6 py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-blue-800">
        #50DaysOfReact Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <video
              title={`${project.title} Preview`}
              controls
              className="rounded-lg mb-4 w-full max-h-64 object-cover shadow-sm"
              src={project.video}
            />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
