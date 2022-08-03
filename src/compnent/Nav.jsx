import React, { Component } from "react";
import logo22 from "../images/logo22.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar " id="nav_back">
        <a href="#" className="logo ">
          <img
            src={logo22}
            className=" edit_logo"
            style={{ borderRadius: "50px", height: "45px" }}
          />
        </a>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <div className="menu">
          <ul className="list">
            <li>
              <a href="#home" className="link" style={{ color: "white" }}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="link" style={{ color: "white" }}>
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="link" style={{ color: "white" }}>
                About
              </a>
            </li>
            <li>
              <a href="#classes" className="link" style={{ color: "white" }}>
                Classes
              </a>
            </li>
            <li>
              <a href="#teacher" className="link" style={{ color: "white" }}>
                Activies
              </a>
            </li>
            <li>
              <a href="#contact" className="link" style={{ color: "white" }}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
