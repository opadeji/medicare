import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants for title letters
  const titleText = "Simplifying Hospital Care";
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, delay: i * 0.05, ease: "easeOut" },
    }),
  };

  // Animation variants for paragraph
  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 1.2, ease: "easeOut" },
    },
    hover: {
      scale: 1.15,
      boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.7)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, x: 100, rotateY: 45 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    },
    hover: {
      rotateY: 5,
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900 overflow-hidden ">
      {/* Futuristic background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,_rgba(99,102,241,0.4),_transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,_rgba(236,72,153,0.4),_transparent_50%)] pointer-events-none"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Holographic grid overlay moved to Hero.css */}
      <div className="absolute inset-0 opacity-20 pointer-events-none holographic-grid"></div>

      {/* Animated particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random(),
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-between items-center py-24 lg:py-24">
        {/* Hero Text */}
        <div className="text-center lg:text-left max-w-lg lg:max-w-2xl px-4">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight"
            initial="hidden"
            animate="visible"
          >
            {titleText.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                className={
                  char.match(/[Hospitl]/)
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
                    : ""
                }
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl text-blue-200 mt-6 leading-relaxed font-medium max-w-md"
          >
            Revolutionize healthcare with real-time patient data, AI-driven
            prescriptions, and seamless diagnostics in a futuristic platform.
          </motion.p>
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="relative mt-8 px-10 py-4 bg-transparent border-2 border-blue-400 text-blue-300 font-semibold text-lg rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] backdrop-blur-sm group focus:outline-none focus:ring-4 focus:ring-blue-400/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            <span className="relative z-10 group-hover:text-white ">
              Launch Now
            </span>
          </motion.button>
        </div>

        {/* Hero Image */}
        <div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="mt-12 lg:mt-0 hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              <img
                src="https://plus.unsplash.com/premium_photo-1744366723312-a57f721c1b15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY5fHxIZWFsdGhjYXJlJTIwVGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                alt="Futuristic Healthcare Technology"
                className="w-[550px] h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
            </div>
            <motion.div
              className="absolute inset-0 border-2 border-blue-400/30 rounded-2xl"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400/30 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
