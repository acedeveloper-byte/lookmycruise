"use client"; // Ensure it's a Client Component

import React from "react";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";

// Dynamically import react-slick to prevent SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const cruiseData = [
    { src: "/images/caribbean.jpg", title: "Caribbean cruises" },
    { src: "/images/alaska.jpg", title: "Alaska cruises" },
    { src: "/images/mexico.jpg", title: "Mexico cruises" },
    { src: "/images/mediterranean.jpg", title: "Mediterranean cruise" },
];

const TopDestination = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <>
            <Container>
                <h1 className="my-4 destination-head ">Explore Top Destinations</h1>

                <Row>
                    <Col md={3}>
                        <div className="destination-cards">
                            <img src="/images/cruises/medettiran-cruise.png" />
                            <div className="text-center">
                                <h5 className="top-dest">Mediterranean cruise</h5>
                            </div>                    </div>
                    </Col>
                    <Col md={3}>
                        <div className="destination-cards">
                            <img src="/images/cruises/mexico-cruise.png" />
                            <div className="text-center">
                                <h5 className="top-dest">Mexico cruises</h5>
                            </div>                    </div>
                    </Col>
                    <Col md={3}>
                        <div className="destination-cards">
                            <img src="/images/cruises/alaska-cruise.png" />
                            <div className="text-center">
                                <h5 className="top-dest">Alaska cruises</h5>
                            </div>

                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="destination-cards">
                            <img src="/images/cruises/caribbean-cruise.png" />
                            <div className="text-center">
                                <h5 className="top-dest">Caribbean cruises</h5>
                            </div>                    </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default TopDestination;
