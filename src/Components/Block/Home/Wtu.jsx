import React from "react";
import { motion } from "framer-motion";
import { LuShieldCheck, LuUsers, LuActivity, LuCpu } from "react-icons/lu";

const Wtu = () => {
  const stats = [
    { icon: <LuUsers size={32} />, value: "250+", label: "Trusted Clients" },
    {
      icon: <LuShieldCheck size={32} />,
      value: "99.9%",
      label: "System Uptime",
    },
    {
      icon: <LuActivity size={32} />,
      value: "24/7",
      label: "Active Monitoring",
    },
    {
      icon: <LuCpu size={32} />,
      value: "AI-Powered",
      label: "Smart Diagnostics",
    },
  ];

  // Animation variants for stats cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,

      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
    hover: { scale: 1.08, boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)" },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-gray-200 to-blue-100 py-20 overflow-hidden mt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.1),_transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(59,130,246,0.1),_transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Text + Stats */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900"
            >
              Why Hospitals Trust{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600">
                Our System
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-xl leading-relaxed"
            >
              Our cutting-edge platform empowers hospitals with seamless patient
              management, minimal downtime, and top-tier data security through
              AI-driven infrastructure.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  viewport={{ once: true }}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-20 rounded-2xl"></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="text-indigo-600 bg-blue-100/50 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {item.value}
                      </p>
                      <p className="text-sm text-gray-500 font-medium">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side: Image */}
          <motion.div
            variants={imageVariants}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Doctor with tablet"
                className="h-[400px] lg:h-[500px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
            {/* Decorative floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute top-10 left-10 w-12 h-12 bg-blue-200 rounded-full opacity-50"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 right-10 w-8 h-8 bg-indigo-200 rounded-full opacity-50"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Wtu;
