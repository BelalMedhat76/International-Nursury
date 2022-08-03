import { Component } from "react";
import Social from "./socialIcons";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Bus Services</a>
                  </li>
                  <li>
                    <a href="#">Music Training</a>
                  </li>
                  <li>
                    <a href="#">Best Teacher</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Classes</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>PRODIGY INTERNATIONAL NURSERY</h3>
                <p>
                  Prodigy Nursery , maintained nurseries and pre-schools tend to
                  cater for children aged between 2 and 6, offering early
                  education in the couple of years before they begin "big
                  school". Many of these settings are purpose-built and are
                  sometimes part of the larger school building
                </p>
              </div>
              <div className="col item social">
                <Social />
              </div>
            </div>
            <p
              className="copyright"
              style={{ color: "#F2BE22", fontSize: "20px", opacity: "1" }}
            >
              PRODIGY © 2022
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
