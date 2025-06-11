import about from "../../assets/about.jpg";

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-100 to-rose-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-6/12 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-indigo-700 md:text-5xl leading-tight">
              #50DaysOfReact <br />
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Welcome to my journey of learning React in 50 days — a hands-on
              mission to sharpen frontend development skills through consistent
              practice and creativity.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Whether you're new to React or brushing up on fundamentals, this
              challenge offers both inspiration and code you can learn from.
              Join me as I document my progress and share everything openly on
              GitHub.
            </p>
            <a
              href="https://github.com/Ad-Manisha/learn-react/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-3 bg-orange-600 text-white font-medium rounded-md shadow-md hover:bg-orange-700 transition-colors duration-300"
            >
              🔗 Explore My Projects
            </a>
          </div>

          {/* Image */}
          <div className="lg:w-6/12">
            <img
              src={about}
              alt="Developer typing code on laptop keyboard"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
