/* eslint-disable no-unused-vars */
import React from "react";
import ProgramsCard from "./ProgramsCard";
import Resources from "../assets/resources.png";
import Partnership from "../assets/partnership.png";
import Counselling from "../assets/counselling.png";
import Worship from "../assets/worship.png";
import Mentorship from "../assets/mentorship.png";
import Ministration from "../assets/ministration.png";
import Humanitarian from "../assets/humanitarian.png"
import { Box, Button, Modal } from "@mui/material";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MoreProgramsCard from "./MoreProgramsCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95vw",
  height: "100%",
  bgcolor: "background.paper",
  backdropFilter: "blur(20px)",
  boxShadow: 24,
  px: 4,
  overflowY: 'auto'
};

function Programs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
        <Container
          style={{ maxWidth: "1080px", minHeight: "100vh" }}
          className="my-5 my-lg-0 d-flex flex-column justify-content-center"
        >
          <div>
            <motion.h2 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 2}} className="display-4 text-center fw-semibold">
              Programs & Packages
            </motion.h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
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
              modules={[Autoplay, Pagination]}
              className="mySwiper my-4"
            >
              <SwiperSlide>
                <ProgramsCard
                  imgSrc={Resources}
                  title={"Resources"}
                  bgBody={"bg-body-tertiary"}
                  mobileHeight={"h-sc"}
                  mobileWidth={"w-sc"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProgramsCard
                  imgSrc={Partnership}
                  title={"Partnership Enrolment"}
                  bgBody={"bg-body-secondary"}
                  mobileHeight={"h-sc"}
                  mobileWidth={"w-sc"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProgramsCard
                  imgSrc={Counselling}
                  title={"Counselling"}
                  bgBody={"bg-body-tertiary"}
                  mobileHeight={"h-sc"}
                  mobileWidth={"w-sc"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProgramsCard
                  imgSrc={Worship}
                  title={"Worship"}
                  bgBody={"bg-body-secondary"}
                  mobileHeight={"h-sc"}
                  mobileWidth={"w-sc"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProgramsCard
                  imgSrc={Mentorship}
                  title={"Mentorship"}
                  bgBody={"bg-body-tertiary"}
                  mobileHeight={"h-sc"}
                  mobileWidth={"w-sc"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProgramsCard
                  imgSrc={Ministration}
                  title={"Ministration & Events"}
                  bgBody={"bg-body-secondary"}
                  mobileHeight={"h-sc"}
                  mobileWidth={"w-sc"}
                />
              </SwiperSlide>
            </Swiper>
            <div className="text-center">
              <Button
                className="mx-md-auto rounded-pill fw-bold"
                style={{ backgroundColor: "rgba(228, 141, 35, 0.9)" }}
                variant="contained"
                size="large"
                onClick={handleOpen}
              >
                Learn More
              </Button>
            </div>
          </div>
        </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-md-flex">
            <div>
              <h1 className="display-5 mt-2">
                <span className="text-yellow fw-semibold">Shalom</span> Beloved
              </h1>
              <p className="w-75">
                Enlisted below are some privileges our partners and patrons
                stand to enjoy
              </p>
            </div>
            <Button
              className="text-white align-self-center px-5 rounded-pill d-none d-md-block ms-auto fw-bold"
              style={{ backgroundColor: "#e48d23e6" }}
              variant="contained"
              onClick={handleClose}
            >
              Back
            </Button>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1300: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper my-4"
          >
            <SwiperSlide>
              <MoreProgramsCard
                imgSrc={Resources}
                title={"Resources"}
                bgBody={"bg-body-tertiary"}
                benefitI={"Bible Study Manuals"}
                benefitII={"Christian Based Scripts for Sketches"}
                benefitIII={"Devotionals"}
                benefitIV={"Sermons"}
                benefitV={"Honey Drops (Short encouraging videos)"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MoreProgramsCard
                imgSrc={Partnership}
                title={"Partnership Enrolment"}
                bgBody={"bg-body-secondary"}
                benefitI={"Access to Ministry's resources"}
                benefitII={"Discounted souvenirs"}
                benefitIII={"Access to Ministry's resources"}
                benefitIV={"Exclusive partnership meetings"}
                benefitV={"Ministration opportunities during programmes"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MoreProgramsCard
                imgSrc={Counselling}
                title={"Counselling"}
                bgBody={"bg-body-tertiary"}
                benefitI={"Topical Prayer Lines"}
                benefitII={"Situational Based Recommended Christian Literature"}
                benefitIII={"Academic Support Unit"}
                benefitIV={"Consultations on Spiritual Matters"}
                benefitV={"Sex and Relationship Based Consultations"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MoreProgramsCard
                imgSrc={Worship}
                title={"Worship"}
                bgBody={"bg-body-secondary"}
                benefitI={"Worship Services (Sundays and Weekdays)"}
                benefitII={"Inter-schools Thanksgiving Services"}
                benefitIII={"Prayer-thorn Rallies"}
                benefitIV={"Inter/Intra School’s Quiz Ministrations"}
                benefitV={"Christian Literature Ministrations"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MoreProgramsCard
                imgSrc={Mentorship}
                title={"Mentorship"}
                bgBody={"bg-body-tertiary"}
                benefitI={"The Honeycomb Experience"}
                benefitII={
                  "Prayer meetings for intercession and spiritual empowerment"
                }
                benefitIII={"Empowerment Camps"}
                benefitIV={"Empowerment Retreats"}
                benefitV={"Platform for training youth leaders"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MoreProgramsCard
                imgSrc={Ministration}
                title={"Ministration & Events"}
                bgBody={"bg-body-secondary"}
                benefitI={"Ministrations at special events"}
                benefitII={"School counseling and events"}
                benefitIII={"Ministrations opportunities for mentees"}
                benefitIV={"Christian Entertainment Events"}
                benefitV={"Bible Study Workshops"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <MoreProgramsCard
                imgSrc={Humanitarian}
                title={"Humanitarian Endeavours"}
                bgBody={"bg-body-tertiary"}
                benefitI={
                  "Academic support facilities (Ceccy’s Home Tutoring Services)"
                }
                benefitII={"Adult Literacy Programmes"}
                benefitIII={
                  "Donations to support orphans, single mothers, less privileged etc."
                }
                benefitIV={
                  "Partner with other humanitarian organisations to provide relief to the less privileged"
                }
              />
            </SwiperSlide>
          </Swiper>
          <Link
              className="align-self-center d-md-none d-block fw-bold text-yellow"
              onClick={handleClose}
            >
              Back
            </Link>
        </Box>
      </Modal>
    </>
  );
}

export default Programs;
