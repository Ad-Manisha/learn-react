import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="w-full bg-gradient-to-br from-indigo-500 via-pink-150 to-purple-300 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + Copyright */}
        <div>
          <span className="text-3xl sm:text-4xl font-semibold tracking-wide hidden sm:inline font-playfair">
            <span className="text-white">Post</span>
            <span className="text-yellow-400">Script</span>
          </span>
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} PostScript. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase mb-4 tracking-wider text-yellow-400">
            Explore
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="no-underline hover:text-purple-900 transition-colors duration-200"
              >
                Latest Posts
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="no-underline hover:text-purple-900 transition-colors duration-200"
              >
                Popular Posts
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="no-underline hover:text-purple-900 transition-colors duration-200"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="no-underline hover:text-purple-900 transition-colors duration-200"
              >
                Tags
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase mb-4 tracking-wider text-yellow-400">
            About
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="no-underline hover:text-purple-900 transition-colors duration-200"
              >
                About PostScript
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="no-underline hover:text-purple-900 transition-colors duration-200"
              >
                Blog Philosophy
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="no-underline hover:text-purple-900 transition-colors duration-200"
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase mb-4 tracking-wider text-yellow-400">
            Community
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="no-underline hover:text-purple-900 transition-colors duration-200"
              >
                Write with Us
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="no-underline hover:text-purple-900 transition-colors duration-200"
              >
                Contributors
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="no-underline hover:text-purple-900 transition-colors duration-200"
              >
                Join the Newsletter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
