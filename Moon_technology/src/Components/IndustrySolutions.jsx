import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
    FiHeart,
    FiTruck,
    FiBookOpen,
    FiDollarSign,
    FiShoppingBag,
    FiHome,
    FiPackage,
    FiArrowUpRight
} from "react-icons/fi";

import "../main.css";


const industries = [

    {
        icon: <FiHeart />,
        title: "Healthcare Solutions",
        text: "Digital healthcare solutions that improve patient experience and streamline medical operations."
    },


    {
        icon: <FiTruck />,
        title: "Transportation Solutions",
        text: "Smart transportation solutions to improve efficiency, tracking and management."
    },


    {
        icon: <FiBookOpen />,
        title: "Education Solutions",
        text: "Modern e-learning platforms and digital solutions for educational institutions."
    },


    {
        icon: <FiDollarSign />,
        title: "Finance Solutions",
        text: "Secure and reliable technology solutions for financial businesses."
    },


    {
        icon: <FiShoppingBag />,
        title: "Retail Solutions",
        text: "Digital solutions that help retailers improve customer experience and sales."
    },


    {
        icon: <FiHome />,
        title: "Real Estate Solutions",
        text: "Technology solutions to simplify property management and real estate operations."
    },

    {
        icon: <FiPackage />,
        title: "Logistics Solutions",
        text: "Advanced logistics solutions for better supply chain management."
    }


];



const IndustrySolutions = () => {


    return (


        <section className="industry-section">


            <Container>


                <div className="industry-header">


                    <span>
                        INDUSTRY SOLUTIONS
                    </span>


                    <h2>

                        Technology Solutions
                        For Every
                        <strong> Industry</strong>

                    </h2>


                    <p>

                        We provide customized digital solutions
                        designed to meet the unique needs of
                        different industries.

                    </p>


                </div>



                <Row className="g-4">


                    {
                        industries.map((item, index) => (


                            <Col lg={3} md={6} key={index}>


                                <div className="industry-card">


                                    <div className="industry-icon">

                                        {item.icon}

                                    </div>



                                    <h3>

                                        {item.title}

                                    </h3>



                                    <p>

                                        {item.text}

                                    </p>


                                </div>


                            </Col>


                        ))
                    }



                </Row>


            </Container>


        </section>


    )


}


export default IndustrySolutions;