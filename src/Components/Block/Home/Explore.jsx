import { motion } from "framer-motion";
import img1 from "../../../assets/newP.png";
import img2 from "../../../assets/calender.png";
import mock1 from "../../../assets/mock1.png";
import mock2 from "../../../assets/mock2.png";
import mock3 from "../../../assets/mock3.png";

const Explore = () => {
  const top = [
    {
      title: "Patient Management",
      desc: "Tracks patient records, appointments, and treatment history",
      image: img1,
      from: "from-purple-100",
      via: "via-blue-100",
      to: "to-blue-200",
    },
    {
      title: "Doctors & Staff Management",
      desc: "Schedule shifts, appointments, track hours, and manage credentials",
      image: img2,
      from: "from-pink-100",
      via: "via-purple-50",
      to: "to-pink-200",
    },
  ];

  const bottom = [
    {
      title: "Real-Time Analysis",
      desc: "Stay informed with timely alerts for appointments, prescriptions, and reports",
      image: mock3,
    },
    {
      title: "Smart Notification",
      desc: "Get actionable insights instantly with live data updates and trend analysis",
      image: mock2,
    },
    {
      title: "AI Integration",
      desc: "AI modules that help make smarter and faster decisions",
      image: mock1,
    },
  ];

  // Animation variants for the title
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for upper cards
  const upperCardVariants = {
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

  // Animation variants for lower cards
  const lowerCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    }),
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  // Image hover animation
  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <div className="max-w-[1400px] mx-auto px-8 mt-10">
      <motion.h1
        className="text-center font-bold text-5xl max-w-[500px] mx-auto py-5 max-[600px]:text-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
      >
        Explore features you need for smarter patient care
      </motion.h1>

      {/* Upper cards */}
      <div className="grid grid-cols-2  gap-6 max-w-[1100px] mx-auto mt-10 max-[670px]:grid-cols-1  ">
        {top.map((data, i) => (
          <motion.div
            key={i}
            className={`flex p-8 flex-col items-center rounded-3xl bg-gradient-to-tr ${data.from} ${data.via} ${data.to} shadow-lg`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={upperCardVariants}
            viewport={{ once: true }}
          >
            <motion.img
              src={data.image}
              alt={data.title}
              className="w-[500px] rounded-3xl max-[1158px]:w-[350px]"
              variants={imageVariants}
              initial="initial"
            />
            <h1 className="text-3xl font-bold mt-2 text-center ">
              {data.title}
            </h1>
            <p className="text-center text-sm text-gray-700">{data.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Lower cards */}
      <div className="grid grid-cols-3 gap-4 max-w-[1100px] mx-auto mt-5 max-[670px]:grid-cols-1 max-[670px]:place-items-center ">
        {bottom.map((bot, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center max-w-[400px] shadow-2xl rounded-3xl max-[1158px]:max-w-[400px]"
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={lowerCardVariants}
            viewport={{ once: true }}
          >
            <motion.img
              src={bot.image}
              alt={bot.title}
              className="w-[400px] rounded-t-3xl max-[1158px]:w-[400px]"
              variants={imageVariants}
              initial="initial"
            />
            <h1 className="px-4 text-2xl font-bold text-center max-[1158px]:text-2xl">
              {bot.title}
            </h1>
            <p className="px-6 pb-6 text-gray-600 text-center  max-[1158px]:text-">
              {bot.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
