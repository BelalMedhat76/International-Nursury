import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
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
import Activities from "./Activities";
class Cardinfo extends Component {
  state = {};
  render() {
    return (
      <div id="services">
        <h1
          style={{
            textAlign: "center",
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          {" "}
          What We Offer
        </h1>
        <div className="line"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4  col-sm-12 col-lg-3">
              <div
                className="card offer_card"
                style={{
                  width: "250px",
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: " #00345E",
                  color: "white",
                }}
              >
                <FontAwesomeIcon icon={faBus} className="card_icon" />
                <h3>Bus Services</h3>
              </div>
            </div>

            <div className="col-md-4  col-sm-12 col-lg-3">
              <div
                className="card offer_card"
                style={{
                  width: "250px",
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: " #00345E",
                  color: "white",
                }}
              >
                <FontAwesomeIcon icon={faLightbulb} className="card_icon" />
                <h3>Knowledge Classes</h3>
              </div>
            </div>

            <div className="col-md-4  col-sm-12 col-lg-3">
              <div
                className="card offer_card"
                style={{
                  width: "250px",
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: " #00345E",
                  color: "white",
                }}
              >
                <FontAwesomeIcon icon={faRotate} className="card_icon" />
                <h3> Fully Day Sessions</h3>
              </div>
            </div>
            <div className="col-md-4  col-sm-12 col-lg-3">
              <div
                className="card offer_card"
                style={{
                  width: "250px",
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: " #00345E",
                  color: "white",
                }}
              >
                <FontAwesomeIcon icon={faPeopleGroup} className="card_icon" />
                <h3>Quilified Teachers</h3>
              </div>
            </div>
          </div>
        </div>
        <Activities />
      </div>
    );
  }
}

export default Cardinfo;
