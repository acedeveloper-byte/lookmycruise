'use client'
import CruiseCards from '@/components/CruiseCards'
import CruiseHome from '@/components/CruiseHome'
import Footer from '@/components/includes/Footer'
import Header from '@/components/includes/Header'
import OceanCruise from '@/components/OceanCruise'
import SearchEngine from '@/components/SearchEngine'
import { useParams } from 'next/navigation'
import React ,  {useState , useEffect} from 'react'
import cruisedata from "../../components/utils/cruise.json"
import { Card, Col, Container, Placeholder, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";



const SkeletonCard = () => {
    return (
        <Card className="shadow-sm">
            <Placeholder as={Card.Img} variant="top" className="w-100" style={{ height: "180px", backgroundColor: "#ddd" }} />
            <Card.Body>
                <Placeholder as={Card.Title} animation="wave">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="wave">
                    <Placeholder xs={8} />
                    <Placeholder xs={7} />
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={12} />
            </Card.Body>
        </Card>
    );
};




const page = () => {
    const { name } = useParams();
    const [filteredData, setFilteredData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (name) {
            setTimeout(() => {
                const data = cruisedata.filter((ite) => ite.name === name);
                setFilteredData(data);
                setLoading(false);
            }, 2000); // Simulate API delay
        }
    }, [name]);


console.log(  "filteredData:" ,   filteredData)



    return (
        <>
            <Header />
            <SearchEngine />
            <section className="destinations ">
      <Container>
       

        <div className="text-center mb-4">
                    <h2 className="text-primary fw-bold">EXPLORE</h2>
                    <p className="text-muted">Today's Top Cruise Destinations</p>
                </div>
        <Row className="justify-content-center my-2">
        {loading
                            ? // Show Skeleton Loader while loading
                            Array.from({ length: 6 }).map((_, index) => (
                                <Col md={4} key={index} className="mb-4">
                                    <SkeletonCard />
                                </Col>
                            )) :       filteredData.map((item) =>

                                item.data.map((destination, idx) => ( 
                                <Col md={4} key={idx} className="d-flex justify-content-center mb-4">
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
                          </Col>))
                          )}
   
        </Row>

        
      </Container>
    </section>
    <section>
                {loading ? null :
                    filteredData.map((item, index) => {
                        // return <div dangerouslySetInnerHTML={{ __html: item.html }} />
                        return <OceanCruise html={item.html} />

                    })
                }
            </section>
            
            <Footer />
        </>
    )
}

export default page


// "use client";
// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const destinations = [
//   {
//     title: "5 Night Western Caribbean Cruise",
//     description: "Starting from",
//     price: "40,000$",
//     extra: "Taxes & fees included.*",
//     image: "/images/caribbean-cruise.png",
//   },

//   {
//     title: "4 Night Bahamas & Perfect Day Cruise",
//     description: "Starting from",
//     price: "36,000$",
//     extra: "Taxes & fees included.*",
//     image: "/images/bahamas-cruis.png",
//   },

//   {
//     title: "3 Night Western Caribbean Day Cruise",
//     description: "Starting from",
//     price: "36,000$",
//     extra: "Taxes & fees included.*",
//     image: "/images/caribbean-cruise.png",
//   }



  
// ];


// const CruiseCards = () => {
//   return (
//     <section className="destinations ">
//       <Container>
//         <Row>
//           {dests.map((destination, index) => (
//             <Col key={index} className="col-md-2 " >
//               <p style={{fontSize: '13px'}}>{destination}</p>
//             </Col>
//           ))}
//         </Row>

//         <div className="text-center mb-4">
//                     <h2 className="text-primary fw-bold">EXPLORE</h2>
//                     <p className="text-muted">Today's Top Cruise Destinations</p>
//                 </div>
//         <Row className="justify-content-center my-2">
//           {destinations.map((destination, index) => (
//             <Col md={4} key={index} className="d-flex justify-content-center">
//               <Card className="destination-card">
//                 <Card.Img
//                   variant="top"
//                   src={destination.image}
//                   alt={destination.name}
//                   style={{
//                     borderRadius: "1rem !important",
//                   }}
//                 />
//                 <Card className="cards-text-list">
//                   <h5 className="destination-name">{destination.name}</h5>
//                   {destination.title && (
//                     <h6 className="destination-title">{destination.title}</h6>
//                   )}
//                   {destination.description && (
//                     <p className="destination-description">
//                       {destination.description}
//                     </p>
//                   )}
//                   {destination.price && (
//                     <h6 className="destination-price">{destination.price}</h6>
//                   )}
//                   {destination.extra && (
//                     <p className="destination-extra">{destination.extra}</p>
//                   )}
//                 </Card>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default CruiseCards;

/* CSS (CruiseCards.css) */
/* Add this to a separate CSS file named CruiseCards.css */
