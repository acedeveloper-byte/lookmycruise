"use client";
import React from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-white shadow-sm py-2">
        <Container>
          <Navbar.Brand href="/">
            <span className=""><img src="/images/logo/logo.png" className="img-responsive image-banner" alt="logo" /></span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarNav" />

          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto mx-5">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            </Nav>

            <div className="expert-contact">
              {/* <span className="expert-text">Speak to an expert now</span> */}
              <a href="tel: +1(855) 590-0764" className="expert-phone">
                +1(000) 000-0000
              </a>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header



