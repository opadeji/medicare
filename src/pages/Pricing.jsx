import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen font-sans">
      {/* Hero Section */}
      <main className="bg-gradient-to-br from-indigo-900 via-teal-500 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col lg:flex-row justify-between items-center gap-16 relative z-10">
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
              Elevate Your Hospital with eMedCard
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Unlock seamless medical record management and operational
              excellence with a plan crafted for your hospital. Our team is here
              to guide you.
            </p>
          </div>
          <div className="lg:w-1/2 text-center bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <h2 className="text-3xl sm:text-4xl font-semibold drop-shadow">
              Starting at ₦250,000/Month
            </h2>
            <p className="mt-4 text-lg bg-blue-600/30 py-3 px-6 rounded-full inline-block backdrop-blur-sm shadow-inner">
              30-Day Free Trial Awaits
            </p>
            <div className="mt-8">
              <Link to="/signup">
                <button className="group inline-flex items-center gap-4 px-10 py-4 bg-gradient-to-r from-indigo-700 to-teal-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-teal-600 transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-xl">
                  <span>Start Your Journey</span>
                  <FaArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </section>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </main>

      {/* Pricing Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_80%)]"></div>
        <div className="text-center relative z-10 animate-fade-in-up">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-blue-200 to-teal-200"></div>
            <h2 className="text-lg font-medium text-blue-600 tracking-wider uppercase">
              Pricing Plans
            </h2>
            <div className="h-px w-24 bg-gradient-to-l from-blue-200 to-teal-200"></div>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 drop-shadow-sm">
            Tailored Solutions for Your Hospital
          </h3>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a plan to transform patient care and streamline operations
            with eMedCard.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Basic Plan */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
            <div className="pb-6">
              <h4 className="text-blue-500 font-semibold text-lg">
                Basic Plan
              </h4>
              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                ₦250,000
                <span className="text-xl font-medium text-gray-600">
                  /Month
                </span>
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Perfect for small clinics
              </p>
            </div>
            <div className="py-6 border-t border-blue-100/50">
              <p className="text-gray-700 font-medium">Key Features:</p>
              <ul className="mt-5 space-y-4">
                <li className="flex items-center gap-4">
                  <svg
                    className="h-6 w-6 text-blue-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Digital Patient Records</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg
                    className="h-6 w-6 text-blue-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Basic Staff Scheduling</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg
                    className="h-6 w-6 text-blue-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Email Support</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-blue-100/50">
              <p className="text-gray-700 font-medium">Perfect for:</p>
              <p className="mt-3 text-sm text-gray-600">
                Small clinics embracing digital healthcare solutions.
              </p>
              <div className="mt-8">
                <Link to="/signup">
                  <button className="w-full group inline-flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-indigo-900 to-teal-400 text-white font-semibold rounded-full hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg">
                    <span>Subscribe Now</span>
                    <FaArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-blue-500 relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gradient-to-r from-indigo-900 to-teal-500 text-white text-sm font-semibold px-4 py-1.5 rounded-bl-lg rounded-tr-lg shadow-sm">
              Recommended
            </span>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
            <div className="pb-6">
              <h4 className="text-blue-500 font-semibold text-lg">Pro Plan</h4>
              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                ₦500,000
                <span className="text-xl font-medium text-gray-600">
                  /6 Months
                </span>
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Ideal for growing hospitals
              </p>
            </div>
            <div className="py-6 border-t border-blue-100/50">
              <p className="text-gray-700 font-medium">Key Features:</p>
              <ul className="mt-5 space-y-4">
                <li className="flex items-center gap-4">
                  <svg
                    className="h-6 w-6 text-blue-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">Advanced EMR Management</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg
                    className="h-6 w-6 text-blue-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Payroll & Staff Scheduling
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <svg
                    className="h-6 w-6 text-blue-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Priority Phone & Email Support
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-blue-100/50">
              <p className="text-gray-700 font-medium">Perfect for:</p>
              <p className="mt-3 text-sm text-gray-600">
                Mid-sized hospitals scaling with advanced tools.
              </p>
              <div className="mt-8">
                <Link to="/signup">
                  <button className="w-full group inline-flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-indigo-900 to-teal-400 text-white font-semibold rounded-full hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg">
                    <span>Subscribe Now</span>
                    <FaArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-blue-100/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
            <div className="pb-6">
              <h4 className="text-blue-500 font-semibold text-lg">
                Enterprise Plan
              </h4>
              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                ₦900,000
                <span className="text-xl font-medium text-gray-600">/Year</span>
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Comprehensive solution for large hospitals
              </p>
            </div>
            <div className="py-6 border-t border-blue-100/50">
              <p className="text-gray-700 font-medium">Key Features:</p>
              <ul className="mt-5 space-y-4">
                <li className="flex items-center gap-4">
                  <svg
                    className="h-6 w-6 text-blue-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Complete EMR & Billing Suite
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <svg
                    className="h-6 w-6 text-blue-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Custom API & System Integrations
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <svg
                    className="h-6 w-6 text-blue-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">24/7 Dedicated Support</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-blue-100/50">
              <p className="text-gray-700 font-medium">Perfect for:</p>
              <p className="mt-3 text-sm text-gray-600">
                Large hospitals with complex operational needs.
              </p>
              <div className="mt-8">
                <Link to="/signup">
                  <button className="w-full group inline-flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-indigo-900 to-teal-400 text-white font-semibold rounded-full hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg">
                    <span>Subscribe Now</span>
                    <FaArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Pricing;
