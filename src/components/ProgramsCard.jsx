/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Image } from "react-bootstrap";

function ProgramsCard({ imgSrc, title, bgBody, textColor, mobileHeight, mobileWidth }) {
  return (
    <>
      <div className={`rounded ${mobileHeight} ${mobileWidth} programs d-flex flex-column justify-content-center mx-auto align-items-center ${bgBody}`} style={{height: "14rem", width: "14rem"}}>
        <Image src={imgSrc} width={80} />
        <p className={`mt-4 ${textColor} fw-semibold text-center`}>{title}</p>
      </div>
    </>
  );
}

export default ProgramsCard;
