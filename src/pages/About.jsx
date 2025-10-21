import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-700 to-teal-800 py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white animate-fade-in-down">
            About Medicare
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-100 font-medium leading-relaxed animate-fade-in-up">
            Pioneering the future of healthcare in Nigeria with a
            state-of-the-art digital hospital record management system.
          </p>
          <a href="#story">
            {" "}
            <button className="mt-8 bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-200 hover:text-black transition-all duration-300 transform hover:scale-105">
              Explore Our Story
            </button>
          </a>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8" id="story">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Story
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Founded in 2025, Medicare was born out of a vision to eliminate
              the inefficiencies of paper-based hospital records in Nigeria. Our
              team of healthcare and tech experts came together to create a
              secure, cloud-based platform that empowers hospitals, clinics, and
              healthcare providers to deliver better patient care through
              seamless data management and innovative AI tools.
            </p>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-20 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Healthcare technology"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-800 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:scale-[1.02] animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              To revolutionize healthcare delivery in Nigeria by providing a
              secure, user-friendly, and innovative digital platform that
              enhances patient care and streamlines hospital operations.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:scale-[1.02] animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              To create a connected healthcare ecosystem where every hospital in
              Nigeria can access cutting-edge technology to improve patient
              outcomes and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-in">
          Meet Our Team
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-lg transform transition-all duration-500 hover:scale-[1.02] animate-slide-in-up">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Dr. Opayinka Ayodeji
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Chief Medical Advisor
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-lg transform transition-all duration-500 hover:scale-[1.02] animate-slide-in-up">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Opayinka Ayodeji
            </h4>
            <p className="text-gray-600 dark:text-gray-300">Lead Developer</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-lg transform transition-all duration-500 hover:scale-[1.02] animate-slide-in-up">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Opayinka Ayodeji
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Operations Director
            </p>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 animate-fade-in">
            Our Milestones
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center animate-slide-in-up">
              <h3 className="text-4xl font-bold text-white">2025</h3>
              <p className="text-gray-200 mt-2">Medicare Founded</p>
            </div>
            <div className="text-center animate-slide-in-up">
              <h3 className="text-4xl font-bold text-white">250+</h3>
              <p className="text-gray-200 mt-2">Hospitals Onboarded</p>
            </div>
            <div className="text-center animate-slide-in-up">
              <h3 className="text-4xl font-bold text-white">100K+</h3>
              <p className="text-gray-200 mt-2">Patient Records Managed</p>
            </div>
            <div className="text-center animate-slide-in-up">
              <h3 className="text-4xl font-bold text-white">99.9%</h3>
              <p className="text-gray-200 mt-2">Uptime Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="w-full bg-gray-900 dark:bg-gray-800 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Join us in transforming healthcare in Nigeria
          </h2>
          <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-500 transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>

      {/* CSS for Animations */}
      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        .animate-slide-in-up {
          animation: fade-in-up 0.8s ease-out 0.2s;
        }
      `}</style>
    </div>
  );
};

export default About;
