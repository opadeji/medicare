import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Forgot Password?
            </h1>
            <p className="text-gray-600">
              Enter your email and we'll send you a link to reset your password.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400 text-gray-900 shadow-sm hover:border-gray-400"
                required
              />
            </div>

            <Link to={"/resetpassword"}>
              {" "}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md"
              >
                Send Reset Link
              </button>
            </Link>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Remember your password?{" "}
            <a
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              Back to Login
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block relative overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1661893870720-e2f6d09d96d7?ixlib=rb-4.1.0&auto=format&fit=crop&w=1350&q=80"
          alt="Doctor holding tablet"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Your Health, Secured</h2>
          <p className="text-sm opacity-90">
            Strong passwords keep your medical data safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
