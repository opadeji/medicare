import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import { LuUserPlus, LuCreditCard, LuRocket, LuCompass } from "react-icons/lu";
const Steps = () => {
  const steps = [
    {
      icon: <LuUserPlus size={90} />,
      title: "STEP 1",
      desc: "Create your MediCare account in less than 5 minutes.",
      bg1: "bg-blue-300",
      bg2: "bg-blue-100",
      color: "text-blue-900",
    },
    {
      icon: <LuCreditCard size={90} />,
      title: "STEP 2",
      desc: "Pick a prefered plan suitable for your workplace.",
      bg1: "bg-purple-300",
      bg2: "bg-purple-100",
      color: "text-purple-900",
    },
    {
      icon: <LuRocket size={90} />,
      title: "STEP 3",
      desc: "Onboard your team,adding them to the platform.",
      bg1: "bg-red-300",
      bg2: "bg-red-100",
      color: "text-red-900",
    },
    {
      icon: <LuCompass size={90} />,
      title: "STEP 4",
      desc: "Explore ,diagnose,and take care of patient efficiently.",
      bg1: "bg-orange-300",
      bg2: "bg-orange-100",
      color: "text-orange-900",
    },
  ];
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const Card = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };
  return (
    <div className="bg-indigo-50 py-16 mt-10 px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
        className="max-w-[1200px] mx-auto flex justify-between mb-10 max-[950px]:flex-col max-[950px]:items-center max-[950px]:gap-5 "
      >
        <h1 className="text-5xl max-[950px]:text-center ">
          Four simple steps to get started
        </h1>
        <Link
          to={"/pricing"}
          className="border-black border-2 rounded-full px-3 py-3 hover:tracking-widest hover:scale-105 transition-all  ease-in-out max-[950px]:w-fit"
        >
          <button>See plans and pricing </button>
        </Link>
      </motion.div>
      <div className="grid grid-cols-4 gap-3 max-w-[1200px]  mx-auto max-[1118px]:grid-cols-2 max-[570px]:grid-cols-1  ">
        {steps.map((data, i) => (
          <motion.div
            key={i}
            className=" border-8 border-white rounded-4xl"
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={Card}
            viewport={{ once: true }}
          >
            <div
              className={`rounded-t-3xl shadow-2xl place-items-center ${data.bg1} ${data.color} p-16`}
            >
              {data.icon}
            </div>
            <div className={` ${data.bg2} rounded-b-3xl  `}>
              <h1 className="pt-4 px-4 font-bold text-sm  max-[570px]:text-center">
                {data.title}
              </h1>
              <p className="pt-2 px-4 w-[250px] pb-5 max-[570px]:mx-auto   max-[570px]:text-center ">
                {data.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
