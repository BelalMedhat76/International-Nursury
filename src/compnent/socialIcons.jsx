import { Component } from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFacebook,
  faInstagram,
  faWhatsapp,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";

library.add(fas, faTwitter, faFacebook, faInstagram, faWhatsapp, faFontAwesome);

class Social extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="Social-icon" style={{ color: "white" }}>
          <a
            className="contacticon"
            href="https://www.facebook.com/ProdigyInternationall"
          >
            {" "}
            <FontAwesomeIcon icon={faFacebook} className="icon fly1" />
          </a>
          <a
            className="contacticon"
            href="https://www.instagram.com/ProodigyInternational/"
          >
            {" "}
            <FontAwesomeIcon icon={faInstagram} className="icon fly2" />
          </a>

          {/* <FontAwesomeIcon icon={faTwitter} className="icon fly3 " /> */}
          <a className="contacticon" href="https://wa.me/+2001069756421">
            {" "}
            <FontAwesomeIcon icon={faWhatsapp} className="icon " />
          </a>
        </div>
      </>
    );
  }
}

export default Social;
