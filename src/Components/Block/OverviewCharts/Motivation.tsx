import React, { useState, useEffect } from "react";

const Motivation = () => {
  const motivations = [
    { id: 1, text: "Healing is a calling, not a career." },
    { id: 2, text: "Behind every strong recovery is a stronger doctor." },
    { id: 3, text: "You treat more than symptoms — you restore hope." },
    { id: 4, text: "Every life you touch becomes part of your legacy." },
    { id: 5, text: "Medicine is the art of compassion guided by science." },
    { id: 6, text: "You don’t just save lives; you rewrite stories." },
    { id: 7, text: "A steady hand and a kind heart build trust." },
    { id: 8, text: "You turn fear into healing through skill and empathy." },
    { id: 9, text: "Each patient reminds you why you chose this path." },
    { id: 10, text: "The world runs better because you care deeply." },
    { id: 11, text: "Where others see illness, you see possibility." },
    { id: 12, text: "Your calm is stronger than their pain." },
    { id: 13, text: "Excellence is your habit, not your goal." },
    { id: 14, text: "You bring science to life — literally." },
    { id: 15, text: "You fight silent battles no one sees." },
    { id: 16, text: "Your patience heals as much as your prescription." },
    { id: 17, text: "You carry humanity in your hands daily." },
    { id: 18, text: "Skill saves, but empathy transforms." },
    { id: 19, text: "You make impossible days survivable for others." },
    { id: 20, text: "Medicine tests endurance, not just intelligence." },
    { id: 21, text: "You’re the calm in the storm of uncertainty." },
    { id: 22, text: "Great doctors heal both body and spirit." },
    { id: 23, text: "You are the hope someone prayed for." },
    { id: 24, text: "Your resilience inspires the next generation." },
    { id: 25, text: "Healing others is the highest form of service." },
    { id: 26, text: "Your work defines courage in quiet ways." },
    {
      id: 27,
      text: "Medicine is built on sleepless nights and steady hearts.",
    },
    { id: 28, text: "You remind the world that care is still powerful." },
    { id: 29, text: "Every patient you help is proof of your purpose." },
    { id: 30, text: "Doctors don’t chase fame — they chase healing." },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % motivations.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex justify-center mt-5">
      <p
        className={`text-center text-gray-700 dark:text-gray-100 text-lg font-semibold transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {motivations[index].text}
      </p>
    </div>
  );
};

export default Motivation;
