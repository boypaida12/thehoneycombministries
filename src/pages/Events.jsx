/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";
import Founder from "../components/Founder";

function Events() {
  return (
    <>
      <Navigation shadowLg={"shadow-lg"} bgBody={"bg-yellow"} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container className="my-5">
          <Founder />
        </Container>
      </motion.div>
      <Footer />
    </>
  );
}

export default Events;
