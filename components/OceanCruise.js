import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OceanCruise = () => {
  return (
    <Container className="my-5 hightlights" >
      <h2 className="text-center">Chart Your Course with Look My Cruise!</h2>

      <p>
        Want to turn your cruise dream into reality? Contact Look My Cruise now,
        and let us be your perfect booking partner for your next voyage. We
        offer personalized cruise trips so each guest can have the journey of
        their lifetime. Whether you are looking forward to a luxurious escape or
        a budget-friendly voyage, we will help you find the ideal cruise for
        you.
      </p>

      <Row>
        <Col md={6}>
          <ul>
            <li>Exclusive Deals and Discounts</li>
            <li>Top-Rated Ships</li>
            <li>Wide Selection of Destinations
            </li>
            <li>Incredible Onboard Amenities</li>
            <li>24*7 Customer Support</li>
            <li>Custom Shore Excursions
            </li>
          </ul>
        </Col>

       
      </Row>
    </Container>
  );
};

export default OceanCruise;
