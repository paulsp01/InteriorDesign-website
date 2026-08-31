import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Works from "../components/Works";
import About from "../components/About";
import Project from "../components/Project";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Expertise />
      <Works />
      <About
        num="99"
        para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. A pariatur earum dolor id eos suscipit ut, aspernatur labore non reiciendis."
        title="--Eleance Vance, Private Client"
        bgColor="bg-gray-200"
        textColor="text-black"
      />
      <Project />
    </>
  );
};

export default Home;
