import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Nav from "./Nav";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../App.css";
// import required modules
import { Navigation } from "swiper";
import back1 from "../images/back1.jpg";

export default function Head() {
  return (
    <>
      <Nav />
      <Swiper
        id="home"
        loop={true}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper swiper1">
          <div className="swip1-conent">
            <h2 className="swip_head">Welcome To Our Nursery</h2>
            <p className="swip_para1">Best Education For Your Child</p>
            <p className="swip_para1" style={{ marginBottom: "50px" }}>
              Enroll Your Children Now ..
            </p>

            <a className="head_btn" id="btn" href="#contact">
              Enroll Now
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper swiper2">
          {" "}
          <div className="swip1-conent">
            <h2 className="swip_head">Welcome To Our Nursery</h2>
            <p className="swip_para1">Best Education For Your Child</p>
            <p className="swip_para1" style={{ marginBottom: "50px" }}>
              Enroll Your Children Now ..
            </p>

            <a className="head_btn" id="btn" href="#contact">
              Enroll Now
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper swiper3">
          {" "}
          <div className="swip1-conent">
            <h2 className="swip_head">Welcome To Our Nursery</h2>
            <p className="swip_para1">Best Education For Your Child</p>
            <p className="swip_para1" style={{ marginBottom: "50px" }}>
              Enroll Your Children Now ..
            </p>

            <a className="head_btn" id="btn" href="#contact">
              Enroll Now
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
