import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl sm:text-4xl font-semibold tracking-wide hidden sm:inline font-playfair">
              <span className="text-white">Post</span>
              <span className="text-yellow-400">Script</span>
            </span>
          </Link>

          {/* Navigation Items */}
          <ul className="flex items-center space-x-6">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-5 py-2 rounded-full hover:bg-white hover:text-indigo-700 transition duration-300 ease-in-out font-medium"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
