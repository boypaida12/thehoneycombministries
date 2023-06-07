/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card } from "react-bootstrap";
import ProgramsCard from "./ProgramsCard";
import BenefitsCard from "./BenefitsCard";


function MoreProgramsCard({ imgSrc, title, bgBody, benefitI, benefitII, benefitIII, benefitIV, benefitV }) {
  return (
    <>
      <Card style={{ width: "19.5rem", cursor: "pointer" }} className={`mx-auto overflow-hidden`}>
        <div className={`${bgBody}`}>
            <ProgramsCard imgSrc={imgSrc} title={title} />
        </div>
        <Card.Body>
          <Card.Text>
            <BenefitsCard benefitI={benefitI}/>
            <BenefitsCard benefitII={benefitII}/>
            <BenefitsCard benefitIII={benefitIII}/>
            <BenefitsCard benefitIV={benefitIV}/>
            <BenefitsCard benefitV={benefitV}/>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default MoreProgramsCard;
