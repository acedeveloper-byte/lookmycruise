// import React from 'react'

// const page = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default page

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/includes/Header";
import Footer from "@/components/includes/Footer";

const page = () => {
    return (
        <>
            <Header />
            <div className="banner-common">
                <img src="/images/logo/logo.png" />
            </div>
            <div className="container mt-5">

                {/* Main Section */}
                <section className="text-center my-5">
                    <h6 style={{ color: "#F16D1B" }}>About Company Journeys</h6>
                    <h1 className="fw-bold">Introducing a new vision for luxury ocean travel</h1>
                    <p className="text-muted w-75 mx-auto">
                        Explora Journeys is redefining ocean travel for a new generation of discerning travelers through
                        a synergy of the chicest ships and the most immersive itineraries that allow guests to discover
                        further, travel deeper and linger a little longer at each destination.
                    </p>
                </section>

                {/* Image & Description */}
                <div className="row align-items-center my-5">
                    <div className="col-md-5">
                        <div>

                            <h1 style={{ color: "#F16D1B", fontWeight: "300" }} >
                                Contact us
                            </h1>
                            <p>
                                For all your flight booking needs, contact us today. Our friendly team is ready to assist you with any inquiries or reservations. Visit our website and reach out to us for a seamless travel experience. Fly with us!
                            </p>
                        </div>

                        <div>
                            <h1 style={{ color: "#F16D1B", fontWeight: "300" }}>
                                Administrative Office
                            </h1>
                            <p>Address:</p>
                            <p>Email Address:</p>
                            <p>Reservations</p>
                            <p>Support</p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div>
                            <h1 style={{ color: "#F16D1B", fontWeight: "300" }}>
                                Get in Touch with Us!
                            </h1>
                            <p>In case of any questions/queries or last minute requests</p>
                            <form className="form-contact">
                                <input className="form-contact-input" placeholder="Enter Name" value="Enter Name" />
                                <input value="Enter Email" className="form-contact-input" placeholder="Enter Email" />
                                <input value="Enter Contact Number" className="form-contact-input" placeholder="Enter Contact Number" />
                                <input value="Enter Query" className="form-contact-input" placeholder="Enter Query" />
                                <input type="button" value="Submit" className="form-contact-input-button" placeholder="Enter Name" />
                            </form>                        </div>
                    </div>
                </div>

                {/* Booking Section */}
                <section style={{ marginTop: "5rem" }}>
                    <div className="text-center py-4 bg-light rounded shadow">
                        <h5 className="fw-bold">MAKE EASY BOOKINGS HAPPEN NOW</h5>
                        <button className="btn btn-success px-4 py-2 my-2 fw-bold">+1-777-579-728</button>
                        <p className="text-muted">Our travel experts are here to make each trip of yours more memorable and exciting</p>
                    </div>
                </section>

            </div>
            <Footer />
        </>

    );
};

export default page;
