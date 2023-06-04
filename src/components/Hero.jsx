/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "./Navigation";
import "./heroStyles.css";
import { Carousel } from "react-bootstrap";
import Carousel_I from "../assets/Carousel_I.jpg";
import Carousel_II from "../assets/Carousel_II.jpg";
import Logo from "../assets/Logo.png";

function Hero() {
  return (
    <>
      <div className="carousel-wrapper">
        <Navigation />
        <Carousel controls={false}>
          <Carousel.Item>
            <div className="carousel-image_overlay">
              <img
                className="d-block w-100"
                src={Carousel_I}
                alt="First slide"
              />
            </div>
            <Carousel.Caption className="carousel-caption">
            <img src={Logo} alt="Logo" width={250}/>
              <h3 className="display-3 fw-bold" style={{color: "rgba(246, 201, 80"}}>WELCOME BELOVED</h3>
              <p className="fs-4 fw-bold fst-italic w-100">
                <span>The decrees of the Lord are sweeter than</span> <span style={{color: "rgba(246, 201, 80"}}>HONEY</span> from the
                <span style={{color: "rgba(246, 201, 80"}}> HONEYCOMB</span> <br/>(Psalm 19:9-10)
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
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Hero;
