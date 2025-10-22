import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Loogo.png";

const Login = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      {/* Header with Logo */}
      <header className="">
        <div className="place-items-center px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </header>

      {/* Main Login Form - Centered */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Sign in</h1>
              <p className="text-gray-500 mt-2">It's great to see you again</p>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@hospital.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400 text-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400 text-gray-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Sign in
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              New here?{" "}
              <Link
                to="/signup"
                className="font-medium text-blue-600 hover:underline"
              >
                Create a free account
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-gray-500">
        © 2025 Medicare. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
