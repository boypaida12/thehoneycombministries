/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "../components/Navigation";
import GalleryLayout from "../components/gallery/GalleryLayout";
import Footer from "../components/footer/Footer";

function Gallery() {
  return (
    <>
      <Navigation shadowLg={"shadow-lg"} bgYellow={"bg-yellow"}/>
      <GalleryLayout/>
      <Footer/>
    </>
  );
}

export default Gallery;
