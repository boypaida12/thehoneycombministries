/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "./Navigation";
import "./heroStyles.css";
import { Carousel } from "react-bootstrap";
import Carousel_II from "../assets/Carousel_II.jpg";
import Carousel_III from "../assets/Carousel_III.jpg"
import Logo from "../assets/Logo.png";

function Hero() {
  return (
    <>
      <div className="carousel-wrapper">
        <Navigation textColor={"text-yellow"}/>
        <Carousel controls={false}>
          <Carousel.Item>
            <div className="carousel-image_overlay">
              <img
                className="d-block w-100"
                src={Carousel_III}
                alt="First slide"
              />
            </div>
            <Carousel.Caption className="carousel-caption">
            <img src={Logo} className="logo" alt="Logo" width={250}/>
              <h3 className="display-3 fw-bold">WELCOME BELOVED</h3>
              <p className="fs-6 fw-semibold text-light w-100">
                <span>The decrees of the Lord are sweeter than</span> <span className="text-yellow">HONEY</span> from the
                <span className="text-yellow"> HONEYCOMB</span> <br/>(Psalm 19:9-10)
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image_overlay">
              <img
                className="d-block w-100"
                src={Carousel_II}
                alt="Second slide"
              />
            </div>
            <Carousel.Caption className="carousel-caption">
            <img src={Logo} className="logo" alt="Logo" width={250}/>
              <h3 className="display-3 fw-bold">2023 THEME</h3>
              <p className="fs-6 fw-semibold text-light w-100">
                Our Year of <span className="text-yellow">Total Surrender</span> to the
                <span className="text-yellow"> Kingdom’s Mandate</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Hero;
