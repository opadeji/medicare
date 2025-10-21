import { motion } from "framer-motion";
import { LuChartLine, LuBookText, LuShieldCheck } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Hiw = () => {
  const steps = [
    {
      desc: "Real time patient data",
      icon: <LuChartLine />,
      bg: "bg-blue-400",
    },
    { desc: "AI-Powered insight", icon: <LuBookText />, bg: "bg-purple-400" },
    { desc: "Secure architecture", icon: <LuShieldCheck />, bg: "bg-red-400" },
    {
      desc: "Fast and easy to use",
      icon: <AiOutlineThunderbolt />,
      bg: "bg-orange-400",
    },
  ];

  const layers = [
    { from: "from-blue-400", to: "to-blue-300", y: -180, delay: 0 },
    { from: "from-purple-400", to: "to-purple-300", y: -90, delay: 0.2 },
    { from: "from-red-400", to: "to-red-300", y: 0, delay: 0.4 },
    { from: "from-orange-400", to: "to-orange-300", y: 90, delay: 0.6 },
  ];

  return (
    <section className="relative max-w-[1220px] mx-auto px-8 py-20 bg-white overflow-hidden">
      {/* Background dots */}
      <svg
        className="absolute top-0 left-0 w-full h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="#3b82f6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.15" />
      </svg>

      {/* Swirl lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 400"
      >
        <path
          d="M0,200 C150,100 350,300 500,200 C650,100 800,300 1000,200"
          stroke="#60a5fa"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M0,250 C200,150 400,350 600,250 C800,150 1000,350 1200,250"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Gradient Blobs */}
      <motion.div
        className="absolute top-40 left-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-50"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-5xl font-extrabold ">How It Works</h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          A smarter, more reliable dashboard powered by AI and real-time data.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 relative z-10 pb-5">
        {/* Animated Layered Blocks */}
        <div
          className="relative w-[400px] h-[400px] max-[970px]:hidden"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              className={`absolute left-1/2 top-1/2 w-56 h-56 rounded-2xl 
              bg-gradient-to-br ${layer.from} ${layer.to}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: layer.y,
                rotateX: 60,
                rotateZ: 45,
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: layer.delay,
                duration: 0.6,
                ease: "easeOut",
              }}
              style={{
                transformOrigin: "center",
                transform: "translate(-50%, -50%)",
                boxShadow:
                  "0 20px 30px rgba(0,0,0,0.25), inset 0 2px 6px rgba(255,255,255,0.3)",
                border: "6px solid rgba(255,255,255,0.6)",
              }}
            />
          ))}
        </div>

        {/* Text and Steps */}
        <div className="max-[970px]:mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">
            Secure & reliable with full control
          </h2>
          <p className="max-w-[480px] text-gray-600 mt-5 leading-relaxed">
            The dashboard integrates data from multiple sources using advanced
            APIs, ensuring{" "}
            <span className="font-semibold text-gray-800">
              real-time updates
            </span>
            . Built on a cloud-based infrastructure for unmatched scalability.
          </p>
          <p className="max-w-[480px] text-gray-600 mt-4 mb-6 leading-relaxed">
            AI algorithms provide predictive insights and smart recommendations.
            The responsive, user-friendly interface ensures easy navigation with
            role-based access control.
          </p>

          {/* Steps */}
          <div className="space-y-3 ">
            {steps.map((data, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div
                  className={`${data.bg} text-white border-4 p-3 rounded-2xl shadow-md`}
                >
                  {data.icon}
                </div>
                <p className="font-semibold text-gray-700">{data.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hiw;
