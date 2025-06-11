import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 to-rose-100 min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Contact Info */}
        <div className="p-10 bg-gray-100 flex flex-col justify-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 tracking-tight">
            Get in touch:
          </h1>
          <p className="text-lg font-medium text-gray-600">
            Fill in the form to start a conversation
          </p>

          <div className="flex items-center text-gray-600 space-x-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500 flex-shrink-0"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold tracking-wide w-48">
              Pokhara, Kaski, Nepal
            </span>
          </div>

          <div className="flex items-center text-gray-600 space-x-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500 flex-shrink-0"
            >
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-semibold tracking-wide w-48">9867555733</span>
          </div>

          <div className="flex items-center text-gray-600 space-x-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500 flex-shrink-0"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold tracking-wide w-48">
              react.50days@gmail.com
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="p-10 flex flex-col justify-center space-y-5">
          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="w-full py-3 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 font-semibold focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full py-3 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 font-semibold focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="tel" className="sr-only">
              Phone Number
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="Telephone Number"
              className="w-full py-3 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 font-semibold focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-40 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition ease-in-out duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
