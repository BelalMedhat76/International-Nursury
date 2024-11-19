import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEnvelope, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <section className="container mt-5" id="contact">
          <div className="row">
            <div className="col-sm-12 text-center mb-4"></div>

            <div className="col-sm-12 mb-4 col-md-5">
              <div className="card border-primary rounded-0">
                <div className="card-header p-0">
                  <div
                    className="text-white text-center py-2"
                    style={{ backgroundColor: "#00345E" }}
                  >
                    <h3>
                      <i className="fa fa-envelope"></i> Contact Us:
                    </h3>
                    <p className="m-0">
                      We’ll write rarely, but only the best content.
                    </p>
                  </div>
                </div>
                <div className="card-body p-3">
                  <div className="form-group">
                    <label> Parent's Name </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="parent"
                        placeholder=" Parent's Name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Child's Name</label>
                    <div className="input-group mb-2 mb-sm-0">
                      <input
                        type="text"
                        className="form-control"
                        name="parent"
                        placeholder="Child's Name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Child's Age</label>
                    <div className="input-group mb-2 mb-sm-0">
                      <input
                        type="number"
                        min={1}
                        className="form-control"
                        name="parent"
                        placeholder="Child's Name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <div className="input-group mb-2 mb-sm-0">
                      <input
                        type="tel"
                        className="form-control"
                        name="parent"
                        placeholder="Number"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <div className="input-group mb-2 mb-sm-0">
                      <input type="text" className="form-control" name="mesg" />
                    </div>
                  </div>
                  <div className="text-center">
                    <input
                      style={{
                        marginTop: "50px",
                        color: "white",
                        backgroundColor: "#00345E",
                      }}
                      type="submit"
                      name="submit"
                      value="submit"
                      className="btn  btn-block rounded-0 py-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-7">
              <div className="mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.5869863025864!2d31.691510215148995!3d31.453035381391945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x23fae986a4e460c2!2zMzHCsDI3JzEwLjkiTiAzMcKwNDEnMzcuMyJF!5e0!3m2!1sen!2seg!4v1655575394532!5m2!1sen!2seg"
                  width="100%"
                  height="450"
                ></iframe>
              </div>

              <div className="row text-center">
                <div className="col-md-4">
                  <a className=" px-3 py-2 rounded text-white mb-2 d-inline-block">
                    <FontAwesomeIcon
                      icon={faMap}
                      style={{ color: "#00345E", fontSize: "30px" }}
                    />
                  </a>
                  <p>
                    {" "}
                    <a
                      className="contacticon"
                      href="https://www.google.com/maps/place/31%C2%B027'10.9%22N+31%C2%B041'37.3%22E/@31.4530354,31.4135475,10z/data=!4m5!3m4!1s0x0:0x23fae986a4e460c2!8m2!3d31.4530354!4d31.6936989?hl=en"
                    >
                      Your Address …..
                    </a>{" "}
                  </p>
                </div>
                <div className="col-md-4">
                  <a className=" px-3 py-2 rounded text-white mb-2 d-inline-block">
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ color: "#00345E", fontSize: "30px" }}
                    />
                  </a>
                  <p>
                    <a className="contacticon" href="tel:+2001226905792">
                      01226905792
                    </a>
                  </p>
                </div>
                <div className="col-md-4">
                  <a className=" px-3 py-2 rounded text-white mb-2 d-inline-block">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ color: "#00345E", fontSize: "30px" }}
                    />
                  </a>
                  <p>
                    <a
                      className="contacticon"
                      href="mailto:
                      mail@prodigy-nursery.com?subject = Feedback&body = Message"
                    >
                      Send an Email
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
