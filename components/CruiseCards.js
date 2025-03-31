'use client'
import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

const destinations = [
    {
        name: "BAHAMAS",
        title: "5 Night Western Caribbean Cruise",
        description: "Starting from",
        price: "40,000/person",
        extra: "Taxes & fees included.*",
        image: "/images/caribbean-cruise.png",
    },
    {
        name: "EUROPE",
        image: "/images/europe.png",
    },
    {
        name: "CARIBBEAN",
        image: "/images/caribbean.png",
    },
    {
        name: "ALASKA",
        image: "/images/alaska.png",
    },
    {
        name: "MEXICO",
        image: "/images/maxico.png",
    },
    {
        name: "CANADA",
        image: "/images/canada.png",
    },
];

const CruiseCards = () => {
    return (
        <section className="destinations">
            <Container>
                <div className="text-center mb-4">
                    <h2 className="text-primary fw-bold">EXPLORE</h2>
                    <p className="text-muted">Today's Top Cruise Destinations</p>
                </div>
                <Row className="justify-content-center">
                    {destinations.map((destination, index) => (
                        <Col md={4} key={index} className="d-flex justify-content-center">
                            <Card className="destination-card">
                                <Card.Img variant="top" src={destination.image} alt={destination.name} />
                                <Card.Body>
                                    <h5 className="destination-name">{destination.name}</h5>
                                    {destination.title && <h6 className="destination-title">{destination.title}</h6>}
                                    {destination.description && <p className="destination-description">{destination.description}</p>}
                                    {destination.price && <h6 className="destination-price">{destination.price}</h6>}
                                    {destination.extra && <p className="destination-extra">{destination.extra}</p>}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default CruiseCards;

/* CSS (CruiseCards.css) */
/* Add this to a separate CSS file named CruiseCards.css */


