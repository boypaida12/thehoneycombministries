/* eslint-disable no-unused-vars */
import React from 'react'
import Navigation from './Navigation'
import "./heroStyles.css"
import { Carousel } from 'react-bootstrap'
import Carousel_I from "../assets/Carousel_I.jpg"
import Carousel_II from "../assets/Carousel_II.jpg"
import Carousel_III from "../assets/Carousel_III.jpg"
import Carousel_IV from "../assets/Carousel_IV.jpg"

function Hero() {
  return (
    <>
    <div className="carousel-wrapper">
      <Navigation />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel_I}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel_II}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel_III}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  )
}

export default Hero