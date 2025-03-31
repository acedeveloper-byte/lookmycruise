"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const destinations = [
    {
        title: "5 Night Western Caribbean Cruise",
        description: "Starting from",
        price: "40,000$",
        extra: "Taxes & fees included.*",
        image: "/images/caribbean-cruise.png",
    },

    {
        title: "4 Night Bahamas & Perfect Day Cruise",
        description: "Starting from",
        price: "36,000$",
        extra: "Taxes & fees included.*",
        image: "/images/bahamas-cruis.png",
    },

    {
        title: "3 Night Western Caribbean Day Cruise",
        description: "Starting from",
        price: "36,000$",
        extra: "Taxes & fees included.*",
        image: "/images/caribbean-cruise.png",
    }




];

const dests = [
    "Weekend Getaways",
    "Sail from San Diego",
    "Sail from LA",
    "Sail from Florida",
    "Sail from Europe",
    "Sail from Alaska",
];

const CruiseCards = () => {
    return (
        <section className="destinations ">
            <Container>
                <Row>
                    {dests.map((destination, index) => (
                        <Col key={index} className="col-md-2 " >
                            <p style={{ fontSize: '13px' }}>{destination}</p>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mb-4">
                    <h2 className="text-primary fw-bold">EXPLORE</h2>
                    <p className="text-muted">Today's Top Cruise Destinations</p>
                </div>
                <Row className="justify-content-center my-2">
                    {destinations.map((destination, index) => (
                        <Col md={4} key={index} className="d-flex justify-content-center">
                            <Card className="destination-card">
                                <Card.Img
                                    variant="top"
                                    src={destination.image}
                                    alt={destination.name}
                                    style={{
                                        borderRadius: "1rem !important",
                                    }}
                                />
                                <Card className="cards-text-list">
                                    <h5 className="destination-name">{destination.name}</h5>
                                    {destination.title && (
                                        <h6 className="destination-title">{destination.title}</h6>
                                    )}
                                    {destination.description && (
                                        <p className="destination-description">
                                            {destination.description}
                                        </p>
                                    )}
                                    {destination.price && (
                                        <h6 className="destination-price">{destination.price}</h6>
                                    )}
                                    {destination.extra && (
                                        <p className="destination-extra">{destination.extra}</p>
                                    )}
                                </Card>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default CruiseCards;

/* CSS (CruiseCards.css) */
/* Add this to a separate CSS file named CruiseCards.css */
