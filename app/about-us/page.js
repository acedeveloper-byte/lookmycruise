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
                    <h1 className="fw-bold">Discover the Best Cruises with Us!</h1>
                    <p className="text-muted w-75 mx-auto">
                        Look My Cruise is your ideal cruise booking partner that is hell-bent on making your dream a reality. We offer unlimited deals on different cruises so you can sail within your budget. Contact us today to find the best discounts and plan your dream voyage at pocket-friendly prices.

                    </p>
                </section>

                {/* Image & Description */}
                <div className="row align-items-center my-5">
                    <div className="col-md-5">
                        <img src="/images/cruises/alaska-cruise.png" alt="Cruise" style={{
                            width: "55%",

                        }} className="img-fluid rounded shadow mb-3" />
                        <img src="/images/cruises/mexico-cruise.png" alt="Cruise" style={{
                            position: "absolute",
                            zIndex: "999999",
                            top: "107%",
                            left: "16%",
                            width: "22%",
                            height: "45%",
                        }} className="img-fluid rounded shadow ms-3" />
                    </div>
                    <div className="col-md-7">
                        <hr />
                        <p className="text-muted">
                            At Look My Cruise, we work with the sole motive to make your cruise planning effortless and enjoyable from start to finish. We believe in putting our customers first; that’s why we offer personalized recommendations and a wide selection of cruises tailored to your unique preferences.

                        </p>
                        <hr />
                    </div>
                </div>

                {/* Booking Section */}
                <section style={{ marginTop: "18rem" }}>
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
