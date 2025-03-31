"use client";
import React from "react";
import CruiseHeader from "@/components/CruiseHeader";
import { Col, Container, Table } from "react-bootstrap";
import CruiseFooter from "@/components/CruiseFooter";
import CruiseBanner from "@/components/CruiseBanner";

const page = () => {
  return (
    <React.Fragment>
      <CruiseHeader />
      <div className="hero-section">
        {/* Background Image */}
        <div className="hero-image">
          <img
            src="/images/cruise-home-poster.png"
            alt="Cruise Ship"
            className="img-fluid"
          />
        </div>
      </div>

      <section>
        <Container className="my-5">
          <h1 className="text-center fw-bold">Taxes & Fees</h1>
          <div className="table-responsive">
            <Table bordered className="mt-3">
              <thead>
                <tr className="bg-light">
                  <th>Description of Fees & Taxes</th>
                  <th>Applicable to</th>
                  <th>Code</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Travel Facilities Tax</strong>
                    <br />
                    Applicable to specific flights routed to or from Alaska or
                    Hawaii.
                  </td>
                  <td>U.S. Domestic and International</td>
                  <td>US</td>
                  <td>$8.40</td>
                </tr>
                <tr>
                  <td>
                    <strong>U.S. Federal Segment Fee</strong>
                    <br />
                    Applicable to flights per segment routed within the United
                    States.
                  </td>
                  <td>U.S. Domestic and International</td>
                  <td>ZP</td>
                  <td>$3.90</td>
                </tr>
                <tr>
                  <td>
                    <strong>U.S. Excise Tax</strong>
                    <br />
                    Applicable to all flights routed within the United States,
                    including some Canadian flights.
                  </td>
                  <td>U.S. Domestic and International</td>
                  <td>US</td>
                  <td>7.50%</td>
                </tr>
                <tr>
                  <td>
                    <strong>Passenger Facility Charge (PFC)</strong>
                    <br />
                    Variable fee per itinerary for airport passenger facility
                    improvements.
                  </td>
                  <td>U.S. Domestic and International</td>
                  <td>XF</td>
                  <td>up to $18</td>
                </tr>
                <tr>
                  <td>
                    <strong>U.S. Passenger Civil Aviation Security Fee</strong>
                    <br />
                    Security fee based on the number of passengers boarding.
                  </td>
                  <td>U.S. Domestic and International</td>
                  <td>AY</td>
                  <td>$10.20</td>
                </tr>
                <tr>
                  <td>
                    <strong>U.S. International Transportation Tax</strong>
                    <br />
                    Applicable to flights to and from the U.S., U.S. Virgin
                    Islands, or Puerto Rico.
                  </td>
                  <td>International</td>
                  <td>US</td>
                  <td>$18.30</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      U.S. Animal and Plant Health Inspection Service Fee
                    </strong>
                    <br />
                    Applicable to flights originating abroad, except Canada.
                  </td>
                  <td>International</td>
                  <td>XA</td>
                  <td>$3.96</td>
                </tr>
                <tr>
                  <td>
                    <strong>U.S. Immigration and Naturalization Fee</strong>
                    <br />
                    Applies to international arrivals to the U.S., Puerto Rico,
                    or U.S. Virgin Islands.
                  </td>
                  <td>International</td>
                  <td>XY</td>
                  <td>$7.00</td>
                </tr>
                <tr>
                  <td>
                    <strong>U.S. Customs User Fee</strong>
                    <br />
                    Applicable to international flights routed outside customs
                    territory.
                  </td>
                  <td>International</td>
                  <td>YC</td>
                  <td>$5.65</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      International Taxes and Government or Airport-imposed fees
                    </strong>
                    <br />
                    Covers security, inspection fees, and other levied taxes.
                  </td>
                  <td>International</td>
                  <td>Varies</td>
                  <td>up to $349+</td>
                </tr>
                <tr>
                  <td>
                    <strong>Our Service Fees</strong>
                    <br />
                    Online air transaction services with varying fees.
                  </td>
                  <td>U.S. Domestic and International</td>
                  <td>Fees</td>
                  <td>$0.00 to $100.00+</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <h3>   Disclaimers</h3>
        <p>All taxes and fees levied by the government are subject to
          change. The final price that our agent quotes or displays is what you
          will be charged. (Unless otherwise specified in your ticket
          information email or Terms & Conditions, all airfare-related taxes and
          fees are included in our total costs.)</p>
        </Container>
      </section>
      <section>
        <CruiseBanner />
      </section>
      <CruiseFooter />
    </React.Fragment>
  );
};

export default page;
