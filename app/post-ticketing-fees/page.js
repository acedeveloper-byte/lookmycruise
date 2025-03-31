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
          <h1 className="text-center fw-bold">Post-Ticketing Service Fees</h1>
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr className="bg-light">
                  <th>Applies To</th>
                  <th>For</th>
                  <th>Cancellation & Refund (Within 4 hrs)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Agent Assisted Cancellation(1)</td>
                  <td>Cancellation & Refund requested within 4 hours of booking</td>
                  <td>Flat $25</td>
                </tr>
              </tbody>
            </Table>

            <Table striped bordered hover>
              <thead>
                <tr className="bg-light">
                  <th>Applies To</th>
                  <th>For</th>
                  <th>Cancellation & Refund (Within 4-24 hrs)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Agent Assisted Cancellation(1)</td>
                  <td>Cancellation & Refund requested within 4-24 hours</td>
                  <td>
                    <ul>
                      <li>Ticket Cost $300: $25</li>
                      <li>Ticket Cost $301 - $400: $35</li>
                      <li>Ticket Cost $401 - $500: $50</li>
                      <li>Ticket Cost $501 - $750: $75</li>
                      <li>Ticket Cost above $750: 10% of Gross Ticket Amount</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table striped bordered hover>
              <thead>
                <tr className="bg-light">
                  <th>Applies To</th>
                  <th>For</th>
                  <th>Cancellation (beyond 24 hrs)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Agent Assisted Cancellation w/Future Credit(1)</td>
                  <td>Cancellation & Refunds (beyond 24 hrs)</td>
                  <td>
                    <strong>Air - Economy</strong>: Domestic $40 | International $40 <br />
                    <strong>Air - Business/First</strong>: Domestic $75 | International $100
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table striped bordered hover>
              <thead>
                <tr className="bg-light">
                  <th>Applies To</th>
                  <th>For</th>
                  <th>Refund (beyond 24 hrs)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Agent Assisted Cancellation w/Refund(2)</td>
                  <td>Cancellation & Refunds (beyond 24 hrs)</td>
                  <td>
                    <strong>Air - Economy</strong>: Domestic $100 | International $200 <br />
                    <strong>Air - Business/First</strong>: Domestic $200 | International $200
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className="mt-5">Changes to Existing Tickets (Exchange)</h2>
          <Table striped bordered hover>
            <thead>
              <tr className="bg-light">
                <th>Agent Assisted Changes</th>
                <th>Air - Economy</th>
                <th>Air - Business/First</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Within 10 days of new travel date(1)</td>
                <td>$125 Domestic | $200 International</td>
                <td>$200 Domestic | $200 International</td>
              </tr>
              <tr>
                <td>Beyond 10 days of new travel date(2)</td>
                <td>$75 Domestic | $175 International</td>
                <td>$175 Domestic | $175 International</td>
              </tr>
            </tbody>
          </Table>

          <h2 className="mt-5">Special Services</h2>
          <Table striped bordered hover>
            <thead>
              <tr className="bg-light">
                <th>Agent Assisted Waivers</th>
                <th>Air - Economy</th>
                <th>Air - Business/First</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Special Assistance Fees</td>
                <td>$50 Domestic | $75 International</td>
                <td>$100 Domestic | $150 International</td>
              </tr>
            </tbody>
          </Table>
        </Container>

        <Container className="my-5">
          <h3 className="text-center fw-bold">Post-Ticketing Service Fees</h3>
          <p className="text-center">Because of our Compassion Exception Policy (CEP), which applies to the Visually Impaired, Military, and Bereaved, we also provide Exclusive Discounts.</p>

          <Col md={12}>
            <div className="content-main">
              <div className="span-content">
                <h2>Terms and Conditions:</h2>
                <p>The fare rules, policies, and procedures of the relevant airline apply to all refunds or future credits on airline fares. For every alteration, refund, cancellation, and future credit, there can be a service fee per passenger and per ticket.</p>
                <p>Our post-ticketing service fees and transaction (booking) costs are non-refundable and liable to change at any time without warning. These costs are on top of any fees and charges imposed by the airline and/or other suppliers. <a href="/">Click here</a> to learn more about our service fees.</p>
                <p>Any taxes or fees levied by the government could change at any time. You will only be billed for the final total cost that our representative quotes or displays.</p>
              </div>
              <div className="span-content">
                <h3>Exceptions to the above-stated service charges:</h3>
                <ul>
                  <li>The fare policies of our travel suppliers allow for refunds and cancellations.</li>
                  <li>The refund request has been approved.</li>
                  <li>The reservation is not a "no show" (the majority of "no show" reservations are not eligible for any waiver from suppliers for processing refunds).</li>
                  <li>We can perform the requested cancellation and refund if we can obtain exemptions from suppliers.</li>
                </ul>
                <p><a href="/">Go here</a> to learn more about our refund and cancellation policies.</p>
              </div>
              <div className="span-content">
                <h3>Service Fees for Contact Center Service Bookings:</h3>
                <p>Compared to online reservations, contact center service bookings (including multi-stop and round-the-world itineraries) may have higher service fees. These prices can include premium package advantages and can range from $10 to $200 per passenger (up to $100 for senior citizens).</p>
              </div>
              <div className="span-content">
                <h3>Special Services:</h3>
                <p>Special services are only offered upon request and are governed by the review and approval process of each airline as well as the related regulations, procedures, and fare rules. Once the service or services are rendered, any applicable special service fees will be billed; however, if the airline rejects the request, these payments can be reimbursed.</p>
                <ul>
                  <li><strong>Misspelled Name:</strong> The name on their passport or other official document does not match the name on their airline ticket.</li>
                  <li><strong>Visa/Passport:</strong> In order to process a request, a letter of refusal may be required.</li>
                  <li><strong>Baggage:</strong> Please save all luggage tags and receipts.</li>
                  <li><strong>No-Show:</strong> You must provide documentation stating why you were unable to leave on the scheduled date.</li>
                  <li><strong>Denied Booking:</strong> You will need to provide documentation explaining why you were not permitted to board your scheduled aircraft.</li>
                  <li><strong>Duplicate Tickets:</strong> Copies of tickets with the same itineraries that were purchased from us must be included with a refund request.</li>
                </ul>
              </div>
            </div>
          </Col>
        </Container>
      </section>
      <section>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default page