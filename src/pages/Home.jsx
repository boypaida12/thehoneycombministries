/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import "../components/homeStyles.css";
import Programs from "../components/Programs";
import MiniGallery from "../components/MiniGallery";
import { delay, motion } from "framer-motion";

function Home({handleLinkScroll}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <Hero />
        <About />
        <Programs handleLinkScroll={handleLinkScroll}/>
        <MiniGallery />
      </motion.div>
    </>
  );
}

export default Home;
