import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OceanCruise = () => {
  return (
    <Container className="my-5 hightlights py-5">
      <h2 className="text-center">Highlights of an Ocean Cruise</h2>

      <p>
        On a Viking ocean cruise, you will sail into the heart of your
        destination. From our prime, central berths in the world’s great
        cities such as Venice, London, Hong Kong, and Sydney, and in
        seldom-visited ports like Kotor, Montenegro, and Scotland’s Shetland
        Islands, enriching cultural discoveries are just a short walk from
        your ship. Further, you will spend more time in port, with overnight
        stays in virtually all ports of embarkation and disembarkation. Here
        is a small sample of where a Viking ocean cruise can take you:
      </p>

      <Row>
        <Col md={6}>
          <ul>
            <li>Majestic fjords from Norway to Chile</li>
            <li>Up the Thames River for easy access to historic London</li>
            <li>Into the mighty Amazon River</li>
            <li>New Zealand’s magnificent Milford and Doubtful Sounds</li>
          </ul>
        </Col>

        <Col md={6}>
          <ul>
            <li>The stunning Mediterranean coastline</li>
            <li>Asia’s vibrant port cities, from Tokyo to Singapore</li>
            <li>The breathtaking glaciers of Alaska</li>
            <li>The exotic ports of the Caribbean</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default OceanCruise;
