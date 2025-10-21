import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Loogo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-8 py-3  bg-white border-b border-white/15 shadow-[0_10px_40px_rgba(59,130,246,0.2)] sticky top-0 z-50 backdrop-blur-3xl transition-all duration-1000 max-[990px]:h-[100px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-center transform transition-all duration-800 hover:scale-105 hover:-rotate-3"
            aria-label="Homepage"
          >
            <img
              src={logo}
              alt="Hospital Logo"
              className="h-14 w-auto object-cover transition-all duration-800 "
            />
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-gray-900">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/pricing", label: "Pricing" },
              { to: "/faqs", label: "FAQs" },
              { to: "/contact", label: "Contact" },
              { to: "/demo", label: "Demo" },
            ].map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-3 py-2.5 rounded-2xl text-gray-900 backdrop-blur-lg border border-white/40 transition-all duration-800 
        hover:bg-gradient-to-r hover:from-blue-400/30 hover:to-blue-600/30 hover:text-blue-900 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 
        focus:outline-none focus:ring-2 focus:ring-blue-600/60 group
        ${
          isActive
            ? "bg-gradient-to-r from-blue-500/30 to-blue-700/30 text-blue-900 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            : ""
        }`
                }
              >
                <span className="relative z-10 text-lg font-bold">
                  {link.label}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-600/30 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-800 rounded-2xl scale-95 group-hover:scale-100" />
                <span
                  className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-800 group-hover:w-5/6 group-hover:-translate-x-1/2"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              </NavLink>
            ))}
          </nav>
          {/* Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              className="text-lg relative bg-gradient-to-r from-white/20 to-blue-100/20 text-blue-800 border border-blue-600/40 rounded-2xl px-7 py-3.5  font-bold backdrop-blur-lg shadow-lg hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] hover:bg-gradient-to-r hover:from-blue-200/30 hover:to-blue-300/30 hover:scale-105 transition-all duration-800 focus:outline-none focus:ring-2 focus:ring-blue-600/60"
            >
              Get Started
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-blue-600/25 opacity-0 hover:opacity-100 transition-opacity duration-800 rounded-2xl scale-95 hover:scale-100" />
            </button>
            <button
              type="button"
              className="relative bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-2xl px-7 py-3.5 text-lg font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-1000 hover:scale-105 transition-all duration-800 focus:outline-none focus:ring-2 focus:ring-blue-600/60"
            >
              Login
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-800/30 opacity-0 hover:opacity-100 transition-opacity duration-800 rounded-2xl scale-95 hover:scale-100" />
            </button>
          </div>

          {/* Hamburger Menu - Mobile */}
          <button
            type="button"
            className="lg:hidden text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600/60 rounded-xl transform transition-all duration-600 hover:scale-115 hover:text-blue-800 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-9 h-9 transition-all duration-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu  */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-1200 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } mt-6 pb-10 border-t border-white/25 backdrop-blur-2xl bg-gradient-to-b from-white/10 to-blue-50/10`}
        >
          <nav className="flex flex-col gap-4 text-sm font-bold text-gray-900 px-6">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/pricing", label: "Pricing" },
              { to: "/faqs", label: "FAQs" },
              { to: "/contact", label: "Contact" },
              { to: "/demo", label: "Demo" },
            ].map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-5 py-3 rounded-xl text-gray-900 bg-gradient-to-r from-white/20 to-blue-100/20 backdrop-blur-lg border border-white/40 hover:bg-gradient-to-r hover:from-blue-400/30 hover:to-blue-600/30 hover:text-blue-900 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-800"
                onClick={() => setIsOpen(false)}
                style={{
                  animation: `flipIn 0.6s ease-in-out ${index * 0.2}s both`,
                }}
              >
                {link.label}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-blue-600/25 opacity-0 hover:opacity-100 transition-opacity duration-800 rounded-xl scale-95 hover:scale-100" />
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-4 mt-8 px-6">
            <button
              type="button"
              className="relative bg-gradient-to-r from-white/20 to-blue-100/20 text-blue-800 border border-blue-600/40 rounded-xl px-8 py-3 text-sm font-bold backdrop-blur-lg shadow-lg hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] hover:bg-gradient-to-r hover:from-blue-200/30 hover:to-blue-300/30 hover:scale-105 transition-all duration-800 w-full"
              onClick={() => setIsOpen(false)}
            >
              Get Started
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-blue-600/25 opacity-0 hover:opacity-100 transition-opacity duration-800 rounded-xl scale-95 hover:scale-100" />
            </button>
            <button
              type="button"
              className="relative bg-gradient-to-r from-blue-800 to-blue-950 text-white rounded-xl px-8 py-3 text-sm font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-1000 hover:scale-105 transition-all duration-800 w-full"
              onClick={() => setIsOpen(false)}
            >
              Login
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-800/30 opacity-0 hover:opacity-100 transition-opacity duration-800 rounded-xl scale-95 hover:scale-100" />
            </button>
          </div>
        </div>

        {/* Custom Keyframes for 3D Flip Animation */}
        <style>
          {`
            @keyframes flipIn {
              from {
                transform: perspective(600px) rotateX(-20deg) translateY(-20px);
                opacity: 0;
              }
              to {
                transform: perspective(600px) rotateX(0deg) translateY(0);
                opacity: 1;
              }
            }
          `}
        </style>
      </div>
    </header>
  );
};

export default Header;
