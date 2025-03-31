'use client'
import React from 'react'
import { Col, Container, Table } from 'react-bootstrap'

import Header from '@/components/includes/Header'
import Footer from '@/components/includes/Footer'


const page = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="hero-section">
        {/* Background Image */}
        <div className="banner-common">
          <img src="/images/logo/logo.png" alt="Cruise Ship" className="img-fluid" />
        </div>
      </div>

      <section>

        <Container className="my-5">
      <h1 className="text-center fw-bold">Our Service Fees</h1>
      <div className="table-responsive">
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr className="bg-light">
              <th className="fw-bold">Our Service Fees</th>
              <th className="fw-bold">May Apply To</th>
              <th className="fw-bold">Code</th>
              <th className="fw-bold">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Online Air Transaction Service Fees</strong>
                <br />
                On most airfares, a service fee up to $35 is charged on a per-passenger, per-ticket basis.
              </td>
              <td>U.S. Domestic and International</td>
              <td>Fees</td>
              <td className="fw-bold">$0.00 to $50.00</td>
            </tr>
          </tbody>
        </Table>
      </div>
    


          <Col md={12}>
            <div className="content-main">
              <div className="span-content">
                <h2>Terms And Conditions:</h2>
                <p>Service charges will roughly be converted to your local currency.</p>
                <p>Note that all service fees for transactions are non-refundable and subject to change without any advance notice.</p>
                <p>Additional Tax Service Charges as levied by the Government can also be subject to change. The final total amount as displayed on the payment page will be the only amount that will be charged.</p>
                <p>Service charges are levied on all types of passengers (adult, senior, child, infant, student, military).</p>
              </div>
              <div className="span-content">
                <h3>Exceptions to the above-stated service charges:</h3>
                <ul>
                  <li>Bookings of Business and First-class tickets: Service charges of a maximum of $150 per passenger will be incurred.</li>
                  <li>Vacation package online booking: Service charges of a maximum of $50 per passenger will be incurred.</li>
                  <li>Bookings of Multi-city and Open-jaw tickets: Service charges of a maximum of $100 per passenger will be incurred.</li>
                  <li>Multi-airline trips/cities with high fraud: Service fees up to $40 per passenger will be applied.</li>
                  <li>Value deals or fusion fares: Service fees up to $100 per passenger will be applied.</li>
                  <li>Unaccompanied Minor ticket reservations: Service fees up to $100 per passenger will be applied.</li>
                </ul>
              </div>
              <div className="span-content">
                <h3>Service Fees for Contact Center Service Bookings:</h3>
                <p>Including multi-stop and round-the-world itineraries, these may incur additional service fees compared to online bookings. These fees may range from $10 to $200 per passenger (up to $100 for senior citizens) and can include premium package benefits.</p>
              </div>
              <div className="span-content">
                <h3>NOTE:</h3>
                <p>Note that service charges can be adjusted without notice. The total final cost you are to be charged will be the same regardless of any adjustments in service charges. Please have a close look at the total final cost before making payment.</p>
              </div>
            </div>
          </Col>
        </Container>
      </section>
      
      <Footer />
    </React.Fragment>
  )
}

export default page
