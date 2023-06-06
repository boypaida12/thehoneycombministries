/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row } from "react-bootstrap";
import ProgramsCard from "./ProgramsCard";
import Resources from "../assets/resources.png";
import Partnership from "../assets/partnership.png";
import Counselling from "../assets/counselling.png";
import Worship from "../assets/worship.png";
import { Button } from "@mui/material";

function Programs() {
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Row className="gap-lg-2 mx-auto" style={{ width: "60rem" }}>
          <h2 className="display-4 text-center fw-semibold">
            Programs & Packages
          </h2>
          <ProgramsCard
            imgSrc={Resources}
            title={"Resources"}
            bgBody={"bg-body-tertiary"}
          />
          <ProgramsCard
            imgSrc={Partnership}
            title={"Partnership Enrolment"}
            bgBody={"bg-body-secondary"}
          />
          <ProgramsCard
            imgSrc={Counselling}
            title={"Counselling"}
            bgBody={"bg-body-tertiary"}
          />
          <ProgramsCard
            imgSrc={Worship}
            title={"Worship"}
            bgBody={"bg-body-secondary"}
          />
          <Button
            className="w-25 mx-auto mt-4 rounded-pill fw-bold"
            style={{ backgroundColor: "rgb(244, 164, 67)" }}
            variant="contained"
            size="large"
          >
            See More
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default Programs;
