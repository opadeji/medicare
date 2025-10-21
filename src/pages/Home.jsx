import React from "react";
import Hero from "../Components/Block/Home/Hero";
import Hiw from "../Components/Block/Home/Hiw";
import Explore from "../Components/Block/Home/Explore";
import Wtu from "../Components/Block/Home/Wtu";
import Steps from "../Components/Block/Home/steps";

const Home = () => {
  return (
    <div>
      <Hero />
      <Hiw />
      <Steps />
      <Explore />
      <Wtu />
    </div>
  );
};

export default Home;
