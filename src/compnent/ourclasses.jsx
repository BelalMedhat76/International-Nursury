import { Component } from "react";
import backk2 from "../images/backk2.jpg";
import a2 from "../images/a2.jpg";
import card10 from "../images/card10.jpg";
import backk3 from "../images/backk3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdjust,
  faBackspace,
  faBars,
  faClock,
  faGamepad,
  faShoppingCart,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
class Classes extends Component {
  render() {
    return (
      <>
        <div className="classes" id="classes">
          <h1 style={{ textAlign: "center", paddingTop: "100px" }}>
            Our Program
          </h1>
          <p
            style={{
              textAlign: "center",
              padding: "10px 2px 30px 2px",
              letterSpacing: "2px",
              fontSize: "25px",
            }}
          >
            Our preschool program has four Stages
          </p>
          <div className="line"></div>
          <div className="container-fluid" style={{ marginTop: "50px" }}>
            <div className="row">
              <div className="col-md-4 col-lg-3 col-sm-6">
                <div
                  className="card card_animation"
                  style={{
                    borderRadius: "25px",
                    margin: "15px",
                  }}
                >
                  <img src={backk3} alt="" className="card_image" />
                  <h4 style={{ margin: "30px 0 20px 0", padding: "4% 10%" }}>
                    Toddlers
                  </h4>
                  <div className=" card-classes-info">
                    <p>
                      A toddler is a young child who has only just learned to
                      walk or who still walks unsteadily with small, quick
                      steps.
                    </p>
                  </div>
                  <div className="line_card"></div>

                  <p style={{ padding: "0 10%" }}>
                    <FontAwesomeIcon
                      icon={faAdjust}
                      style={{ marginRight: "10px" }}
                    />
                    Age: 2-3 years
                  </p>

                  <button
                    style={{
                      borderRadius: "0 0 10px 10px",
                      padding: "10px",
                    }}
                    className="btn "
                    id="cardbtn1"
                  >
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="#contact"
                    >
                      {" "}
                      Call US
                    </a>
                  </button>
                </div>
              </div>

              {/* card 2 */}
              <div className="col-md-4 col-lg-3 col-sm-6">
                <div
                  className="card card_animation"
                  style={{
                    borderRadius: "25px",
                    margin: "15px",
                  }}
                >
                  <img src={backk2} alt="" className="card_image" />
                  <h4 style={{ margin: "30px 0 20px 0", padding: "4% 10%" }}>
                    Nursering
                  </h4>
                  <div className=" card-classes-info">
                    <p>
                      Nursery helps children to be confident in relating to
                      other adults and being in a learning environment.
                    </p>
                  </div>
                  <div className="line_card"></div>

                  <p style={{ padding: "0 10%" }}>
                    <FontAwesomeIcon
                      icon={faAdjust}
                      style={{ marginRight: "10px" }}
                    />
                    Age: 3-4 years
                  </p>

                  <button
                    style={{ borderRadius: "0 0 10px 10px", padding: "10px" }}
                    className="btn  "
                    id="cardbtn2"
                  >
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="#contact"
                    >
                      {" "}
                      Call US
                    </a>
                  </button>
                </div>
              </div>
              {/* card3 */}

              <div className="col-md-4 col-lg-3 col-sm-6">
                <div
                  className="card card_animation"
                  style={{
                    borderRadius: "25px",
                    margin: "15px",
                  }}
                >
                  <img src={card10} alt="" className="card_image" />
                  <h4 style={{ margin: "30px 0 20px 0", padding: "4% 10%" }}>
                    Foundation 1 [KG1]
                  </h4>
                  <div className=" card-classes-info">
                    <p>
                      Kindergarten Education 1: Education in KG 1 also seeks to
                      focus on developing social skills development.
                    </p>
                  </div>
                  <div className="line_card"></div>

                  <p style={{ padding: "0 10%" }}>
                    <FontAwesomeIcon
                      icon={faAdjust}
                      style={{ marginRight: "10px" }}
                    />
                    Age: 4-5 years
                  </p>

                  <button
                    style={{ borderRadius: "0 0 10px 10px", padding: "10px" }}
                    className="btn  "
                    id="cardbtn3"
                  >
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="#contact"
                    >
                      {" "}
                      Call US
                    </a>
                  </button>
                </div>
              </div>

              {/* card end */}

              {/* card4 start */}

              <div className="col-md-4 col-lg-3 col-sm-6">
                <div
                  className="card card_animation"
                  style={{
                    borderRadius: "25px",
                    margin: "15px",
                  }}
                >
                  <img src={a2} alt="" className="card_image" />
                  <h4 style={{ margin: "30px 0 20px 0", padding: "4% 10%" }}>
                    Foundation 2 [KG2]
                  </h4>
                  <div className="card-classes-info">
                    <p>
                      In this stage, the second kindergarten curriculum remains
                      complemented by focusing on oral language .
                    </p>
                  </div>
                  <div className="line_card"></div>

                  <p style={{ padding: "0 10%" }}>
                    <FontAwesomeIcon
                      icon={faAdjust}
                      style={{ marginRight: "10px" }}
                    />
                    Age: 5-6 years
                  </p>

                  <button
                    style={{ borderRadius: "0 0 10px 10px", padding: "10px" }}
                    className="btn  "
                    id="cardbtn3"
                  >
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="#contact"
                    >
                      {" "}
                      Call US
                    </a>
                  </button>
                </div>
              </div>

              {/* card4 end */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Classes;
