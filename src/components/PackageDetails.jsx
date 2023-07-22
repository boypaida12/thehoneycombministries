/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import programTypes from "./programTypes";

function  PackageDetails() {
  const { id } = useParams();
  const programType = programTypes.find(
    (programType) => programType.id === parseInt(id)
  );

  if (!programType) {
    return <div>Program not found</div>;
  }
  
  return (
    <>
      <h1>Service Details -{programType.name}</h1>
      <p>{programType.description}</p>
    </>
  );
}

export default PackageDetails;
