import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
    FiCode,
    FiUsers,
    FiBriefcase,
    FiAward
} from "react-icons/fi";

import "../main.css";



const Counter = () => {



    const data = [

        {
            icon: <FiCode />,
            number: 50,
            symbol: "+",
            title: "Projects Delivered",
            desc: "Successful digital solutions"
        },


        {
            icon: <FiUsers />,
            number: 30,
            symbol: "+",
            title: "Happy Clients",
            desc: "Trusted business partners"
        },


        {
            icon: <FiBriefcase />,
            number: 5,
            symbol: "+",
            title: "Years Experience",
            desc: "Industry expertise"
        },


        {
            icon: <FiAward />,
            number: 98,
            symbol: "%",
            title: "Success Rate",
            desc: "Quality driven results"
        }


    ];




    return (

        <section className="modern-counter">


            <Container>


                <div className="counter-heading">

                    <span>
                        OUR ACHIEVEMENTS
                    </span>


                    <h2>
                        Numbers That Define Our
                        <strong> Success</strong>
                    </h2>


                    <p>
                        Delivering innovative technology solutions
                        with measurable results.
                    </p>


                </div>




                <Row className="g-4">


                    {
                        data.map((item, index) => (


                            <Col lg={3} md={6} key={index}>


                                <CounterCard item={item} />


                            </Col>


                        ))
                    }



                </Row>



            </Container>


        </section>

    )


}





// Counter Animation Component

const CounterCard = ({ item }) => {


    const [count, setCount] = useState(0);



    useEffect(() => {


        let start = 0;


        const duration = 2000; // 2 seconds


        const increment = item.number / (duration / 20);



        const timer = setInterval(() => {


            start += increment;


            if (start >= item.number) {


                start = item.number;


                clearInterval(timer);


            }



            setCount(Math.floor(start));



        }, 20);



        return () => clearInterval(timer);



    }, [item.number]);





    return (


        <div className="counter-modern-card">


            <div className="counter-glow"></div>



            <div className="counter-icon">

                {item.icon}

            </div>




            <h3>

                {count}{item.symbol}

            </h3>




            <h4>

                {item.title}

            </h4>




            <p>

                {item.desc}

            </p>




        </div>


    )


}




export default Counter;