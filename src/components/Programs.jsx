/* eslint-disable no-unused-vars */
import React from "react";
import ProgramsCard from "./ProgramsCard";
import Resources from "../assets/resources.png";
import Partnership from "../assets/partnership.png";
import Counselling from "../assets/counselling.png";
import Worship from "../assets/worship.png";
import { Button } from "@mui/material";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Programs() {
  return (
    <>
      <Container style={{maxWidth: "1080px", minHeight: "70vh"}} className="my-5 my-lg-0 d-flex flex-column justify-content-center">
        <div>
          <h2 className="display-4 text-center fw-semibold">
            Programs & Packages
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination]}
            className="mySwiper my-4"
          >
            <SwiperSlide>
              <ProgramsCard
                imgSrc={Resources}
                title={"Resources"}
                bgBody={"bg-body-tertiary"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProgramsCard
                imgSrc={Partnership}
                title={"Partnership Enrolment"}
                bgBody={"bg-body-secondary"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProgramsCard
                imgSrc={Counselling}
                title={"Counselling"}
                bgBody={"bg-body-tertiary"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProgramsCard
                imgSrc={Worship}
                title={"Worship"}
                bgBody={"bg-body-secondary"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProgramsCard
                imgSrc={Resources}
                title={"Resources"}
                bgBody={"bg-body-tertiary"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProgramsCard
                imgSrc={Partnership}
                title={"Partnership Enrolment"}
                bgBody={"bg-body-secondary"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProgramsCard
                imgSrc={Counselling}
                title={"Counselling"}
                bgBody={"bg-body-tertiary"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProgramsCard
                imgSrc={Worship}
                title={"Worship"}
                bgBody={"bg-body-secondary"}
              />
            </SwiperSlide>
          </Swiper>
          <div className="text-center">
            <Button
              className="mx-md-auto rounded-pill fw-bold"
              style={{ backgroundColor: "rgb(244, 164, 67)" }}
              variant="contained"
              size="large"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Programs;
