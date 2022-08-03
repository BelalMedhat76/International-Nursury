import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  faBus,
  faSkating,
  faMusic,
  faChalkboard,
  faPeopleGroup,
  faRotate,
  faBaseball,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import acting from "../images/acting.jpeg";
import cinema from "../images/cinema.jpeg";
// import required modules
import { Grid, Pagination } from "swiper";
class Activities extends Component {
  state = {};

  render() {
    return (
      <>
        <Swiper
          id="activities"
          breakpoints={{
            1000: {
              width: 1300,
              slidesPerView: 3,
            },
            300: {
              width: 314,
              slidesPerView: 1,
            },
            // when window width is >= 340px
            130: {
              width: 280,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            600: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide className="SwiperSlide">
            {" "}
            <div
              className="card offer_card"
              style={{
                width: "100%",
                padding: "5%",
                textAlign: "center",
                backgroundColor: " #00345E",
                color: "white",
              }}
            >
              <div className="active_img1"></div>
              <h3>Acting Stage</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            {" "}
            <div
              className="card offer_card"
              style={{
                width: "100%",
                padding: "5%",
                textAlign: "center",
                backgroundColor: " #00345E",
                color: "white",
              }}
            >
              <div className="active_img2"></div>
              <h3>3D Cinema</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            {" "}
            <div
              className="card offer_card"
              style={{
                width: "100%",
                padding: "5%",
                textAlign: "center",
                backgroundColor: " #00345E",
                color: "white",
              }}
            >
              <div className="active_img3"></div>
              <h3>Kids Fun City</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            {" "}
            <div
              className="card offer_card"
              style={{
                width: "100%",
                padding: "5%",
                textAlign: "center",
                backgroundColor: " #00345E",
                color: "white",
              }}
            >
              <div className="active_img4"></div>
              <h3>Music Training</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            {" "}
            <div
              className="card offer_card"
              style={{
                width: "100%",
                padding: "5%",
                textAlign: "center",
                backgroundColor: " #00345E",
                color: "white",
              }}
            >
              <div className="active_img5"></div>
              <h3>Sporting Training</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            {" "}
            <div
              className="card offer_card"
              style={{
                width: "100%",
                padding: "5%",
                textAlign: "center",
                backgroundColor: " #00345E",
                color: "white",
              }}
            >
              <div className="active_img6"></div>
              <h3>Healthy Food Court</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

export default Activities;
