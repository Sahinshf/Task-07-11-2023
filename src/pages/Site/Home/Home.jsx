import React from "react";
import HomeComponent from "../../../components/Home/Home";
import About from "../../../components/About/About";
import Service from "../../../components/Service/Service";
import Roadmap from "../../../components/Roadmap/Roadmap";
import Team from "../../../components/Team/Team";

const Home = () => {
  return (
    <div>
      <HomeComponent />
      <About />
      <Service />
      <Roadmap />
      <Team />
    </div>
  );
};

export default Home;
