import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-indigo-100 to-indigo-200 px-4">
      <div className="mx-auto w-full max-w-lg bg-white/90 backdrop-blur-sm rounded-2xl p-10 border border-indigo-200 shadow-2xl">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <span className="text-3xl sm:text-2xl font-semibold tracking-wide hidden sm:inline font-playfair">
            <span className="text-blue-800">Post</span>
            <span className="text-yellow-400">Script</span>
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl font-extrabold text-indigo-700">
          Sign up to create account
        </h2>

        {/* Subtext */}
        <p className="mt-2 text-center text-base text-indigo-500">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:underline transition duration-200"
          >
            Sign In
          </Link>
        </p>

        {/* Error message */}
        {error && (
          <p className="text-red-600 mt-6 text-center font-medium">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(create)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Full Name:"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
              {...register("name", { required: true })}
            />
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
              {...register("password", { required: true })}
            />
            <Button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold rounded-md shadow-md hover:brightness-110 transition-all duration-200"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
