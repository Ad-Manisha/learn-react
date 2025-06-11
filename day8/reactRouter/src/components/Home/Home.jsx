import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-100 to-rose-100 flex flex-col justify-center items-center px-6">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-indigo-700 mb-6 text-center drop-shadow-md">
        50 Days of React
      </h1>

      <p className="max-w-xl text-center text-gray-700 text-lg sm:text-xl mb-10">
        Join me on a journey to master React with daily projects and challenges!
      </p>

      <Link
        to="/projects"
        className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
      >
        Explore Projects →
      </Link>
    </div>
  );
}
