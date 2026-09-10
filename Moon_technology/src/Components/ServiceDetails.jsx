import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import {
    FiCode,
    FiPenTool,
    FiSmartphone,
    FiShoppingCart,
    FiCloud,
    FiDatabase,
    FiBarChart2,
    FiSettings,
    FiCheckCircle,
    FiArrowUpRight,
    FiTarget,
    FiUsers,
    FiAward
} from "react-icons/fi";

import "../main.css";


const services = [

    {
        id: 1,
        icon: <FiCode />,
        title: "Web Development",

        description:
            "We build modern, responsive and scalable websites that help businesses create a powerful digital presence.",

        features: [
            "Frontend Development",
            "Backend Development",
            "Responsive Web Design",
            "Performance Optimization"
        ]

    },


    {
        id: 2,
        icon: <FiPenTool />,
        title: "UI/UX Design",

        description:
            "We create attractive and user-friendly interfaces that improve customer experience and business growth.",

        features: [
            "User Research",
            "Wireframe Design",
            "Prototype Creation",
            "Modern Interface"
        ]

    },


    {
        id: 3,
        icon: <FiSmartphone />,
        title: "Mobile App Development",

        description:
            "We develop powerful mobile applications with smooth performance and excellent user experience.",

        features: [
            "Android Development",
            "iOS Development",
            "Cross Platform Apps",
            "App Optimization"
        ]

    },


    {
        id: 4,
        icon: <FiShoppingCart />,
        title: "E-Commerce Solution",

        description:
            "We create secure and scalable e-commerce platforms that help businesses sell products online.",

        features: [
            "Online Store",
            "Payment Integration",
            "Product Management",
            "Customer System"
        ]

    },


    {
        id: 5,
        icon: <FiCloud />,
        title: "Cloud Solution",

        description:
            "Reliable cloud solutions that improve scalability, security and business performance.",

        features: [
            "Cloud Migration",
            "Cloud Security",
            "Server Management",
            "Data Backup"
        ]

    },


    {
        id: 6,
        icon: <FiDatabase />,
        title: "Software Development",

        description:
            "Custom software solutions designed according to business requirements.",

        features: [
            "Custom Software",
            "Automation",
            "Database Solution",
            "Maintenance"
        ]

    },


    {
        id: 7,
        icon: <FiBarChart2 />,
        title: "Digital Solution",

        description:
            "Helping businesses transform digitally with innovative technology solutions.",

        features: [
            "Digital Strategy",
            "Business Growth",
            "Technology Planning",
            "Digital Optimization"
        ]

    },


    {
        id: 8,
        icon: <FiSettings />,
        title: "IT Consulting",

        description:
            "Expert technology guidance to select the right solutions for your business.",

        features: [
            "IT Strategy",
            "Technology Planning",
            "Business Analysis",
            "Technical Support"
        ]

    }


];





const processData = [

    {
        number: "01",
        title: "Requirement Analysis",
        desc: "Understanding your business goals and project requirements."
    },


    {
        number: "02",
        title: "Planning & Design",
        desc: "Creating strategies and modern design solutions."
    },


    {
        number: "03",
        title: "Development",
        desc: "Building powerful and scalable digital solutions."
    },


    {
        number: "04",
        title: "Testing & Launch",
        desc: "Delivering quality products with complete testing."
    }

];





const benefits = [

    {
        icon: <FiTarget />,
        title: "Business Focused",
        desc: "Solutions designed according to your business needs."
    },


    {
        icon: <FiUsers />,
        title: "Expert Team",
        desc: "Experienced professionals delivering quality work."
    },


    {
        icon: <FiAward />,
        title: "Quality Work",
        desc: "Reliable and high-performance solutions."
    },


    {
        icon: <FiCheckCircle />,
        title: "Modern Technology",
        desc: "Using latest tools and technologies."
    }

];





