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
import privacy from "../../components/utils/privacy.json"
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
                    <h6 style={{ color: "#F16D1B" }}>About Our Polices</h6>
                </section>

                <section>

                    {/* Image & Description */}
                    <div className="row align-items-center my-5">
                        <div className="col-md-12" dangerouslySetInnerHTML={{ __html: privacy.html_privacy }} />

                    </div>
                </section>

                {/* Booking Section */}
                <section style={{ marginTop: "1rem" }}>
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






