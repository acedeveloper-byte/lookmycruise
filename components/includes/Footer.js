"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { MdCall } from "react-icons/md";



import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="footer " style={{ marginTop: "5rem" }}>
        <Container>
          <Row className="my-5">
            {/* Left Section */}
            <Col md={4}>
              <img
                src="/images/logo/logo.png"
                className="img-fluid "
                alt="cruise brand"
                style={{ maxWidth: "61%" }}
              />

              <div className="text-muted small">
                <b className="fs-6"> Your Dream Cruise Trip is Just a Click Away!</b>
                <p>
                  Contact us to find the best deal, and start planning your next
                  cruise adventure as soon as possible!
                </p>
              </div>

              <h6 className="fw-bold text-dark">
                <a
                  href="tel:  +1(000) 000-0000"
                  className="text-decoration-none text-dark"
                >
                  <span>Contact Us:</span>   <MdCall size={20} />
                  +1(000) 000-0000
                </a>
              </h6>
            </Col>

            <Col md={2} sm={2}>
              <h5>Our Cruise</h5>
              {[
                "celebrity",
                "holland",
                "disney",
                "azamara",
                "norwegian",
                "royal-caribbean",
              ].map((item, index) => (
                <Col key={index} xs="auto" className="">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-decoration-none text-black text-footer"
                        style={{ fontSize: "12px" }}
                        href={`/${item}`}
                      >
                        {item.replace("-", "").toUpperCase()} CRUISE
                      </a>
                    </li>
                  </ul>
                </Col>
              ))}
            </Col>

            <Col md={2} sm={2}>
              <h5>Legal</h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-decoration-none text-dark footer-text"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className="text-decoration-none text-dark footer-text"
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Middle Sections */}
            <Col md={2} sm={2}>
              <h5>The Company</h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    href="/about-us"
                    className="text-decoration-none text-dark"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-decoration-none text-dark"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md={2}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    href="/service-fees"
                    className="text-decoration-none text-dark footer-text"
                  >
                    Our Service Fees
                  </Link>
                </li>
                <li>
                  <Link
                    href="/post-ticketing-fees"
                    className="text-decoration-none text-dark footer-text"
                  >
                    Post-Ticketing Fees
                  </Link>
                </li>
                <li>
                  <Link
                    href="taxes-fees"
                    className="text-decoration-none text-dark footer-text"
                  >
                    Taxes & Fees
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Social Media Icons */}
          <div className="social-icons">
            {/* <FaFacebook />
       <FaInstagram />
       <FaXTwitter />
       <FaPinterest />
       <FaLinkedin /> */}

            <hr />

            <div className="">
              <p><span className="fw-bold">Disclaimer:</span> Look My Cruise is your one-stop shop for planning your upcoming cruise vacation. We assist you in locating the ideal cruise that fits your tastes and price range. Please be aware that we are not affiliated with any cruise line; rather, we are an independent third-party agent. We match clients with their ideal cruises for an affordable, unforgettable getaway. Get in touch with us right now to simplify your trip preparation.</p>
            </div>

          </div>





          <hr />

          {/* Terms & Policy */}
          <p className="text-center text-muted small mt-3">
            All users agree to Look My Cruise Terms & Conditions and Privacy
            Policy. All users are subject to our Service Fees and Post Ticketing
            Fees.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;









