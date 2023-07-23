/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "../components/Navigation";
import GalleryLayout from "../components/gallery/GalleryLayout";

function Gallery() {
  return (
    <>
      <Navigation shadowLg={"shadow-lg"} bgBody={"bg-yellow"}/>
      <GalleryLayout/>
    </>
  );
}

export default Gallery;
