import React from "react";
import LoveCards from "../components/LoveCards";
import Skills from "../components/Skills";
import About from "../components/About";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <LoveCards />
      <About />
      <Skills />
    </>
  );
};

export default Home;
