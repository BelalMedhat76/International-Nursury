import { Component } from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";

class Teacher extends Component {
  state = {};

  render() {
    return (
      <div id="teacher">
        <div className="blog-head " id="blog  " style={{ color: "#00345E" }}>
          <h1>Latest News</h1>
          <p>
            Prodigy Nursery is the Professional Association for Childcare and
            Early Years.{" "}
          </p>
        </div>
        <Swiper
          id="teacher_swip"
          breakpoints={{
            1000: {
              width: 1300,
              slidesPerView: 3,
            },
            // when window width is >= 640px
            200: {
              width: 400,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          style={{ paddingBottom: "50px" }}
          slidesPerView={3}
          spaceBetween={35}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide id="slide1">
            <div className="slide1-content">
              <p style={{ color: "white" }}>PRODIGY</p>
              <h2> A B C D E F G H I J K L M N O P Q R S T U V X Y Z</h2>
              <button className="btn btn-outline-light">
                {" "}
                <a
                  style={{
                    textDecoration: "none",
                    color: "#0D0D0D",
                    fontWeight: "bold",
                  }}
                  href="#contact"
                >
                  {" "}
                  Call US
                </a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide2">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>PRODIGY</p>
              <h2>INTRNATIONAL NURSERY UNIFORM</h2>
              <button className="btn btn-outline-light">
                {" "}
                <a
                  style={{
                    textDecoration: "none",
                    color: "#0D0D0D",
                    fontWeight: "bold",
                  }}
                  href="#contact"
                >
                  {" "}
                  Call US
                </a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide3">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>PRODIGY</p>
              <h2>INTRNATIONAL NURSERY UNIFORM</h2>
              <button className="btn btn-outline-light">
                {" "}
                <a
                  style={{
                    textDecoration: "none",
                    color: "#0D0D0D",
                    fontWeight: "bold",
                  }}
                  href="#contact"
                >
                  {" "}
                  Call US
                </a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide4">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>PRODIGY</p>
              <h2>INTRNATIONAL NURSERY UNIFORM</h2>
              <button className="btn btn-outline-light">
                {" "}
                <a
                  style={{
                    textDecoration: "none",
                    color: "#0D0D0D",
                    fontWeight: "bold",
                  }}
                  href="#contact"
                >
                  {" "}
                  Call US
                </a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide5">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>PRODIGY</p>
              <h2> أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ف ق ك ل م ن ه و ي</h2>
              <button className="btn btn-outline-light">
                {" "}
                <a
                  style={{
                    textDecoration: "none",
                    color: "#0D0D0D",
                    fontWeight: "bold",
                  }}
                  href="#contact"
                >
                  {" "}
                  Call US
                </a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide6">
            {" "}
            <div className="slide1-content">
              <p style={{ color: "white" }}>PRODIGY</p>
              <h2>INTERNATIONAL NURSERY UNIFORM </h2>
              <button className="btn btn-outline-light">
                {" "}
                <a
                  style={{
                    textDecoration: "none",
                    color: "#0D0D0D",
                    fontWeight: "bold",
                  }}
                  href="#contact"
                >
                  {" "}
                  Call US
                </a>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default Teacher;
