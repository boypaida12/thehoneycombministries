/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import "../components/homeStyles.css";
import Founder from "../components/Founder";
import Programs from "../components/Programs";
import MiniGallery from "../components/MiniGallery";
import Footer from "../components/footer/Footer";
import { delay, motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <Hero />
        <About />
        <Programs />
        <MiniGallery />
        <Footer />
      </motion.div>
    </>
  );
}

export default Home;
