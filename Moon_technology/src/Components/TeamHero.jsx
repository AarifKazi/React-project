import React from "react";
import { Container } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";

import "../main.css";


const TeamHero = () => {


    return (

        <section className="team-simple-hero">


            <Container>


                <div className="team-simple-content">


                    <span>
                        OUR TEAM
                    </span>



                    <h1>

                        Meet The Experts
                        Behind Our
                        <strong> Success</strong>

                    </h1>




                    <p>

                        Our passionate team of developers, designers and
                        technology experts work together to create innovative
                        digital solutions that help businesses grow.

                    </p>




                    <a href="/contact">

                        Join Our Team

                        <FiArrowUpRight />

                    </a>



                </div>


            </Container>


        </section>

    )

}


export default TeamHero;