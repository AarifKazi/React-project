import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiArrowUpRight
} from "react-icons/fi";

import "../main.css";
import axios from "axios";


const Contact = () => {


    const [validated, setValidated] = useState(false);

    const [form, setform] = useState({
        name: '',
        email: '',
        phoneno: '',
        subject: '',
        msg: ''
    })

    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }



    const handleSubmit =async (event) => {


        event.preventDefault();


        const form = event.currentTarget;



        if (form.checkValidity() === false) {


            event.stopPropagation();


        }

        else {


            alert("Message sent successfully!");

            form.reset();


        }

        setValidated(true);

        const detail = {
            name: form.name.value,
            email: form.email.value,
            phoneno: Number(form.phoneno.value),
            subject: form.subject.value,
            msg: form.msg.value
        }

        setform({
            name: '',
            email: '',
            phoneno: '',
            subject: '',
            msg: ''
        })
       
        await axios.post('http://localhost:5000/send-email',detail) // send a data using nodemailer

    };




    return (


        <section className="contact-page">


            <Container>



                {/* HEADER */}

                <div className="contact-header">


                    <span>
                        CONTACT US
                    </span>



                    <h1>

                        Let's Build Something

                        <strong>
                            {" "}Amazing Together
                        </strong>

                    </h1>



                    <p>

                        Have a project idea or need technology support?
                        Our team is ready to help you with innovative
                        digital solutions.

                    </p>


                </div>






                <Row className="contact-main align-items-center">





                    {/* CONTACT INFORMATION */}


                    <Col lg={5}>


                        <div className="contact-info-box">


                            <h2>
                                Get In Touch
                            </h2>



                            <p>

                                Connect with our experts and discuss your
                                next digital project.

                            </p>





                            <div className="contact-item">


                                <div className="contact-icon">

                                    <FiMail />

                                </div>



                                <div>

                                    <h4>
                                        Email
                                    </h4>

                                    <span>
                                        info@yourcompany.com
                                    </span>

                                </div>


                            </div>






                            <div className="contact-item">


                                <div className="contact-icon">

                                    <FiPhone />

                                </div>



                                <div>

                                    <h4>
                                        Phone
                                    </h4>

                                    <span>
                                        +91 98765 43210
                                    </span>

                                </div>


                            </div>
                        </div>


                    </Col>
                    {/* CONTACT FORM */}


                    <Col lg={7}>


                        <div className="contact-form-box">


                            <h2>
                                Send Us A Message
                            </h2>

                            <form
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}
                            >


                                <Row>

                                    <Col md={6}>


                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            name="name"
                                            value={form.name}
                                            onChange={handlechange}
                                            required
                                        />


                                    </Col>

                                    <Col md={6}>


                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            name="email"
                                            value={form.email}
                                            onChange={handlechange}
                                            required
                                        />
                                    </Col>

                                    <Col md={6}>


                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            required
                                            name="phoneno"
                                            value={form.phoneno}
                                            onChange={handlechange}
                                        />

                                    </Col>
                                    <Col md={6}>


                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            required
                                            name="subject"
                                            value={form.subject}
                                            onChange={handlechange}
                                        />
                                    </Col>

                                    <Col md={12}>
                                        <textarea
                                            rows="5"
                                            placeholder="Your Message"
                                            required
                                            name="msg"
                                            value={form.msg}
                                            onChange={handlechange}
                                        ></textarea>
                                    </Col>

                                    <Col md={12}>
                                        <button type="submit">
                                            Send Message
                                            <FiArrowUpRight />
                                        </button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>

            </Container>

        </section>


    );


};



export default Contact;