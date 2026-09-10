import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
    FiCode,
    FiPenTool,
    FiSmartphone,
    FiShoppingCart,
    FiCloud,
    FiSettings,
    FiGlobe,
    FiUsers
} from "react-icons/fi";

import "../main.css";


const ServiceSlider = () => {


    const services = [

        {
            icon: <FiCode />,
            title: "Web Development",
            text: "Building modern, fast and scalable websites with latest technologies."
        },


        {
            icon: <FiPenTool />,
            title: "UI/UX Design",
            text: "Creating attractive and user-friendly designs that improve experience."
        },


        {
            icon: <FiSmartphone />,
            title: "Mobile App Development",
            text: "Developing powerful mobile applications for Android and iOS platforms."
        },


        {
            icon: <FiShoppingCart />,
            title: "E-Commerce Solution",
            text: "Complete online store solutions to grow your digital business."
        },


        {
            icon: <FiCloud />,
            title: "Cloud Solution",
            text: "Secure and reliable cloud solutions for modern businesses."
        },


        {
            icon: <FiSettings />,
            title: "Software Development",
            text: "Custom software solutions designed according to business needs."
        },


        {
            icon: <FiGlobe />,
            title: "Digital Solution",
            text: "Helping businesses transform with innovative digital technology."
        },


        {
            icon: <FiUsers />,
            title: "IT Consulting",
            text: "Expert technology guidance to improve your business growth."
        }

    ];



    const [active, setActive] = useState(0);



    useEffect(() => {


        const timer = setInterval(() => {


            setActive((prev) =>

                (prev + 1) % services.length

            );


        }, 3000);



        return () => clearInterval(timer);


    }, []);




    return (

        <section className="service-slider-section">


            <Container>


                <Row className="align-items-center">



                    {/* LEFT */}

                    <Col lg={6}>


                        <div className="slider-content-box">


                            <span>
                                OUR SERVICES
                            </span>



                            <h2 className="slider-heading">

                                Innovative Technology

                                <strong>
                                    {" "}Solutions
                                </strong>

                            </h2>



                            <p className="slider-display-text">

                                We provide complete IT solutions that help
                                businesses build, grow and succeed in
                                the digital world.

                            </p>





                            <div className="slider-service-list">



                                {
                                    services.map((item, index) => (


                                        <div

                                            key={index}

                                            className={
                                                active === index
                                                    ?
                                                    "slider-active-item"
                                                    :
                                                    "slider-service-item"
                                            }


                                            onClick={() => setActive(index)}

                                        >


                                            {item.title}


                                        </div>


                                    ))
                                }




                            </div>



                        </div>


                    </Col>






                    {/* RIGHT */}

                    <Col lg={6}>


                        <div className="slider-display-card">


                            <div className="slider-display-icon">

                                {services[active].icon}

                            </div>




                            <h3 className="slider-display-title">

                                {services[active].title}

                            </h3>




                            <p className="slider-display-text">

                                {services[active].text}

                            </p>





                            <div className="slider-counter-number">

                                0{active + 1} / 08

                            </div>




                        </div>



                    </Col>



                </Row>



            </Container>



        </section>

    )


}



export default ServiceSlider;