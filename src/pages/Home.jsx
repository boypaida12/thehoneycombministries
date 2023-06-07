/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import "../components/homeStyles.css";
import Founder from "../components/Founder";
import Programs from "../components/Programs";
import MiniGallery from "../components/MiniGallery";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Founder />
      <Programs />
      <MiniGallery />
      <Footer/>
    </>
  );
}

export default Home;
