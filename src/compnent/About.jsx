import { Component } from "react";
import about from "../images/about.jpg";

class About extends Component {
  state = {};
  render() {
    return (
      <div
        className="container-fluid"
        id="about"
        style={{
          color: "#FFA626",
          backgroundColor: "#00345E",
          marginTop: "100px",
        }}
      >
        <div className="row row-cols-1 row-cols-md-2  g-4 ">
          <div className="col  " style={{ padding: "7% " }}>
            <img src={about} className="about-img" alt="" />
          </div>
          <div className="col" style={{ padding: "15% 3% 10% 5%" }}>
            <div className="about-inner-section">
              <h1 style={{ color: "#FFA626" }}>About Us</h1>
              <p style={{ color: "white" }}>
                We Are Prodigy International Nursery and Our philosophy is
                learning through play as we offer a stimulating environment for
                children.
              </p>

              <div className="row row-cols-1 row-cols-md-2 g-4 ">
                <div className="col" style={{ padding: "20px" }}>
                  <h1
                    style={{
                      fontSize: "30px",
                      fontWeight: "600",
                      color: "#FFA626",
                    }}
                  >
                    Full Day Sessions
                  </h1>
                  <p style={{ color: "white" }}>
                    Day nurseries tend to provide childcare for children from
                    the ages of 2 to 6 years.
                  </p>
                </div>
                <div className="col" style={{ padding: "20px" }}>
                  {" "}
                  <h1
                    style={{
                      fontSize: "30px",
                      fontWeight: "600",
                      color: "#FFA626",
                    }}
                  >
                    Varied Classes
                  </h1>
                  <p style={{ color: "white" }}>
                    These are all signs that your child is ready to start
                    nursery and begin socialising with other kids
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