const ServiceDetails = () => {


    const { id } = useParams();


    const service = services.find(
        item => item.id === Number(id)
    );



    return (


        <section className="service-details-page mt-5">

            {/* ================= HERO ================= */}

            <section className="service-detail-hero">

                <Container>

                    <Row className="align-items-center">


                        {/* LEFT CONTENT */}

                        <Col lg={6}>


                            <div className="service-detail-content">


                                <div className="service-detail-icon">

                                    {service.icon}

                                </div>



                                <h1>

                                    {service.title}

                                    <br />

                                    <span>
                                        Solutions For Your Business
                                    </span>

                                </h1>



                                <p>

                                    {service.description}

                                </p>



                                <a href="/contact">

                                    Start Your Project

                                    <FiArrowUpRight />

                                </a>



                            </div>


                        </Col>





                        {/* RIGHT VISUAL CARD */}


                        <Col lg={6}>


                            <div className="service-hero-card">


                                <div className="hero-card-top">


                                    <span>
                                        SERVICE SOLUTION
                                    </span>


                                    <div>

                                        {service.icon}

                                    </div>


                                </div>





                                <h3>

                                    {service.title}

                                </h3>




                                <p>

                                    Professional and scalable solutions
                                    built with modern technology.

                                </p>





                                <div className="hero-feature-list">


                                    {
                                        service.features.map((item, index) => (


                                            <div key={index}>


                                                <FiCheckCircle />


                                                <span>

                                                    {item}

                                                </span>


                                            </div>


                                        ))
                                    }



                                </div>




                            </div>


                        </Col>



                    </Row>


                </Container>


            </section>
            {/* ================= PROVIDE ================= */}



            <section className="provide-section">


                <Container>



                    <div className="detail-title">


                        <span>
                            OUR SERVICES
                        </span>


                        <h2>

                            What We Provide In

                            <strong> {service.title}</strong>

                        </h2>



                    </div>





                    <Row className="g-4">


                        {
                            service.features.map((item, index) => (


                                <Col lg={3} md={6} key={index}>


                                    <div className="provide-box">


                                        <FiCheckCircle />


                                        <h3>
                                            {item}
                                        </h3>


                                        <p>
                                            Professional solutions with modern technology.
                                        </p>


                                    </div>


                                </Col>


                            ))
                        }



                    </Row>


                </Container>


            </section>

            {/* ================= PROCESS SECTION ================= */}


            <section className="process-section">


                <Container>



                    <div className="detail-title">


                        <span>
                            OUR PROCESS
                        </span>


                        <h2>

                            How We Build

                            <strong> Solutions</strong>

                        </h2>


                        <p>

                            Our structured process helps us deliver
                            high-quality and scalable digital solutions.

                        </p>


                    </div>






                    <div className="process-wrapper">


                        {
                            processData.map((item, index) => (


                                <div className="process-card" key={index}>


                                    <div className="process-number">

                                        {item.number}

                                    </div>



                                    <h3>

                                        {item.title}

                                    </h3>



                                    <p>

                                        {item.desc}

                                    </p>



                                </div>


                            ))
                        }



                    </div>



                </Container>


            </section>









            {/* ================= WHY CHOOSE SECTION ================= */}



            <section className="why-service-section">


                <Container>



                    <div className="detail-title">


                        <span>
                            WHY CHOOSE US
                        </span>


                        <h2>

                            Why Choose Our

                            <strong> Services?</strong>

                        </h2>


                    </div>





                    <Row className="g-4">



                        {
                            benefits.map((item, index) => (


                                <Col lg={3} md={6} key={index}>


                                    <div className="benefit-box">



                                        <div className="benefit-icon">

                                            {item.icon}

                                        </div>



                                        <h3>

                                            {item.title}

                                        </h3>



                                        <p>

                                            {item.desc}

                                        </p>



                                    </div>


                                </Col>


                            ))
                        }



                    </Row>



                </Container>


            </section>


        </section>


    )


}



export default ServiceDetails;