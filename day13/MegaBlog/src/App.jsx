import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-indigo-100 to-indigo-200 text-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-6 md:px-8 py-8 overflow-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-indigo-100 text-indigo-700 py-6 shadow-inner">
        <Footer />
      </footer>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-indigo-50">
      <span className="text-indigo-500 text-lg font-semibold animate-pulse">
        Loading...
      </span>
    </div>
  );
}

export default App;
