/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ProgramsCard from "./ProgramsCard";
import Resources from "../assets/resources.png";
import Partnership from "../assets/partnership.png";
import Counselling from "../assets/counselling.png";
import Worship from "../assets/worship.png";
import Mentorship from "../assets/mentorship.png";
import Ministration from "../assets/ministration.png";
import Humanitarian from "../assets/humanitarian.png";
import { Box, Button, Modal, duration } from "@mui/material";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MoreProgramsCard from "./MoreProgramsCard";
import { motion } from "framer-motion";
import benefits from "./benefits";

function Programs({handleLinkScroll}) {
  return (
    <>
      <Container className="mb-5" id="packages">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="display-4 text-center mt-5 pt-5 fw-semibold"
        >
          Programs & Packages
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <Box>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              grabCursor={true}
              autoplay={{
                delay: 6500,
                disableOnInteraction: true,
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
                  spaceBetween: 10,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper my-4"
            >
              {benefits.map((benefit)=> (
                <SwiperSlide key={benefit.id}>
                <MoreProgramsCard
                  imgSrc={benefit.imgSrc}
                  title={benefit.title}
                  benefitsData={benefit.benefits}
                  id={benefit.title}
                  handleLinkScroll={handleLinkScroll}
                />
              </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}

export default Programs;
