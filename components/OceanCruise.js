import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OceanCruise = (html) => {
  return (
    <Container className="my-5 hightlights" >
      <Col>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Col>

    </Container>
  );
};

export default OceanCruise;
