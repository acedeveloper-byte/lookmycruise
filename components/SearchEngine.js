"use client";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "../app/globals.css";

const SearchEngine = () => {
  return (
    <div>

      <div className="hero-section">
        <div className="hero-image">
          <img
            src="/images/bg.png"
            alt="Cruise Ship"
            className="img-fluid bg-home-poster"
            style={{
              width: "100% !important",
              height: "25rem !important",
              objectFit: "cover !important",
            }}
          />


        </div>

        {/* Search Bar */}
        <Container className="search-container mob-search search-from" fluid>

          <Row className="align-items-center form-search">
            <Col md={3}>
              <Form.Group>
                <Form.Control type="text" placeholder="Enter destination" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Control type="date" placeholder="hii" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col md={3} className="d-flex align-items-end ">
              <Button
                className="btn-search btn btn-sm search-button"

              >
                Search and Book
              </Button>
            </Col>
            <Col md={3}>
              <img src="" />
              <img src="" />
              <img src="" />
              <img src="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SearchEngine;
